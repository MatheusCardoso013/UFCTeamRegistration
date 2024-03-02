import hexToRgba from 'hex-to-rgba';
import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => { 
    return (
        props.colaboradores.length > 0 && <section className='time' style={{backgroundColor: hexToRgba(props.cor, '0.6')}}>
            <input onChange={evento => props.mudarCor(evento.target.value, props.id)} type='color' className='input-cor' value={props.cor}  />
            <h3 style={{borderColor: props.cor}}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map(colaborador => {
                return (
                    <Colaborador 
                        corDeFundo={props.cor} 
                        key={colaborador.nome} 
                        id={colaborador.id} 
                        nome={colaborador.nome} 
                        estilo={colaborador.estilo} 
                        imagem={colaborador.imagem} 
                        aoDeletar={props.aoDeletar}
                    />)
            })}
            </div> 
        </section>
    )
}

export default Time 