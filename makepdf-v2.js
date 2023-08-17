// first
// PUPPETEER_PRODUCT=chrome deno run -A --unstable https://deno.land/x/puppeteer@16.2.0/install.ts
// deno run -A --unstable makepdf-v2.js
import puppeteer from "https://deno.land/x/puppeteer/mod.ts";
import { mergePDF } from "https://taisukef.github.io/easy-pdf-merge-deno/PDFMerger.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

const makePDF = async (browser, url, list, dstfn) => {
  await Deno.mkdir("temp", { recursive: true });

  const links = list.map(l => l.fn);
  console.log(links);

  const format = "a5";

  const page = await browser.newPage();
  const pdfs = [];
  for (const link of links) {
    await page.goto(url + link);
    //await page.setViewport({ width: 841, height: 1189 });
    //await page.screenshot({ path: 'example.png' });
    const path = "temp/" + link.substring(0, link.length - 4) + "pdf";
    console.log(path);
    pdfs.push(path);
    await page.pdf({ path, format });
  }

  await mergePDF(pdfs, dstfn);
  await Deno.remove("temp", { recursive: true });
  return pdfs.length;
};


const browser = await puppeteer.launch();

//const langs = ["ja", "en", "rw", "sw", "fr"];
const langs = ["v2"];
const len = {};
for (const lang of langs) {
//  const url = "https://ichigojam.github.io/print/v2/";
  const url = "https://t.xgc.jp/";
  const list = await CSV.fetchJSON("v2/list.csv");
  console.log(list);
  const dstfn = `ichigojam_print_${lang}.pdf`;
  const cnt = await makePDF(browser, url, list, dstfn);
  len[lang] = cnt;
}

await browser.close();
console.log(len);
console.log("all", Object.values(len).reduce((pre, n) => n + pre, 0));
