window.onload = function () {
    let paragraph = document.getElementById("paragraphs");
    let link = document.getElementById("links");
    let div = document.getElementById("divD");

    paragraph.onclick = function () {
        let paragraphs = document.getElementsByTagName("p");
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.border = "1px solid green";
        }
    }
    link.onclick = function () {
        let links = document.getElementsByTagName("a");
        for (let i = 0; i < links.length; i++) {
            links[i].style.border = "1px solid green";
        }
    }
    div.onclick = function () {
        let divs = document.getElementById("test_div");
        divs.style.border = "1px solid red";
    }
}
