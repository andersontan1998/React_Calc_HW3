import React, {Component} from 'react'
import './App.css';


class Keypad extends Component {
    constructor() {
        super();
        this.state = {
            // text is for display
            // expression is for calculation
            text: " ",
            expression: " ",
            prevAnswer: [0],
            inEvaluation: true,
        }
        this.buttonPressed = this.buttonPressed.bind(this);
        this.evalExpression = this.evalExpression.bind(this);
        this.numberPressed = this.numberPressed.bind(this);
    }


    numberPressed(chr) {
        let num = Number(chr);
        if (num%1===0) {
            return true;
        }
        return false;
    }

    buttonPressed(e) {
        //If the button presssed is x, then reassign it to * for eval
        if (e.target.innerText==='x') {
            if (this.state.inEvaluation===false) {
                this.setState ({
                    text: this.state.prevAnswer[0] + 'x',
                    expression: this.state.prevAnswer[0] + '*',
                    inEvaluation: true
                })
            }
            else {
                this.setState({
                    text: this.state.text + 'x',
                    expression: this.state.expression + '*',
                    inEvaluation: true
                })
            }
        }
        
        else {
            //when we are in the middle of evaluation and a key is pressed
            if (this.state.inEvaluation===true) {
                this.setState({
                    text: this.state.text + e.target.innerText,
                    expression: this.state.expression + e.target.innerText,
                    inEvaluation: true,
                })
            }
    
            //when something is evaluated and we press an operation (+,-,/)
            else if (this.state.inEvaluation===false && this.numberPressed(e.target.innerText)===false) {
                this.setState({
                    text: this.state.prevAnswer[0] + e.target.innerText,
                    expression: this.state.prevAnswer[0] + e.target.innerText,
                    inEvaluation: true
                })
            }
    
            //when there are no active evaluations and a number is pressed, it should be reset
            else if (this.state.inEvaluation===false && this.numberPressed(e.target.innerText)===true) {
                this.setState({
                    text: e.target.innerText,
                    expression: e.target.innerText,
                    inEvaluation: true, 
                    prevAnswer: [0],
                })
            }
        }
    }

    evalExpression(e) {
        let result = 0;
        //handle invalid expressions
        for (let i=0; i<this.state.expression.length; i++) {
            if (this.state.expression[i]+this.state.expression[i+1] === "//") {
                window.alert("Please Enter a Valid Expression")
                this.setState ({
                    text: this.state.prevAnswer[0].toString(),
                    expression: this.state.prevAnswer[0].toString(),
                })
                return;
            }
        }

        try {
            result = eval(this.state.expression);

            //handle division by 0
            if (result===Infinity) {
                window.alert("Do not Divide by 0 Please")
                this.setState ({
                    text: this.state.prevAnswer[0].toString(),
                    expression: this.state.prevAnswer[0].toString()
                })
            }
            else {
                this.setState ({
                    text: result.toString(),
                    prevAnswer: [result, ...this.state.prevAnswer],
                    inEvaluation: false
                })
            }
        }
        catch(err) {
            window.alert("Please Enter a Valid Expression")
            this.setState ({
                text: this.state.prevAnswer[0].toString(),
                expression: this.state.prevAnswer[0].toString(),
            })
        }
    }

    resetPad(e) {
        this.setState ({
            text: " ",
            expression: " ",
            prevAnswer: [0],
            inEvaluation: true,
        })
    }

    backSpace(e) {
        if (this.state.inEvaluation === true){
            this.setState ({
                text: this.state.text.substring(0, this.state.text.length-1),
                expression: this.state.expression.substring(0, this.state.expression.length-1)
            })
        }
    }

    render() {
        return (
            <div className="App">
                <div class="pad">
                    <table style={{"table-layout": "fixed",  width: "100%"}}>
                        <tbody>
                            <tr>
                                <div id="result">
                                    <p>Ans = {this.state.prevAnswer[0]}</p>
                                    <p>{this.state.text}</p>
                                </div>
                            </tr>
                            <tr>
                                <button className="operation" onClick={this.buttonPressed}>Rad</button>
                                <button className="operation" onClick={this.buttonPressed}>x!</button>
                                <button className="operation" onClick={this.buttonPressed}>(</button>
                                <button className="operation" onClick={this.buttonPressed}>)</button>
                                <button className="operation" onClick={this.buttonPressed}>%</button>
                                <button className="operation" onClick={this.resetPad.bind(this)}>AC</button>
                                {/*<button className="operation" onClick={this.backSpace.bind(this)}>CE</button>*/}
                            </tr>
                            <tr>
                                <button className="operation" onClick={this.buttonPressed}>sin</button>
                                <button className="operation" onClick={this.buttonPressed}>ln</button>
                                <button onClick={this.buttonPressed}>7</button>
                                <button onClick={this.buttonPressed}>8</button>
                                <button onClick={this.buttonPressed}>9</button>
                                <button className="operation" onClick={this.buttonPressed}>/</button>
                            </tr>
                            <tr>
                                <button className="operation" onClick={this.buttonPressed}>cos</button>
                                <button className="operation" onClick={this.buttonPressed}>log</button>
                                <button onClick={this.buttonPressed}>4</button>
                                <button onClick={this.buttonPressed}>5</button>
                                <button onClick={this.buttonPressed}>6</button>
                                <button className="operation" onClick={this.buttonPressed}>x</button>
                            </tr>
                            <tr>
                                <button className="operation" onClick={this.buttonPressed}>tan</button>
                                <button className="operation" onClick={this.buttonPressed}>sqrt</button>
                                <button onClick={this.buttonPressed}>1</button>
                                <button onClick={this.buttonPressed}>2</button>
                                <button onClick={this.buttonPressed}>3</button>
                                <button className="operation" onClick={this.buttonPressed}>-</button>
                            </tr>
                            <tr>
                                <button className="operation" onClick={this.buttonPressed}>EXP</button>
                                <button className="operation" onClick={this.buttonPressed}>x^y</button>
                                <button onClick={this.buttonPressed}>0</button>
                                <button onClick={this.buttonPressed}>.</button>
                                <button id="equal" onClick={this.evalExpression}>=</button>
                                <button className="operation" onClick={this.buttonPressed}>+</button>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Keypad;