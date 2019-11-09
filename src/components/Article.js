import React from 'react';

export default class Article extends React.Component{
    render(){
        return(
            <div className="news__item">
                <div className="news__meta">
                    <div className="news__meta-photo" style={{backgroundImage: `url(${this.props.image})`}}/>
                </div>
                <a className="news__item-link" href={this.props.link}>
                    <div className="news__description">
                        <h2 className="news__description-title">{this.props.title}</h2>
                        <h3 className="news__description-source">{this.props.source}</h3>
                        <p className="news__description-content">{this.props.text}</p>
                        <p className="news__read-more">
                        </p>
                    </div>
                </a>
            </div>
        );
    }
}