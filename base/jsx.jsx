

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



const MyComponents = {
    DatePicker: function(props){
    return <div>{props.username}-{props.age}</div>
    }
}
const prop = {username:"bingo",age:18}
ReactDOM.render(
    <div>
        <NumberList numbers={[1,2,3,4,5]} ></NumberList>
        {/* 子组件  以及展开表达式*/}
        <MyComponents.DatePicker {...prop} ></MyComponents.DatePicker> 
    </div>,
    document.getElementById("root")
)