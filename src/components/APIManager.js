import React from 'react';
const CHUNK_SIZE = 5;
const PAGE_CAPACITY = 40;

export default class APIManager{

    static get key(){
        return process.env.API_KEY;
    }

    static get CHUNK_SIZE(){
        return CHUNK_SIZE;
    }

    static get PAGE_CAPACITY(){
        return PAGE_CAPACITY;
    }

    static loadSources(){
        const url = `https://newsapi.org/v2/sources?apiKey=${process.env.API_KEY}`;
        const request = new Request(url);
        return fetch(request).then(response => response.json())
    }

    static loadRequest(query){
        const url = `https://newsapi.org/v2/${query}&pageSize=${PAGE_CAPACITY}&page=1&apiKey=${process.env.API_KEY}`;
        const request = new Request(url);
        return fetch(request).then(response => response.json())
    }
}