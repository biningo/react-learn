
function Item(props){
    return (
        <li>{props.value}</li>
    )
}

function ListItems(){
    const numbers=[1,2,3,4]
    const items = numbers.map(n=>{
        return <Item key={n} value={n}></Item>
    })
    return (
        <div>
            {items}
        </div>
    )
}



function AbcList(){
    const arr = ['a','b','c','d']
    return (
        <div>
            {
                arr.map(v=>{
                    return (
                        <h1>
                        <Item value={v} key={v}></Item>
                        </h1>
                    )
                })
            }
        </div>
    )
}

ReactDOM.render(
    <div>
    <ListItems></ListItems>
    <AbcList></AbcList>
    </div>,
    document.getElementById("root")
)