const projectImages = import.meta.glob("../assets/images/project-thumbnails/*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export type ProjectPlatform = "WordPress / WooCommerce" | "Shopify";
export type ProjectRole = "Full Build" | "Development & Improvements";
export type ProjectSource =
  | "Direct Freelance Project"
  | "Built while working with Trendscape Agency"
  | "Built while working with Tawasol365";

export type Project = {
  title: string;
  description: string;
  image: string;
  liveDemoUrl: string;
  platform: ProjectPlatform;
  role: ProjectRole;
  source: ProjectSource;
};

type ProjectSeed = Omit<Project, "image" | "role" | "source"> & {
  imageFile: string;
};

const imageFor = (fileName: string) => {
  const thumbnailFile = fileName.replace(/\.png$/i, ".jpg");
  const image = projectImages[`../assets/images/project-thumbnails/${thumbnailFile}`];
  if (!image) throw new Error(`Missing project image: ${fileName}`);
  return image;
};

const improvementProjects = new Set([
  "TheFit Wear",
  "Allure Jewellery EG",
  "Aryes EG",
  "Asrar EG",
  "Ayah Offical",
  "Be You Egypt",
  "Bloom Care EG",
  "Burgundy EG",
  "Freya Boutiques",
  "Glitter EG",
  "Glow Essence Cosmetics",
  "LM Gallery",
  "Maison Salma",
  "M Kamal Shop",
  "Posh Cosmetics",
  "Retro Furniture",
  "Saint Giza",
  "Simple By Dina Mostafa",
  "Squeeze Korean Cosmetics",
]);

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
]);

const tawasolProjects = new Set(["SquaresDev", "Tawasol 365", "Ventures Business Academy"]);

