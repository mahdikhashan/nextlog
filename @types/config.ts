type Layout = "list" | "two-column" | "single-column";
type Theme = "default";

type Provider = "Resend";

type AudienceID = string;

interface EmailProvider {
  provider: Provider;
  config: {
    audiences: AudienceID[];
  };
}

interface NextlogConfig {
  layout?: Layout;
  theme?: Theme;
  email?: EmailProvider;
}
