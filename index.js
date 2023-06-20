
const puppeteer = require('puppeteer');
const cron = require('node-cron');
const CronJob = require('cron').CronJob;
const ogrenciNo = ""; //öğrenci numaranı buraya yaz!
const sifre = ""; //şifreni buraya yaz!
const dersSaati1 = '0 17 * * WED'; //2. sayı ders saatini temsil eder 0-23 arası bir sayı yazmalısın
const dersSaati2 =  '0 10 * * THU';
const dersSaati3 =  '0 9 * * FRI';
const dersSaati4 =  '0 11 * * FRI';
const dersSaati5 =  '0 15 * * FRI';

const eylem1 = new CronJob(dersSaati1, async () => {
 
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720});
  await page.goto('https://uzem.aksaray.edu.tr/Account/LoginBefore');
  
  await page.type("#UserName", ogrenciNo, { delay: 20 });
  
  await page.click('[id="btnLoginName"]');
  await page.wait
  await page.waitForSelector("#Password")
  await page.type("#Password", sifre, { delay: 20 });
  await page.click('[id="btnLoginPass"]');
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  await page.goto("https://uzem.aksaray.edu.tr/Activity/Launch/BAD3AD5EBD8CB13E61446F01EDC21E4B?eId=8C1DDCE5E5F0B4936CE457E59DD143E7&classId=F4FEB439E3B4906B14D0F0E6AAF417D1")
  await page.click('#perculus-container > div.onboarding-screen > div.main-container > div.underside > div.join-button')
  await new Promise(resolve => setTimeout(resolve, 3600000));
  await browser.close();
});

const eylem2 = new CronJob(dersSaati2, async () => {
 
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720});
  await page.goto('https://uzem.aksaray.edu.tr/Account/LoginBefore');
  
  await page.type("#UserName", ogrenciNo, { delay: 20 });
  
  await page.click('[id="btnLoginName"]');
  await page.wait
  await page.waitForSelector("#Password")
  await page.type("#Password", sifre, { delay: 20 });
  await page.click('[id="btnLoginPass"]');
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  await page.goto("https://uzem.aksaray.edu.tr/Activity/Launch/3E5A2BBFEB7941BCAF260552A63CDB98?eId=8C1DDCE5E5F0B4936CE457E59DD143E7&classId=2B136D55F5B09A434C3A64D874B5EA98")
  await page.click('#perculus-container > div.onboarding-screen > div.main-container > div.underside > div.join-button')
  await new Promise(resolve => setTimeout(resolve, 3600000));
  await browser.close();
});


const eylem3 = new CronJob(dersSaati3, async () => {
 
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720});
  await page.goto('https://uzem.aksaray.edu.tr/Account/LoginBefore');
  
  await page.type("#UserName", ogrenciNo, { delay: 20 });
  
  await page.click('[id="btnLoginName"]');
  await page.wait
  await page.waitForSelector("#Password")
  await page.type("#Password", sifre, { delay: 20 });
  await page.click('[id="btnLoginPass"]');
  await new Promise(resolve => setTimeout(resolve, 3000));
  await page.goto("https://uzem.aksaray.edu.tr/CC825F4A776A0C0BD542768B684B5623?eId=8C1DDCE5E5F0B4936CE457E59DD143E7&classId=CDC3FF3558AA08C937A41AC4968B1AC0")
  await page.click('#perculus-container > div.onboarding-screen > div.main-container > div.underside > div.join-button')
  await new Promise(resolve => setTimeout(resolve, 3600000));
  await browser.close();
});


const eylem4 = new CronJob(dersSaati4, async () => {
 
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720});
  await page.goto('https://uzem.aksaray.edu.tr/Account/LoginBefore');
  
  await page.type("#UserName", ogrenciNo, { delay: 20 });
  
  await page.click('[id="btnLoginName"]');
  await page.wait
  await page.waitForSelector("#Password")
  await page.type("#Password", sifre, { delay: 20 });
  await page.click('[id="btnLoginPass"]');
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  
  await page.goto("https://uzem.aksaray.edu.tr/790E7A09D0D547F0FFD6BC994C5344F6?eId=8C1DDCE5E5F0B4936CE457E59DD143E7&classId=8010ECADCEE1C069515C05680C207025")
  await page.click('#perculus-container > div.onboarding-screen > div.main-container > div.underside > div.join-button')
  await new Promise(resolve => setTimeout(resolve, 3600000));
  await browser.close();  
});


const eylem5 = new CronJob(dersSaati5, async () => {
 
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720});
  await page.goto('https://uzem.aksaray.edu.tr/Account/LoginBefore');
  
  await page.type("#UserName", ogrenciNo, { delay: 20 });
  
  await page.click('[id="btnLoginName"]');
  await page.wait
  await page.waitForSelector("#Password")
  await page.type("#Password", sifre, { delay: 20 });
  await page.click('[id="btnLoginPass"]');
  await new Promise(resolve => setTimeout(resolve, 3000));
  
 
  await page.goto("https://uzem.aksaray.edu.tr/9ACCD29FF8B707045492B9E619059707?eId=8C1DDCE5E5F0B4936CE457E59DD143E7&classId=B080DA86A17B9F91B6E527A9D87E922A")
  await page.click('#perculus-container > div.onboarding-screen > div.main-container > div.underside > div.join-button')
  await new Promise(resolve => setTimeout(resolve, 3600000));
  await browser.close();

});


eylem1.start();
eylem2.start();
eylem3.start();
eylem4.start();
eylem5.start();
console.log("uygulama başladi ders otomatik olarak acilacak");