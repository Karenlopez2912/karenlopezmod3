class MyDategetter {
    private year : number ;
    public month : number ;
    public day : number ;
    constructor(year: number, month: number, day:number){
        this.year = year;
        this.month = month;
        this.day = day;
    }
    printdate(){
        return `${this.year}/${this.month}/${this.day}`;
    }

    get getYear(){
        return this.year;

    }
    set setYear(newYear: number){
        this.year = newYear;
}
}
  const mydate5 = new MyDategetter(1995, 2, 15);
  mydate5.setYear = 15;
  
