
// варианты реализации


// window.onload = function () {
//     let paragraph = document.getElementsByTagName("p");
//     for (let i = 0; i < paragraph.length; i++) {
//         paragraph[i].innerHTML = "РАRАGRAРН";
//
//     }
// }


let Module = {};
Module.changeText = function () {
    let paragraph = document.getElementsByTagName("p");
    for (let i = 0; i < paragraph.length; i++) {
        paragraph[i].innerHTML = "РАRАGRAРН";
    }
}
window.onload = function (){
    Module.changeText();
}


// (function () {
//     let paragraph = document.getElementsByTagName("p");
//     for (let i = 0; i < paragraph.length; i++) {
//         paragraph[i].innerHTML = "РАRАGRAРН";
//     }
// })();









