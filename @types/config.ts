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

type Social = {
  name: string;
  url: string;
  icon: string;
}

interface NextlogConfig {
  layout?: Layout;
  theme?: Theme;
  emailProvider?: EmailProvider;
  socials: Social[]
}
