import React, { useEffect, useState } from 'react';
import './Stars.css';
import Star from '../resources/starGray'


const Stars = ({setStarStateOnDonStars}) => {
    const [myRate, setMyRate] = useState(0)
    
    useEffect(()=>{
        setStarStateOnDonStars(myRate);
    }, [myRate])
   
    const getSilverStars = (_, index) => {
        // getGoldStars(myRate);
        return <svg onClick={() => setMyRate(index + 1)} key={index} className='star_IMG'>{Star}</svg> //worked code
    }

    const getGoldStars = (_, index) => {
        
        
        //    let currentLength = myRate
        return <svg onClick={() => setMyRate(index + 1)} key={index} className='gold_star_IMG'>{Star}</svg> //worked code
    }
 

    return (
        // <div className="rating_buttons">
            <div id='stars'>
                {/* <getStars /> */}
                <div id='silverStars'>{Array.from({ length: 5 }, getSilverStars)}</div>
                <div id='goldenStars'>{Array.from({ length: myRate }, getGoldStars)}</div>
            </div>
        // </div>
    )
}
export default Stars;

