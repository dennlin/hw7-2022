var video;

window.addEventListener("load", function() {

	console.log("Good job opening the window")
    video =  document.getElementById('player1');
    video.autoplay = false;
    video.loop = false;

});

document.querySelector("#play").addEventListener("click", function() {

	console.log("Play Video");
    video.play();
    video.volume = document.getElementById("#slider").value / 100;
    document.getElementById("#volume").innerHTML = document.getElementById("#slider").value + '%';
});

document.getElementById("pause").addEventListener("click", function() {

	console.log("Pause Video");
    video.pause();  
});

document.getElementById("slower").addEventListener("click", function() {

	console.log("Slow Down Video");
    video.playbackRate = video.playbackRate * 0.9;
    console.log("Speed is: ", video.playbackRate);
});

document.getElementById("faster").addEventListener("click", function() { 

	console.log("Speed Up Video");
    video.playbackRate = video.playbackRate/0.9;
    console.log("Speed is: ", video.playbackRate);
});

document.getElementById("skip").addEventListener('click', function () {

	console.log("Skip Ahead");
    video.currentTime = video.currentTime + 10;

    if (video.currentTime >= video.duration){

		video.currentTime = 0;
	}

    console.log("New time: ", video.currentTime);
});

document.getElementById("slider").addEventListener('input', function () {
	
    video.volume = document.getElementById("#slider").value / 100;
    document.getElementById("#volume").innerHTML = document.getElementById("#slider").value + '%';
});

document.getElementById("vintage").addEventListener('click', function () {

	console.log("Oldschool Video");
    video.classList.add("oldSchool");
});

document.getElementById("orig").addEventListener('click', function () {

	console.log("Original Video");
    video.classList.remove("oldSchool");
});

document.getElementById("mute").addEventListener('click', function () { 
    
	if (video.muted){

		console.log("Unmute Video");
        video.muted = false;
        document.getElementById("mute").innerHTML = "Mute";
    } 
    
	else{

		console.log("Mute Video");
        video.muted = true;
        document.getElementById("mute").innerHTML = "Unmute";
    }
});

