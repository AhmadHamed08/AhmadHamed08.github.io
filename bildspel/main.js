imgZoomChange(5);

function imgZoomChange(time){
    time = time * 1000;
    const images = ["a.jpg", "b.jpg", "c.jpg"];
    const img = document.querySelector(".imgBox img");

    let k = 0;

    setInterval(function(){
        if(k == 2) k = -1;
        k += 1;

        img.src= images[k];

    }, time)

}