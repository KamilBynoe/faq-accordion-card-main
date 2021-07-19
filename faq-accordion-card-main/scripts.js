

function toggleFunc(titleElement){
    const title = titleElement.children[0];
    const arrow = title.children[0];
    const graf = titleElement.children[1];

    graf.style.display == "block" ? graf.style.display = "none": graf.style.display = "block"
    arrow.classList.toggle("flipped")
    

    
}