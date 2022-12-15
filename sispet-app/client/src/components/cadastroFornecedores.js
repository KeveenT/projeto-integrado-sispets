import React, { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import axios from "axios";

import { useAuthContext } from "../hooks/useAuthContext";

const CadastroFornecedor = () => {
    const [nomeFornecedor, setNome] = useState("");
    const [cnpjFornecedor, setCNPJ] = useState(0);
    const [cepFornecedor, setCEP] = useState(0);
    const [endereçoFornecedor, setEndereço] = useState("");
    const [telefoneFornecedor, setTelefone] = useState(0);
    const [fornecimentoFornecedor, setFornecimento] = useState("");

    const { user } = useAuthContext()

    const createFornecedorNovo = async () => {
        if (!user) {
            console.log("Você precisa fazer log in")
            return
        }
        await axios.post("http://localhost:5000/api/fornecedor/new", JSON.stringify({nome: nomeFornecedor, cnpj: cnpjFornecedor, cep: cepFornecedor, endereço: endereçoFornecedor, telefone: telefoneFornecedor, fornecimento:fornecimentoFornecedor}), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
          }).then((response) => {
            console.log("Fornecedor Registrado");
        });
    };

    return (
        <div className="cadastro-modal">
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#mySecondModal">
            <AddCircleOutlineIcon/> Cadastrar Fornecedor
            </button>

            <div class="modal" id="mySecondModal">
            <div class="modal-dialog">
                <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Cadastro de Fornecedores</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body">
                    <label>Nome do Fornecedor</label>
                    <input type="text" onChange={(event) => {setNome(event.target.value)}}/>
                    <label>CNPJ</label>
                    <input type="number" onChange={(event) => {setCNPJ(event.target.value)}}/>
                    <label>CEP</label>
                    <input type="number" onChange={(event) => {setCEP(event.target.value)}}/>
                    <label>Endereço</label>
                    <input type="text" onChange={(event) => {setEndereço(event.target.value)}}/>
                    <label>Telefone</label>
                    <input type="number" onChange={(event) => {setTelefone(event.target.value)}}/>
                    <label>Fornecimento</label>
                    <input type="text" onChange={(event) => {setFornecimento(event.target.value)}}/>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-success" onClick={createFornecedorNovo} data-bs-dismiss="modal">Cadastrar</button>
                </div>

                </div>
            </div>
            </div>
        </div>  
        
    );
};

export default CadastroFornecedor;