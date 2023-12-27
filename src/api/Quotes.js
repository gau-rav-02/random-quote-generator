import React from 'react';

export const getQuotes = async() => {
    const response = await fetch("https://api.quotable.io/quotes/random");
    return await response.json();
}

