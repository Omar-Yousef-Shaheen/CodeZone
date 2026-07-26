import sevenskeImage from "../assets/images/projects/sevenske-com.png";
import zadeenImage from "../assets/images/projects/zaiden-com.png";

const projectImages = import.meta.glob("../assets/images/project-thumbnails/*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const supplementalProjectImages: Record<string, string> = {
  "sevenske-com.png": sevenskeImage,
  "zaiden-com.png": zadeenImage,
};

export type ProjectCategory =
  | "wordpress-woocommerce"
  | "shopify"
  | "portfolio"
  | "development-improvements";
export type ProjectPlatform = "WordPress / WooCommerce" | "Shopify";
export type ProjectRole = "Full Build" | "Development & Improvements";
export type ProjectSiteType = "Ecommerce" | "Portfolio Website";
export type ProjectSource =
  | "Direct Freelance Project"
  | "Built while working with Trendscape Agency"
  | "Built while working with Tawasol365";

export type Project = {
  title: string;
  description: string;
  image: string;
  liveDemoUrl: string;
  category: ProjectCategory;
  platform: ProjectPlatform;
  siteType: ProjectSiteType;
  role: ProjectRole;
  projectType: string;
  contribution: string;
  source: ProjectSource;
};

type ProjectSeed = Omit<
  Project,
  "image" | "role" | "source" | "siteType" | "projectType" | "contribution"
> & {
  imageFile: string;
  siteType?: ProjectSiteType;
  projectType?: string;
  contribution?: string;
};

const imageFor = (fileName: string) => {
  const thumbnailFile = fileName.replace(/\.png$/i, ".jpg");
  const image =
    projectImages[`../assets/images/project-thumbnails/${thumbnailFile}`] ??
    supplementalProjectImages[fileName];
  if (!image) throw new Error(`Missing project image: ${fileName}`);
  return image;
};

const directFreelanceProjects = new Set([
  "Tactful AI",
  "Loc & More",
  "Loc & Play",
  "Sora Beauty Store",
  "Retro Furniture",
  "Lahmawy",
  "Heelex Store",
  "El Ghonemy Coffee",
  "Homers EG",
  "Zadeen",
  "Sevenske",
]);

const tawasolProjects = new Set(["SquaresDev", "Tawasol 365", "Ventures Business Academy"]);

