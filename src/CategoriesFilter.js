import React, { Component } from 'react';
import { connect } from 'react-redux';

class categoriesFilter extends Component {

  constructor(props){
    super(props);
    this.state = { active: true }
  }

  toggle(){   // состояние для применения фильтра
    this.props.onChangeCategory(this.props.filterSign, this.filterCheckbox.checked);
  }

  render(){

    return (
      <label>
        <input
          type='checkbox'
          value={ this.props.filterSign }
          ref={(checkbox) => { this.filterCheckbox = checkbox }}
          onChange={ this.toggle.bind(this) }
          />
        { this.props.filterName }
      </label>
    )
  }
};

export default connect(
  null,
  dispatch => ({ onChangeCategory: (sign, state) => dispatch({ type: 'CATEGORIES_FILTER', sign: sign, state: state }) }),
)(categoriesFilter);