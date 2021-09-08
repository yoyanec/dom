document.addEventListener('DOMContentLoaded', () => {
	var hypoDate = new Date("Aug 31, 2021 23:59:59").getTime();
	var revizieDate = new Date("Oct 31, 2021 23:59:59").getTime();
	var kolaudaciaDate = new Date("May 31, 2022 23:59:59").getTime();	
	var now = new Date().getTime();
  
	var hypo = new FlipDown(hypoDate/1000, "hypo", {
		headings: ["Dni", "Hodiny", "Minúty", "Sekundy"],
	}).start()
	.ifEnded(() => {
		var hypoDistance = hypoDate - now;
		var hypoOverDate = now + (hypoDistance * -1);
		console.log(hypoDistance);
		var hypoOver = new FlipDown(hypoOverDate/1000, "hypoOver", {
			headings: ["Dni", "Hodiny", "Minúty", "Sekundy"],
		}).start();
		var hypo_div = document.getElementById("hypo_div");
		var hypoOver_div = document.getElementById("hypoOver_div");
		hypo_div.style.display = "none";
		hypoOver_div.style.display = "block";
	});
	
	var revizie = new FlipDown(revizieDate/1000, "revizie", {
		headings: ["Dni", "Hodiny", "Minúty", "Sekundy"],
		}).start()
		.ifEnded(() => {
		var revizieDistance = revizieDate - now;
		var revizieOverDate = now + (revizieDistance * -1);
		console.log(revizieDistance);
		var revizieOver = new FlipDown(revizieOverDate/1000, "revizieOver", {
			headings: ["Dni", "Hodiny", "Minúty", "Sekundy"],
		}).start();
		var revizie_div = document.getElementById("revizie_div");
		var revizieOver_div = document.getElementById("revizieOver_div");
		revizie_div.style.display = "none";
		revizieOver_div.style.display = "block";
	});
	
	var kolaudacia = new FlipDown(kolaudaciaDate/1000, "kolaudacia", {
		headings: ["Dni", "Hodiny", "Minúty", "Sekundy"],
	}).start()
	.ifEnded(() => {
		var kolaudaciaDistance = kolaudaciaDate - now;
		var kolaudaciaOverDate = now + (kolaudaciaDistance * -1);
		console.log(kolaudaciaDistance);
		var kolaudaciaOver = new FlipDown(kolaudaciaOverDate/1000, "kolaudaciaOver", {
			headings: ["Dni", "Hodiny", "Minúty", "Sekundy"],
		}).start();
		var kolaudacia_div = document.getElementById("kolaudacia_div");
		var kolaudaciaOver_div = document.getElementById("kolaudaciaOver_div");
		kolaudacia_div.style.display = "none";
		kolaudaciaOver_div.style.display = "block";
	});

});
