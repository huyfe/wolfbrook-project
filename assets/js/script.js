function showContentOffer() {
    let items = document.querySelectorAll(".offer__list-item"); // Get all item has class name is .offer__list-item
    items.forEach((item) => {
        item.addEventListener("click", function(e) {
            items.forEach((elem) => {
                elem.style.height = "228px";
                elem.childNodes.forEach(elemNode => {
                    if(elemNode.className == "item__description") {
                        elemNode.style.wordWrap = "unset";
                        elemNode.style.textOverflow = "ellipsis";
                        elemNode.style.whiteSpace = "nowrap";
                    }
                })
            })
            item.style.height = "346px";
            console.log(item.childNodes);
            item.childNodes.forEach((child) => {
                if(child.className == "item__description") {
                    child.style.wordWrap = "break-word";
                    child.style.textOverflow = "unset";
                    child.style.whiteSpace = "unset";

                }
            })

        })        
    })
}
showContentOffer();