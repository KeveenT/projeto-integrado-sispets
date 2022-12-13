import React, { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import axios from "axios";

import { useAuthContext } from "../hooks/useAuthContext";

const CadastroCliente = () => {
    const [nomeCliente, setNome] = useState("");
    const [cpfCliente, setCPF] = useState(0);
    const [cepCliente, setCEP] = useState(0);
    const [endereçoCliente, setEndereço] = useState("");
    const [telefoneCliente, setTelefone] = useState(0);
    const [emailCliente, setEmail] = useState("");

    const { user } = useAuthContext()

    const createClienteNovo = async () => {
        if (!user) {
            console.log("Você precisa fazer log in")
            return
        }
        await axios.post("https://sispet-app.adaptable.app/api/cliente/new", JSON.stringify({nome: nomeCliente, cpf: cpfCliente, cep: cepCliente, endereço: endereçoCliente, telefone: telefoneCliente, email:emailCliente}), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
          }).then((response) => {
            console.log("Cliente Registrado");
        });
    };

    return (
        <div className="cadastro-modal">
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#mySecondModal">
            <AddCircleOutlineIcon/> Cadastrar Cliente
            </button>

            <div class="modal" id="mySecondModal">
            <div class="modal-dialog">
                <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Cadastro de Clientes</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body">
                    <label>Nome do Cliente</label>
                    <input type="text" onChange={(event) => {setNome(event.target.value)}}/>
                    <label>CPF</label>
                    <input type="number" onChange={(event) => {setCPF(event.target.value)}}/>
                    <label>CEP</label>
                    <input type="number" onChange={(event) => {setCEP(event.target.value)}}/>
                    <label>Endereço</label>
                    <input type="text" onChange={(event) => {setEndereço(event.target.value)}}/>
                    <label>Telefone</label>
                    <input type="number" onChange={(event) => {setTelefone(event.target.value)}}/>
                    <label>email</label>
                    <input type="text" onChange={(event) => {setEmail(event.target.value)}}/>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-success" onClick={createClienteNovo} data-bs-dismiss="modal">Cadastrar</button>
                </div>

                </div>
            </div>
            </div>
        </div>  
        
    );
};

export default CadastroCliente;