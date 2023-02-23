class MyDate4 {
    private year : number ;
    public month : number ;
    public day : number ;
    constructor(year: number, month: number, day:number){
        this.year = year;
        this.month = month;
        this.day = day;
    }
    private printdate4(){
        return `${this.year}/${this.month}/${this.day}`;
    }

}
const mydate4= new MyDate4(1995, 2, 15);