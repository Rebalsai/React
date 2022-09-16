import { Component } from "react";

class Timer extends Component{
    constructor(props){
    super(props);
    this.state = {date: new Date()};
    }

    componentDidMount(){
        this.timerID = setInterval(
            ()=>this.updateTime(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    updateTime(){
        this.setState({
            date:new Date()
        });
    }

    render(){
        return(
            <>
            <h2>The present time is = {this.state.date.toLocaleTimeString()} </h2>
            <button onClick={this.componentWillUnmount.bind(this)}>Stop</button>
            </>
        );
    }
}
export default Timer;