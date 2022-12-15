import React, { useEffect, useState } from "react";
import axios from "axios";

import { useAuthContext } from "../hooks/useAuthContext";

import EditarFuncionario from "./editarFuncionarios";

const Lista = () => {
    const [listaFuncionarios, setListaFuncionarios] = useState([]);

    const { user } = useAuthContext()

    const deleteFuncionario = (id) => {
        if (!user) {
            console.log("Você precisa fazer log in")
            return
        }
        axios.delete(`https://sispet-app.adaptable.app/api/funcionario/delete/${id}`, {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        });
        setListaFuncionarios(listaFuncionarios.filter(funcionario => funcionario._id !== id));
    };
    
    useEffect(() => {
        if (!user) {
            console.log("Você precisa fazer log in")
            return
        }
        axios.get("https://sispet-app.adaptable.app/api/funcionarios", {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }).then((response) => {
            setListaFuncionarios(response.data);
        });
    }, [user]);

    return (
        <div className="display-funcionarios">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Cargo</th>
                        <th>Carga Horária</th>
                        <th colspan="2" class="text-center">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {listaFuncionarios.map((funcionario) => {
                        return(
                        <tr key={funcionario._id}>
                            <td>{funcionario.nome}</td>
                            <td>{funcionario.cpf}</td>
                            <td>{funcionario.cargo}</td>
                            <td>{funcionario.expediente}</td>
                            <td><EditarFuncionario funcionario={funcionario}/></td>
                            <td><button className="btn btn-danger" onClick={() => deleteFuncionario(funcionario._id)}>Deletar</button></td>
                        </tr>
                        )
                    }
                    )}
                </tbody>
                </table>
        </div>
    );
};

export default Lista;