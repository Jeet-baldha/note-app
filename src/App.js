import '../src/CSS/App.css';
import Todo from './Components/TodoList';





// function App() {

//   var [count,setCount] = useState(0);
 
//   function increase(){
  
//     setCount(count + 1);
  
//   }
//   function decrease(){ 
  
//     setCount(count - 1);
  
//   }

//   return (
    
//     <div className='box'>
      
//        <h1>{count}</h1>
//        <button onClick={increase} >increase</button>
//        <button onClick={decrease} >decrease</button>
      
//     </div>

//   );
// }

// function App(){
//   var [time,setTime] = useState(new Date().getTime());

//     function getTime(){
//         setTime(new Date().toLocaleTimeString());
//     }

//     return (
//         <div>
//             <h1>{time}</h1>
//             <button type="button" onClick={getTime}>Get Time</button>
//         </div>
//     );
// }


// function App(){


//   return <Time />;
// }

function App(){

  return <Todo />;

}

export default App;
