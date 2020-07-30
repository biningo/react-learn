import React, {useState} from "react";
import useMyHook from "./MyHook";
// https://zhuanlan.zhihu.com/p/65773322
interface Props {
    username:string
    age:number
}


const App5 = (props:Props)=>{

    var [username,setUsername] = useState(props.username);
    var [age,setAge] = useState(props.age);
    const [name,age2] = useMyHook("bingo",18);
    console.log(name,age2);

    return (
        <div>
            <h3>{username}-{age}</h3>
            <input onChange={e=>{setUsername(e.target.value)}} value={username}  />
            <br />
            <input onChange={e=>{setAge(Number(e.target.value))}} value={age}  />
        </div>
    )

};

//第二个参数防止无线循环
//
// function App() {
//     const [data, setData] = useState({ hits: [] });
//
//     useEffect(async () => {
//         const result = await axios(
//             'http://localhost/api/v1/search?query=redux',
//         );
//
//         setData(result.data);
//     }, []);
//
//     return (
//         <ul>
//             {data.hits.map(item => (
//                 <li key={item.objectID}>
//                     <a href={item.url}>{item.title}</a>
//                 </li>
//             ))}
//         </ul>
//     );
// }


export default App5;