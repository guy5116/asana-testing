import { test, expect } from '@playwright/test';

test('Test Case 1:	Confirm of Tags in Implement user authentication in To Do column', async ({ page }) => {
	await page.goto('https://create-asana-like-pr-39y5.bolt.host/');

	await page.getByLabel('Username').fill('admin');
	await page.getByLabel('Password').fill('password123');

	await page.getByRole('button', { name: 'Sign in'}).click();
	//Check if login was successful
	await expect(page.getByRole('heading', { name: 'Projects'})).toBeVisible(); 

	const column = page
		.getByRole('heading', { name: 'To Do', extract: true })
		.locator("..");

	const task = column
		.getByRole('heading', { name: 'Implement user authentication', extract: true })
		.locator("..");
		

	await expect(task.locator('span', { hasText: 'Feature'})).toBeVisible();
	await expect(task.locator('span', { hasText: 'High Priority'})).toBeVisible();
});

test('Test Case 2:	Confirm Fix Navigation Bug is in the To Do, and has the tag Bug', async ({ page }) => {
	await page.goto('https://create-asana-like-pr-39y5.bolt.host/');
	
	await page.getByLabel('Username').fill('admin');
	await page.getByLabel('Password').fill('password123');

	await page.getByRole('button', { name: 'Sign in'}).click();

	await expect(page.getByRole('heading', { name: 'Projects'})).toBeVisible();


	const column = page
		.getByRole('heading', { name: 'To Do', extract: true })
		.locator("..");

	const task = column
		.getByRole('heading', { name: 'Fix navigation bug', extract: true })
		.locator("..");
		

	await expect(task.locator('span', { hasText: 'Bug'})).toBeVisible();
});

test('Test Case 3:	Confirm Design system updates is in Progress, and has design tag', async ({ page }) => {
	await page.goto('https://create-asana-like-pr-39y5.bolt.host/');
	
	await page.getByLabel('Username').fill('admin');
	await page.getByLabel('Password').fill('password123');

	await page.getByRole('button', { name: 'Sign in'}).click();

	await expect(page.getByRole('heading', { name: 'Projects'})).toBeVisible();


	const column = page
		.getByRole('heading', { name: 'In Progress', extract: true })
		.locator("..");

	const task = column
		.getByRole('heading', { name: 'Design system update', extract: true })
		.locator("..");
		

	await expect(task.locator('span', { hasText: 'Design'})).toBeVisible();
});

test('Test Case 4:	Confirm Push notification system is in the To Do, and has the tag Feature', async ({ page }) => {
	await page.goto('https://create-asana-like-pr-39y5.bolt.host/');
	
	await page.getByLabel('Username').fill('admin');
	await page.getByLabel('Password').fill('password123');

	await page.getByRole('button', { name: 'Sign in'}).click();

	await expect(page.getByRole('heading', { name: 'Projects'})).toBeVisible();

	await page
	    .getByRole('heading', { name: 'Mobile Application' })
	    .locator("..")
	    .click();

	
	const column = page
		.getByRole('heading', { name: 'To Do', extract: true })
		.locator("..");

	const task = column
		.getByRole('heading', { name: 'Push notification system', extract: true })
		.locator("..");
		

	await expect(task.locator('span', { hasText: 'Feature'})).toBeVisible();
});

test('Test Case 5:	Confirm Offline mode is in Progress, and has the tag Feature and high priority', async ({ page }) => {
	await page.goto('https://create-asana-like-pr-39y5.bolt.host/');
	
	await page.getByLabel('Username').fill('admin');
	await page.getByLabel('Password').fill('password123');

	await page.getByRole('button', { name: 'Sign in'}).click();

	await expect(page.getByRole('heading', { name: 'Projects'})).toBeVisible();

	await page
	    .getByRole('heading', { name: 'Mobile Application' })
	    .locator("..")
	    .click();

	
	const column = page
		.getByRole('heading', { name: 'In Progress', extract: true })
		.locator("..");

	const task = column
		.getByRole('heading', { name: 'Offline mode', extract: true })
		.locator("..");
		

	await expect(task.locator('span', { hasText: 'Feature'})).toBeVisible();
	await expect(task.locator('span', { hasText: 'High Priority'})).toBeVisible();
});


test('Test Case 6:	Confirm App icon design is Done, and has the tag design', async ({ page }) => {
	await page.goto('https://create-asana-like-pr-39y5.bolt.host/');
	
	await page.getByLabel('Username').fill('admin');
	await page.getByLabel('Password').fill('password123');

	await page.getByRole('button', { name: 'Sign in'}).click();

	await expect(page.getByRole('heading', { name: 'Projects'})).toBeVisible();

	await page
	    .getByRole('heading', { name: 'Mobile Application' })
	    .locator("..")
	    .click();

	
	const column = page
		.getByRole('heading', { name: 'Done', extract: true })
		.locator("..");

	const task = column
		.getByRole('heading', { name: 'App icon design', extract: true })
		.locator("..");
		

	await expect(task.locator('span', { hasText: 'Design'})).toBeVisible();
});
