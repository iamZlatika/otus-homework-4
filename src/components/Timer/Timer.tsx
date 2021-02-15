import React from "react";
import "./Timer.css";

interface TimerState {
  seconds: number;
}
interface TimerProps {
  onClose: () => void;
}
export default class Timer extends React.Component<TimerProps, TimerState> {
  timer: any;

  constructor(props: TimerProps) {
    super(props);
    this.state = {
      seconds: 0,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.setState((prevState) => ({ seconds: prevState.seconds + 1 })), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="timer">
        <span>You are playing sec</span> {this.state.seconds}
        <button className="btn" onClick={this.props.onClose}>
          X
        </button>
      </div>
    );
  }
}
