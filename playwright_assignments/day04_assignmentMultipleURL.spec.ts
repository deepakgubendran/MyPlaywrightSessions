import { chromium, firefox, test, webkit } from "@playwright/test";


test(`Test to launch the browser`, async () => {
     
    // Create a browser instance
    const browser = await chromium.launch({headless: false, channel: 'chrome'});


    // Create the browser context
    const context = await browser.newContext();


    // Create a new page
    const page = await context.newPage();



    // Load the url
    await page.goto("https://login.salesforce.com/");


    // Get the url of the page
    const url = page.url();
    console.log(`The url of the page is ${url}`);


    // Get the title of the page
    console.log(`The title of the page is ${ await page.title()}`);    
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();


    //Close the browser context
    await context.close();


    // Close the browser
    await browser.close();
    
})