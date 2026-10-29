import {test, expect} from '@playwright/test';

test('to do assertions ', async({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    
    //page level checks
    await expect(page).toHaveTitle(/TodoMVC/);
    await expect(page).toHaveURL(/todomvc/);

    //Add to do items
    const newToDo = page.getByPlaceholder('What needs to be done?');
    for (const item of ['Milk', 'Bread', 'Tea']){
        await newToDo.fill(item);
        await newToDo.press('Enter')
    }

    //Check that To do text field is empty
    await expect(newToDo).toHaveValue('');
   

    // Count and counter text
  const items = page.getByTestId('todo-item');
  await expect(items).toHaveCount(3);
  await expect(page.getByTestId('todo-count')).toContainText('3 items left');

  // Complete the first one
  const firstCheckbox = items.first().getByRole('checkbox');
  await firstCheckbox.check();
  await expect(firstCheckbox).toBeChecked();
  await expect(items.first()).toHaveClass(/completed/);
  await expect(page.getByTestId('todo-count')).toContainText('2 items left');

  // Clear completed: "Buy milk" should disappear
  await page.getByRole('button', { name: 'Clear completed' }).click();
  await expect(page.getByText('Buy milk')).not.toBeVisible();
  await expect(items).toHaveCount(2);
});