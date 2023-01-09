import logo from './resources/logo.svg';

import React, { useState } from 'react';
import './App.css';
import FilmCard from './components/FilmCard';

// import ReviewsPeoples from './components/ReviewsPeoples';

// import AddFilms from './components/AddFilms';


const favoritFilms = [
  {
    id: 1,
    title: "Бэтмен",
    posterLink: "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/4d924203-de93-4f05-9564-94ff08678516/3840x",
    date: 2022,
    rating: 7.9,
    countReviews: "0",
    reviews: [

    ],
    summReviews: [

    ],
    myRating: '',
    description: "После двух лет поисков правосудия на улицах Готэма Бэтмен становится для горожан олицетворением беспощадного возмездия. Когда в городе происходит серия жестоких нападений на высокопоставленных чиновников, улики приводят Брюса Уэйна в самые тёмные закоулки преступного мира, где он встречает Женщину-Кошку, Пингвина, Кармайна Фальконе и Загадочника. Теперь под прицелом оказывается сам Бэтмен, которому предстоит отличить друга от врага и восстановить справедливость во имя Готэма."
  },
  {
    id: 2,
    title: "Джентльмены",
    posterLink: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/b0818ad5-daeb-420b-a37a-66186d209788/3840x",
    date: 2019,
    rating: 8.5,
    countReviews: "0",
    reviews: [

    ],
    summReviews: [

    ],
    my_rating: '',
    description: "Один ушлый американец ещё со студенческих лет приторговывал наркотиками, а теперь придумал схему нелегального обогащения с использованием поместий обедневшей английской аристократии и очень неплохо на этом разбогател. Другой пронырливый журналист приходит к Рэю, правой руке американца, и предлагает тому купить киносценарий, в котором подробно описаны преступления его босса при участии других представителей лондонского криминального мира — партнёра-еврея, китайской диаспоры, чернокожих спортсменов и даже русского олигарха."
  },
  {
    id: 3,
    title: "",
    posterLink: "",
    date: '0000',
    rating: '00',
    countReviews: "0",
    reviews: [

    ],
    summReviews: [

    ],
    my_rating: '',
    description: "test"
  }
]

const getFilmCards = () => {
  return favoritFilms.map(item => {
    return <FilmCard filmData={item} />
  });
}

const App = () => {
  return (
    <React.Fragment>
      <div className="films">
        {favoritFilms.length ? getFilmCards() : <p>Нет фильмов</p>}
      </div>
    </React.Fragment>
  )
}

export default App;
