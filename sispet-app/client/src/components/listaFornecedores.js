import React, { useEffect, useState } from "react";
import axios from "axios";

import { useAuthContext } from "../hooks/useAuthContext";

import EditarFornecedor from "./editarFornecedores";

const Lista = () => {
    const [listaFornecedores, setListaFornecedores] = useState([]);

    const { user } = useAuthContext()

    const deleteFornecedor = (id) => {
        if (!user) {
            console.log("Você precisa fazer log in")
            return
        }
        axios.delete(`https://sispet-app.adaptable.app/api/fornecedor/delete/${id}`, {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        });
        setListaFornecedores(listaFornecedores.filter(fornecedor => fornecedor._id !== id));
    };
    
    useEffect(() => {
        if (!user) {
            console.log("Você precisa fazer log in")
            return
        }
        axios.get("https://sispet-app.adaptable.app/api/fornecedores", {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }).then((response) => {
            setListaFornecedores(response.data);
        });
    }, [user]);

    return (
        <div className="display-fornecedores">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CNPJ</th>
                        <th>CEP</th>
                        <th>Endereço</th>
                        <th>Telefone</th>
                        <th>Fornecimento</th>
                        <th colspan="2" class="text-center">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {listaFornecedores.map((fornecedor) => {
                        return(
                        <tr key={fornecedor._id}>
                            <td>{fornecedor.nome}</td>
                            <td>{fornecedor.cnpj}</td>
                            <td>{fornecedor.cep}</td>
                            <td>{fornecedor.endereço}</td>
                            <td>{fornecedor.telefone}</td>
                            <td>{fornecedor.fornecimento}</td>
                            <td><EditarFornecedor fornecedor={fornecedor}/></td>
                            <td><button className="btn btn-danger" onClick={() => deleteFornecedor(fornecedor._id)}>Deletar</button></td>
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