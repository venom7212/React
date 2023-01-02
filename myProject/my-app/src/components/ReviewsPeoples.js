import React, { useState } from 'react'
import Star from '../resources/starGray'
import './ReviewsPeoples.css';
import ReviewForm from './ReviewForm'
import Stars from './Stars'





const ReviewsPeoples = ({props2,testF,countReviws}) => {
    const [stateReviwPeoples,setStateReviewsfilms] = useState(props2)

    const  pushNewReviews=(a,b,c,d)=>{
               // console.log(stateReviwPeoples)
        setStateReviewsfilms([
            ...stateReviwPeoples,
                  {
                      name_all_reviews: a,
                      otziv_all_reviews: b,
                      data_all_reviews:  c,
                      rate_all_reviws: d
                    }
        ])
    }
    const i = stateReviwPeoples.length
    

    const [myRate2, setMyRate] = useState(3)

    const getSilverStars = (_, index) => {
        // getGoldStars(myRate);
        return <svg onClick={() => setMyRate(index + 1)} key={index} className='star_IMG'>{Star}</svg> //worked code
    }

    const getGoldStars = (_, index) => {
       return <svg onClick={() => setMyRate(index + 1)} key={index} className='gold_star_IMG'>{Star}</svg> //worked code
    }


    const [visible, setVisible] = useState (false)

    const visibleLogics = () => {
        if ({visible} == false){
            setVisible (
                true
            )
        }else{
            setVisible(
                false
            )            
        }
        setVisible(
            !visible
        )
    }

    
   
    let newPlates2
    if (stateReviwPeoples.length >0 ) {
        newPlates2 = stateReviwPeoples.map(function (item) {
            let gg = stateReviwPeoples.length 
    // console.log(gg)

  
        // {countReviws(i)}
        
            return (
                <div className='all_reviews' >
                    <div className='header_all_reviews'>
                        <div key={stateReviwPeoples.name_all_reviews} className='name_all_reviews'>{item.name_all_reviews}</div>
                        <div key={stateReviwPeoples.data_all_reviews}className='data_all_reviews'>{item.data_all_reviews}</div>
                        <div className='zvezdi_all_reviews'>
                        {/* <Stars /> */}
                        <div id='stars'>
                        <div id='silverStars'>{Array.from({ length: 5 }, getSilverStars)}</div>
                        <div id='goldenStars'>{Array.from({ length: item.rate_all_reviws }, getGoldStars)}</div>
                        </div>
                        </div>
                    </div>
                    {/* <button onClick={()=>addReviews()}>click</button> */}
                    <div className='otziv_all_reviews'>{item.otziv_all_reviews}</div>
                    
                </div>
            )
        })
        // console.log(newPlates2)
        // console.log(onlyReviws[0].reviews)
        }else{
            newPlates2 = <div className='empty_reviews'>Отзывов еще нет, будь первым</div>

        }
        return (
                <div className='pushNewReviews'>
                    <ReviewForm  pushNewReviews={pushNewReviews} />
                    {visible ? <div key={stateReviwPeoples.id} className="reviews">
                    
                   
                    {newPlates2}
                    
                    </div>: null}
                    <button onClick={visibleLogics} className='button_visible'>{visible? "Скрыть отзывы ▲":"Показать отзывы ▼"}</button>

                </div>
            )
        }


    export default ReviewsPeoples;    
    
  