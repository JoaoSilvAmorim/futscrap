const sleep = require('../help/sleep');
const autoScroll = require('../help/autoScroll');

const spider = async (page, link_data) => {
    
    console.log('123')
    await page.goto('https://www.marjosports.com/home/game-area');
    await sleep(3000)
    try{
        await page.$eval('button[class="mat-flat-button mat-button-base mat-general"]', el => el.click())
    }catch(e){
        console.log(e)
    }
    
    await autoScroll(page)
    console.log('456')

    
      
    //await browser.close();
   
    return 'paissisisis'
}


module.exports = spider;