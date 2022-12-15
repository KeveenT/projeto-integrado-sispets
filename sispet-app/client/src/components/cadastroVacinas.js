import React, { useState, useEffect } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import axios from "axios";

import { useAuthContext } from "../hooks/useAuthContext";

const CadastroVacina = () => {

    const [listaFornecedores, setListaFornecedores] = useState([]);

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
            setListaFornecedores(response.data);
        });
    }, [user]);

    const optionFornecedores = listaFornecedores.flat().map(({nome})=> nome);

    const [nomeVacina, setNome] = useState("");
    const [dosesVacina, setDoses] = useState(0);
    const [loteVacina, setLote] = useState(0);
    const [fabricanteVacina, setFabricante] = useState("");
    const [fornecedorVacina, setFornecedor] = useState("");

    const createVacinaNovo = async () => {
        if (!user) {
            console.log("Você precisa fazer log in")
            return
        }
        await axios.post("http://localhost:5000/api/vacina/new", JSON.stringify({nome: nomeVacina, doses: dosesVacina, lote: loteVacina, fabricante: fabricanteVacina, fornecedor:fornecedorVacina}), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
          }).then((response) => {
            console.log("Vacina Registrado");
        });
    };

    return (
        <div className="cadastro-modal">
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#myModal">
            <AddCircleOutlineIcon/> Cadastrar Vacina
            </button>

            <div class="modal" id="myModal">
            <div class="modal-dialog">
                <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Cadastro de Vacinas</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body">
                    <label>Nome do Vacina</label>
                    <input type="text" onChange={(event) => {setNome(event.target.value)}}/>
                    <label>Doses</label>
                    <input type="number" onChange={(event) => {setDoses(event.target.value)}}/>
                    <label>Lote</label>
                    <input type="number" onChange={(event) => {setLote(event.target.value)}}/>
                    <label>Fabricante</label>
                    <input type="text" onChange={(event) => {setFabricante(event.target.value)}}/>
                    <label>Fornecedor</label>
                    <select class="form-select" id="fornecedor" value={fornecedorVacina} onChange={(event) => {setFornecedor(event.target.value)}}>
                        <option defaultValue> </option>
                        {optionFornecedores.map((fornecedorVacina, i) => {
                            return <option key={i} value={fornecedorVacina} onSelect={() => setFornecedor(fornecedorVacina,i)}>{fornecedorVacina}</option>
                        })}
                    </select>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-success" onClick={createVacinaNovo} data-bs-dismiss="modal">Cadastrar</button>
                </div>

                </div>
            </div>
            </div>
        </div>  
        
    );
};

export default CadastroVacina;