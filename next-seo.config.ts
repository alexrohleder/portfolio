import { NextSeoProps } from "next-seo";

const years = new Date().getFullYear() - 2015;
const title = "Alex Rohleder – Software Engineer Portfolio";
const description = `Software engineer with ${years} years of experience and passion for building high-impact, well-performing user experiences.`;

const seo: NextSeoProps = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IE",
    url: "https://alexrohleder.com",
    site_name: "Alex Rohleder Portfolio",
  },
  twitter: {
    handle: "@alexrohleder",
    site: "@alexrohleder",
    cardType: "summary_large_image",
  },
};

export default seo;
