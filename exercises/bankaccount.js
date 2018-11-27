

class Account{
	constructor(){
		//store the amount of money in the account
		this.account = 0;
	}
	add( amount ){
		//add money to the amount stored in the account

		//takes in an amount
		return this.account +=amount
		//adds it to the existing amount
		//returns the new amount in the account
	}
	remove( amount ){
		//removes funds from an account

		//check if the amount to withdraw is more than the account
		//if more, only withdraw the amount in the account, not more
		//if less, withdraw the amount specified
		//return the amount actually withdrawn
		if(amount > this.account){
			amount = this.account
			this.account-=amount
			return amount;
		}
		else{
			this.account-=amount
			return amount;
		}
		
	}
	getAmount(){
		return this.account;
		//returns the amount in the account
	}
}