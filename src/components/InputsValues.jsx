import React, {Component} from 'react';

export default class InputsValues extends Component{
    constructor(props){
        super(props);
        this.state = {
            amountValue: 0,
            termsValue: 5,
            nothing: 0
        }
        this.inputValue = this.inputValue.bind(this);
    }

    inputValue(e){
        this.setState({amountValue: e.target.value})
    }

    componentDidUpdate(prevProps, prevState){
        this.calculateCredit(prevProps, prevState);
    }

    calculateCredit(prevProps, prevState){
        // It uses the Lifting State Up with the deduction of percentages entered by the user
        let amountValue = Number(this.state.amountValue);
        // Calculating percentages
        let getSumWithBet = (amountValue * 13) / 100 + amountValue;
        if (prevState.nothing  === this.state.nothing ){
            // Passing a variable to another application component via props
            this.props.monthlyPayments(getSumWithBet.toFixed(1));
            // Updating the status for successful verification of the condition and operation of componentDidUpdate
            this.setState({nothing : this.state.nothing+1})
        }
    }

    render (){
        return (
            <div>
              <div className='calculator_wrapper__inputs'>
                <div>
                  <input type="range" max="100" defaultValue={this.state.amountValue} onInput={this.inputValue} />
                  <div className='calculator_description'>
                    <span>Amount</span>
                    <span>{this.state.amountValue} $</span>
                   </div>
                </div>
              </div>
            </div>
        )
    }
}