import locAndMoreLogo from "../assets/images/companies/loc-and-more.webp";
import adsamyLogo from "../assets/images/companies/adsamy.jpg";
import lpLogo from "../assets/images/companies/LP-Logo-LC.webp";
import tactfulLogo from "../assets/images/companies/tactful-ai.svg";
import tawasolLogo from "../assets/images/companies/tawasol365.png";
import trendscapeLogo from "../assets/images/companies/trendscape.webp";
import virallapLogo from "../assets/images/companies/viralap.png";

export type Company = {
  readonly name: string;
  readonly logo: string;
  readonly alt: string;
  readonly url?: string;
};

export const companies: readonly Company[] = [
  {
    name: "Trendscape Agency",
    logo: trendscapeLogo,
    url: "https://trendscape-agency.com",
    alt: "Trendscape Marketing Agency logo",
  },
  {
    name: "Tactful AI",
    logo: tactfulLogo,
    url: "https://tactful.ai",
    alt: "Tactful AI logo",
  },
  {
    name: "Loc & More",
    logo: locAndMoreLogo,
    url: "https://locandmore.com",
    alt: "Loc & More logo",
  },
  {
    name: "Tawasol365",
    logo: tawasolLogo,
    url: "https://tawasol365.com",
    alt: "Tawasol365 logo",
  },
  {
    name: "Adsamy",
    logo: adsamyLogo,
    alt: "Adsamy logo",
  },
  {
    name: "Virallap",
    logo: virallapLogo,
    alt: "Virallap logo",
  },
  {
    name: "LP Logo",
    logo: lpLogo,
    alt: "LP logo",
  },
];
