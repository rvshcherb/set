import Team from '../Team';
import Character from '../Character';

const vasiliy = new Character('vasiliy', 22);
const innokentiy = new Character('innokentiy', 74);
const anatoliy = new Character('anatoliy', 61);

test('Team "add()" method test', () => {
  const romashki = new Team();
  romashki.add(vasiliy);
  expect(romashki.members).toContain(vasiliy);
});

test('Team "add()" method Error test', () => {
  const romashki = new Team();
  romashki.add(vasiliy);
  expect(() => romashki.add(vasiliy)).toThrow('Данный персонаж уже добавлен');
});

test('Team "addAll()" method test', () => {
  const romashki = new Team();
  romashki.addAll(vasiliy, innokentiy, anatoliy, vasiliy, innokentiy, anatoliy);
  expect(Array.from(romashki.members)).toEqual([vasiliy, innokentiy, anatoliy]);
});

test('Team "toArray()" method test', () => {
  const romashki = new Team();
  romashki.addAll(vasiliy, innokentiy, anatoliy);
  expect(romashki.toArray()).toEqual([vasiliy, innokentiy, anatoliy]);
});
