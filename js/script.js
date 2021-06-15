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
      li = document.querySelectorAll('.promo__interactive-item'),
      input = document.querySelector('.adding__input'),
      submitBtn = document.querySelector('button'),
      checkbox = document.querySelector('input[type="checkbox"]'),
      formAdd = document.querySelector('form.add');



const deleteAdv = (a, b) => {
    a.remove();

b.forEach(item => {
    item.remove();
});
}
deleteAdv(firstChild,advImgs);

const makeChanges = () => {
    genre.textContent = 'драма';

    bg.style.backgroundImage = 'url(../img/bg.jpg)';
}
makeChanges();

const sortArr = arr => {
    arr.sort();
}



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





formAdd.addEventListener('submit', (e) => {

    e.preventDefault();
  
    let newFilm = input.value;
    if(newFilm){
        if(newFilm.length > 21) {
            newFilm = `${newFilm.substring(0,22)}...`;
        }

        if (checkbox.checked) {
            console.log("Добавляем любимый фильм");
        }

        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);

        addFilm(movieDB.movies, ul);
    }

    e.target.reset();
    
    // if (input.value.length > 21) {
    //     let a = input.value.substring(0,21)
    //     let b = `${a}...`
    //     movieDB.movies.push(b);
    // addFilm(movieDB.movies, ul);

    // input.value = '';
    // } else if(input.value){
        
    //     movieDB.movies.push(input.value);
    //     addFilm(movieDB.movies, ul);
    
    //     input.value = '';
    // }
    
    
});



function addFilm(films, parent){
    parent.innerHTML = '';
    sortArr(films);  
    films.forEach((film, i) => {
        
        parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1}) ${film}
            <div class="delete"></div>
        </li>
        `;
        films.sort();
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            addFilm(films, parent);
        })
    })
}
addFilm(movieDB.movies, ul);



// checkbox.addEventListener('click', () => {
//     if(checkbox.checked ) {
//         console.log('Добавляем любимый фильм...')
//     } else{

//     }
// })
