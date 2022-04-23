async function autoScroll(page) {
    await page.evaluate(async () => {
        
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 50;
            var timer = setInterval(() => {
                var scrollHeight = document.querySelector('body > app-root > div > div > div > app-window > div > app-desktop-home > div > div > div > div.container > app-game-area-container > div > app-desktop-game-area > div > div:nth-child(2) > app-event-list > div > div > mat-accordion > cdk-virtual-scroll-viewport').scrollHeight
                document.querySelector('cdk-virtual-scroll-viewport').scrollBy(0, distance)
                totalHeight += distance;

                if (totalHeight >= scrollHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}


module.exports = autoScroll;