import { Ispalindromo } from "../01-Palindromo";

    const palin = ['Ana lava lana'];
    const nopalin = ['hola mundo'];

describe ('Is palindromo?', () => {
    
    it.each (palin)('%s should be true', (word) => {
        expect (Ispalindromo(word)).toBeTruthy()
    })
    it.each (nopalin)('%s should be false', (word) => {
        expect (Ispalindromo(word)).toBeFalsy()
    })
 
   });