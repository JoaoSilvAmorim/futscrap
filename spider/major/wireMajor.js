const sleep = require("../../utils/sleep");
const autoScroll = require("./help/autoScroll");

const wireMajor = async (page) => {
  await page.goto("https://www.marjosports.com/home/game-area");
  await sleep(3000);

  try {
    await page.$eval('button[class="mat-flat-button mat-button-base mat-general"]', el => el.click());

  } catch (e) {
    console.log(e);
  }
  await autoScroll(page);

  const gameCont = await page.$$eval('div[class="cdk-virtual-scroll-content-wrapper"] > div[class="ng-star-inserted"]', el => el.length);

  for (let selectNth = 1; selectNth <= gameCont; selectNth++) {
    await page.$eval(`body > app-root > div > div > div > app-window > div > app-desktop-home > div > div > div > div.container > app-game-area-container > div > app-desktop-game-area > div > div:nth-child(2) > app-event-list > div > div > mat-accordion > cdk-virtual-scroll-viewport > div.cdk-virtual-scroll-content-wrapper > div:nth-child(${selectNth}) > app-event-item > div > div > app-event-info-soccer > div.event-top > div.game-description`, el => el.click());
    await sleep(3000);
  }

  return "ok";
};

module.exports = wireMajor;
