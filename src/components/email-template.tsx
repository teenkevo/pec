import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
  Row,
  Column,
} from "@react-email/components";

interface ContactEmailTemplateProps {
  firstName: string;
  lastName: string;
  company?: string;
  email: string;
  phone?: string;
  question: string;
}

export function ContactEmailTemplate({
  firstName,
  lastName,
  company,
  email,
  phone,
  question,
}: ContactEmailTemplateProps) {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={headerTitle}>New Contact Form Submission</Heading>
            <Text style={headerSubtitle}>Received on {currentDate}</Text>
          </Section>

          {/* Contact Information */}
          <Section style={section}>
            <Heading style={sectionTitle}>Contact Information</Heading>

            <Row style={infoRow}>
              <Column style={labelColumn}>
                <Text style={label}>Name:</Text>
              </Column>
              <Column style={valueColumn}>
                <Text style={value}>
                  {firstName} {lastName}
                </Text>
              </Column>
            </Row>

            {company && (
              <Row style={infoRow}>
                <Column style={labelColumn}>
                  <Text style={label}>Company:</Text>
                </Column>
                <Column style={valueColumn}>
                  <Text style={value}>{company}</Text>
                </Column>
              </Row>
            )}

            <Row style={infoRow}>
              <Column style={labelColumn}>
                <Text style={label}>Email:</Text>
              </Column>
              <Column style={valueColumn}>
                <Text style={value}>
                  <a href={`mailto:${email}`} style={link}>
                    {email}
                  </a>
                </Text>
              </Column>
            </Row>

            {phone && (
              <Row style={infoRow}>
                <Column style={labelColumn}>
                  <Text style={label}>Phone:</Text>
                </Column>
                <Column style={valueColumn}>
                  <Text style={value}>
                    <a href={`tel:${phone}`} style={link}>
                      {phone}
                    </a>
                  </Text>
                </Column>
              </Row>
            )}
          </Section>

          <Hr style={divider} />

          {/* Message */}
          <Section style={section}>
            <Heading style={sectionTitle}>Message</Heading>
            <div style={messageBox}>
              <Text style={messageText}>{question}</Text>
            </div>
          </Section>

          {/* Footer */}
          <Hr style={divider} />
          <Section style={footer}>
            <Text style={footerText}>
              This message was sent from your website contact form.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  maxWidth: "600px",
};

const header = {
  backgroundColor: "#128191",
  padding: "32px 24px",
  textAlign: "center" as const,
};

const headerTitle = {
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "bold",
  margin: "0 0 8px 0",
};

const headerSubtitle = {
  color: "#e0f2f1",
  fontSize: "16px",
  margin: "0",
};

const section = {
  padding: "24px",
};

const sectionTitle = {
  color: "#333333",
  fontSize: "20px",
  fontWeight: "bold",
  margin: "0 0 16px 0",
};

const infoRow = {
  marginBottom: "12px",
};

const labelColumn = {
  width: "120px",
  verticalAlign: "top" as const,
};

const valueColumn = {
  verticalAlign: "top" as const,
};

const label = {
  color: "#666666",
  fontSize: "14px",
  fontWeight: "bold",
  margin: "0",
};

const value = {
  color: "#333333",
  fontSize: "14px",
  margin: "0",
};

const link = {
  color: "#128191",
  textDecoration: "none",
};

const messageBox = {
  backgroundColor: "#f8f9fa",
  border: "1px solid #e9ecef",
  borderRadius: "8px",
  padding: "20px",
};

const messageText = {
  color: "#333333",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};

const divider = {
  borderColor: "#e9ecef",
  margin: "20px 0",
};

const footer = {
  padding: "0 24px",
  textAlign: "center" as const,
};

const footerText = {
  color: "#666666",
  fontSize: "12px",
  margin: "0",
};
