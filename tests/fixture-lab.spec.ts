import { test, expect } from '../fixtures/lab';

test('lab 1: the order', async ({ greeting }) => {
  console.log('  [test] body runs, greeting =', greeting);
});

test('lab 2: one fixture built from another', async ({ shout }) => {
  console.log('  [test] body runs, shout =', shout);
});

test('lab 3: cleanup runs even when the test fails', async ({ greeting }) => {
  console.log('  [test] about to fail');
  expect(1).toBe(2);
});