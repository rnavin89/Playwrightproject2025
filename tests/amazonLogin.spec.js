const { test, expect } = require('@playwright/test');

// Test scenario: Search Amazon on Google, go to Amazon, login, and validate login

test('Google search Amazon, login to Amazon, and validate login', async ({ page }) => {
  // Go directly to Amazon.in
  await page.goto('https://www.amazon.in');

  // Wait for Amazon home page
  await page.waitForLoadState('domcontentloaded');
  //await expect(page).toHaveURL(/amazon\.in/);

  // Click on Sign In
  await page.locator('#nav-link-accountList, a:has-text("Sign in")').first().click();

  // Fill in email
  await page.locator('input[type="email"]').fill('rnavin89@gmail.com');
  await page.locator('input[type="submit"]').click();

  // Fill in password
  await page.locator('input[type="password"]').fill('Naveen@1989');
  await page.locator('input[type="submit"]').click();

  // Validate login by checking for 'Hello, Navin' or account menu
  const accountMenu = page.locator('#nav-link-accountList-nav-line-1, span:has-text("Navin")');
  await expect(accountMenu).toBeVisible({ timeout: 15000 });
});
