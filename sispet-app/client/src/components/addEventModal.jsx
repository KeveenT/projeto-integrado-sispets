import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";

export default function ({isOpen, onClose, onEventAdded}) {
    const [title, setTitle] = useState("");
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());

    const { user } = useAuthContext()

    const [listaAnimais, setListaAnimais] = useState([]);

    useEffect(() => {
        if (!user) {
            console.log("Você precisa fazer log in")
            return
        }
        axios.get("https://sispet-app.adaptable.app/api/animais", {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
            }).then((response) => {
            setListaAnimais(response.data);
        });
    }, [user]);

    const optionAnimais = listaAnimais.flat().map(({nome})=> nome);
    const [animalEvent, setAnimal] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        onEventAdded({
            title,
            start,
            end,
            animalEvent
        })
        onClose();
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <form onSubmit={onSubmit}>
                <div>
                <input placeholder="Serviço" value={title} onChange={e => setTitle(e.target.value)}/>
                </div>

                <div>
                <label>Animal</label>
                <select  class="form-select" id="animal" value={animalEvent} onChange={(event) => {setAnimal(event.target.value)}}>
                    <option defaultValue> </option>
                    {optionAnimais.map((animalEvent, i) => {
                        return <option key={i} value={animalEvent} onSelect={() => setAnimal(animalEvent,i)}>{animalEvent}</option>
                    })}
                </select>
                </div>

                <div>
                    <label>Data de Início</label>
                    <Datetime value={start} onChange={date => setStart(date)}/>
                </div>

                <div>
                    <label>Data de Término</label>
                    <Datetime value={end} onChange={date => setEnd(date)}/>
                </div>

                <button class="btn btn-primary">Agendar</button>
            </form>
        </Modal>
    )
}