import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

import EditarVacina from "./editarVacinas";

const Lista = () => {
    const [listaVacinas, setListaVacinas] = useState([]);

    const { user } = useAuthContext()

    const deleteVacina = (id) => {
        if (!user) {
            console.log("Você precisa fazer log in")
            return
        }
        axios.delete(`https://sispet-app.adaptable.app/api/vacina/delete/${id}`, {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        });
        setListaVacinas(listaVacinas.filter(vacina => vacina._id !== id));
    };
    
    useEffect(() => {
        if (!user) {
            console.log("Você precisa fazer log in")
            return
        }
        axios.get("https://sispet-app.adaptable.app/api/vacinas", {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }).then((response) => {
            setListaVacinas(response.data);
        });
    }, [user]);

    return (
        <div className="display-vacinas">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Doses</th>
                        <th>Lote</th>
                        <th>Fabricante</th>
                        <th>Fornecedor</th>
                        <th colspan="2" class="text-center">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {listaVacinas.map((vacina) => {
                        return(
                        <tr key={vacina._id}>
                            <td>{vacina.nome}</td>
                            <td>{vacina.doses}</td>
                            <td>{vacina.lote}</td>
                            <td>{vacina.fabricante}</td>
                            <td>{vacina.fornecedor}</td>
                            <td><EditarVacina vacina={vacina}/></td>
                            <td><button className="btn btn-danger" onClick={() => deleteVacina(vacina._id)}>Deletar</button></td>
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