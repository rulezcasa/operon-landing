import {
  Board,
  CenterVault,
  Dot,
  Grid,
  Item,
  Label,
  RightStack,
  Stack,
  VaultSub,
  VaultTitle,
  Block,
} from "./styles";

const SecurityVisual = () => {
  return (
    <Board aria-label="Security architecture preview">
      <Grid>
        <Stack>
          <Block $centered>
            <Label>Customer Interaction</Label>
          </Block>
          <CenterVault>
            <div>
              <VaultTitle>Your business vault</VaultTitle>
              <VaultSub>AES-256 | Audit log</VaultSub>
            </div>
          </CenterVault>
          <Block $centered>
            <Label>RBAC for dashboard</Label>
          </Block>
        </Stack>
        <RightStack>
          <Item>
            <Dot />
            <Label>Data never leaves your context</Label>
          </Item>
          <Item>
            <Dot />
            <Label>Encrypted in transit and at rest</Label>
          </Item>
          <Item>
            <Dot />
            <Label>You control what the agent knows</Label>
          </Item>
          <Item>
            <Dot />
            <Label>DPDP compliant by design</Label>
          </Item>
        </RightStack>
      </Grid>
    </Board>
  );
};

export default SecurityVisual;
