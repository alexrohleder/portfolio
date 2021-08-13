import puppeteer from "puppeteer";
import absoluteUrl from "next-absolute-url";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const { origin } = absoluteUrl(req, "http://localhost:3000");
  const homepage = await page.goto(origin);

  if (homepage.ok()) {
    const buffer = await page.pdf();
    res.setHeader("Content-Disposition", 'attachment; filename="Alex.pdf"');
    res.setHeader("Content-Type", "application/pdf");
    res.end(buffer);
  } else {
    res.end(502);
  }

  await browser.close();
};
