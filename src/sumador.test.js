import {sumar,multiplicar} from "./sumador.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
});

describe("Multplicar", () => {
  it("deberia multiplicar dos numeros", () => {
    expect(multiplicar(3, 2)).toEqual(6);
  });
});

