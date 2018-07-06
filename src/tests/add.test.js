const add = (a, b) => a +b;
const generateGreeting = (name) => `Hello, ${name}`

test('adds two numbers', () => {
  const result = add(3, 4);

  if (result !== 7){
    throw new Error(`Added 3 and 4 result was ${result}, expected 7`)
  }
});

test('generates a greeting', () => {
  const greeting = generateGreeting('nigger jim');

  if (greeting !== 'Hello, nigger jim'){
    throw new Error(`ran the shit and didn't get the right shit expected: Hello, nigger jim`)
  }
});

test('generates a greeting', () => {
  const greeting = generateGreeting('nigger jim');

  expect(greeting).toBe('Hello, nigger jim');
  });
