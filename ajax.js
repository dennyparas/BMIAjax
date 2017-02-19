function calculateBMI() {
	

	var height = document.getElementById("height").value;
	var weight = document.getElementById("weight").value;
	if(height%1>=0  && weight%1>=0) 
	{
		var xmlhttp = new XMLHttpRequest();
		var url = "http://localhost/json_tutorial/bmiV2/calculate-api.php";
		
		var jsObject = {ht:height, wt:weight};
		var data = JSON.stringify(jsObject);
	
		
		xmlhttp.open("POST" ,url , true);
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		var dan = xmlhttp.send("input=" + data);
		
		xmlhttp.onreadystatechange = function() 
		{
			
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
			{
				var output = xmlhttp.responseText;
				alert(output);	
				var jsOuput = JSON.parse(output);
				document.getElementById("result").innerHTML = jsOuput.bmi + "<br>" +  jsOuput.message;
			}
		}
	
	} else {
		alert("invalid input");
	}
}