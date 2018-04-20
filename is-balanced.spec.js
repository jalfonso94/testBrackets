const test = require('ava');
const isBalanced = require('./is-balanced');

test('Brackets {{}} is balanced', (t) => {
  // Prepare
  const str = '{{}}';
  const expected = true;

  // Execute
  const result = isBalanced(str);

  // Assert
  t.is(result, expected);
});

test('Brackets (([{[[{}]]}])) is balanced', (t) => {
  // Prepare
  const str = '(([{[[{}]]}]))';
  const expected = true;

  // Execute
  const result = isBalanced(str);

  // Assert
  t.is(result, expected);
});

test('Brackets {{[}} is not balanced', (t) => {
  // Prepare
  const str = '{{[}}';
  const expected = false;

  // Execute
  const result = isBalanced(str);

  // Assert
  t.is(result, expected);
});

test('Brackets (([{[[{)}]]}])) is not balanced', (t) => {
  // Prepare
  const str = '(([{[[{)}]]}]))';
  const expected = false;

  // Execute
  const result = isBalanced(str);

  // Assert
  t.is(result, expected);
});

test('Brackets {{}[]} is balanced', (t) => {
  // Prepare
  const str = '{{}[]}';
  const expected = true;

  // Execute
  const result = isBalanced(str);

  // Assert
  t.is(result, expected);
});

test('Brackets (([{[[{}]][{}{[]}()]}])) is balanced', (t) => {
  // Prepare
  const str = '(([{[[{}]][{}{[]}()]}]))';
  const expected = true;

  // Execute
  const result = isBalanced(str);

  // Assert
  t.is(result, expected);
});

test('Brackets {{[}][]} is not balanced', (t) => {
  // Prepare
  const str = '{{[}][]}';
  const expected = false;

  // Execute
  const result = isBalanced(str);

  // Assert
  t.is(result, expected);
});

test('Brackets (([{[[{)}][{]({)}]}])) is not balanced', (t) => {
  // Prepare
  const str = '(([{[[{)}][{]({)}]}]))';
  const expected = false;

  // Execute
  const result = isBalanced(str);

  // Assert
  t.is(result, expected);
});
