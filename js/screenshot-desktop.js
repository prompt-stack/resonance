const { chromium } = require('playwright');

async function takeDesktopScreenshot() {
  const browser = await chromium.launch();
  
  // Desktop viewport
  const desktop = {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1
  };
  
  const context = await browser.newContext(desktop);
  const page = await context.newPage();
  
  console.log('Loading desktop view...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  // Wait for elements
  await page.waitForSelector('.context', { timeout: 5000 });
  await page.waitForSelector('.mic-container', { timeout: 5000 });
  
  // Take screenshot
  await page.screenshot({ 
    path: 'desktop-view.png',
    fullPage: false 
  });
  
  // Get element positions
  const contextBox = await page.locator('.context').boundingBox();
  const micBox = await page.locator('.mic-container').boundingBox();
  
  console.log('Context box:', contextBox);
  console.log('Mic container:', micBox);
  
  await browser.close();
  console.log('Screenshot saved as desktop-view.png');
}

takeDesktopScreenshot().catch(console.error);