import React, { useState } from 'react'
import Star from '../resources/starGray'
import './ReviewsPeoples.css';
import ReviewForm from './ReviewForm'
import Stars from './Stars'


const ReviewsPeoples = ({ reviews, reviewsSet ,setAverage_rate,summReviews}) => {

    const pushNewReviews = (a, b, c, d) => {
        reviewsSet([
            ...reviews,
            {
                name_all_reviews: a,
                otziv_all_reviews: b,
                data_all_reviews: c,
                rate_all_reviws: d,
            }
        ])
        setAverage_rate ([
            ...summReviews,
                    d
        ])
    }



    const [visible, setVisible] = useState(false)

    const visibleLogics = () => {
        if ({ visible } == false) {
            setVisible(
                true
            )
        } else {
            setVisible(
                false
            )
        }
        setVisible(
            !visible
        )
    }

    let newPlates2
    if (reviews.length > 0) {
        newPlates2 = reviews.map(function (item, index) {
            let gg = reviews.length
           
            return (
                <div className='all_reviews' key={`${index}_${item.name_all_reviews}`} >
                    <div className='header_all_reviews'>
                        <div key={reviews.name_all_reviews} className='name_all_reviews'>{item.name_all_reviews}</div>
                        <div key={reviews.data_all_reviews} className='data_all_reviews'>{item.data_all_reviews}</div>
                        <div className='zvezdi_all_reviews'>
                            {/* <Stars /> */}
                            <Stars starsCount={item.rate_all_reviws} />
                        </div>
                    </div>
                    {/* <button onClick={()=>addReviews()}>click</button> */}
                    <div className='otziv_all_reviews'>{item.otziv_all_reviews}</div>

                </div>
            )
        })
       
    } else {
        newPlates2 = <div className='empty_reviews'>Отзывов еще нет, будь первым</div>

    }
    return (
        <div className='pushNewReviews'>
            <ReviewForm pushNewReviews={pushNewReviews} />
            {visible ? <div className="reviews">

                {newPlates2}

            </div> : null}
            <button onClick={visibleLogics} className='button_visible'>{visible ? "Скрыть отзывы ▲" : "Показать отзывы ▼"}</button>

        </div>
    )
}


export default ReviewsPeoples;
