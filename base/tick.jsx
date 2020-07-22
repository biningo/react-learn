class Clock2 extends React.Component{
    render(){
        return (
            <div>
            <h1>Hello, world!</h1>
            <h2>现在是 {this.props.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>现在是 {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock2 date={new Date()} />,
    document.getElementById('example')
  );
}

setInterval(tick, 1000);