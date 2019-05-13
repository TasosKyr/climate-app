const puppeteer = require("puppeteer");

const scrapeChangeOrg = async () => {
    const browser = await puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    const url = "https://www.change.org/search?q=climate%20&lang=en-GB";

    await page.goto(url);

    const scrapedData = await page.evaluate(() =>
        Array.from(document.querySelectorAll(".search-result")).map(link => ({
            title: link.querySelector("h3").textContent,
            url: link.querySelector('a').href
        }))
    );
    console.log(scrapedData)
    await browser.close();
    return scrapedData;
};

module.exports = {
    scrapeChangeOrg
};