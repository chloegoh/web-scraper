const auth = require("./auth");
const tutorial = require("./tutorial");
const home = require("./home");
const puppeteer = require("puppeteer");
const fs = require("fs");

// Specify the name of the new file here to store the output
const writeStream = fs.createWriteStream("post.csv");

// Write headers
writeStream.write(`Title,Description\n`);

// Initialization
puppeteer
  .launch({ args: ["--no-sandbox"] })
  .then(async (browser) => {
    // Open a new page and navigate to Reddit
    const page = await browser.newPage();
    await page.goto("https://www.reddit.com/r/scraping/");
    await page.waitForSelector("body");

    // Manipulate the page's content
    let grabPosts = await page.evaluate(() => {
      let allPosts = document.body.querySelectorAll(".Post");

      // Store post items in an array then select elements to retrieve content
      scrapeItems = [];

      allPosts.forEach((item) => {
        let postTitle = item.querySelector("h3").innerText;
        let postDescription = "";

        try {
          paragraphs = item.querySelectorAll("p");
          paragraphs.forEach((paragraph, index) => {
            if (index !== 0) {
              postDescription += " " + paragraph.innerText;
            } else {
              postDescription += paragraph.innerText;
            }
          });
        } catch (err) {}
        scrapeItems.push({
          // Remove all commas
          postTitle: postTitle.replace(/,/g, ""),
          postDescription: postDescription.replace(/,/g, ""),
        });
      });

      let items = {
        redditPosts: scrapeItems,
      };
      return items;
    });

    // Output the scraped data
    console.log(grabPosts);

    // Write each post to CSV file
    for (const post of grabPosts.redditPosts) {
      writeStream.write(`${post.postTitle},${post.postDescription}\n`);
    }

    // Close browser
    await browser.close();
  })
  // Handle errors
  .catch(function (err) {
    console.error(err);
  });

module.exports = { auth, tutorial, home };
