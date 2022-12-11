import React, { useState, useEffect } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import axios from "axios";

const CadastroAnimal = () => {

    const [listaClientes, setListaClientes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/clientes").then((response) => {
            setListaClientes(response.data);
        });
    }, []);

    const optionClientes = listaClientes.flat().map(({nome})=> nome);

    const [nomeAnimal, setNome] = useState("");
    const [especieAnimal, setEspecie] = useState("");
    const [idadeAnimal, setIdade] = useState(0);
    const [raçaAnimal, setRaça] = useState("");
    const [sexoAnimal, setSexo] = useState("");
    const [clienteAnimal, setCliente] = useState("");

    const createAnimalNovo = async () => {
        await axios.post("http://localhost:5000/api/animal/new", JSON.stringify({nome: nomeAnimal, especie: especieAnimal, idade: idadeAnimal, raça: raçaAnimal, sexo: sexoAnimal, cliente:clienteAnimal}), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
          }).then((response) => {
            console.log("Animal Registrado");
        });
    };

    return (
        <div className="cadastro-modal">
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#myModal">
            <AddCircleOutlineIcon/> Cadastrar Animal
            </button>

            <div class="modal" id="myModal">
            <div class="modal-dialog">
                <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Cadastro de Animais</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body">
                    <label>Nome do Animal</label>
                    <input type="text" onChange={(event) => {setNome(event.target.value)}}/>
                    <label>Espécie</label>
                    <input type="text" onChange={(event) => {setEspecie(event.target.value)}}/>
                    <label>Idade</label>
                    <input type="number" onChange={(event) => {setIdade(event.target.value)}}/>
                    <label>Raça</label>
                    <input type="text" onChange={(event) => {setRaça(event.target.value)}}/>
                    <label>Sexo</label>
                    <select class="form-select" id="sexo" onChange={(event) => {setSexo(event.target.value)}}>
                        <option defaultValue> </option>
                        <option value="Fêmea">Fêmea</option>
                        <option value="Macho">Macho</option>
                    </select>
                    <label>Cliente</label>
                    <select class="form-select" id="cliente" value={clienteAnimal} onChange={(event) => {setCliente(event.target.value)}}>
                        <option defaultValue> </option>
                        {optionClientes.map((clienteAnimal, i) => {
                            return <option key={i} value={clienteAnimal} onSelect={() => setCliente(clienteAnimal,i)}>{clienteAnimal}</option>
                        })}
                    </select>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-success" onClick={createAnimalNovo} data-bs-dismiss="modal">Cadastrar</button>
                </div>

                </div>
            </div>
            </div>
        </div>  
        
    );
};

export default CadastroAnimal;