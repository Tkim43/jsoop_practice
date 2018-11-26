
class Calculator{
	constructor(){
		//takes in nothing
		//make storage for the operator and the numbers
		this.operator = null;
		this.number = null;
		this.equationArray = [];
	}
	loadOperator( operator ){
		//adds the operator to the next calculation
		debugger;
		this.equationArray.push(this.operator)
		//takes in the operator
		//checks if it is a valid operation (+-*/)
			//save the op to the constructor storage
			//return true
		//or return false if not the right operator
		if(operator === "+" || operator === "-" || operator === "/" || operator === "*"){
			this.operator = operator
			return true;
		}
		else{
			return false;
		}


	}
	loadNumber( number ){
		debugger;
		//takes in a number and stores it as one of the numbers to perform math on
		//takes in 1 number
		//checks if it is actually a number and if we have fewer than 2 numbers
		//if it is a number, and we have 2 or fewer numbers, store it
			//return the number of numbers stored
		//otherwise return false (too many numbers stored)
		if(isNaN(number)){
			return
		}
		if(!isNaN(number) && this.equationArray.length < 3){
			return number
		}
		else{
			return false;
		}
		
	}
	calculate(num1,num2,operator){
		debugger;
		//calculate the result of the stored numbers and operator
		//takes in nothing
		//calculates with the operator and 2 numbers
		//clears out the stored numbers
		//returns the calculated result
	const num = parseFloat(num1);
    const num02 = parseFloat(num2);
        switch (operator) {
            case "+":
                value = num + num02;
                break;
            case "-":
                value = num - num02;
                break;
            case "*":
                value = num * num02;
                break;
            case "×":
                value = num * num02;
                break;
            case "x":
                value = num * num02;
                break;
            case "/":
                value = num / num02;
                break;
            case "÷":
                value = num / num02;
        }
        if(value % 2 === 0) {
            return value;
        }
        else{
            return value.toFixed(5);
		}

		var newResult = do_math(equationArray[0], equationArray[2], equationArray[1]);
            equationArray.splice(0, 3, newResult);
	}

}