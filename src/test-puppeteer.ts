import puppeteer from 'puppeteer';

(async () => {
  console.log(process.env.DISPLAY);
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://www3.nhk.or.jp/news/', { waitUntil: 'networkidle0' });
  console.log('goto');

  await page.mouse.click(240, 55);

  //await page.mouse.click(80, 20);

  console.log('click');
})();
