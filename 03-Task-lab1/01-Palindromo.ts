export function Ispalindromo(word: string): boolean {
    const formattedword: string = word.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
        .replace(/[\W]/g,'');
    for(let i = 0; i < formattedword.length / 2; i++){
        if (formattedword[i] !== formattedword[formattedword.length - 1 - i]){    
        return false;
    }
}
return true;

}

console.log(Ispalindromo("Ana Lava lana"))