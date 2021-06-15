/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
},
      firstChild = document.querySelector('.promo__adv div'),
      advImgs = document.querySelectorAll('.promo__adv img'),
      genre = document.querySelector('.promo__genre'),
      bg = document.querySelector('.promo__bg'),
      ul = document.querySelector('.promo__interactive-list'),
      li = document.querySelectorAll('.promo__interactive-list li');


firstChild.remove();

advImgs.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';

bg.style.backgroundImage = 'url(../img/bg.jpg)';

movieDB.movies.sort();

// for(let i = 0; i < movieDB.movies.length; i++){

    
//     if(li[i] === undefined){
//         const a = document.createElement('li');
//         a.classList.add("promo__interactive-item");
//         a.innerHTML = `${i + 1 }) ${movieDB.movies[i]} <div class="delete"></div>`;
        
//         ul.append(a);
        
//     } else{
//         li[i].innerHTML = `${i + 1 }) ${movieDB.movies[i]}<div class="delete"></div>`;
        
//     }
    
// }

// способ 2 

ul.innerHTML = '';
movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    ul.innerHTML += `
    <li class="promo__interactive-item">${i + 1}) ${film}
        <div class="delete"></div>
    </li>
    `;
})


