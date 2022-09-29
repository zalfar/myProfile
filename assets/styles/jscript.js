function chooseEmoji(){
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event){
    if(!event.target.matches('.dropbtn')){
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for(let i=0; i<dropdowns.length;i++){
            let openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}

function showHappy(){
    let image = document.getElementById("image");
    image.src = "assets/image/happy.png" 
    document.getElementById("btnHappy");
}
function showSad(){
    let image = document.getElementById("image");
    image.src = "assets/image/sad.jpg" 
    document.getElementById("btnSad");
}
function showAngry(){
    let image = document.getElementById("image");
    image.src = "assets/image/angry.png" 
    document.getElementById("btnAngry");
}