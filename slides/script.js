let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 2000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;

}

function prevImage() {
    count--;
    if (count < 1) {
        count = 4;
    }
    document.getElementById("radio" + count).checked = true;
}

document.querySelector(".btn-next").addEventListener("click", nextImage);
document.querySelector(".btn-prev").addEventListener("click", prevImage);
