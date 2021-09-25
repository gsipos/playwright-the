import { the } from './the';

describe('playwright-the', () => {
  it('button with a label', () => expect(the('button').text('Label')).toBe('button:text("Label")'));

  it('button that has a text', () => expect(the('button').hasText('Label')).toBe('button:has-text("Label")'));

  it('button below a div', () => expect(the('button').below('div')).toBe('button:below(div)'));

  it('button above a div', () => expect(the('button').above('div')).toBe('button:above(div)'));

  it('button left of a div', () => expect(the('button').leftOf('div')).toBe('button:left-of(div)'));

  it('button right of a div', () => expect(the('button').rightOf('div')).toBe('button:right-of(div)'));

  it('button inside a div', () => expect(the('button').inside('div')).toBe('div button'));

  it('simple text selector', () => expect(the.text('Label')).toBe(':text("Label")'));
});
