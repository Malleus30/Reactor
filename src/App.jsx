import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {

  const [result, setResult] = useState("");

function handleSubmit(event){
  
  console.log(event.target);
  const firstName = inp.value;
  const serverUrl = 'https://api.genderize.io';
  const countrysUrl  = 'https://api.nationalize.io';
  const url = `${serverUrl}?name=${firstName}`; 

  event.preventDefault();

  let message='';

  fetch(url)
       .then((response) => {
        return response.json();
      })
      .then((data) => {
        message = data.gender;
        setResult(message);
      });
    
  inp.value = '';
}
  

  return (
    <form onSubmit={handleSubmit}>
     <input id = "inp" type="text"/>
     <div>
       <h2>it is {result}</h2>
     </div>
    <button type="submit">Отправить</button>
  </form>
  )
}

export default App
