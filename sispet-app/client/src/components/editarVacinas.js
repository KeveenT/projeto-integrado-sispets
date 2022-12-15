import React, { useState, useEffect } from "react";
import axios from "axios";

import { useAuthContext } from "../hooks/useAuthContext";

const EditarVacina = ({ vacina }) => {
    const [nomeVacina, setNome] = useState(vacina.nome);
    const [dosesVacina, setDoses] = useState(vacina.doses);
    const [loteVacina, setLote] = useState(vacina.lote);
    const [fabricanteVacina, setFabricante] = useState(vacina.fabricante);
    const [fornecedorVacina, setFornecedor] = useState(vacina.fornecedor);
    const [vacinaId] = useState(vacina._id);

    const [listaFornecedors, setListaFornecedors] = useState([]);

    const { user } = useAuthContext()

    useEffect(() => {
        if (!user) {
            console.log("Você precisa fazer log in")
            return
        }
        axios.get("http://localhost:5000/api/fornecedores", {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
            }).then((response) => {
            setListaFornecedors(response.data);
        });
    }, [user]);

    const optionFornecedors = listaFornecedors.flat().map(({nome})=> nome);

    const updateVacina = (id) => {
        if (!user) {
            console.log("Você precisa fazer log in")
            return
        }
        axios.put(`http://localhost:5000/api/vacina/update/${id}`, JSON.stringify({nome: nomeVacina, doses: dosesVacina, lote: loteVacina, fabricante: fabricanteVacina, fornecedor: fornecedorVacina, id: vacinaId}), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
          }).then((response) => {
            console.log("Vacina Atualizado");
        });
    };
    
    //É necessário usar o id como id do modal para que os identificadores dos respectivos registros sejam utilizados
    return (
        <div className="update-modal">
            <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#id${vacina._id}`}>
                Editar
            </button>

            <div class="modal" id={`id${vacina._id}`}> 
            <div class="modal-dialog">
                <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Editar Vacinas</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body">
                    <label>Nome do Vacina</label>
                    <input type="text" value={nomeVacina} onChange={(event) => {setNome(event.target.value)}}/>
                    <label>Doses</label>
                    <input type="number" value={dosesVacina} onChange={(event) => {setDoses(event.target.value)}}/>
                    <label>Lote</label>
                    <input type="number" value={loteVacina} onChange={(event) => {setLote(event.target.value)}}/>
                    <label>Fabricante</label>
                    <input type="text" value={fabricanteVacina} onChange={(event) => {setFabricante(event.target.value)}}/>
                    <label>Fornecedor</label>
                    <select class="form-select" id="fornecedor" value={fornecedorVacina} onChange={(event) => {setFornecedor(event.target.value)}}>
                        <option defaultValue>{fornecedorVacina}</option>
                        {optionFornecedors.map((fornecedorVacina, i) => {
                            return <option key={i} value={fornecedorVacina} onSelect={() => setFornecedor(fornecedorVacina,i)}>{fornecedorVacina}</option>
                        })}
                    </select>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick={() => updateVacina(vacina._id)}>Salvar</button>
                </div>

                </div>
            </div>
            </div>
        </div>  
    );

};

export default EditarVacina;