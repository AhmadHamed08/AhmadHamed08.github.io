function contentSearch(s){

    s = s.toLowerCase();
    const content = document.querySelectorAll(".content");

    for (let div of content){
        div.classList.remove("hidden");

        const title = div.children[0].innerText.toLowerCase();
        const text = div.children[1].innerText.toLowerCase();
        const class_name = div.classList[1];

        const result = title.search(s);
        const result_2 = text.search(s);
        const result_3 = class_name.search(s);

        if(result < 0 && result_2 < 0 && result_3 < 0){
            div.classList.add("hidden")
        }
        

    }

}