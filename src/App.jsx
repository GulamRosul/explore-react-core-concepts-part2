import './App.css'
import Counter from './cuonter';
import Team from './team';
import User from './user';
import Friends from './friends';

function App() {
 
  function handleClick() {
    alert('button clicked');
  }
   
  const handleClick2 = () => {
    alert('button 2 clicked')
  }
  return (
    <>
 
      <h1>React Core Concepts 2</h1>

      <Friends></Friends>

      <User></User>
      
      <Team></Team>
      <Counter></Counter>


      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={()=>{alert('third clicked')}}>third</button>
    
    
    </>
  )
}

export default App
