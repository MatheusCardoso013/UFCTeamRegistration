import { AiFillCloseCircle} from "react-icons/ai"
import './Colaborador.css'

const Colaborador = (props) => {
    return (
        <div className='colaborador'>
            <AiFillCloseCircle 
                size={25} 
                className='deletar' 
                onClick={() => props.aoDeletar(props.id)}
            />
            <div className='cabecalho' style={{backgroundColor: props.corDeFundo}}>
                <img src={props.imagem} alt={props.nome}></img>
            </div>

            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.estilo}</h5>
            </div>
        </div>
    )
}

export default Colaborador