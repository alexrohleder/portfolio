const years = new Date().getFullYear() - 2015;
const title = "Alex Rohleder - Software Engineer";
const description = `Software engineer with ${years} years of experience and passion for building high-impact, well-performing user experiences.`;

const seo = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IE",
    url: "https://alexrohleder.com",
    site_name: "Alex Rohleder Portfolio",
    // images: [
    //   {
    //     url: "/card.png",
    //     width: 800,
    //     height: 600,
    //     alt: "Alex Rohleder Portfolio",
    //   },
    // ],
  },
  twitter: {
    handle: "@alexrohleder",
    site: "@alexrohleder",
    cardType: "summary_large_image",
  },
};

export default seo;
