function soma(x, y) {
  return x + y;
}

test('Should return 10 if I pass 5 and 5 to soma function', () => {
  const result = soma(5, 5);

  expect(result).toBe(10);
});
