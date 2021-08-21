import { useState, useEffect } from 'react'; // HOOKS DO REACT, desestruturando o objeto do react. useEffect VAI FICAR OBSERVANDO ALTERAÇÕES NO NOSSO ESTADO. 
import axios from 'axios';

import LoadImage from './img/giphy.webp';
import LogoRick from './img/logo.png';

export default function App() {
  const [data, setData] = useState([]); //useState é um Hooks, faz com que uma variavel se torne dinamica. 
  const [ isLoading, setIsload ] = useState(true);
  //requisição get
  //baseURL + character

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then( //then é algo que acontece depois, o res ou response parametriza o retorno do then 
      res => {
        setData(res.data.results) // data é a resposta da minha API
        setIsload(false);
      }
    )
  }, []);


  //console.log(data[0])
  if(isLoading){
    return (
      <div>
        <img src={LoadImage} alt='loading' />
      </div>
    )
  }


  return (
    <div className="content">
      <div className="container">
      <div className="logo-content">
        <img src={LogoRick} alt='logo' width="180px" height="auto"/>
      </div>
     
      <div className="cards-content">   
      {data.map((item, index) => (
        <div key={index} className="card">
          <img src={item.image} alt={item.name} width="180px" height="auto" />
          <h2> {item.name} </h2>
        </div>
      ))}
    </div>
    </div>
    </div>
  )
}

