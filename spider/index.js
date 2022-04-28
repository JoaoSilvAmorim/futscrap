const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const spider = require('./spider')
puppeteer.use(StealthPlugin());


const runPuppeteer = async (link_data) =>{
    const browser = await puppeteer.launch({
        headless: false,
        args:[
            '--start-maximized'
        ],
    });

    const page = await browser.newPage();

    let dataPrice = await spider(page, link_data);
    console.log(dataPric
    return dataPrice
}


module.exports = runPuppeteer;
