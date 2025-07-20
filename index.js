const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    userAgent: "Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36",
  });

  await page.goto("https://www.google.com/search?q=porno", { waitUntil: "load", referer: "https://www.google.com/" });
  await page.waitForTimeout(2000);

  await page.goto("https://turkpornovideolari.com", {
    waitUntil: "load",
    referer: "https://www.google.com/search?q=porno"
  });

  // Scroll simülasyonu
  for (let i = 0; i < 10; i++) {
    await page.mouse.wheel(0, 500);
    await page.waitForTimeout(1000);
  }

  // Sayfada kal
  await page.waitForTimeout(15000);

  await browser.close();
})();
