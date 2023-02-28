test('Array of strings', () =>{
    const h= "Hello";
    const splitted = h.split("",5);
expect (splitted).toEqual(['H','e','l','l','o']);
})