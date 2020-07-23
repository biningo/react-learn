
function Item(props){
    return (
        <li>{props.value}</li>
    )
}
// key 只是在兄弟节点之间必须唯一 不需要是全局唯一
//key不能被组件读取
// key 帮助 React 识别哪些元素改变了，比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识。
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