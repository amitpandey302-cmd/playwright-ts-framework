import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await expect(page.getByRole('textbox', { name: 'What needs to be done?' })).toBeVisible();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Milk');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Bread');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'Milk' }).getByLabel('Toggle Todo').check();
  await page.getByRole('link', { name: 'Completed' }).click();
  await expect(page.getByTestId('todo-title')).toBeVisible();
  await expect(page.getByTestId('todo-title')).toContainText('Milk');
  await expect(page.getByRole('textbox', { name: 'What needs to be done?' })).toBeEmpty();
});