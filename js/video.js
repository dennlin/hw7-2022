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
    video.volume = document.querySelector("#slider").value / 100;
    document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + '%';
});

document.querySelector("#pause").addEventListener("click", function() {

	console.log("Pause Video");
    video.pause();  
});

document.querySelector("#slower").addEventListener("click", function() {

	console.log("Slow Down Video");
    video.playbackRate = video.playbackRate * 0.9;
    console.log("PlayBack Rate: ", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() { 

	console.log("Speed Down Video");
    video.playbackRate = video.playbackRate/0.9;
    console.log("PlayBack Rate: ", video.playbackRate);
});

document.querySelector("#skip").addEventListener('click', function () {

	console.log("Skip 10 Seconds");
    video.currentTime = video.currentTime + 10;

    if (video.currentTime >= video.duration){

		video.currentTime = 0;
	}

    console.log("Current time: ", video.currentTime);
});

document.querySelector("#slider").addEventListener('input', function () {

    video.volume = document.querySelector("#slider").value / 100;
    document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + '%';
});

document.querySelector("#vintage").addEventListener('click', function () {

	console.log("Oldschool Video");
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener('click', function () {

	console.log("Original Video");
    video.classList.remove("oldSchool");
});

document.querySelector("#mute").addEventListener('click', function () { 
    
	if (video.muted){

		console.log("Unmute");
        video.muted = false;
        document.querySelector("#mute").innerHTML = "Mute";
    } 
    
	else{
		
		console.log("Mute");
        video.muted = true;
        document.querySelector("#mute").innerHTML = "Unmute";
    }
});

