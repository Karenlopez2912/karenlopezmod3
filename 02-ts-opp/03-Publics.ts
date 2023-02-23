class MyDate3 {
    public year : number ;
    public month : number ;
    public day : number ;
    constructor(year: number, month: number, day:number){
        this.year = year;
        this.month = month;
        this.day = day;
    }
    printdate2(){
        return `${this.year}/${this.month}/${this.day}`;
    }

}
const mydate3= new MyDate3(1995, 2, 15);