import React, { useEffect, useState, useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// let city =  {
//   name: "Madrid",
//   country: "Spain"
// };

//Instead of putting the argument props, we can write the arguments directly
// function Hello({library, message, number}) {
//   // console.log(Object.keys(props));
//   return (
//     <div>
//       {/* <h1>Welcome to {props.library}!</h1>
//       <p>{props.message}</p>
//       <p>{Object.keys(props).length} Props Total</p> */}
//       <h1>Welcome to {library}</h1>
//       <p>{message}</p>
//       <p>{number} Props Total</p>
//     </div>
//   );
// }

// function Lake({name}) {
//   return (
//     <h1>{name}</h1>
//   )
// }

// function App() {
//   return (
//     <div>
//       <Lake name="Lake Tahoe" />
//       <Lake name="Angora Lake" />
//       <Lake name="Shirley Lake" />
//     </div>
//   );
// }

// const lakeList = [
//   "Echo Lake",
//   "Maud Lake",
//   "Cascade Lake"
// ];

// function App({lakes}) {
//   return (
//     <ul>
//       {lakes.map(
//         lake => (
//           <li>{lake}</li>
//         ))}
//     </ul>
//   );
// }

// const lakeList = [
//   {id: "1", name: "Echo", trailhead: "Echo"},
//   {id: "2", name: "Maud", trailhead: "Wrights"},
//   {id: "3", name: "Velma", trailhead: "Bayview"},
// ];

// function App({lakes}) {
//   return (
//     <div>
//       {lakes.map(lake => (
//         <div key={lake.id}>
//           <h2>{lake.name}</h2>
//           <p>Accessed by: {lake.trailhead}</p>
//         </div> 
//       ))}
//     </div>
//   );
// }

// const list = [1, 2, 3, 4, 5];

// function App({ items }) {
//   return  (
//     <ul>
//       {items.map(item => (
//         <li key={item.toString()}>{item}</li>
//       ))}
//     </ul>
//   )
// }

// function Lake() {
//   return (
//     <div>
//       <h1>Lake!</h1>
//     </div>
//   );
// }

// function SkiResort() {
//   return(
//     <div>
//       <h1>Ski Resort!</h1>
//     </div>
//   );
// }

// function App(props) {
//   // if(props.season === "summer") {
//   //   return <Lake name="Jenny Lake"/>;
//   // } else if (props.season === "winter") {
//   //   return <SkiResort name="JMHR" />;
//   // }
//   //Use ternary if instead
//   // return (
//   //   <div>
//   //     {(props.season === "summer") ? (
//   //       <Lake name="Jenny Lake" />
//   //     ) : props.season === "winter" ? (
//   //       <SkiResort name="JMHR" />
//   //     ) : (
//   //       <h1>Come back in winter or summer!</h1>
//   //     )}
//   //   </div>
//   // );
//   // return (
//   //   //React.Fragment shorthand <> </>
//   //   <React.Fragment> 
//   //     <Lake />
//   //     <SkiResort />
//   //   </React.Fragment>
//   // );
// }

//Using useState
// function App() {
//   //Using multiple state variables
//   const [year, setYear] = useState(2050);
//   const [manager, setManager] = useState("Alex");
//   const [status, setStatus] = useState("Open");
//   return (
//     <>
//       <div>
//         <h1>{year}</h1>
//         <button onClick={() => setYear(year + 1)}>New Year!</button>
//       </div>
//       <div>
//         <h1>Manager on Duty: {manager}</h1> 
//         <button onClick={() => setManager("Rachel")}>New Manager</button>
//       </div>
//       <div>
//         <h1>Status: {status}</h1>
//         <button onCLick={() => setStatus("Open")}>
//           Open
//         </button>
//         <button onCLick={() => setStatus("Back in 5")}>
//           Break
//         </button>
//         <button onCLick={() => setStatus("Closed")}>
//           Closed
//         </button>
//       </div>
//     </>
//   );
// }

// function Checkbox() {
//   const [checked, setChecked] = useState(false);
//   //Working with useEffect
//   useEffect(() => {
//     alert(`checked: ${checked.toString()}`);
//   })
//   return (
//     <>
//       <input type="checkbox" value={checked} onChange={() => setChecked(checked => !checked)} />
//       {checked ? "checked" : "not checked"}
//     </>
//   )
// }

// function App() {
//   const [val, setVal] = useState("");
//   const [val2, setVal2] = useState("");

//   //useEffect dependency array
//   useEffect(() => {
//     console.log(`field 1: ${val}`);
//   }, [val]);

//   useEffect(() => {
//     console.log(`field 2: ${val2}`);
//   }, [val2]);

//   return (
//     <>
//       <label>
//         Favorite Phrase:
//         <input value={val} onChange={e => setVal(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Second Favorite Phrase:
//         <input value={val2} onChange={e => setVal2(e.target.value)} />
//       </label>
//     </>
//   )
// }

// function GitHubUser({login}) {
//   const [data, setData] = useState(null);
//   useEffect(()=>{
//     fetch(`https://api.github.com/users/${login}`)
//       .then(res => res.json())
//       .then(setData)
//       .catch(console.error)
//   }, [login])

//   if(data) {
//     return (
//       <div>
//         <h1>{data.login}</h1>
//         <img src={data.avatar_url} width={100} alt="" />
//       </div>
//     ) 
//   }
//   return null
// }

// function App() {
//   return <GitHubUser login="moonhighway" />
// }

//Using useReducer
function Checkbox() {
  const [checked, toggle] = useReducer(checked => !checked, false)

  // function toggle() {
  //   setChecked(checked => !checked)
  // }

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "checked" : "not checked"}
    </>
  )
}

ReactDOM.render(

  // React.createElement("ul", { style: { color: "blue" }},
  // React.createElement("li", null, "Hot Dogs"),
  // React.createElement("li", null, "Hamburgers"),
  // React.createElement("li", null, "Pizza")
  // ),

  //Instead use JSX JavaScript XML
  // <ul>
  //   <li>Hot Dogs</li>
  //   <li>Hamburgers</li>
  //   <li>Pizza</li>
  //   <li>Sushi</li>
  // </ul>,

  // <Hello library="React" message="add dynamic data!" number={3}/>, //This calls the function Hello
  // <App items={list} />,
  // <App lakes={lake} />,
  // <App season="summer" />,
  // <App />,
  // <> <Lake /> <SkiResort /> </>,
  // <App />,
  // <h1 id="heading" className="cool-text">{city.name} is in {city.country}</h1>,
  <Checkbox />,
  document.getElementById('root')
);

// const snacks = ["popcorn", "pretzels", "pineapple"]; 
// console.log(snacks[0]);
// console.log(snacks[1]);
// console.log(snacks[2]);

//Array Destructuring
const [first, second, third] = ["popcorn", "pretzels", "pineapple"];
console.log(first);
console.log(second);
console.log(third);