import React, {Component} from 'react'
import {useEffect} from 'react';
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
        //If the button pressed is x, then reassign it to * for eval
        if (e.target.innerText==='x') {
            if (this.state.inEvaluation===false) {
                this.setState ({
                    text: this.state.prevAnswer[0] + 'x',
                    expression: this.state.prevAnswer[0] + '*',
                    inEvaluation: true
                })
            }
            else {
                console.log(this.state.expression)
                this.setState({
                    text: this.state.text + 'x',
                    expression: this.state.expression + '*',
                    inEvaluation: true
                })
            }
        }
        //for factorial operation
        //need to handle case for operator before number
        else if (e.target.innerText==='x!') {
            if (this.state.inEvaluation===false) {
                let fac = 1;
                for (var i = 2; i <= this.state.prevAnswer[0]; i++)
                    fac = fac * i;
                console.log(this.state.prevAnswer)
                this.setState ({
                    text: this.state.prevAnswer[0] + '!',
                    expression: fac,
                    inEvaluation: true
                })
                console.log(this.state.prevAnswer[0])
                console.log(fac)
            }
            else {
                let fac = 1;
                for (var i = 2; i <= this.state.expression; i++)
                    fac = fac * i;
                console.log("factorial")
                console.log(this.state.expression)
                this.setState({
                    text: this.state.text + '!',
                    expression: fac,
                    inEvaluation: true
                })
            }
        }

        //for sqrt operation
        //number then operator = works fine : good for multi step problems => 3! => then sqrt the result
        //operator then number = error
        else if (e.target.innerText==='√') {
            if (this.state.inEvaluation===false) {
                let result = eval(Math.sqrt(this.state.prevAnswer[0]))
                console.log(this.state.prevAnswer)
                this.setState ({
                    text: '√' + this.state.prevAnswer[0],
                    expression: result,
                    inEvaluation: true
                })
                console.log(this.state.prevAnswer[0])
                console.log(result)
            }
            else {
                let result = eval(Math.sqrt(this.state.expression))
                console.log("sqrt")
                console.log(this.state.expression)
                this.setState({
                    text: '√' + this.state.text,
                    expression: result,
                    inEvaluation: true
                })
                console.log(this.state.text)
            }
        }

        //for sin operator
        //need to handle case for operator before number
        else if (e.target.innerText==='sin') {
            if (this.state.inEvaluation===false) {
                //grabbing value of the btn
                var radOrDeg = document.getElementById("btnRadDeg").innerText
                console.log(radOrDeg)
                //check to see how to evaluate
                if (radOrDeg == "Rad"){
                    var result = eval(Math.sin(this.state.prevAnswer[0]))
                }
                else {
                    var pi = Math.PI;
                    var converted = this.state.prevAnswer[0] * (pi/180);
                    var result = eval(Math.sin(converted))
                }
                console.log(this.state.prevAnswer)
                this.setState ({
                    text: 'sin' + this.state.prevAnswer[0],
                    expression: result,
                    inEvaluation: true
                })
                console.log(this.state.prevAnswer[0])
                console.log(result)
            }
            else {
                //grabbing value of the btn
                var radOrDeg = document.getElementById("btnRadDeg").innerText
                console.log(radOrDeg)
                //check to see how to evaluate
                if (radOrDeg == "Rad"){
                    var result = eval(Math.sin(this.state.expression))
                }
                else {
                    var pi = Math.PI;
                    var converted = this.state.expression * (pi/180);
                    var result = eval(Math.sin(converted))
                }
                console.log("sin")
                console.log(this.state.expression)
                this.setState({
                    text: 'sin' + this.state.text,
                    expression: result,
                    inEvaluation: true
                })
                console.log(this.state.text)
            }
        }

        //for cos operator
        //need to handle case for operator before number
        else if (e.target.innerText==='cos') {
            if (this.state.inEvaluation===false) {
                //grabbing value of the Rad/Deg btn
                var radOrDeg = document.getElementById("btnRadDeg").innerText
                console.log(radOrDeg)
                //check to see how to evaluate
                if (radOrDeg == "Rad"){
                    var result = eval(Math.cos(this.state.prevAnswer[0]))
                }
                else {
                    var pi = Math.PI;
                    var converted = this.state.prevAnswer[0] * (pi/180);
                    var result = eval(Math.cos(converted))
                }
                console.log(this.state.prevAnswer)
                this.setState ({
                    text: 'cos' + this.state.prevAnswer[0],
                    expression: result,
                    inEvaluation: true
                })
                console.log(this.state.prevAnswer[0])
                console.log(result)
            }
            else {
                //grabbing value of the Rad/Deg btn
                var radOrDeg = document.getElementById("btnRadDeg").innerText
                console.log(radOrDeg)
                //check to see how to evaluate
                if (radOrDeg == "Rad"){
                    var result = eval(Math.cos(this.state.expression))
                }
                else {
                    var pi = Math.PI;
                    var converted = this.state.expression * (pi/180);
                    var result = eval(Math.cos(converted))
                }
                console.log("cos")
                console.log(this.state.expression)
                this.setState({
                    text: 'cos' + this.state.text,
                    expression: result,
                    inEvaluation: true
                })
                console.log(this.state.text)
            }
        }

        //for tan operator
        //need to handle case for operator before number
        else if (e.target.innerText==='tan') {
            if (this.state.inEvaluation===false) {
                //grabbing value of the Rad/Deg btn
                var radOrDeg = document.getElementById("btnRadDeg").innerText
                console.log(radOrDeg)
                //check to see how to evaluate
                if (radOrDeg == "Rad"){
                    var result = eval(Math.tan(this.state.prevAnswer[0]))
                }
                else {
                    var pi = Math.PI;
                    var converted = this.state.prevAnswer[0] * (pi/180);
                    var result = eval(Math.tan(converted))
                }
                console.log(this.state.prevAnswer)
                this.setState ({
                    text: 'tan' + this.state.prevAnswer[0],
                    expression: result,
                    inEvaluation: true
                })
                console.log(this.state.prevAnswer[0])
                console.log(result)
            }
            else {
                //grabbing value of the Rad/Deg btn
                var radOrDeg = document.getElementById("btnRadDeg").innerText
                console.log(radOrDeg)
                //check to see how to evaluate
                if (radOrDeg == "Rad"){
                    var result = eval(Math.tan(this.state.expression))
                }
                else {
                    var pi = Math.PI;
                    var converted = this.state.expression * (pi/180);
                    var result = eval(Math.tan(converted))
                }
                console.log("tan")
                console.log(this.state.expression)
                this.setState({
                    text: 'tan' + this.state.text,
                    expression: result,
                    inEvaluation: true
                })
                console.log(this.state.text)
            }
        }
        
        //for ln operator
        //need to handle case for operator before number
        else if (e.target.innerText==='ln') {
            if (this.state.inEvaluation===false) {
                let result = eval(Math.log(this.state.prevAnswer[0]))
                console.log(this.state.prevAnswer)
                this.setState ({
                    text: 'ln' + this.state.prevAnswer[0],
                    expression: result,
                    inEvaluation: true
                })
                console.log(this.state.prevAnswer[0])
                console.log(result)
            }
            else {
                let result = eval(Math.log(this.state.expression))
                console.log("ln")
                console.log(this.state.expression)
                this.setState({
                    text: 'ln' + this.state.text,
                    expression: result,
                    inEvaluation: true
                })
                console.log(this.state.text)
            }
        }

        //for log operator
        //need to handle case for operator before number
        else if (e.target.innerText==='log') {
            if (this.state.inEvaluation===false) {
                let result = eval(Math.log10(this.state.prevAnswer[0]))
                console.log(this.state.prevAnswer)
                this.setState ({
                    text: 'log' + this.state.prevAnswer[0],
                    expression: result,
                    inEvaluation: true
                })
                console.log(this.state.prevAnswer[0])
                console.log(result)
            }
            else {
                let result = eval(Math.log10(this.state.expression))
                console.log("log")
                console.log(this.state.expression)
                this.setState({
                    text: 'log' + this.state.text,
                    expression: result,
                    inEvaluation: true
                })
                console.log(this.state.text)
            }
        }

        //If the button pressed is EXP, then reassign it to E for eval
        else if (e.target.innerText==='EXP') {
            if (this.state.inEvaluation===false) {
                this.setState ({
                    text: this.state.prevAnswer[0] + 'E',
                    expression: this.state.prevAnswer[0] + 'E',
                    inEvaluation: true
                })
            }
            else {
                console.log(this.state.expression)
                this.setState({
                    text: this.state.text + 'E',
                    expression: this.state.expression + 'E',
                    inEvaluation: true
                })
            }
        }

        //If the button pressed is x^y, then reassign it to ^ for eval
        else if (e.target.innerText==='x^y') {
            if (this.state.inEvaluation===false) {
                this.setState ({
                    text: this.state.prevAnswer[0] + '^',
                    expression: this.state.prevAnswer[0] + '**',
                    inEvaluation: true
                })
            }
            else {
                console.log(this.state.expression)
                this.setState({
                    text: this.state.text + '^',
                    expression: this.state.expression + '**',
                    inEvaluation: true
                })
            }
        }

        //If the button being pressed is Rad, change it to Deg along with a darker shade of gray
        else if (e.target.innerText==='Rad') {
            e.target.innerText='Deg'
            e.target.style.background="#b0adad"
        }

        //If the button being pressed is Deg, change it back to Rad along with its original color
        else if (e.target.innerText==='Deg') {
            e.target.innerText='Rad'
            e.target.style.background="#d6d6d6"
        }

        else {
            //when we are in the middle of eval and a key is pressed
            if (this.state.inEvaluation===true) {
                this.setState({
                    text: this.state.text + e.target.innerText,
                    expression: this.state.expression + e.target.innerText,
                    inEvaluation: true,
                })
                console.log(this.state.text)
                console.log(this.state.expression)
                console.log(e.target.innerText)
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
                                <button id="btnRadDeg" className="operation" onClick={this.buttonPressed}>Rad</button>
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
                                <button className="operation" onClick={this.buttonPressed}>√</button>
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