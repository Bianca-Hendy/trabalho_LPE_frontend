import { useContext } from 'react'
import Alerta from '../../comuns/Alerta';
import LocadoraContext from './LocadoraContext';
import Valida from '../../comuns/Valida'
import Entrada from '../../comuns/Entrada'

function Form() {

    const { objeto, handleChange, acaoCadastrar, alerta } = useContext(LocadoraContext);

    return (
        <Valida id="modalEdicao" titulo="Locadora" idform="formulario" acaoCadastrar={acaoCadastrar}>
            <Alerta alerta={alerta} />
            <Entrada value={objeto.codigo}
                id="txtCodido"
                tipo="number"
                name="codigo"
                label="Código"
                requerido={false}
                readonly={true}
                onchange={handleChange}
            />
            <Entrada value={objeto.nome}
                id="txtNome"
                name="nome"
                label="Nome"
                tipo="text"
                readonly={false}
                onchange={handleChange}
                requerido={true}
            />
            <Entrada value={objeto.endereco}
                id="txtEndereco"
                name="endereco"
                label="Endereco"
                tipo="text"
                readonly={false}
                onchange={handleChange}
                requerido={true}
            />
            <Entrada value={objeto.numero}
                id="txtNumero"
                name="numero"
                label="Numero"
                tipo="number"
                readonly={false}
                onchange={handleChange}
                requerido={true}
                maximocaracteres={5}
            />
        </Valida>
    )
}

export default Form;