function createParagraph() {
    let paragraphs = document.getElementsByTagName('p');

    if (paragraphs.length >= 10) {
        for (let i = paragraphs.length - 1; i >= 0; --i) {
            paragraphs[i].remove();
        }
        return;
    }

    let p = document.createElement("p");
    p.innerHTML = "paragraph";
    document.body.appendChild(p);

}





