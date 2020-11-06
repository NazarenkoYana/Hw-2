// Задание 3
// Разработайте модуль, который будет содержать функцию для получения элементов на странице с
// определенным значением в атрибуте с именем сlass. Пример использование модуля. var arr = MyQuery.FindClass("redButton");
// — возвращает массив элементов с атрибутом class= "redButton".


let Module = {};

Module.getByClass = function (className) {
    return document.getElementsByClassName(className);
};

(function () {
    console.log(Module.getByClass('findMe'));
})();
