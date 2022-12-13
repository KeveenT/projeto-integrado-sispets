import React, { useState } from "react";
import axios from "axios";

import { useAuthContext } from "../hooks/useAuthContext";

const EditarCliente = ({ cliente }) => {
    const [nomeCliente, setNome] = useState(cliente.nome);
    const [cpfCliente, setCPF] = useState(cliente.cpf);
    const [cepCliente, setCEP] = useState(cliente.cep);
    const [endereçoCliente, setEndereço] = useState(cliente.endereço);
    const [telefoneCliente, setTelefone] = useState(cliente.telefone);
    const [emailCliente, setEmail] = useState(cliente.email);
    const [clienteId] = useState(cliente._id);

    const { user } = useAuthContext()

    const updateCliente = (id) => {
        if (!user) {
            console.log("Você precisa fazer log in")
            return
        }
        axios.put(`https://sispet-app.adaptable.app/api/cliente/update/${id}`, JSON.stringify({nome: nomeCliente, cpf: cpfCliente, cep: cepCliente, endereço: endereçoCliente, telefone: telefoneCliente, email: emailCliente, id: clienteId}), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
          }).then((response) => {
            console.log("Cliente Atualizado");
        });
    };
    
    //É necessário usar o id como id do modal para que os identificadores dos respectivos registros sejam utilizados
    return (
        <div className="update-modal">
            <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#id${cliente._id}`}>
                Editar
            </button>

            <div class="modal" id={`id${cliente._id}`}> 
            <div class="modal-dialog">
                <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Editar Clientes</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body">
                    <label>Nome do Cliente</label>
                    <input type="text" value={nomeCliente} onChange={(event) => {setNome(event.target.value)}}/>
                    <label>CPF</label>
                    <input type="text" value={cpfCliente} onChange={(event) => {setCPF(event.target.value)}}/>
                    <label>CEP</label>
                    <input type="number" value={cepCliente} onChange={(event) => {setCEP(event.target.value)}}/>
                    <label>Endereço</label>
                    <input type="text" value={endereçoCliente} onChange={(event) => {setEndereço(event.target.value)}}/>
                    <label>Telefone</label>
                    <input type="text" value={telefoneCliente} onChange={(event) => {setTelefone(event.target.value)}}/>
                    <label>email</label>
                    <input type="text" value={emailCliente} onChange={(event) => {setEmail(event.target.value)}}/>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick={() => updateCliente(cliente._id)}>Salvar</button>
                </div>

                </div>
            </div>
            </div>
        </div>  
    );

};

export default EditarCliente;