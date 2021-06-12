

window.onload=pageLoad;
function pageLoad(){
	var contactForm = document.getElementById("contactForm");
	contactForm.onsubmit= validate;
}
function validate(){
	var check = true;
	var password = document.getElementById("pwd").value;

	if(password == ""){
		alert('Password is required!');
		check= false;
	}


	if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)){
		alert("Password must start with uppercase character, include only 8 characters, at least one digit, one special character, and NO white spaces");
		check=false;
	}

	return check;

}




