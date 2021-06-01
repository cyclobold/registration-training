import { User } from '/Classes/User.js';

const regForm = document.querySelector("#registerform");

document.querySelector("#registerform button").addEventListener("click", function(){

	const firstname = regForm.firstname.value;
	const lastname = regForm.lastname.value;
	const email = regForm.email.value;
	const password = regForm.password.value;
	const username = regForm.username.value;



	const user = new User(firstname, lastname, email, password, username);



});