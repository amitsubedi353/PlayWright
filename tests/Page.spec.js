// Import the Playwright library
const { test, expect } = require('@playwright/test');

// Define the test
test.describe('Home Page Tests', () => {
  // Test case: Navigate to the homepage and verify the title
  test('Verify homepage title and header', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('https://example.com'); // Replace with your homepage URL

    // Check the page title
    const title = await page.title();
    expect(title).toBe('Example Domain'); // Replace with your expected title

    // Verify the header text
    const header = await page.locator('h1');
    await expect(header).toHaveText('Example Domain'); // Replace with your expected header text
  });

  // Test case: Verify a button or link functionality
  test('Check navigation link/button', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('https://example.com');

    // Click a button or link
    await page.click('a:has-text("More information")'); // Replace with the selector for your button/link

    // Verify navigation
    await expect(page).toHaveURL('https://www.iana.org/domains/example'); // Replace with the expected URL
  });
});
