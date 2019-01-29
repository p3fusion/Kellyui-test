const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false, args: ['--window-size=1920,1080'], slowMo : 100});
  const page = await browser.newPage();
  await page.goto('https://klysvc-guided-dt1.pegacloud.net/prweb');
  const USERNAME_SELECTOR  = '#txtUserID'
  const PASSWORD_SELECTOR = '#txtPassword';
  const BUTTON_SELECTOR =  '#sub'
  await page.click(USERNAME_SELECTOR);

  await page.setViewport({
    width  : 1920,
    height : 1080
  });
await page.keyboard.type('tom');

await page.click(PASSWORD_SELECTOR);
await page.keyboard.type('rules');

await page.click(BUTTON_SELECTOR, {"waitUntil" : "networkidle0"});
//await page.waitFor(30000);
console.log('Now waiting for iFrame PegaGadget0Ifr');
await page.waitForSelector( "#PegaGadget0Ifr", { visible : true } );



var frame = await page.frames().find(f => f.name() === 'PegaGadget0Ifr');
//const button = await frame.$('#txtCase');
//button.click();

//#PegaGadget0Ifr

console.log('Now waiting for Radio Button');
const radioButtonSelector = "#HomePageResponseI\\20 need\\20 to\\20 buy\\20 or\\20 extend\\20 a\\20 new\\20 item\\2c \\20 temp\\2c \\20 contractor\\20 or\\20 service";
/*await frame.waitForSelector(radioButtonSelector, { visible : true } ).then(async (dom) => {
  console.log("Inside DOM");
  await dom.click()
});*/
//console.log("Outside DOM");
//await frame.click(radioButtonSelector);

await frame.waitForXPath('//*[@id="RULE_KEY"]/div/div/div/div[1]/div/div/div/div/div/div/div/div[3]/div/div[1]/span/label',  { visible : true }).then(async (dom)=>{
  console.log("Inside DOM");
  await dom.click()
}) 

console.log("Outside DOM");

console.log('Now waiting for iFrame PegaGadget1Ifr');
await page.waitForSelector( "#PegaGadget1Ifr", { visible : true } );



var frame = await page.frames().find(f => f.name() === 'PegaGadget1Ifr');

//await frame.waitForSelector("#PegaGadget1Ifr",  { visible : true } );
//await page.waitFor(30000);

//console.log('Now waiting for iFrame #PegaGadget1Ifr');
//console.log('Child Franes', frame.childFrames());

//await frame.waitForXPath('//*[@id="$PD_GetNextQuestion$pResponses$l1"]/td[2]/div/span/a',  { visible : true });
await frame.waitForSelector("#pyNote1", { visible : true });
await frame.click("#pyNote1");
const textBoxElement = await frame.$("#pyNote1");
await textBoxElement.type("Test");

await frame.waitForXPath('//*[@id="$PD_GetNextQuestion$pResponses$l1"]/td[2]/div/span/a',  { visible : true }).then(async (dom)=>{
  console.log("Inside Next Button");
  await dom.click()
}) 


await page.waitForSelector( "#PegaGadget1Ifr", { visible : true } );



var frame = await page.frames().find(f => f.name() === 'PegaGadget1Ifr');

await frame.waitForSelector("#gridCheckBox", { visible : true });
//await frame.click("$PD_GetNextQuestion$pResponses$l2$ppySelected");
//const textBoxElement = await frame.$("#pyNote1");
//await textBoxElement.type("Test");
var  example = await frame.$$( "#gridCheckBox" );
//console.log("example", example);

await example[0].click();

await page.waitForSelector( "#PegaGadget1Ifr", { visible : true } );



frame = await page.frames().find(f => f.name() === 'PegaGadget1Ifr');

await frame.waitForSelector("#gridCheckBox", { visible : true });
//await frame.click("$PD_GetNextQuestion$pResponses$l2$ppySelected");
//const textBoxElement = await frame.$("#pyNote1");
//await textBoxElement.type("Test");
example = await frame.$$( "#gridCheckBox" );
//console.log("example", example);

await example[0].click();



await page.waitForSelector( "#PegaGadget1Ifr", { visible : true } );



frame = await page.frames().find(f => f.name() === 'PegaGadget1Ifr');

await frame.waitForSelector("#Region", { visible : true });
//example = await frame.$$( "#gridCheckBox" );
await frame.select('#Region', 'AMER'); 
await frame.waitForSelector('#Country');
await frame.select('#Country', 'United States'); 
await frame.waitForSelector('#State');
await frame.select('#State', 'AZ'); 
await frame.waitForSelector('#City');
await frame.select('#City', 'Scottsdale');
await frame.click('#IsWorkLocUnsure');

frame.waitForXPath('//*[@id="RULE_KEY"]/div/div/div/div[2]/div/div/div/div[6]/div/div/div/div/span/a',{ visible : true }).then(async (dom)=>{
  console.log("Inside Next Button");
  await dom.click()
}) 





await page.screenshot({ path: 'example.png' })
//  await browser.close();
})();


