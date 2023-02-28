
describe ('The highest number of the array', () => {
        
    test('The highest number', () => {

        const array = [2, 88, 65, 17, 95, 39];
        const ArrayHighest = Math.max(...array);
        const expected = 95

        expect (ArrayHighest).toEqual(expected)
    })

   });