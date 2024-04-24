import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

function RatingComponent({rating}) {

    const { rate, count } = rating

    const fullStar = Math.floor(rate);
    const halfStar = (rate % 1) >= 0.5 ? 1 : 0
    const emptyStar = 5 - fullStar - halfStar;

    return (
        <>
            {Array(fullStar).fill(<BsStarFill style={{ color: 'gold' }} />)}

            {halfStar ? <BsStarHalf style={{ color: 'gold' }} /> : null}

            {Array(emptyStar).fill(<BsStar style={{ color: 'gold' }} />)}
            
            <span>({count} reviews)</span>
        </>
    )
}

export default RatingComponent