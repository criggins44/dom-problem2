function myFunction(){
	const link = document.getElementById("site").getAttribute("href");
//creat a constant variable to hold the value of the href attribute of the link

	document.getElementById("demo").innerHTML = link;
//puts the attribute identified in the variable in the "demo" element
//new element is displayed when buttun is clicked
}