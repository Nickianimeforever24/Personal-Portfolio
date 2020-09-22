const nickiHamilton = document.querySelector("#picResize");
const vrGames = document.querySelector("#gameBuster");
const siteSearch = document.querySelector("#websiteSearch");

function showAnotherMePic() 
{
    nickiHamilton.src = "https://pbs.twimg.com/media/Ehzj3w7VgAMZbk5.jpg";
}
function showAnotherGamePic()
{
    vrGames.src = "https://media.pocketgamer.com/FCKEditorFiles/Zombieville(1).jpg";
}
function showAnotherWebsitePic()
{
    siteSearch.src = "https://www.branex.com/wp-content/uploads/2017/10/fangoria.jpg";
}


function showOriginalMePic()
{
    nickiHamilton.src = "https://pbs.twimg.com/profile_images/1228908593690415104/_8dP2HBo.jpg";
}
function showOriginalGamePic()
{
    vrGames.src = "https://www.clipartkey.com/mpngs/m/15-151860_xbox-controller-clipart-at-getdrawings-game-controller-cartoon.png";
}
function showOriginalWebsitePic()
{
    siteSearch.src = "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/112246660/original/b4f5ccb5fed3f11346863e5d0cdc5003cb058c81/draw-flat-design-or-detailed-illustrations.png";
}


nickiHamilton.addEventListener("mouseover", showAnotherMePic);
nickiHamilton.addEventListener("mouseout", showOriginalMePic);
vrGames.addEventListener("mouseover", showAnotherGamePic);
vrGames.addEventListener("mouseout", showOriginalGamePic);
siteSearch.addEventListener("mouseover", showAnotherWebsitePic);
siteSearch.addEventListener("mouseout", showOriginalWebsitePic);

const redBox = document.querySelector("#littleRedBox");

// H.W. change the function to the click function can move it to the left or right side.
function addAClass()
{
   redBox.classList.add("whenHover")
   

}

redBox.addEventListener("click", addAClass)