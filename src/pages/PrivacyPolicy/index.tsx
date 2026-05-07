import { Link } from "react-router-dom";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const Wrapper = styled("main")`
  min-height: 100vh;
  padding: 8rem 1.5rem 4rem;
  max-width: 760px;
  margin: 0 auto;
  color: rgba(226, 232, 240, 0.92);
`;

const BackButton = styled(Link)`
  display: inline-block;
  margin-bottom: 2rem;
  color: #22d3ee;
  text-decoration: none;
  border: 1px solid rgba(34, 211, 238, 0.35);
  border-radius: 999px;
  padding: 0.45rem 0.95rem;
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    color: #67e8f9;
    border-color: rgba(103, 232, 249, 0.7);
  }
`;

const Title = styled("h1")`
  font-size: clamp(2rem, 3vw, 2.5rem);
  margin-bottom: 0.75rem;
`;

const Meta = styled("p")`
  margin: 0;
  color: rgba(148, 163, 184, 0.95);
`;

const Divider = styled("hr")`
  border: 0;
  border-top: 1px solid rgba(148, 163, 184, 0.25);
  margin: 1.5rem 0 2rem;
`;

const SectionTitle = styled("h2")`
  font-size: 1.4rem;
  margin: 2.2rem 0 0.8rem;
`;

const SubTitle = styled("h3")`
  font-size: 1.06rem;
  margin: 1.4rem 0 0.6rem;
  color: rgba(226, 232, 240, 0.95);
`;

const Text = styled("p")`
  color: rgba(203, 213, 225, 0.9);
  line-height: 1.75;
  margin-bottom: 1rem;
`;

const List = styled("ul")`
  color: rgba(203, 213, 225, 0.9);
  line-height: 1.75;
  margin: 0 0 1rem;
  padding-left: 1.2rem;
`;

const TableWrap = styled("div")`
  overflow-x: auto;
  margin-bottom: 1rem;
`;

const Table = styled("table")`
  width: 100%;
  border-collapse: collapse;
  color: rgba(226, 232, 240, 0.92);

  th,
  td {
    border: 1px solid rgba(148, 163, 184, 0.28);
    padding: 0.65rem;
    text-align: left;
    vertical-align: top;
  }

  th {
    background: rgba(15, 23, 42, 0.7);
  }
`;

