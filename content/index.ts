import siteContent from "./site-content.json";

export default siteContent;

export type SiteContent = typeof siteContent;
export type NavLink = SiteContent["navigation"]["links"][number];
export type LeadField = SiteContent["lead_form"]["fields"][number];
export type ServiceItem = SiteContent["services"]["items"][number];
export type ProcessStep = SiteContent["process"]["steps"][number];
export type GalleryImage = SiteContent["gallery"]["images"][number];
export type PricingItem = SiteContent["pricing"]["items"][number];
export type FaqItem = SiteContent["faq"]["items"][number];
