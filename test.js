const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false, args: ['--window-size=1920,1080'], slowMo : 100});
  const page = await browser.newPage();
  await page.goto('https://klysvc-guided-dt1.pegacloud.net/prweb');
  await page.type('#txtUserID', 'tom');
  await page.type('#txtPassword', 'rules');
  await page.click('#sub > .loginButtonText');
  //await browser.close()
})()
