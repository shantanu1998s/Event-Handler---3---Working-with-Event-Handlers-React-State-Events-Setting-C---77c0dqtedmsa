import React, {useState} from 'react'
import '../styles/App.css';
const App = () => {

  const [textInput, setTextInput] = useState("");
  const [numInput, setNumInput] = useState("");


 const handleInputText = (event) => {
    const value = event.target.value;
    console.log(`Input in #text-input is ${value}`);
    setTextInput(textInput + value);
  };

  const handleInputNum = (event) => {
    const value = event.target.value;
    console.log(`Input in #num-input is ${value}`);
    setNumInput(numInput + value);
  };

  // do not change id of input elements
  return (
    <div id="main">
      <label htmlFor='text-input'>Text Input:- </label>
      <input id="text-input" type={'text'} onChange={handleInputText} />

      <br/>
      <br/>

      <label htmlFor='num-input'>Number input</label>
      <input id="num-input"  type={'number'} onChange={handleInputNum} />
      <br/>
    </div>
  )
}


export default App;
