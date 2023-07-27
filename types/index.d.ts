export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage?: string;
  author: string;
  links: {
    twitter: string;
    github: string;
    terms: string;
    privacy: string;
  };
};
