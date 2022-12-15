import React, { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import axios from "axios";

import { useAuthContext } from "../hooks/useAuthContext";

const CadastroFuncionario = () => {
    const [nomeFuncionario, setNome] = useState("");
    const [cpfFuncionario, setCPF] = useState(0);
    const [cargoFuncionario, setCargo] = useState("");
    const [expedienteFuncionario, setExpediente] = useState("");

    const { user } = useAuthContext()

    const createFuncionarioNovo = async () => {
        if (!user) {
            console.log("Você precisa fazer log in")
            return
        }
        await axios.post("http://localhost:5000/api/funcionario/new", JSON.stringify({nome: nomeFuncionario, cpf: cpfFuncionario, cargo: cargoFuncionario, expediente: expedienteFuncionario}), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
          }).then((response) => {
            console.log("Funcionario Registrado");
        });
    };

    return (
        <div className="cadastro-modal">
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#mySecondModal">
            <AddCircleOutlineIcon/> Cadastrar Funcionario
            </button>

            <div class="modal" id="mySecondModal">
            <div class="modal-dialog">
                <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Cadastro de Funcionários</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body">
                    <label>Nome do Funcionario</label>
                    <input type="text" onChange={(event) => {setNome(event.target.value)}}/>
                    <label>CPF</label>
                    <input type="number" onChange={(event) => {setCPF(event.target.value)}}/>
                    <label>Cargo</label>
                    <input type="text" onChange={(event) => {setCargo(event.target.value)}}/>
                    <label>Carga Horária</label>
                    <input type="number" onChange={(event) => {setExpediente(event.target.value)}}/>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-success" onClick={createFuncionarioNovo} data-bs-dismiss="modal">Cadastrar</button>
                </div>

                </div>
            </div>
            </div>
        </div>  
        
    );
};

export default CadastroFuncionario;