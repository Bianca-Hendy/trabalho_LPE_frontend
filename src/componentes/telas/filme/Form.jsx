import { useContext } from 'react'
import Alerta from '../../comuns/Alerta';
import FilmeContext from './FilmeContext';
import Entrada from '../../comuns/Entrada';
import Valida from '../../comuns/Valida';
import CampoSelect from '../../comuns/CampoSelect';

function Form() {

    const { objeto, handleChange, acaoCadastrar, alerta, listaLocadoras }
        = useContext(FilmeContext);

    return (
        <Valida id="modalEdicao" titulo="Filme" idformulario="formEdicao"
            acaoCadastrar={acaoCadastrar}>
            <Alerta alerta={alerta} />
            <Entrada id="txtCodigo"
                label="Código" tipo="number"
                name="codigo"
                value={objeto.codigo}
                handlechange={handleChange}
                requerido={false}
                readonly={true}
                maximocaracteres={5} />
            <Entrada id="txtNome"
                label="Nome" tipo="text"
                name="nome"
                value={objeto.nome}
                onchange={handleChange}
                requerido={true}
                readonly={false}
                textovalido="Nome OK"
                textoinvalido="Informe o nome"
                maximocaracteres={40} />
            <Entrada id="txtGenero"
                label="Genero"
                tipo="text"
                name="genero"
                value={objeto.genero}
                onchange={handleChange}
                requerido={true}
                readonly={false}
                textovalido="Genero OK"
                textoinvalido="Informe o genero"
                maximocaracteres={40} />
            <CampoSelect id="txtAtivo"
                label="Ativo"
                name="ativo"
                value={objeto.ativo}
                handlechange={handleChange}
                requerido={true}
                textovalido="Ativo OK"
                textoinvalido="Informe se o produto está ativo">
                <option value={true}>SIM</option>
                <option value={false}>NÃO</option>
            </CampoSelect>
            <Entrada id="txtValor"
                label="Valor" tipo="number"
                name="valor"
                value={objeto.valor}
                onchange={handleChange}
                requerido={true}
                readonly={false}
                textovalido="Valor OK"
                textoinvalido="Informe o valor" />
            <CampoSelect id="txtLocadora"
                label="Locadora"
                name="locadora"
                value={objeto.locadora}
                handlechange={handleChange}
                requerido={true}
                textovalido="Locadora OK"
                textoinvalido="Informe a locadora">
                {
                    listaLocadoras.map((cat) => (
                        <option key={cat.codigo} value={cat.codigo}>
                            {cat.nome}
                        </option>
                    ))
                }
            </CampoSelect>
        </Valida>
    )
}

export default Form;
