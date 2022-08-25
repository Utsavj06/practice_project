import React, {useState} from 'react'

const Rating = ({rating}) => {
    const [ratings, setRatings] = useState(0);
    return (
        <>
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button
                        type="button"
                        key={index}
                        className={index <= ratings ? "on" : "off"}
                        onClick={() => setRatings(index)}
                    >
                        <span className="star">&#9733;</span>
                    </button>
                );
            })}
        </>
    )
}

export default Rating