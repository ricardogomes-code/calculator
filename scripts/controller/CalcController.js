class CalcController{

    constructor(){
        this._currentDate;
        this._displayCalc;

        this.initialize();
    }

    initialize(){
        let displayEl = document.querySelector("#display");
        let dateEl = document.querySelector("#date");
        let timeEl = document.querySelector("#time");

        displayEl.innerHTML = "237";
        dateEl.innerHTML = "01/01/2021";
        timeEl.innerHTML = "14:01";
    }

    get currentDate(){
        return this._currentDate;
    }

    set currentDate(value){
        this._currentDate = value;
    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(value){
        this._displayCalc = value;
    }
}