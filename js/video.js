var video;

window.addEventListener("load", function() {

	console.log("Good job opening the window")
    video =  document.getElementById('player1');
    video.autoplay = false;
    video.loop = false;

});

document.querySelector("#play").addEventListener("click", function() {

    video.play();
    video.volume = document.querySelector("#slider").value / 100;
    document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + '%';
});

document.querySelector("#pause").addEventListener("click", function() {

    video.pause();  
});

document.querySelector("#slower").addEventListener("click", function() {

    video.playbackRate = video.playbackRate * 0.9;
    console.log("PlayBack Rate: ", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() { 

    video.playbackRate = video.playbackRate/0.9;
    console.log("PlayBack Rate: ", video.playbackRate);
});

document.querySelector("#skip").addEventListener('click', function () {

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
	
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener('click', function () {

    video.classList.remove("oldSchool");
});

document.querySelector("#mute").addEventListener('click', function () { 
    
	if (video.muted){

        video.muted = false;
        document.querySelector("#mute").innerHTML = "Mute";
    } 
    
	else{
        video.muted = true;
        document.querySelector("#mute").innerHTML = "Unmute";
    }
});

