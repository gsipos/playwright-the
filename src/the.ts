const text = (txt: string) => `:text("${txt}")`;
const hasText = (txt: string) => `:has-text("${txt}")`;
const below = (subSelect: string) => `:below(${subSelect})`;
const above = (subSelect: string) => `:above(${subSelect})`;
const leftOf = (subSelect: string) => `:left-of(${subSelect})`;
const rightOf = (subSelect: string) => `:right-of(${subSelect})`;
const near = (subSelect: string) => `:near(${subSelect})`;
const inside = (subSelect: string) => subSelect + ' ';

const theElement = (element = '') => ({
  text: (txt: string) => element + text(txt),
  hasText: (txt: string) => element + hasText(txt),
  below: (subSelect: string) => element + below(subSelect),
  above: (subSelect: string) => element + above(subSelect),
  leftOf: (subSelect: string) => element + leftOf(subSelect),
  rightOf: (subSelect: string) => element + rightOf(subSelect),
  near: (subSelect: string) => element + near(subSelect),
  inside: (subSelect: string) => inside(subSelect) + element,
});

interface LayoutHelper {
  text: (txt: string) => string;
  hasText: (txt: string) => string;
  below: (subSelect: string) => string;
  above: (subSelect: string) => string;
  rightOf: (subSelect: string) => string;
  leftOf: (subSelect: string) => string;
  near: (subSelect: string) => string;
  inside: (subSelect: string) => string;
}

interface TheFunction extends LayoutHelper {
  (element: string): LayoutHelper;
}

export const the: TheFunction = Object.assign(theElement, {
  text,
  hasText,
  below,
  above,
  leftOf,
  rightOf,
  near,
  inside,
});

export default the;
