export class User{

	firstname = null;
	lastname = null;
	email = null;
	password = null;
	username = null;


	constructor(firstname, lastname, email, password, username){

		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
		this.username = username;


		toastr.success(`Congrats ${this.firstname} ${this.lastname}`);


	}



}