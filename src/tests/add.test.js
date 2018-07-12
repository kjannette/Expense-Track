const add = (a, b) => a +b;
const generateGreeting = (name) => `Hello, ${name}`

test('adds two numbers', () => {
  const result = add(3, 4);

  if (result !== 7){
    throw new Error(`Added 3 and 4 result was ${result}, expected 7`)
  }
});

test('generates a greeting', () => {
  const greeting = generateGreeting('old man jim');

  if (greeting !== 'Hello, old man jim'){
    throw new Error(`ran the shit and didn't get the right shit expected: Hello, old man jim`)
  }
});

test('generates a greeting', () => {
  const greeting = generateGreeting('old man jim');

  expect(greeting).toBe('Hello, old man jim');
  });
