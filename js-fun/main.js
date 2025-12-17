
document.querySelector("nav").addEventListener("click", handleClick);


function handleClick(event){

    console.log(event.target.dataset.page)

    if(event.target.dataset.type == "nav") return console.log( "nav clicked nothing to do...")

    hideAll();
    document.querySelector(event.target.dataset.page).classList.toggle("hidden");



}


function hideAll(){
    let divs = document.querySelectorAll(".content");
    console.log(divs);
    divs.forEach(element => {
      element.classList.add("hidden");
    });
}