import React, { useState } from "react";
import axios from "axios";

import { useAuthContext } from "../hooks/useAuthContext";

const EditarFuncionario = ({ funcionario }) => {
    const [nomeFuncionario, setNome] = useState(funcionario.nome);
    const [cpfFuncionario, setCPF] = useState(funcionario.cpf);
    const [cargoFuncionario, setCargo] = useState(funcionario.cargo);
    const [expedienteFuncionario, setExpediente] = useState(funcionario.expediente);
    const [funcionarioId] = useState(funcionario._id);

    const { user } = useAuthContext()

    const updateFuncionario = (id) => {
        if (!user) {
            console.log("Você precisa fazer log in")
            return
        }
        axios.put(`http://localhost:5000/api/funcionario/update/${id}`, JSON.stringify({nome: nomeFuncionario, cpf: cpfFuncionario, cargo: cargoFuncionario, expediente: expedienteFuncionario, id: funcionarioId}), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
          }).then((response) => {
            console.log("Funcionario Atualizado");
        });
    };
    
    //É necessário usar o id como id do modal para que os identificadores dos respectivos registros sejam utilizados
    return (
        <div className="update-modal">
            <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#id${funcionario._id}`}>
                Editar
            </button>

            <div class="modal" id={`id${funcionario._id}`}> 
            <div class="modal-dialog">
                <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Editar Funcionários</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body">
                    <label>Nome do Funcionario</label>
                    <input type="text" value={nomeFuncionario} onChange={(event) => {setNome(event.target.value)}}/>
                    <label>CPF</label>
                    <input type="number" value={cpfFuncionario} onChange={(event) => {setCPF(event.target.value)}}/>
                    <label>Cargo</label>
                    <input type="text" value={cargoFuncionario} onChange={(event) => {setCargo(event.target.value)}}/>
                    <label>Carga Horária</label>
                    <input type="number" value={expedienteFuncionario} onChange={(event) => {setExpediente(event.target.value)}}/>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick={() => updateFuncionario(funcionario._id)}>Salvar</button>
                </div>

                </div>
            </div>
            </div>
        </div>  
    );

};

export default EditarFuncionario;