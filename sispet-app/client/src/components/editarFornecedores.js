import React, { useState } from "react";
import axios from "axios";

import { useAuthContext } from "../hooks/useAuthContext";

const EditarFornecedor = ({ fornecedor }) => {
    const [nomeFornecedor, setNome] = useState(fornecedor.nome);
    const [cnpjFornecedor, setCNPJ] = useState(fornecedor.cnpj);
    const [cepFornecedor, setCEP] = useState(fornecedor.cep);
    const [endereçoFornecedor, setEndereço] = useState(fornecedor.endereço);
    const [telefoneFornecedor, setTelefone] = useState(fornecedor.telefone);
    const [fornecimentoFornecedor, setFornecimento] = useState(fornecedor.fornecimento);
    const [fornecedorId] = useState(fornecedor._id);

    const { user } = useAuthContext()

    const updateFornecedor = (id) => {
        if (!user) {
            console.log("Você precisa fazer log in")
            return
        }
        axios.put(`https://sispet-app.adaptable.app/api/fornecedor/update/${id}`, JSON.stringify({nome: nomeFornecedor, cnpj: cnpjFornecedor, cep: cepFornecedor, endereço: endereçoFornecedor, telefone: telefoneFornecedor, fornecimento: fornecimentoFornecedor, id: fornecedorId}), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
          }).then((response) => {
            console.log("Fornecedor Atualizado");
        });
    };
    
    //É necessário usar o id como id do modal para que os identificadores dos respectivos registros sejam utilizados
    return (
        <div className="update-modal">
            <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#id${fornecedor._id}`}>
                Editar
            </button>

            <div class="modal" id={`id${fornecedor._id}`}> 
            <div class="modal-dialog">
                <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Editar Fornecedores</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body">
                    <label>Nome do Fornecedor</label>
                    <input type="text" value={nomeFornecedor} onChange={(event) => {setNome(event.target.value)}}/>
                    <label>CNPJ</label>
                    <input type="text" value={cnpjFornecedor} onChange={(event) => {setCNPJ(event.target.value)}}/>
                    <label>CEP</label>
                    <input type="number" value={cepFornecedor} onChange={(event) => {setCEP(event.target.value)}}/>
                    <label>Endereço</label>
                    <input type="text" value={endereçoFornecedor} onChange={(event) => {setEndereço(event.target.value)}}/>
                    <label>Telefone</label>
                    <input type="text" value={telefoneFornecedor} onChange={(event) => {setTelefone(event.target.value)}}/>
                    <label>Fornecimento</label>
                    <input type="text" value={fornecimentoFornecedor} onChange={(event) => {setFornecimento(event.target.value)}}/>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick={() => updateFornecedor(fornecedor._id)}>Salvar</button>
                </div>

                </div>
            </div>
            </div>
        </div>  
    );

};

export default EditarFornecedor;