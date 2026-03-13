function contentSearch(s){

    s = s.toLowerCase();
    const content = document.querySelectorAll(".content");

    for (let div of content){
        div.classList.remove("hidden");
        const title = div.children[0].innerText.toLowerCase();

        const result = title.search(s);

        if(result < 0){
            div.classList.add("hidden")
        }

    }

}