import React, { useState } from 'react';
import './RatingFilms.css';
import star from '../resources/starGray.svg'


const RatingFilms = () => {
    // state = {
    //     myRate: 0
    // }
    const [myRate, setMyRate] = useState(0)

    const getSilverStars = (_, index) => {
        // getGoldStars(myRate);
        return <img onClick={() => setMyRate(index + 1)} key={index} src={star} className='star_IMG' ></img> //worked code
    }

    const getGoldStars = (_, index) => {
        //    let currentLength = myRate
        return <img onClick={() => setMyRate(index + 1)} key={index} src={star} className='gold_star_IMG'></img> //worked code

    }

    return (
        <div className="rating_buttons">
            <div id='stars'>
                {/* <getStars /> */}
                <div id='silverStars'>{Array.from({ length: 5 }, getSilverStars)}</div>
                <div id='goldenStars'>{Array.from({ length: myRate }, getGoldStars)}</div>
            </div>
        </div>
    )
}
export default RatingFilms;


// const RatingFilms = () => {
//     // state = {
//     //     myRate: 5
//     // }
//     const [myRate, setMyRate] = useState(0)



//     const getButtonRating = (_, index) => {
//         // return <button onClick={() => setMyRate(index + 1)} key={index} className="buttone_rating">{index + 1}</button>
//         return (
//         <div>
//             <button    onClick={() => setMyRate(index + 1)} key={index} className="buttone_rating">{index + 1}</button>


//             {/* <embed className="star_IMG" src={star} onClick={(consol.log("123"))}/>
//                     <img  src={star} alt="React Logo" onClick={() => setMyRate(index + 1)} key={index} className="star_IMG">{index + 1}</img> */}




//         </div>
//     )}
//     return (
//         <div className="rating_buttons">
//             <div className="films_my_rating">Оцените фильм:{myRate}</div>
//             {Array.from({ length: 5 }, getButtonRating)}

//             {/* <button id="buttone_rating" className="rating_one">1</button>
//             <button id="buttone_rating" className="rating_two">2</button>
//             <button id="buttone_rating" className="rating_three">3</button>
//             <button id="buttone_rating" className="rating_four">4</button>
//             <button id="buttone_rating" className="rating_five">5</button> */}
//         </div>
//     )
// }
// export default RatingFilms;



// <div class="img-wrap">
//     <svg viewBox="0 0 600 400" width="0" height="0" xmlns:xlink="http://www.w3.org/1999/xlink">
//         <defs>
//             <filter id="c1">
//                 <feColorMatrix in="SourceGraphic"
//                     type="matrix"
//                     values="1 1 0 0 0
//                     1 1 0 0 0
//                     1 1 0 1 0
//                     0 0 0 1 0" />
//             </filter>
//             <filter id="c2">
//                 <feColorMatrix in="SourceGraphic"
//                     type="matrix"
//                     values="1 1 1 -0.1 0
//                     0 0 0 0 0
//                     1 1 1 -0.1 0
//                     0 0 0 1 0" />
//             </filter>
//             <filter id="c3">
//                 <feColorMatrix in="SourceGraphic"
//                     type="matrix"
//                     values="1 0 0 0 0
//                     1 0 0 0 0
//                     1 0 1 0 0
//                     0 0 0 1 0" />
//             </filter>
//             <filter id="c4">
//                 <feColorMatrix in="SourceGraphic"
//                     type="matrix"
//                     values="0.75 0.75 0.75 0 0
//                     1 1 1 0 0
//                     1 1 1 0 0
//                     0 0 0 1 0" />
//             </filter>
//             <filter id="c5">
//                 <feColorMatrix in="SourceGraphic"
//                     type="matrix"
//                     values="0.75 0.75 0 0 0
//                     0.75 0.75 0 0 0.6
//                     0 0 0 0 0.6
//                     0 0 0 1 0" />
//             </filter>
//             <filter id="c6">
//                 <feColorMatrix in="SourceGraphic"
//                     type="matrix"
//                     values="0.5 0.5 0 0 0.4
//                     0 0 0 0 0
//                     1 1 0 0 0.4
//                     0 -2 0 1 0"
//                     result="color" />
//             </filter>
//         </defs>
//     </svg>

//     <figure>
//         <img class="img img--1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/85648/saffy_400px.jpg" alt="Fluffy cat">
//             <figcaption>Greyscale, with blue added to the alpha channel</figcaption>
//     </figure>
//     <figure>
//         <img class="img img--2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/85648/saffy_400px.jpg" alt="Fluffy cat">
//             <figcaption>Only red and blue in all channels (no green). Negative values in alpha channel to darken the dark areas.</figcaption>
//     </figure>
//     <figure>
//         <img class="img img--3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/85648/saffy_400px.jpg" alt="Fluffy cat">
//             <figcaption>Red channel values are equal at 100%, blue channel has 100% blue, so the image is greyscale with a blue-ish tinge</figcaption>
//     </figure>
//     <figure>
//         <img class="img img--4" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/85648/saffy_400px.jpg" alt="Fluffy cat">
//             <figcaption>Less red than other colours in red, green and blue channels</figcaption>
//     </figure>
//     <figure>
//         <img class="img img--5" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/85648/saffy_400px.jpg" alt="Fluffy cat">
//             <figcaption>The dark parts are colorized using the multiplier channel, the light parts use red and green added to the red and green channels</figcaption>
//     </figure>
//     <figure>
//         <img class="img img--6" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/85648/saffy_400px.jpg" alt="Fluffy cat">
//             <figcaption>Blown-out blue channel with remaining channels colorized</figcaption>
//     </figure>
// </div>



// Resources