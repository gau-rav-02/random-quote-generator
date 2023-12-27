import React, { useState, useEffect } from 'react';
import { getQuotes } from '../api/Quotes'

const Card = () => {
    const [data, setdata] = useState(null);

    const fetchquotes = () => {
        getQuotes().then(data => setdata(data[0]));
    }

    useEffect(() => {
        fetchquotes();
    }, []);

    return(
        <div className='Card'>
            <blockquote>{data?.content}</blockquote>
            <cite>{data?.author}</cite>
            <button onClick={(e) => fetchquotes()} className='button'>Next Quote</button>
        </div>
    )
    
}

export default Card;