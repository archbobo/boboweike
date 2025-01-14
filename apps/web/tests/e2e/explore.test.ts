import { test, expect } from '@playwright/test';

test('explore page', async ({ page }) => {
  await page.goto('/explore');

  await expect(page.getByRole('heading', { name: '波波微课 Explore' })).toBeVisible();
});
