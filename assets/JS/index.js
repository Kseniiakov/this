"use strict";

// 1) создать обьект cat1 в свойство name записать имя
// также добавить метод sayHi который приветствует по имени

// const cat1 = {
//     name: 'Kitty',
//     sayHi: function() {
//         console.log(`Hello ${this.name}`);
//     }
// };

// cat1.sayHi();

// 2) создать второй обьект cat2 с той же конструкцией и другим именем
// у cat2 значение свойства sayHi на заменить функцию
// которая логирует cat1.name и this.name

// const cat2 = {
//     name: 'Oliver',
//     logNames: function() {
//         console.log(`Hello ${cat1.name} and ${this.name}`);
//     }
// };

// cat2.logNames();

// 3) создать функцию которая принимает обьект cat в параметры
// и меняет свойство name на произвольное

// const cat = {
//     name: 'name'
// };

// function changeName(obj) {
//     obj.name = 'Bella';
// }

// changeName(cat);

// console.log(cat.name);

// 4) создать стрелочную функцию которая логирует this.name
// и записать ее ссылку в свойство cat2.sayHi вызвать cat2.sayHi 
// - почему имя не логируется?
// Ответ:
// Имя не логируется, потому, что стрелочная функция ссылается на глобальную область, 
// а не на объект, методом которого она является.

// const cat2 = {
//     name: 'Oliver',
//     sayHi: func
//     }

// let func = () => {
//     console.log(this.name);
// }

// cat2.sayHi()

// 5) функция конструктор Article которая имеет свойства названия, 
// и массив авторов, а также метод для добавления новых авторов

// function Article(name) {
//     this.name = name,
//     this.authors = [],
//     this.addAuthor = function(...authorsName) {
//         this.authors.push(...authorsName);
//     }
// };

// const article1 = new Article('nameMyArticle');

// article1.addAuthor('Oliver Smith', 'Annie Johnson', 'Bella Davis');

// console.log(article1);

// 6) вызвать функцию cat1.sayHi.call(cat2)
// почему имя в консоли не взято от cat1 а принадлежит cat2
// Ответ:
// Имя в консоли пренадлежит cat2, потому, что метод call() вызывает функцию cat1.sayHi(), 
// но меняет для неё this (this становится объект cat2, а не cat1) и функция берет name из cat2.

// cat1.sayHi.call(cat2);