import React from 'react';
import Button from './Button';

export default class SourceButton extends React.Component{
    render(){
        return(
            <Button class="source__item" clickHandler={this.props.clickHandler} id={this.props.id}>
                {this.props.children}
            </Button>
        );
    }
}