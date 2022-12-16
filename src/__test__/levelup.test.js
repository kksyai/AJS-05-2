import Character from '../Caracter.js';

test('health not a zero', () => {
  const bowman = new Character('ivn', 'bowman', 67, 1, 20, 20);
  expect(bowman.health).not.toBe(0);
});