const StyledLink = styled("a")`
  color: #22d3ee;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const PrivacyPolicy = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Privacy Policy | Operon AI</title>
        <meta
          name="description"
          content="Read the Operon AI Privacy Policy to understand how we collect, process, protect, and retain personal data."
        />
      </Helmet>
      <BackButton to="/">← Back to Home</BackButton>
      <Title>Privacy Policy</Title>
      <Meta>
        <strong>Operon AI</strong>
      </Meta>
      <Meta>
        <strong>Effective Date:</strong> May 7, 2025
      </Meta>
      <Meta>
        <strong>Last Updated:</strong> May 7, 2025
      </Meta>
      <Divider />

      <SectionTitle>1. Introduction</SectionTitle>
      <Text>
        Operon AI ("Operon", "we", "us", or "our") operates{" "}
        <StyledLink href="https://operon.co.in" target="_blank" rel="noreferrer">
          https://operon.co.in
        </StyledLink>
        , a B2B platform that provides AI-powered automation services to
        businesses ("Clients"). This Privacy Policy explains how we collect,
        use, store, share, and protect personal data in connection with our
        platform and website.
      </Text>
      <Text>
        Operon operates as both a <strong>data controller</strong> (for data
        collected directly from Clients and website visitors) and a{" "}
        <strong>data processor</strong> (for personal data of end-users that
        our Clients submit to our platform in the course of their business
        operations).
      </Text>
      <Text>
        By accessing our website or using our services, you acknowledge that
        you have read and understood this Privacy Policy.
      </Text>

      <SectionTitle>2. Scope</SectionTitle>
      <Text>This Policy applies to:</Text>
      <List>
        <li>
          <strong>Business Clients</strong> - companies and individuals who
          subscribe to Operon&apos;s services
        </li>
        <li>
          <strong>Client&apos;s End-Users</strong> - customers or contacts whose
          data is processed through our platform on behalf of our Clients
        </li>
        <li>
          <strong>Website Visitors</strong> - anyone who visits{" "}
          <StyledLink href="https://operon.co.in" target="_blank" rel="noreferrer">
            https://operon.co.in
          </StyledLink>
        </li>
      </List>

      <SectionTitle>3. Data We Collect</SectionTitle>
      <SubTitle>3.1 Data from Business Clients</SubTitle>
      <Text>When a business registers for or uses our services, we collect:</Text>
      <List>
        <li>Company name, registered address, and business details</li>
        <li>
          Name, email address, phone number, and designation of account
          administrators and authorised users
        </li>
        <li>
          Billing and payment information (processed via secure third-party
          payment providers)
        </li>
        <li>Login credentials and account settings</li>
        <li>Communication and support correspondence</li>
      </List>

      <SubTitle>3.2 End-User Data (Processed on Behalf of Clients)</SubTitle>
      <Text>
        Our Clients use Operon to manage their business operations. In doing
        so, they may submit personal data about their own customers, contacts,
        or leads, including:
      </Text>
      <List>
        <li>Names, email addresses, phone numbers</li>
        <li>Customer interaction history, notes, and activity logs</li>
        <li>Purchase history, deal stages, and pipeline data</li>
        <li>Any other information Clients choose to store in the software</li>
      </List>
      <Text>
        Operon processes this data solely on behalf of and under the
        instructions of the Client. Clients are responsible for ensuring they
        have appropriate authority to share this data with us.
      </Text>

      <SubTitle>3.3 Website Usage Data</SubTitle>
      <Text>When you visit our website, we may automatically collect:</Text>
      <List>
        <li>IP address, browser type, and operating system</li>
        <li>Pages visited, time spent, and referring URLs</li>
        <li>Device identifiers and general geographic location</li>
        <li>Cookies and similar tracking technologies (see Section 9)</li>
      </List>

      <SubTitle>3.4 Data You Voluntarily Provide</SubTitle>
      <List>
        <li>Contact form submissions and enquiries</li>
        <li>Demo requests or onboarding information</li>
        <li>Feedback, reviews, or survey responses</li>
      </List>

      <SectionTitle>4. How We Use Your Data</SectionTitle>
      <Text>
        We use the data we collect for the following purposes:
      </Text>
      <Text>
        <strong>Service Delivery:</strong> To provision, operate, maintain, and
        improve the Operon platform and its features.
      </Text>
      <Text>
        <strong>Account Management:</strong> To manage Client accounts, process
        payments, send invoices, and provide technical support.
      </Text>
      <Text>
        <strong>Communications:</strong> To send service-related notifications,
        product updates, and (where you have opted in) marketing
        communications. You may opt out of marketing emails at any time.
      </Text>
      <Text>
        <strong>Analytics and Improvement:</strong> To analyse usage patterns,
        diagnose issues, and improve platform performance. We do not use Client
        end-user data for our own analytics without explicit Client consent.
      </Text>
      <Text>
        <strong>AI and Automation Features:</strong> Our platform uses AI to
        automate CRM workflows. Where AI processes personal data as part of
        service delivery, we do so under Client instructions. We do not use
        Client end-user data to train our AI models without explicit written
        consent from the Client.
      </Text>
      <Text>
        <strong>Legal and Compliance:</strong> To comply with applicable laws,
        respond to lawful requests from authorities, and enforce our agreements.
      </Text>

      <SectionTitle>5. Data Processor vs. Data Controller</SectionTitle>
      <Text>
        Operon acts in different capacities depending on the context:
      </Text>
      <TableWrap>
        <Table>
          <thead>
            <tr>
              <th>Context</th>
              <th>Our Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Client account data, billing, website visitors</td>
              <td>Data Controller</td>
            </tr>
            <tr>
              <td>End-user data submitted by Clients into the platform</td>
              <td>Data Processor</td>
            </tr>
          </tbody>
        </Table>
      </TableWrap>
      <Text>
        Where we act as a <strong>Data Processor</strong>, our Clients are the
        Data Controllers and are responsible for: (a) having a lawful basis for
        sharing data with us; (b) informing their end-users that their data is
        processed via third-party service providers, including Operon; and (c)
        handling data subject requests from their end-users.
      </Text>
      <SectionTitle>6. Sharing of Data</SectionTitle>
      <Text>We do not sell personal data. We may share data with:</Text>
      <Text>
        <strong>Cloud Infrastructure Providers:</strong> We use cloud hosting
        services (such as AWS or Google Cloud) to store and process data.
      </Text>
      <Text>
        <strong>Payment Processors:</strong> Billing information is handled by
        PCI-DSS compliant payment gateway providers. We do not store full card
        details on our servers.
      </Text>
      <Text>
        <strong>Analytics and Monitoring Tools:</strong> We may use tools to
        monitor platform performance and analyse usage, configured to minimise
        collection of personal data.
      </Text>
      <Text>
        <strong>AI and API Providers:</strong> Our platform may use third-party
        AI model APIs as part of its automation features.
      </Text>
      <Text>
        <strong>Legal and Regulatory Authorities:</strong> Where required by
        applicable law, court order, or government request, we may disclose
        personal data.
      </Text>
      <Text>
        <strong>Business Transfers:</strong> In the event of a merger,
        acquisition, or sale of assets, personal data may be transferred as
        part of that transaction.
      </Text>

      <SectionTitle>7. Data Retention</SectionTitle>
      <Text>
        We retain personal data only for as long as necessary for the purposes
        outlined in this Policy, or as required by law.
      </Text>
      <List>
        <li>
          <strong>Client account data</strong> is retained for the duration of
          the subscription and for up to 3 years after contract termination.
        </li>
        <li>
          <strong>End-user data</strong> processed on behalf of Clients is
          retained per agreed terms and is deleted or returned upon termination,
          subject to legal hold obligations.
        </li>
        <li>
          <strong>Website and analytics data</strong> is retained for up to 12
          months.
        </li>
      </List>
      <Text>
        You may request deletion of your data by contacting us at{" "}
        <StyledLink href="mailto:privacy@operon.co.in">
            harish.thangaraj03@outlook.com
        </StyledLink>
        .
      </Text>

      <SectionTitle>8. Data Security</SectionTitle>
      <Text>
        We implement appropriate technical and organisational measures to
        protect personal data against unauthorised access, disclosure,
        alteration, or destruction. These include:
      </Text>
      <List>
        <li>Encryption of data in transit (TLS/HTTPS) and at rest</li>
        <li>Role-based access controls and multi-factor authentication</li>
        <li>Regular security assessments and vulnerability monitoring</li>
        <li>Employee confidentiality obligations and access restrictions</li>
      </List>
      <Text>
        While we take reasonable precautions, no system is entirely secure. In
        the event of a data breach that poses a risk to individuals, we will
        notify affected parties and relevant authorities as required by
        applicable law.
      </Text>

      <SectionTitle>9. Cookies</SectionTitle>
      <Text>
        Our website uses cookies and similar tracking technologies to enhance
        your experience.
      </Text>
      <Text>
        <strong>Types of cookies we use:</strong>
      </Text>
      <List>
        <li>
          <strong>Strictly Necessary Cookies:</strong> Required for website
          function (e.g., session management).
        </li>
        <li>
          <strong>Analytics Cookies:</strong> Help us understand how visitors
          interact with our website in aggregate form.
        </li>
        <li>
          <strong>Marketing Cookies:</strong> Used to deliver relevant content
          or measure communication effectiveness, only with consent.
        </li>
      </List>
      <Text>
        You can manage your cookie preferences through your browser settings.
      </Text>

      <SectionTitle>10. Data Storage and Processing in India</SectionTitle>
      <Text>
        Operon is incorporated and operates in India. Personal data is managed
        in line with applicable Indian data protection requirements.
      </Text>
      <Text>
        We implement contractual, organisational, and technical safeguards with
        our service providers to ensure personal data remains protected.
      </Text>

      <SectionTitle>11. Your Rights</SectionTitle>
      <Text>
        Depending on your location, you may have the following rights:
      </Text>
      <List>
        <li>
          <strong>Right to Access:</strong> Request a copy of your personal
          data.
        </li>
        <li>
          <strong>Right to Correction:</strong> Request correction of inaccurate
          or incomplete data.
        </li>
        <li>
          <strong>Right to Erasure:</strong> Request deletion, subject to legal
          obligations.
        </li>
        <li>
          <strong>Right to Restriction:</strong> Request limited processing in
          certain circumstances.
        </li>
        <li>
          <strong>Right to Object:</strong> Object to processing based on
          legitimate interests.
        </li>
        <li>
          <strong>Right to Data Portability:</strong> Request data in a
          structured, machine-readable format.
        </li>
        <li>
          <strong>Right to Withdraw Consent:</strong> Withdraw consent where
          processing relies on it.
        </li>
      </List>
      <Text>
        If you are a Client&apos;s end-user, please direct your rights requests
        to the Client directly unless Operon has a separate relationship with
        you.
      </Text>
      <Text>
        To exercise any of these rights, contact our Grievance Officer.
      </Text>

      <SectionTitle>12. Grievance Officer</SectionTitle>
      <Text>
        In accordance with applicable Indian laws, the following officer has
        been designated to address data-related grievances:
      </Text>
      <Text>
        <strong>Grievance Officer</strong>
        <br />
        Harish Thangaraj 
        <br />
        Email:{" "}
        <StyledLink href="mailto:harish.thangaraj03@outlook.com">
            harish.thangaraj03@outlook.com
        </StyledLink>
        <br />
      </Text>
      <Text>
        We will endeavour to respond to all grievances within <strong>30 days</strong>{" "}
        of receipt.
      </Text>

      <SectionTitle>13. Children&apos;s Privacy</SectionTitle>
      <Text>
        Our services are not directed at or intended for individuals under 18.
        We do not knowingly collect personal data from minors.
      </Text>

      <SectionTitle>14. Third-Party Links</SectionTitle>
      <Text>
        Our website may contain links to third-party websites or services. We
        are not responsible for their privacy practices and encourage you to
        review their policies independently.
      </Text>

      <SectionTitle>15. Changes to This Policy</SectionTitle>
      <Text>
        We may update this Privacy Policy from time to time to reflect changes
        in practices, services, or legal requirements. When we make material
        changes, we will:
      </Text>
      <List>
        <li>Update the "Last Updated" date at the top of this page</li>
        <li>Notify active Clients via email or in-platform notification</li>
      </List>
      <Text>
        Continued use of our services after the effective date of any update
        constitutes acceptance of the revised Policy.
      </Text>

      <SectionTitle>16. Contact Us</SectionTitle>
      <Text>
        For questions, concerns, or requests relating to this Privacy Policy,
        please contact us at:
      </Text>
      <Text>
        <strong>Operon AI</strong>
        <br />
        Email:{" "}
        <StyledLink href="mailto:harish.thangaraj03@outlook.com">
          harish.thangaraj03@outlook.com
        </StyledLink>
        <br />
        Website:{" "}
        <StyledLink href="https://operon.co.in" target="_blank" rel="noreferrer">
          operon.co.in
        </StyledLink>
        <br />
      </Text>
      <Text>
        <em>
          This Privacy Policy is governed by the laws of India. Any disputes
          arising in connection with this Policy shall be subject to the
          exclusive jurisdiction of the courts India.
        </em>
      </Text>
    </Wrapper>
  );
};

export default PrivacyPolicy;

