import playwright from "playwright-aws-lambda";
import absoluteUrl from "next-absolute-url";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const browser = await playwright.launchChromium();
  const page = await browser.newPage();

  // we only care about the width here, make sure it gets into 2xl
  // see: https://tailwindcss.com/docs/breakpoints
  page.setViewportSize({ width: 1536, height: 1080 });

  const { origin } = absoluteUrl(req, "http://localhost:3000");
  const homepage = await page.goto(`${origin}?screenshot`);

  if (homepage.ok()) {
    const buffer = await page.screenshot({ fullPage: true });
    const fileName = "Alex Rohleder.png";

    res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);
    res.setHeader("Content-Type", "image/png");
    res.end(buffer);
  } else {
    res.end(502);
  }

  await browser.close();
};
