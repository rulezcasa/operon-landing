import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  TopIcon,
  ServiceWrapper,
  MinBadge,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
  IllustrationCol,
  ChannelMarquee,
  ChannelTrack,
  ChannelLogoItem,
  CallsItem,
} from "./styles";

const ContentBlock = ({
  icon,
  topIcon,
  illustration,
  lightTheme,
  title,
  content,
  section,
  button,
  id,
  direction,
}: ContentBlockProps) => {
  const channels = [
    { name: "WhatsApp", src: "/img/whatsapp.svg" },
    { name: "Instagram", src: "/img/instagram.svg" },
    { name: "Telegram", src: "/img/telegram.svg" },
    { name: "Calls", src: "/img/phone.svg" },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection $lightTheme={lightTheme}>
      <Fade triggerOnce fraction={0.2}>
        <div>
          <StyledRow
            justify="space-between"
            align="middle"
            id={id}
            direction={direction}
          >
            <IllustrationCol lg={11} md={11} sm={12} xs={24}>
              {illustration ?? <SvgIcon src={icon} width="100%" height="100%" />}
            </IllustrationCol>
            <Col lg={11} md={11} sm={11} xs={24}>
              <ContentWrapper $lightTheme={lightTheme}>
                {topIcon && (
                  <TopIcon>
                    <SvgIcon src={topIcon} width="44px" height="44px" />
                  </TopIcon>
                )}
                <h6>{title}</h6>
                <Content $lightTheme={lightTheme}>{content}</Content>
                {direction === "right" ? (
                  <ButtonWrapper>
                    {typeof button === "object" &&
                      button.map(
                        (
                          item: {
                            color?: string;
                            title: string;
                          },
                          id: number
                        ) => {
                          return (
                            <Button
                              key={id}
                              color={item.color}
                              onClick={() => scrollTo("about")}
                            >
                              {item.title}
                            </Button>
                          );
                        }
                      )}
                  </ButtonWrapper>
                ) : (
                  <>
                    <ServiceWrapper>
                      <Row justify={section?.length === 1 ? "center" : "space-between"}>
                        {typeof section === "object" &&
                          section.map(
                            (
                              item: {
                                title: string;
                                content: string;
                                icon: string;
                              },
                              id: number
                            ) => {
                              return (
                                <Col key={id} span={section?.length === 1 ? 24 : 11}>
                                  <MinBadge>
                                    <MinTitle>
                                      {item.title}
                                    </MinTitle>
                                    <MinPara>
                                      {item.content}
                                    </MinPara>
                                  </MinBadge>
                                </Col>
                              );
                            }
                          )}
                      </Row>
                    </ServiceWrapper>
                  </>
                )}
              </ContentWrapper>
            </Col>
          </StyledRow>
          {id === "about" && (
            <ChannelMarquee aria-label="Supported channels">
              <ChannelTrack>
                {[...channels, ...channels].map((channel, idx) =>
                  channel.src ? (
                    <ChannelLogoItem key={`${channel.name}-${idx}`}>
                      <SvgIcon src={channel.src} width="28px" height="28px" />
                    </ChannelLogoItem>
                  ) : (
                    <CallsItem key={`${channel.name}-${idx}`}>Calls</CallsItem>
                  )
                )}
              </ChannelTrack>
            </ChannelMarquee>
          )}
        </div>
      </Fade>
    </ContentSection>
  );
};

export default ContentBlock;
