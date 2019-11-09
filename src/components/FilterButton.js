import React from 'react';
import Button from './Button';

export default class FilterButton extends React.Component{
    render(){
        return(
            <Button  class="search-btn" clickHandler={this.props.clickHandler} id="filter-btn">
                Filter
            </Button>
        );
    }
}