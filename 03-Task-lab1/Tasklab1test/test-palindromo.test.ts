import { Ispalindromo } from "../01-Palindromo";

    const palin = ['Ana lava lana'];

describe ('Is palindromo?', () => {
    
    it.each (palin)('%s should be true', (word) => {
        expect (Ispalindromo(word)).toBeTruthy()
    })
    
 
   });