import React, { Component } from 'react';

export default class Footer extends Component{
    render(){
        return(
            <footer>
                <p>Powered by
                    <a className="app__footer-link" href="https://newsapi.org/"> NewsApi</a>
                </p>
            </footer>
        );
    }
}