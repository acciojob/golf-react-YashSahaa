import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posix: 0,
            posiy: 0,
            ballPosition: { left: "0px" ,top:"0px" }
        };
        this.renderChoice = this.renderBallOrButton.bind(this);
        this.buttonClickHandler = this.buttonClickHandler.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    buttonClickHandler() {
        this.setState({
            renderBall: true
        });
    }

    handleKeyDown(event) {
        if ( event.keyCode === 39) {
            this.setState((prevState) => ({
                posix: prevState.posix + 5,
                ballPosition: { left: `${prevState.posix + 5}px`, top: `${prevState.posiy}px` }
            }));
        }
        else if (event.keyCode === 37) {
            this.setState((prevState) => ({
                posix: prevState.posix - 5,
                ballPosition: { left: `${prevState.posix - 5}px`, top: `${prevState.posiy}px` }
            }));
        }
        else if (event.keyCode === 38) {
            this.setState((prevState) => ({
                posiy: prevState.posiy - 5,
                ballPosition: { left: `${prevState.posix}px`, top: `${prevState.posiy-5}px` }
            }));
        }
        else if (event.keyCode === 40) {
            this.setState((prevState) => ({
                posiy: prevState.posiy + 5,
                ballPosition: { left: `${prevState.posix}px`, top: `${prevState.posiy+5}px` }
            }));
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    renderBallOrButton() {
        if (this.state.renderBall) {
            return <div className="ball" style={this.state.ballPosition}></div>;
        } else {
            return <button className="start" onClick={this.buttonClickHandler}>Start</button>;
        }
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        );
    }
}

export default App;


// import React, { Component, useState } from "react";
// import '../styles/App.css';

// class App extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             renderBall: false,
//             posi : 0,
//             ballPosition: { left: "0px" }
//         };
//         this.renderChoice = this.renderBallOrButton.bind(this)
//         this.buttonClickHandler = this.buttonClickHandler.bind(this)
//     };

//     buttonClickHandler() {
//         this.setState({
//             renderBall:true
//         })
//    }
//     renderBallOrButton() {
// 		if (this.state.renderBall) {
// 		    return <div className="ball" style={this.state.ballPosition}></div>
// 		} else {
// 		    return <button onClick={this.buttonClickHandler} >Start</button>
// 		}
//     }

//     // bind ArrowRight keydown event
//     componentDidMount() {
      
//     }

//     render() {
//         return (
//             <div className="playground">
//                 {this.renderBallOrButton()}
//             </div>
//         )
//     }
//  }


//  export default App;
