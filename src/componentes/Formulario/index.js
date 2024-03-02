import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [estilo, setEstilo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeEquipe, setNomeEquipe] = useState('');
    const [corEquipe, setCorEquipe] = useState('');


    const aoSalvar = (e) => {
        e.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            estilo,
            imagem,
            time
        })
        setNome('')
        setEstilo('')
        setImagem('')
        setTime('')

    }

    const aoCriar = (e) => {
        e.preventDefault();
        props.cadastrarTime({
            nome: nomeEquipe,
            cor: corEquipe
        })

        setNomeEquipe('');
        setCorEquipe('');
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Fill in the form to create a team card</h2>
                <Campo obrigatorio={true} label="Name" placeholder='Enter your name' valor={nome} aoAlterado={valor => setNome(valor)} />
                <Campo obrigatorio={true} label="Fighting Style" placeholder='Enter your fighting style'valor={estilo} aoAlterado={valor => setEstilo(valor)} />
                <Campo label="Image" placeholder='Enter the image adress' valor={imagem} aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa obrigatorio={true} label="Team" itens={props.times} valor={time} aoAlterado={valor => setTime(valor)}/>
                <Botao>Create Card</Botao>
            </form>
            <form onSubmit={aoCriar}>
                <h2>Fill in the form to create a new team</h2>
                <Campo obrigatorio label="Name" placeholder='Enter the team name' valor={nomeEquipe} aoAlterado={valor => setNomeEquipe(valor)} />
                <Campo obrigatorio type="color" label="Color" placeholder='Enter the team color' valor={corEquipe} aoAlterado={valor => setCorEquipe(valor)} />
                <Botao>Create New Team</Botao>
            </form>
        </section>
    )
}

export default Formulario