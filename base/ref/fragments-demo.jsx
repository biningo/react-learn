class Columns extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <>
                <td>Hello</td>
                <td>World</td>
            </>
        )
    }


}
class Table extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <table>
                <tr>
                    <Columns></Columns>
                </tr>
            </table>
        )
    }


}


ReactDOM.render(
    <div>
        <Table></Table>

    </div>,
    document.getElementById("root")
)