const puppeteer = require("puppeteer");

(async () => {
  try {
    console.log("🚀 Tarayıcı başlatılıyor...");

    const browser = await puppeteer.launch({
      headless: false,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--window-size=1280,720",
        "--user-agent=Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 Chrome/114.0.0.0 Mobile Safari/537.36"
      ]
    });

    const page = await browser.newPage();

    await page.setExtraHTTPHeaders({
      referer: "https://www.google.com/search?q=porno"
    });

    console.log("🌍 IP kontrol ediliyor...");
    await page.goto("https://api.ipify.org?format=json", { waitUntil: "networkidle2" });
    const ipText = await page.evaluate(() => document.body.innerText);
    console.log("🧠 BOT IP:", ipText);

    console.log("📥 Hedef siteye gidiliyor...");
    await page.goto("https://turkpornovideolari.com", { waitUntil: "domcontentloaded" });

    console.log("📜 Scroll başlatılıyor...");
    for (let i = 0; i < 10; i++) {
      await page.evaluate(() => window.scrollBy(0, 300));
      await page.waitForTimeout(Math.floor(Math.random() * 1000 + 1000));
    }

    console.log("🔗 Link tıklanıyor...");
    const links = await page.$$("a");
    if (links.length > 0) {
      const randomLink = links[Math.floor(Math.random() * links.length)];
      await randomLink.click();
      await page.waitForTimeout(3000);
    }

    console.log("✅ İşlem tamam, tarayıcı kapatılıyor.");
    await browser.close();
  } catch (err) {
    console.error("❌ HATA:", err);
  }
})();
