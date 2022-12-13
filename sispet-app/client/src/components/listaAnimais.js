import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

import EditarAnimal from "./editarAnimais";

const Lista = () => {
    const [listaAnimais, setListaAnimais] = useState([]);

    const { user } = useAuthContext()

    const deleteAnimal = (id) => {
        if (!user) {
            console.log("Você precisa fazer log in")
            return
        }
        axios.delete(`http://localhost:5000/api/animal/delete/${id}`, {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        });
        setListaAnimais(listaAnimais.filter(animal => animal._id !== id));
    };
    
    useEffect(() => {
        if (!user) {
            console.log("Você precisa fazer log in")
            return
        }
        axios.get("http://localhost:5000/api/animais", {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }).then((response) => {
            setListaAnimais(response.data);
        });
    }, [user]);

    return (
        <div className="display-animais">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Espécie</th>
                        <th>Idade</th>
                        <th>Raça</th>
                        <th>Sexo</th>
                        <th>Cliente</th>
                        <th colspan="2" class="text-center">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {listaAnimais.map((animal) => {
                        return(
                        <tr key={animal._id}>
                            <td>{animal.nome}</td>
                            <td>{animal.especie}</td>
                            <td>{animal.idade}</td>
                            <td>{animal.raça}</td>
                            <td>{animal.sexo}</td>
                            <td>{animal.cliente}</td>
                            <td><EditarAnimal animal={animal}/></td>
                            <td><button className="btn btn-danger" onClick={() => deleteAnimal(animal._id)}>Deletar</button></td>
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