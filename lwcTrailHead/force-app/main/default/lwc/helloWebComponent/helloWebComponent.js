import { LightningElement } from 'lwc';

export default class HelloWebComponent extends LightningElement {
    greeting = 'TrailBlaizer';

    handleGreetingChange(event) {
        this.greeting = event.target.value;
    }
  
    

    get capitalizedGreeting() {
        return `Hello ${this.greeting.toUpperCase()}!`;
    }

    get currentDate(){
        let currentDates = new Date();
        return  "Last Sync: " + "/"
                + (currentDates.getMonth()+1)  + "/" 
                + currentDates.getFullYear() + " - "  
                + currentDates.getHours() + ":"  
                + currentDates.getMinutes() + ":" 
                + currentDates.getSeconds();
    }
}