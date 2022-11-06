import React, { useEffect, useState } from "react";
import axios from "axios";

import EditarCliente from "./editarClientes";

const Lista = () => {
    const [listaClientes, setListaClientes] = useState([]);

    const deleteCliente = (id) => {
        axios.delete(`http://localhost:5000/api/cliente/delete/${id}`);
        setListaClientes(listaClientes.filter(cliente => cliente._id !== id));
    };
    
    useEffect(() => {
        axios.get("http://localhost:5000/api/clientes").then((response) => {
            setListaClientes(response.data);
        });
    }, []);

    return (
        <div className="display-clientes">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>CEP</th>
                        <th>Endereço</th>
                        <th>Telefone</th>
                        <th>email</th>
                        <th colspan="2" class="text-center">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {listaClientes.map((cliente) => {
                        return(
                        <tr key={cliente._id}>
                            <td>{cliente.nome}</td>
                            <td>{cliente.cpf}</td>
                            <td>{cliente.cep}</td>
                            <td>{cliente.endereço}</td>
                            <td>{cliente.telefone}</td>
                            <td>{cliente.email}</td>
                            <td><EditarCliente cliente={cliente}/></td>
                            <td><button className="btn btn-danger" onClick={() => deleteCliente(cliente._id)}>Deletar</button></td>
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