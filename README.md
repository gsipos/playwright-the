[![build](https://github.com/gsipos/playwright-the/actions/workflows/ci.yml/badge.svg)](https://github.com/gsipos/playwright-the/actions/workflows/ci.yml)
[![GitHub license](https://img.shields.io/github/license/gsipos/playwright-the?style=plastic)](https://github.com/gsipos/playwright-the/blob/main/LICENSE)

# playwright-the

`playwright-the` makes it easier to work with [Playwright](https://playwright.dev/)'s [Layout selectors](https://playwright.dev/docs/selectors#selecting-elements-based-on-layout).

## Installation

```sh
npm i playwright-the
```

## Usage

### Use with playwright

```typescript
import { chromium } from 'playwright';
import { the } from 'playwright-the';

const example = async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await browser.newPage();
  await page.goto('https:/example.com');

  const cancelButton = the('button').hasText('Cancel'); //without the: 'button:has-text("Cancel")'
  const saveButton = the('button').hasText('Save'); //without the: 'button:has-text("Save")'
  await page.locator(the(saveButton).rightOf(cancelButton)).click(); //without the: `${saveButton}:right-of(${cancelButton})`

  await browser.close();
};
```

### Examples

#### `:text`

```typescript
the('button').text('OK');
```

#### `:has-text`

```typescript
the('button').hasText('OK');
```

#### `:below`

```typescript
the('button').below('div');
```

#### `:above`

```typescript
the('button').above('div');
```

#### `:right-of`

```typescript
the('button').rightOf('div');
```

#### `:left-of`

```typescript
the('button').leftOf('div');
```

#### `:near`

```typescript
the('button').near('div');
```

#### inside selector

```typescript
the('button').inside('div'); // equals to the "div button" CSS selector
```

#### simple text selector

```typescript
the.text('OK'); // equals to the ':text("OK")' selector
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
