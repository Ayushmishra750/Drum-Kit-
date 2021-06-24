var len = document.querySelectorAll("button").length
for (i = 0 ; i<len; i++ ){
    document.querySelectorAll("button")[i].addEventListener("click" , function(){
    playmusic(this.innerHTML);
    buttonpress(this.innerHTML);
    });
}

document.addEventListener("keypress" , function(event){
    playmusic(event.key);
    buttonpress(event.key);
})

function playmusic(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play()
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play()

    
        default:
            console.log(this.innerHTML)
            break;
    }  
}



function buttonpress(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    } , 100)
    
}




