function hitung( ){
	// body...
	var s=(new Date()).getSeconds();
	var m=(new Date()).getMinutes();
	var x=1000;
	var a = Math.floor(Math.random() * x) + 6;
	var b = a + s;
	var c = b * m - a;
	var a1 = (a % 6) + 1;
	var b1 = (b % 6) + 1;
	var c1 = (c % 6) + 1;
	document.getElementById("langkah1").innerHTML = a1;
	document.getElementById("langkah2").innerHTML = b1;
	document.getElementById("langkah3").innerHTML = c1;
}
