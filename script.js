const picture = document.querySelector("#picResize");
var pictureUrl = picture.src;
console.log(pictureUrl);

function showAnotherPic() 
{
    // alert("hey it's me");
    picture.src = "https://pbs.twimg.com/media/Ehzj3w7VgAMZbk5.jpg";
    
}

picture.addEventListener("mouseover", showAnotherPic);
// Add another EventListener
// if statement  (w3schools learn "mouseover" and lose focus or mouseaway) 