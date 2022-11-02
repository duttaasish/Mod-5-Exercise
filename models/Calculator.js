class Calculator {
    constructor() {
      this.id = Math.random();
    }
    //private function for use within this class which logs to the console
    #log = (value) => {
      console.log(`[Calculator:${this.id}]: ${value}`);
    };
  
    add(num1, num2) {
      const value = num1 + num2;
      this.#log(value); 
      return value; 
    }
  
    subt(num1, num2) {
      const value = num1 - num2;
      this.#log(value); 
      return value; 
    }
  
    mult(num1, num2) {
        const value = num1 * num2;
        this.#log(value); 
        return value; 
    }
  
    division(num1, num2) {
  
      if(num2 == 0){
        console.log("Unable to divide by 0")
      } else{
        const value = num1 / num2;
        this.#log(value); 
        return value;
      }
    }
  }
  
  module.exports=Calculator;
  

  