

function ListItem(props) {
    return (
    <li>{props.number}</li>
    )
}


class NumberList extends React.Component{
    constructor(props){
        super(props)
        this.state = {numbers:props.numbers}
    }


    render(){
        const numbers = this.state.numbers
        console.log(numbers);
        const s = numbers.map(x=>{
            return <ListItem number={x} ></ListItem>
        });
        return (
            <ul>

              {s}
            
            </ul>
        )
    }


}



ReactDOM.render(
    <div>
        <NumberList numbers={[1,2,3,4,5]} ></NumberList>
    </div>,
    document.getElementById("root")
)