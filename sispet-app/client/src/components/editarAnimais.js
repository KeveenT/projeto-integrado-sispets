import React, { useState, useEffect } from "react";
import axios from "axios";

import { useAuthContext } from "../hooks/useAuthContext";

const EditarAnimal = ({ animal }) => {
    const [nomeAnimal, setNome] = useState(animal.nome);
    const [especieAnimal, setEspecie] = useState(animal.especie);
    const [idadeAnimal, setIdade] = useState(animal.idade);
    const [raçaAnimal, setRaça] = useState(animal.raça);
    const [sexoAnimal, setSexo] = useState(animal.sexo);
    const [clienteAnimal, setCliente] = useState(animal.cliente);
    const [animalId] = useState(animal._id);

    const [listaClientes, setListaClientes] = useState([]);

    const { user } = useAuthContext()

    useEffect(() => {
        if (!user) {
            console.log("Você precisa fazer log in")
            return
        }
        axios.get("https://sispet-app.adaptable.app/api/clientes", {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
            }).then((response) => {
            setListaClientes(response.data);
        });
    }, [user]);

    const optionClientes = listaClientes.flat().map(({nome})=> nome);

    const updateAnimal = (id) => {
        if (!user) {
            console.log("Você precisa fazer log in")
            return
        }
        axios.put(`https://sispet-app.adaptable.app/api/animal/update/${id}`, JSON.stringify({nome: nomeAnimal, especie: especieAnimal, idade: idadeAnimal, raça: raçaAnimal, sexo: sexoAnimal, cliente: clienteAnimal, id: animalId}), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
          }).then((response) => {
            console.log("Animal Atualizado");
        });
    };
    
    //É necessário usar o id como id do modal para que os identificadores dos respectivos registros sejam utilizados
    return (
        <div className="update-modal">
            <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#id${animal._id}`}>
                Editar
            </button>

            <div class="modal" id={`id${animal._id}`}> 
            <div class="modal-dialog">
                <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Editar Animais</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body">
                    <label>Nome do Animal</label>
                    <input type="text" value={nomeAnimal} onChange={(event) => {setNome(event.target.value)}}/>
                    <label>Espécie</label>
                    <input type="text" value={especieAnimal} onChange={(event) => {setEspecie(event.target.value)}}/>
                    <label>Idade</label>
                    <input type="number" value={idadeAnimal} onChange={(event) => {setIdade(event.target.value)}}/>
                    <label>Raça</label>
                    <input type="text" value={raçaAnimal} onChange={(event) => {setRaça(event.target.value)}}/>
                    <label>Sexo</label>
                    <select class="form-select" id="sexo" value={sexoAnimal} onChange={(event) => {setSexo(event.target.value)}}>
                        <option defaultValue>{sexoAnimal}</option>
                        <option value="Fêmea">Fêmea</option>
                        <option value="Macho">Macho</option>
                    </select>
                    <label>Cliente</label>
                    <select class="form-select" id="cliente" value={clienteAnimal} onChange={(event) => {setCliente(event.target.value)}}>
                        <option defaultValue>{clienteAnimal}</option>
                        {optionClientes.map((clienteAnimal, i) => {
                            return <option key={i} value={clienteAnimal} onSelect={() => setCliente(clienteAnimal,i)}>{clienteAnimal}</option>
                        })}
                    </select>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick={() => updateAnimal(animal._id)}>Salvar</button>
                </div>

                </div>
            </div>
            </div>
        </div>  
    );

};

export default EditarAnimal;