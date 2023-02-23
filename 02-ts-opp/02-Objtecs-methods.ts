class MyDate2 {
    year : number ;
    month : number ;
    day : number ;
    constructor(year: number, month: number, day:number){
        this.year = year;
        this.month = month;
        this.day = day;
    }
    printdate(){
        return `${this.year}/${this.month}/${this.day}`;
    }

}
const mydate2= new MyDate2(1995, 2, 15);
console.log(mydate2.printdate());