const projectSeeds: ProjectSeed[] = [
  {
    title: "Homers EG",
    description: "A fashion storefront with a dark, product-led presentation, organized category browsing, and a focused mobile shopping flow.",
    imageFile: "homers-eg-com.png",
    liveDemoUrl: "https://homers-eg.com/",
    category: "shopify",
    platform: "Shopify",
  },
  {
    title: "TheFit Wear",
    description: "A sportswear store with clear collection browsing, prominent product imagery, and responsive purchase journeys.",
    imageFile: "thefit-wear-com.png",
    liveDemoUrl: "https://thefit-wear.com",
    category: "development-improvements",
    platform: "Shopify",
  },
  {
    title: "Oree Fragrances",
    description: "A fragrance store organized around scent collections, premium product visuals, and straightforward product discovery.",
    imageFile: "oreefragrances-com.png",
    liveDemoUrl: "https://oreefragrances.com",
    category: "shopify",
    platform: "Shopify",
  },
  {
    title: "Allure Jewellery EG",
    description: "A jewelry storefront that gives product photography room to lead while keeping collections and shopping actions easy to scan.",
    imageFile: "allurejewelleryeg-com.png",
    liveDemoUrl: "https://allurejewelleryeg.com",
    category: "development-improvements",
    platform: "Shopify",
  },
  {
    title: "Asrar EG",
    description: "An apparel storefront with clear promotional areas, accessible product categories, and consistent shopping content across devices.",
    imageFile: "asrar-eg-com.png",
    liveDemoUrl: "https://asrar-eg.com",
    category: "wordpress-woocommerce",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Ayah Official",
    description: "A women’s fashion store that balances campaign imagery with simple collection paths and mobile-friendly product presentation.",
    imageFile: "ayah-offical-com.png",
    liveDemoUrl: "https://ayah-offical.com",
    category: "development-improvements",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Ayn The Label",
    description: "A contemporary fashion storefront with editorial visuals, restrained typography, and a clean path from collection to product.",
    imageFile: "aynthelabel-com.png",
    liveDemoUrl: "https://aynthelabel.com",
    category: "shopify",
    platform: "Shopify",
  },
  {
    title: "Bloom Care EG",
    description: "A beauty and personal-care store with organized product categories, offer visibility, and a comfortable mobile catalog experience.",
    imageFile: "bloomcareeg-com.png",
    liveDemoUrl: "https://bloomcareeg.com",
    category: "development-improvements",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Casa Tierra Home",
    description: "A home-decor storefront presenting furniture and accessories through warm imagery, clear collections, and responsive product pages.",
    imageFile: "casatierra-home-com.png",
    liveDemoUrl: "https://casatierra-home.com",
    category: "shopify",
    platform: "Shopify",
  },
  {
    title: "Dicci Cairo",
    description: "A fashion retail site with bold merchandising areas, simple category discovery, and product cards designed for quick scanning.",
    imageFile: "dicci-cairo-com.png",
    liveDemoUrl: "https://dicci-cairo.com",
    category: "shopify",
    platform: "Shopify",
  },
  {
    title: "El Ghonemy Coffee",
    description: "A coffee storefront that organizes blends and products clearly while supporting brand storytelling and mobile purchasing.",
    imageFile: "elghonemycoffee-com.png",
    liveDemoUrl: "https://elghonemycoffee.com",
    category: "wordpress-woocommerce",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Freya Boutiques",
    description: "A boutique fashion store with polished collection imagery, concise merchandising, and straightforward responsive shopping paths.",
    imageFile: "freyaboutiques-com.png",
    liveDemoUrl: "https://freyaboutiques.com",
    category: "development-improvements",
    platform: "Shopify",
  },
  {
    title: "Harmony Furnishing Home",
    description: "A furnishing store that presents room-focused collections, detailed product imagery, and an orderly responsive catalog.",
    imageFile: "harmonyfurnishinghome-com.png",
    liveDemoUrl: "https://harmonyfurnishinghome.com",
    category: "shopify",
    platform: "Shopify",
  },
  {
    title: "Heelex Store",
    description: "A retail storefront with concise promotional content, organized categories, and practical shopping patterns for touch devices.",
    imageFile: "heelex-store.png",
    liveDemoUrl: "https://heelex.store",
    category: "wordpress-woocommerce",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Lahmawy",
    description: "A food e-commerce website with direct product categories, prominent ordering information, and responsive local-market presentation.",
    imageFile: "lahmawy-com.png",
    liveDemoUrl: "https://lahmawy.com",
    category: "wordpress-woocommerce",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "LM Gallery",
    description: "A design-led online shop with visual collection browsing, balanced product grids, and a clear interface across viewport sizes.",
    imageFile: "lm-gallery-com.png",
    liveDemoUrl: "https://lm-gallery.com",
    category: "shopify",
    platform: "Shopify",
  },
  {
    title: "Nouri Chicken",
    description: "A food brand storefront that combines menu-style product browsing, clear offers, and accessible ordering content.",
    imageFile: "nouri-chicken-com.png",
    liveDemoUrl: "https://nouri-chicken.com",
    category: "shopify",
    platform: "Shopify",
  },
  {
    title: "Olvya EG",
    description: "A lifestyle shop with a light product-first layout, well-spaced collection sections, and simple responsive browsing.",
    imageFile: "olvya-eg-com.png",
    liveDemoUrl: "https://olvya-eg.com",
    category: "shopify",
    platform: "Shopify",
  },
  {
    title: "Piercing Jasmine",
    description: "A jewelry and piercing store with category-focused navigation, close-up product imagery, and compact mobile shopping flows.",
    imageFile: "piercingjasmine-com.png",
    liveDemoUrl: "https://piercingjasmine.com",
    category: "shopify",
    platform: "Shopify",
  },
  {
    title: "Posh Cosmetics",
    description: "A cosmetics marketplace with prominent brand offers, scannable product groupings, and structured browsing for large catalogs.",
    imageFile: "posh-cosmetics-com.png",
    liveDemoUrl: "https://posh-cosmetics.com",
    category: "shopify",
    platform: "Shopify",
  },
  {
    title: "Puffy & Fluffy",
    description: "A playful retail store with bright collection presentation, clear product cards, and an uncomplicated mobile experience.",
    imageFile: "puffyandfluffy-com.png",
    liveDemoUrl: "https://puffyandfluffy.com",
    category: "shopify",
    platform: "Shopify",
  },
  {
    title: "Retro Furniture",
    description: "A furniture catalog that uses room imagery, structured collections, and responsive product pages to present a wide range clearly.",
    imageFile: "retro-furniture-net.png",
    liveDemoUrl: "https://retro-furniture.net",
    category: "wordpress-woocommerce",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Saint Giza",
    description: "A streetwear storefront with bold campaign artwork, direct collection entry points, and a concise mobile shopping structure.",
    imageFile: "saintgiza-com.png",
    liveDemoUrl: "https://saintgiza.com",
    category: "development-improvements",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Simple By Dina Mostafa",
    description: "A fashion store built around understated styling, curated collections, and clear product presentation across devices.",
    imageFile: "simple-by-dinamostafa-com.png",
    liveDemoUrl: "https://simple-by-dinamostafa.com",
    category: "development-improvements",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Sora Beauty Store",
    description: "A beauty retailer with well-defined product categories, promotion areas, and mobile-friendly catalog navigation.",
    imageFile: "sorabeautystore-com.png",
    liveDemoUrl: "https://sorabeautystore.com",
    category: "wordpress-woocommerce",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Squeeze Korean Cosmetics",
    description: "A Korean beauty store with organized skincare categories, clear brand visuals, and touch-friendly product discovery.",
    imageFile: "squeezekoreancosmetics-com.png",
    liveDemoUrl: "https://squeezekoreancosmetics.com",
    category: "development-improvements",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Youurra",
    description: "A contemporary clothing store with bold campaign sections, accessible categories, and responsive product merchandising.",
    imageFile: "youurra-com.png",
    liveDemoUrl: "https://youurra.com",
    category: "wordpress-woocommerce",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Zadeen",
    description: "A modern WooCommerce fashion store developed with a clean shopping experience, responsive product presentation, and smooth navigation across desktop and mobile devices.",
    imageFile: "zaiden-com.png",
    liveDemoUrl: "https://zadeen.com/",
    category: "wordpress-woocommerce",
    platform: "WordPress / WooCommerce",
    projectType: "Fashion E-commerce Website",
  },
  {
    title: "Sevenske",
    description: "A responsive WooCommerce store for perfumes, fashion, shoes, and bags, built with clear category navigation, polished visual sections, and a mobile-friendly shopping experience.",
    imageFile: "sevenske-com.png",
    liveDemoUrl: "https://sevenske.com/",
    category: "wordpress-woocommerce",
    platform: "WordPress / WooCommerce",
    projectType: "Multi-category E-commerce Website",
  },
  {
    title: "SquaresDev",
    description: "A software company website with a clear service hierarchy, technical positioning, and responsive paths to key business content.",
    imageFile: "squaresdev-com.png",
    liveDemoUrl: "https://squaresdev.com",
    category: "portfolio",
    platform: "WordPress / WooCommerce",
    siteType: "Portfolio Website",
  },
  {
    title: "Tactful AI",
    description: "A technology website presenting AI customer-experience products through structured content, product explanations, and clear calls to action.",
    imageFile: "tactful-ai.png",
    liveDemoUrl: "https://tactful.ai",
    category: "portfolio",
    platform: "WordPress / WooCommerce",
    siteType: "Portfolio Website",
  },
  {
    title: "Debo Photography",
    description: "A photography portfolio with image-led case studies, restrained navigation, and a simple structure that keeps the work central.",
    imageFile: "debophotography-com.png",
    liveDemoUrl: "https://debophotography.com",
    category: "portfolio",
    platform: "WordPress / WooCommerce",
    siteType: "Portfolio Website",
  },
  {
    title: "Eagle Architects",
    description: "An architecture portfolio with organized project content, spacious imagery, and a responsive structure for browsing selected work.",
    imageFile: "eagle-architectss-com.png",
    liveDemoUrl: "https://eagle-architectss.com",
    category: "portfolio",
    platform: "WordPress / WooCommerce",
    siteType: "Portfolio Website",
  },
  {
    title: "Explore Cars Rental",
    description: "A vehicle-rental website with a scannable fleet presentation, service information, and direct enquiry paths across devices.",
    imageFile: "explorecarsrental-com.png",
    liveDemoUrl: "https://explorecarsrental.com",
    category: "portfolio",
    platform: "WordPress / WooCommerce",
    siteType: "Portfolio Website",
  },
  {
    title: "Harmony By Aya",
    description: "A personal brand and service website with calm visual styling, organized offerings, and a readable responsive page flow.",
    imageFile: "harmonybyaya-com.png",
    liveDemoUrl: "https://harmonybyaya.com",
    category: "portfolio",
    platform: "WordPress / WooCommerce",
    siteType: "Portfolio Website",
  },
  {
    title: "Hossam Antikka",
    description: "A creative portfolio that presents selected work and services through image-rich sections and straightforward navigation.",
    imageFile: "hossam-antikka-com.png",
    liveDemoUrl: "https://hossam-antikka.com",
    category: "portfolio",
    platform: "WordPress / WooCommerce",
    siteType: "Portfolio Website",
  },
  {
    title: "JD Express EG",
    description: "A logistics company website with clearly grouped shipping services, business information, and accessible contact routes.",
    imageFile: "jdexpress-eg-com.png",
    liveDemoUrl: "https://jdexpress-eg.com",
    category: "portfolio",
    platform: "WordPress / WooCommerce",
    siteType: "Portfolio Website",
  },
  {
    title: "Loc & More",
    description: "A localization company website organizing language services, industries, and subject expertise into clear responsive sections.",
    imageFile: "locandmore-com.png",
    liveDemoUrl: "https://locandmore.com",
    category: "portfolio",
    platform: "WordPress / WooCommerce",
    siteType: "Portfolio Website",
  },
  {
    title: "Loc & Play",
    description: "A gaming-localization website with specialized service content, focused industry messaging, and an energetic visual presentation.",
    imageFile: "locandplay-com.png",
    liveDemoUrl: "https://locandplay.com",
    category: "portfolio",
    platform: "WordPress / WooCommerce",
    siteType: "Portfolio Website",
  },
  {
    title: "Palmeras Hotel",
    description: "A hospitality website presenting rooms, amenities, and destination content through inviting imagery and responsive information blocks.",
    imageFile: "palmeras-hotel-com.png",
    liveDemoUrl: "https://palmeras-hotel.com",
    category: "portfolio",
    platform: "WordPress / WooCommerce",
    siteType: "Portfolio Website",
  },
  {
    title: "Tawasol 365",
    description: "A technology and marketing company website with structured solution areas, company information, and clear contact pathways.",
    imageFile: "tawasol365-com.png",
    liveDemoUrl: "https://tawasol365.com",
    category: "portfolio",
    platform: "WordPress / WooCommerce",
    siteType: "Portfolio Website",
  },
  {
    title: "Trendscape Agency",
    description: "A marketing agency portfolio with distinctive brand typography, service positioning, and project-led visual storytelling.",
    imageFile: "trendscape-agency-com.png",
    liveDemoUrl: "https://trendscape-agency.com",
    category: "portfolio",
    platform: "WordPress / WooCommerce",
    siteType: "Portfolio Website",
  },
  {
    title: "Trendscape Studio",
    description: "A creative studio site combining portfolio imagery, compact service content, and an editorial responsive layout.",
    imageFile: "trendscapestudio-com.png",
    liveDemoUrl: "https://trendscapestudio.com",
    category: "portfolio",
    platform: "WordPress / WooCommerce",
    siteType: "Portfolio Website",
  },
  {
    title: "Ventures Business Academy",
    description: "A business education website organizing programs, learning information, and academy content into clear responsive pages.",
    imageFile: "venturesbusinessacademy-com.png",
    liveDemoUrl: "https://venturesbusinessacademy.com",
    category: "portfolio",
    platform: "WordPress / WooCommerce",
    siteType: "Portfolio Website",
  },
  {
    title: "VTR Fitout",
    description: "A fit-out company portfolio presenting services and completed spaces through strong project imagery and concise business content.",
    imageFile: "vtrfitout-com.png",
    liveDemoUrl: "https://vtrfitout.com",
    category: "portfolio",
    platform: "WordPress / WooCommerce",
    siteType: "Portfolio Website",
  },
];

const normalizedProjectTitles = new Set<string>();

export const projects: Project[] = projectSeeds.map((project) => {
  const normalizedTitle = project.title.trim().toLocaleLowerCase("en");
  if (normalizedProjectTitles.has(normalizedTitle)) {
    throw new Error(`Duplicate project title: ${project.title}`);
  }
  normalizedProjectTitles.add(normalizedTitle);

  const isImprovement = project.category === "development-improvements";
  const isPortfolio = project.category === "portfolio";

  return {
    ...project,
    image: imageFor(project.imageFile),
    siteType: project.siteType ?? (isPortfolio ? "Portfolio Website" : "Ecommerce"),
    role: isImprovement ? "Development & Improvements" : "Full Build",
    projectType: project.projectType ?? (isPortfolio ? "Portfolio Website" : "E-commerce Website"),
    contribution: project.contribution ?? (
      isImprovement
        ? "Website Development, UI Improvements & Performance Enhancements"
        : "Full Website Development"
    ),
    source: directFreelanceProjects.has(project.title)
      ? "Direct Freelance Project"
      : tawasolProjects.has(project.title)
        ? "Built while working with Tawasol365"
        : "Built while working with Trendscape Agency",
  };
});
