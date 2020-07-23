const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};


function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
}
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature)
    if (Number.isNaN(input)) {
        return ''
    }
    const output = convert(input)
    return (Math.round(output * 1000) / 1000).toString()  //保留3位小数
}


class TemperatureInput extends React.Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }


    render() {
        const scale = this.props.scale;
        const temperature = this.props.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                    onChange={this.handleChange} />
            </fieldset>
        )
    }

}



function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { temperature: '', scale:'c' }
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    }

    handleCelsiusChange(temperature) {
        this.setState({ scale: 'c', temperature })
    }

    handleFahrenheitChange(temperature) {
        this.setState({ scale: 'f', temperature })
    }

    render() {
        const scale = this.state.scale
        const temperature = this.state.temperature

        const celsius = scale == 'f' ? tryConvert(temperature,toCelsius) : temperature
        const fahrenheit = scale == 'c' ? tryConvert(temperature,toFahrenheit) : temperature

        return (
            <div>

                <TemperatureInput
                    scale='c'
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange} >

                </TemperatureInput>

                <TemperatureInput
                    scale='f'
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}>
                </TemperatureInput>

                <BoilingVerdict celsius={celsius} ></BoilingVerdict>
                
            </div>

        )
    }



}





ReactDOM.render(
    <div>
        <Calculator></Calculator>
    </div>,
    document.getElementById("root")
)