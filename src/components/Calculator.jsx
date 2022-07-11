import React, { Component } from 'react';
import '../styles/Calculator.scss';
import InputsValues from './InputsValues';

export default class Calculator extends Component {
  constructor(){
    super();
    this.state = {
      monthlyPayments: 0
    }
    this.getMonthlyPayments = this.getMonthlyPayments.bind(this);
  }

  getMonthlyPayments(month){
    this.setState({monthlyPayments: month})
  }
  
  render(){
    return (
      <div className="Calculator">
        <header>
          <div className='header-backgruond'></div>
        </header>

        <div className='calculator'>
          <h1>Credit Calculator</h1>
          <div className='calculator_wrapper'>
            <InputsValues monthlyPayments={this.getMonthlyPayments} />
            <div className='calculator_wrapper__result'>
                <div className='result-block'>
                  <h2>Monthly payment: {this.state.monthlyPayments} $</h2>
                  <p>Bet - 13%</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}