import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Footer from './componentes/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Chute Boxe',
      cor: '#D9F7E9' 
    },
    {
      id: uuidv4(),
      nome: 'Eagles MMA',
      cor: '#FDE7E8' 
    },
    {
      id: uuidv4(),
      nome: 'America Top Team',
      cor: '#E8F8FF' 
    },
    {
      id: uuidv4(),
      nome: 'Kill Cliff FC',
      cor: '#FAE9F5' 
    }
  ])

  const inicial = [
    {
      favorito: false,
      id: uuidv4(),
      nome: 'Charles Oliveira',
      estilo: 'BJJ',
      imagem: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/2504169.png&w=350&h=254',
      time: times[0].nome
    },
    {
      favorito: false,
      id: uuidv4(),
      nome: 'Ian Garry',
      estilo: 'Kickboxing',
      imagem: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/4738092.png&w=350&h=254',
      time: times[0].nome
    },
    {
      favorito: false,
      id: uuidv4(),
      nome: 'Elves Brener',
      estilo: 'BJJ',
      imagem: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/5110006.png&w=350&h=254',
      time: times[0].nome
    },
    {
      favorito: false,
      id: uuidv4(),
      nome: 'Islam Makhachev',
      estilo: 'Wrestling',
      imagem: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/3332412.png&w=350&h=254',
      time: times[1].nome
    },
    {
      favorito: false,
      id: uuidv4(),
      nome: 'Khabib Nurmagomedov',
      estilo: 'Wrestling',
      imagem: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/2611557.png&w=350&h=254',
      time: times[1].nome
    },
    {
      favorito: false,
      id: uuidv4(),
      nome: 'Alexandre Pantoja',
      estilo: 'BJJ',
      imagem: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/2560746.png&w=350&h=254',
      time: times[2].nome
    }
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  const aoNovoColaboradorAdd = (colaborador) => {   
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time
    }));

  }

  function cadastrarTime(novoTime) {
    setTimes([...times, {...novoTime, id: uuidv4() }])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdd(colaborador)}
      />
      {times.map(time => 
      <Time 
        key={time.nome} 
        id={time.id}
        nome={time.nome} 
        cor={time.cor}  
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar={deletarColaborador}
        mudarCor={mudarCorDoTime} 
      />)}
      <Footer />
    </div>
  );
}

export default App;