const projectSeeds: ProjectSeed[] = [
  {
    title: "Homers EG",
    description: "A fashion storefront with a dark, product-led presentation, organized category browsing, and a focused mobile shopping flow.",
    imageFile: "homers-eg-com.png",
    liveDemoUrl: "https://homers-eg.com/",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "TheFit Wear",
    description: "A sportswear store with clear collection browsing, prominent product imagery, and responsive purchase journeys.",
    imageFile: "thefit-wear-com.png",
    liveDemoUrl: "https://thefit-wear.com",
    platform: "Shopify",
  },
  {
    title: "Oree Fragrances",
    description: "A fragrance store organized around scent collections, premium product visuals, and straightforward product discovery.",
    imageFile: "oreefragrances-com.png",
    liveDemoUrl: "https://oreefragrances.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Allure Jewellery EG",
    description: "A jewelry storefront that gives product photography room to lead while keeping collections and shopping actions easy to scan.",
    imageFile: "allurejewelleryeg-com.png",
    liveDemoUrl: "https://allurejewelleryeg.com",
    platform: "Shopify",
  },
  {
    title: "Aryes EG",
    description: "A fashion store with collection-led navigation, structured product cards, and a responsive browsing experience for smaller screens.",
    imageFile: "aryeseg-com.png",
    liveDemoUrl: "https://aryeseg.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Asrar EG",
    description: "An apparel storefront with clear promotional areas, accessible product categories, and consistent shopping content across devices.",
    imageFile: "asrar-eg-com.png",
    liveDemoUrl: "https://asrar-eg.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Ayah Offical",
    description: "A women’s fashion store that balances campaign imagery with simple collection paths and mobile-friendly product presentation.",
    imageFile: "ayah-offical-com.png",
    liveDemoUrl: "https://ayah-offical.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Ayn The Label",
    description: "A contemporary fashion storefront with editorial visuals, restrained typography, and a clean path from collection to product.",
    imageFile: "aynthelabel-com.png",
    liveDemoUrl: "https://aynthelabel.com",
    platform: "Shopify",
  },
  {
    title: "Be You Egypt",
    description: "A lifestyle e-commerce site with prominent collections, readable product information, and a clear responsive storefront structure.",
    imageFile: "beyouegy-com.png",
    liveDemoUrl: "https://beyouegy.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Bloom Care EG",
    description: "A beauty and personal-care store with organized product categories, offer visibility, and a comfortable mobile catalog experience.",
    imageFile: "bloomcareeg-com.png",
    liveDemoUrl: "https://bloomcareeg.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Burgundy EG",
    description: "A women’s clothing store with campaign-led sections, structured categories, and consistent product browsing on desktop and mobile.",
    imageFile: "burgundy-eg-com.png",
    liveDemoUrl: "https://burgundy-eg.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Casa Tierra Home",
    description: "A home-decor storefront presenting furniture and accessories through warm imagery, clear collections, and responsive product pages.",
    imageFile: "casatierra-home-com.png",
    liveDemoUrl: "https://casatierra-home.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Dicci Cairo",
    description: "A fashion retail site with bold merchandising areas, simple category discovery, and product cards designed for quick scanning.",
    imageFile: "dicci-cairo-com.png",
    liveDemoUrl: "https://dicci-cairo.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "El Ghonemy Coffee",
    description: "A coffee storefront that organizes blends and products clearly while supporting brand storytelling and mobile purchasing.",
    imageFile: "elghonemycoffee-com.png",
    liveDemoUrl: "https://elghonemycoffee.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Freya Boutiques",
    description: "A boutique fashion store with polished collection imagery, concise merchandising, and straightforward responsive shopping paths.",
    imageFile: "freyaboutiques-com.png",
    liveDemoUrl: "https://freyaboutiques.com",
    platform: "Shopify",
  },
  {
    title: "Glitter EG",
    description: "An accessories-focused store with colorful merchandising, accessible collections, and an adaptable product browsing layout.",
    imageFile: "glitter-eg-com.png",
    liveDemoUrl: "https://glitter-eg.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Glow Essence Cosmetics",
    description: "A cosmetics store with brand-based discovery, clear product groupings, and a mobile layout suited to catalog browsing.",
    imageFile: "glowessencecosmetics-store.png",
    liveDemoUrl: "https://glowessencecosmetics.store",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Harmony Furnishing Home",
    description: "A furnishing store that presents room-focused collections, detailed product imagery, and an orderly responsive catalog.",
    imageFile: "harmonyfurnishinghome-com.png",
    liveDemoUrl: "https://harmonyfurnishinghome.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Heelex Store",
    description: "A retail storefront with concise promotional content, organized categories, and practical shopping patterns for touch devices.",
    imageFile: "heelex-store.png",
    liveDemoUrl: "https://heelex.store",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Lahmawy",
    description: "A food e-commerce website with direct product categories, prominent ordering information, and responsive local-market presentation.",
    imageFile: "lahmawy-com.png",
    liveDemoUrl: "https://lahmawy.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "LM Gallery",
    description: "A design-led online shop with visual collection browsing, balanced product grids, and a clear interface across viewport sizes.",
    imageFile: "lm-gallery-com.png",
    liveDemoUrl: "https://lm-gallery.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Maison Salma",
    description: "A modest-fashion storefront with editorial campaign sections, collection navigation, and a calm product-led visual hierarchy.",
    imageFile: "maisonsalma-com.png",
    liveDemoUrl: "https://maisonsalma.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "M Kamal Shop",
    description: "A broad retail catalog structured around discoverable departments, readable offers, and practical responsive shopping controls.",
    imageFile: "mkamal-shop.png",
    liveDemoUrl: "https://mkamal.shop",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Nouri Chicken",
    description: "A food brand storefront that combines menu-style product browsing, clear offers, and accessible ordering content.",
    imageFile: "nouri-chicken-com.png",
    liveDemoUrl: "https://nouri-chicken.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Olvya EG",
    description: "A lifestyle shop with a light product-first layout, well-spaced collection sections, and simple responsive browsing.",
    imageFile: "olvya-eg-com.png",
    liveDemoUrl: "https://olvya-eg.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Piercing Jasmine",
    description: "A jewelry and piercing store with category-focused navigation, close-up product imagery, and compact mobile shopping flows.",
    imageFile: "piercingjasmine-com.png",
    liveDemoUrl: "https://piercingjasmine.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Posh Cosmetics",
    description: "A cosmetics marketplace with prominent brand offers, scannable product groupings, and structured browsing for large catalogs.",
    imageFile: "posh-cosmetics-com.png",
    liveDemoUrl: "https://posh-cosmetics.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Puffy & Fluffy",
    description: "A playful retail store with bright collection presentation, clear product cards, and an uncomplicated mobile experience.",
    imageFile: "puffyandfluffy-com.png",
    liveDemoUrl: "https://puffyandfluffy.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Retro Furniture",
    description: "A furniture catalog that uses room imagery, structured collections, and responsive product pages to present a wide range clearly.",
    imageFile: "retro-furniture-net.png",
    liveDemoUrl: "https://retro-furniture.net",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Saint Giza",
    description: "A streetwear storefront with bold campaign artwork, direct collection entry points, and a concise mobile shopping structure.",
    imageFile: "saintgiza-com.png",
    liveDemoUrl: "https://saintgiza.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Simple By Dina Mostafa",
    description: "A fashion store built around understated styling, curated collections, and clear product presentation across devices.",
    imageFile: "simple-by-dinamostafa-com.png",
    liveDemoUrl: "https://simple-by-dinamostafa.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Sora Beauty Store",
    description: "A beauty retailer with well-defined product categories, promotion areas, and mobile-friendly catalog navigation.",
    imageFile: "sorabeautystore-com.png",
    liveDemoUrl: "https://sorabeautystore.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Squeeze Korean Cosmetics",
    description: "A Korean beauty store with organized skincare categories, clear brand visuals, and touch-friendly product discovery.",
    imageFile: "squeezekoreancosmetics-com.png",
    liveDemoUrl: "https://squeezekoreancosmetics.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Studio Camellia",
    description: "A boutique store with editorial imagery, considered product groupings, and a refined responsive visual rhythm.",
    imageFile: "studio-camellia-com.png",
    liveDemoUrl: "https://studio-camellia.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "The Pink Theory EG",
    description: "A colorful fashion storefront with campaign-led categories, clear product discovery, and a consistent shopping interface.",
    imageFile: "thepinktheoryeg-com.png",
    liveDemoUrl: "https://thepinktheoryeg.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Timeless Brand",
    description: "A minimal apparel store with focused collection pages, editorial spacing, and an uncluttered mobile product journey.",
    imageFile: "timeless-brand-com.png",
    liveDemoUrl: "https://timeless-brand.com",
    platform: "Shopify",
  },
  {
    title: "Youurra",
    description: "A contemporary clothing store with bold campaign sections, accessible categories, and responsive product merchandising.",
    imageFile: "youurra-com.png",
    liveDemoUrl: "https://youurra.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "SquaresDev",
    description: "A software company website with a clear service hierarchy, technical positioning, and responsive paths to key business content.",
    imageFile: "squaresdev-com.png",
    liveDemoUrl: "https://squaresdev.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Tactful AI",
    description: "A technology website presenting AI customer-experience products through structured content, product explanations, and clear calls to action.",
    imageFile: "tactful-ai.png",
    liveDemoUrl: "https://tactful.ai",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Rescape Visualization",
    description: "A visualization studio portfolio centered on immersive project imagery, concise services, and an elegant responsive presentation.",
    imageFile: "rescape-visualization-com.png",
    liveDemoUrl: "https://rescape-visualization.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Debo Photography",
    description: "A photography portfolio with image-led case studies, restrained navigation, and a simple structure that keeps the work central.",
    imageFile: "debophotography-com.png",
    liveDemoUrl: "https://debophotography.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Eagle Architects",
    description: "An architecture portfolio with organized project content, spacious imagery, and a responsive structure for browsing selected work.",
    imageFile: "eagle-architectss-com.png",
    liveDemoUrl: "https://eagle-architectss.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Explore Cars Rental",
    description: "A vehicle-rental website with a scannable fleet presentation, service information, and direct enquiry paths across devices.",
    imageFile: "explorecarsrental-com.png",
    liveDemoUrl: "https://explorecarsrental.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Harmony By Aya",
    description: "A personal brand and service website with calm visual styling, organized offerings, and a readable responsive page flow.",
    imageFile: "harmonybyaya-com.png",
    liveDemoUrl: "https://harmonybyaya.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Hossam Antikka",
    description: "A creative portfolio that presents selected work and services through image-rich sections and straightforward navigation.",
    imageFile: "hossam-antikka-com.png",
    liveDemoUrl: "https://hossam-antikka.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "JD Express EG",
    description: "A logistics company website with clearly grouped shipping services, business information, and accessible contact routes.",
    imageFile: "jdexpress-eg-com.png",
    liveDemoUrl: "https://jdexpress-eg.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Loc & More",
    description: "A localization company website organizing language services, industries, and subject expertise into clear responsive sections.",
    imageFile: "locandmore-com.png",
    liveDemoUrl: "https://locandmore.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Loc & Play",
    description: "A gaming-localization website with specialized service content, focused industry messaging, and an energetic visual presentation.",
    imageFile: "locandplay-com.png",
    liveDemoUrl: "https://locandplay.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Palmeras Hotel",
    description: "A hospitality website presenting rooms, amenities, and destination content through inviting imagery and responsive information blocks.",
    imageFile: "palmeras-hotel-com.png",
    liveDemoUrl: "https://palmeras-hotel.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Tawasol 365",
    description: "A technology and marketing company website with structured solution areas, company information, and clear contact pathways.",
    imageFile: "tawasol365-com.png",
    liveDemoUrl: "https://tawasol365.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Trendscape Agency",
    description: "A marketing agency portfolio with distinctive brand typography, service positioning, and project-led visual storytelling.",
    imageFile: "trendscape-agency-com.png",
    liveDemoUrl: "https://trendscape-agency.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Trendscape Studio",
    description: "A creative studio site combining portfolio imagery, compact service content, and an editorial responsive layout.",
    imageFile: "trendscapestudio-com.png",
    liveDemoUrl: "https://trendscapestudio.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "Ventures Business Academy",
    description: "A business education website organizing programs, learning information, and academy content into clear responsive pages.",
    imageFile: "venturesbusinessacademy-com.png",
    liveDemoUrl: "https://venturesbusinessacademy.com",
    platform: "WordPress / WooCommerce",
  },
  {
    title: "VTR Fitout",
    description: "A fit-out company portfolio presenting services and completed spaces through strong project imagery and concise business content.",
    imageFile: "vtrfitout-com.png",
    liveDemoUrl: "https://vtrfitout.com",
    platform: "WordPress / WooCommerce",
  },
];

export const projects: Project[] = projectSeeds.map((project) => ({
  ...project,
  image: imageFor(project.imageFile),
  role: improvementProjects.has(project.title) ? "Development & Improvements" : "Full Build",
  source: directFreelanceProjects.has(project.title)
    ? "Direct Freelance Project"
    : tawasolProjects.has(project.title)
      ? "Built while working with Tawasol365"
      : "Built while working with Trendscape Agency",
}));
