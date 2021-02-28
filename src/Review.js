import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import reviews from './ReviewData';

const Review = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = reviews[index];

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    }

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    }

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * reviews.length);
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    }

    const checkNumber = (number) => {
        if (number > reviews.length - 1) {
            return 0;
        }
        if (number < 0) {
            return reviews.length - 1;
        }
        return number;
    };

    return (



        <div className="card cardcustom">
            <div>
                <img src={image} className="card-img-top" alt="name" width="150px" height="350" />
                <span className="quote">
                    <FaQuoteRight />
                </span>
            </div>
            <div className="card-body">
                <h4 className="card-title bg-primary text-center">{name}</h4>
                <h5 className="card-title bg-secondary text-center">{job}</h5>
                <p class="card-text">{text}</p>
                <div className="text-center">
                    <button className="random" onClick={prevPerson}>
                        <FaChevronLeft />
                    </button>
                    <button className="random" onClick={nextPerson}>
                        <FaChevronRight />
                    </button>
                    <button className="random" onClick={randomPerson}>
                        surprise me
                </button>
                </div>
            </div>
        </div>





    )
}

export default Review
