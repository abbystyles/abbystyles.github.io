/*home page functions*/
function showText(){
	let linkA = document.getElementById("link");
	let myText = document.getElementById("my-text");
	
	if(myText.classList.contains("hidden")){
		myText.classList.remove("hidden");
		linkA.innerHTML = "Show Less";}
		
	else{myText.classList.add("hidden");
			linkA.innerHTML = "Show More";}
	}
function showMore(){
	let linkA = document.getElementById("link2");
	let myText = document.getElementById("my-text2");
	
	if(myText.classList.contains("hidden")){
		myText.classList.remove("hidden");
		linkA.innerHTML = "Show Less";}
		
	else{myText.classList.add("hidden");
			linkA.innerHTML = "Show More";}
	}
	var total=0
/*quiz page function*/
	function showResults(){
		let question1 = document.getElementById("question1").value;
		let question2 = document.getElementById("question2").value;
		let question3 = document.getElementById("question3").value;
		let question4 = document.getElementById("question4").value;
		let resultP = document.getElementById("result");
		
		if(question1 == "Background:color name"){
			resultP.innerHTML += "Question 1 - Correct " ;
			total = total+1;}
		else{
			resultP.innerHTML += "Question 1 - Incorrect ";}
			
		if(question2 == "Add animations"){
			resultP.innerHTML += "Question 2 - Correct ";
			total=total+1;}
		else{
			resultP.innerHTML += "Question 2 - Incorrect ";}
			
		if(question3 == "Key and Value"){
			resultP.innerHTML += "Question 3 - Correct ";
			total=total+1;}
		else{
			resultP.innerHTML += "Question 3 - Incorrect ";}
		
		if(question4 == "Break Element (br)"){
			resultP.innerHTML += "Question 4 - Correct ";
			total=total+1;}
		else{
			resultP.innerHTML += "Question 4 - Incorrect ";}
			
		 document.getElementById("score").innerHTML = "Score: " + total + "/4";
		}
		
/*slideshow*/
		setInterval("changeSlide()", 5000);
function changeSlide(){
	let flowers = document.getElementById("flowers");
	let pic2 = document.getElementById("pic2");
	let pic3 = document.getElementById("pic3");
	let pic4 = document.getElementById("pic4");
	if(!document.getElementById("flowers").classList.contains("hidden")){
		flowers.classList.add("hidden");
		pic2.classList.remove("hidden");}
		
	else if(!document.getElementById("pic2").classList.contains("hidden")){
		pic2.classList.add("hidden");
		pic3.classList.remove("hidden");}
	
	else if(!document.getElementById("pic3").classList.contains("hidden")){
		pic3.classList.add("hidden");
		pic4.classList.remove("hidden");}
		
	else if(!document.getElementById("pic4").classList.contains("hidden")){
		pic4.classList.add("hidden");
		flowers.classList.remove("hidden");}
}
	