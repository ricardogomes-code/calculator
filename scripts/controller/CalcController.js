class CalcController {

    constructor() {
        this._locale = "pt-BR";
        this._currentDate;

        this._displayEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#date");
        this._timeEl = document.querySelector("#time");

        this.initialize();

        this.initButtons();
    }

    initButtons(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
        
        buttons.forEach(btn=>{
            btn.addEventListener("click", e=>{
                console.log(btn.className.baseVal.replace("btn-", ""));
            })
        })
    }
    
    initialize() {
        this.getDisplayDateTime();

        setInterval(() => {
            this.getDisplayDateTime();
        }, 1000);
    }

    getDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get currentDate() {
        return new Date();
    }

    set currentDate(value) {
        this._currentDate.innerHTML = value;
    }

    get displayResult() {
        return this._displayEl.innerHTML;
    }

    set displayResult(value) {
        this._displayEl.innerHTML = value;
    }

    get displayDate() {
        return this._dateEl.innerHTML;
    }

    set displayDate(value) {
        this._dateEl.innerHTML = value;
    }

    get displayTime() {
        return this._timeEl.innerHTML;
    }

    set displayTime(value) {
        this._timeEl.innerHTML = value;
    }
}