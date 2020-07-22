

class Student extends React.Component {

    constructor(props) {
        super(props);

        this.state = { name: "biningo", age: 19 };

    }


    render() {
        return (
            <div>
                <li>Name:{this.state.name}</li>
                <li>Age:{this.state.age}</li>
            </div>
        )

    }

}

ReactDOM.render(
    <Student></Student>,
    document.getElementById("root")
);