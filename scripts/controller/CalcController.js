class CalcController {

    constructor() {
        this._locale = "pt-BR";
        this._currentDate;

        this._displayEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#date");
        this._timeEl = document.querySelector("#time");

        this._operations = [];

        this.initialize();

        this.initButtons();
    }

    initButtons(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
        
        buttons.forEach(btn=>{
            btn.addEventListener("click", e=>{
                let text = btn.className.baseVal.replace("btn-", "");
                this.execBtn(text);
            })
        })
    }

    execBtn(text){
        switch(text){
            case "ac":
                this.clearAll();
                break;
            case "ce":
                this.clearEntry();
                break;

            case "0":
            case "1":
            case "2": 
            case "3":
            case "4":
            case "5": 
            case "6":
            case "7":
            case "8":   
            case "9":
                this.addOperation(text);
                break;
            case "porcento":
                console.log(text);
                break;
            case "divisao":
                console.log(text);
                break;
            case "multiplicacao":
                console.log(text);
                break;
            
            case "subtracao":
                console.log(text);
                break;
            case "soma":
                console.log(text);
                break;
            case "igual":
                console.log(text);
                break;
            case "ponto":
                console.log(text);
                break;
            default:
                this.setError();
        }
    }

    addOperation(value){
        this._operations.push(value);
        console.log(this._operations);
    }

    clearAll(){
        this._operations = [];
    }

    clearEntry(){
        this._operations.pop;
    }

    setError(){
        this.displayResult = "Error";
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