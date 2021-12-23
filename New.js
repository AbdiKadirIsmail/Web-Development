function promptPopup(event){
	event.preventDefault();
	var x=document.forms["myForm"]["fname"].value;
	var i=document.forms["myForm"]["sname"].value;
	var a=document.forms["myForm"]["date"].value;
	var b=document.forms["myForm"]["email"].value;
	var j=document.forms["myForm"]["rate"].value;
	var z=document.forms["myForm"]["feedback"].value;
	if (x == "") {
		alert("");
	} else {
		alert(
		"First Name is: " + x + " . \n" +
		"Surname is: " + i + " .\n"+
		"Your Email Address is: " + b + " .\n"+
		"The date is: " + a + " .\n"+
		"You have rated: " + j + " out of 5.\n"+
		"Your Comment: " + z + " ."
		);
	}
}