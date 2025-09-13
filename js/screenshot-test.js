const { chromium } = require('playwright');

async function takeScreenshots() {
  const browser = await chromium.launch();
  
  // iPhone 15 Pro Max viewport
  const iphone15ProMax = {
    width: 430,
    height: 932,
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true
  };
  
  // Test both local and live sites
  const urls = [
    { url: 'http://localhost:3000', name: 'localhost' },
    { url: 'https://resonance-voice.web.app?nocache=' + Date.now(), name: 'live' }
  ];
  
  for (const site of urls) {
    const context = await browser.newContext({
      ...iphone15ProMax,
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
    });
    
    const page = await context.newPage();
    
    try {
      console.log(`Loading ${site.name}: ${site.url}`);
      await page.goto(site.url, { waitUntil: 'networkidle' });
      
      // Wait for elements to load
      await page.waitForSelector('.context', { timeout: 5000 });
      await page.waitForSelector('.mic-container', { timeout: 5000 });
      
      // Take full page screenshot
      await page.screenshot({ 
        path: `${site.name}-iphone15-full.png`,
        fullPage: true 
      });
      
      // Take viewport screenshot
      await page.screenshot({ 
        path: `${site.name}-iphone15-viewport.png`,
        fullPage: false 
      });
      
      // Get element positions for debugging
      const contextBox = await page.locator('.context').boundingBox();
      const micBox = await page.locator('.mic-container').boundingBox();
      
      console.log(`${site.name} - Context box:`, contextBox);
      console.log(`${site.name} - Mic container:`, micBox);
      
      // Check for overlap
      if (contextBox && micBox) {
        const contextBottom = contextBox.y + contextBox.height;
        const micTop = micBox.y;
        const overlap = contextBottom > micTop;
        console.log(`${site.name} - Overlap detected:`, overlap);
        if (overlap) {
          console.log(`  Overlap amount: ${contextBottom - micTop}px`);
        }
      }
      
    } catch (error) {
      console.error(`Error loading ${site.name}:`, error.message);
    }
    
    await context.close();
  }
  
  await browser.close();
  console.log('\nScreenshots saved!');
}

takeScreenshots().catch(console.error);