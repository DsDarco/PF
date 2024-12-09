const puppeteer = require("puppeteer");

test("La página debe contener '¡Hola Mundo!'", async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`file://${__dirname}/../index.html`);
    const content = await page.$eval("h1", (el) => el.textContent);
    expect(content).toBe("¡Hola Mundo!");
    await browser.close();
});
