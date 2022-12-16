import React, { useRef, useState, Fragment } from "react";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import AddEventModal from "./addEventModal";
import axios from "axios";
import moment from 'moment';
import { useAuthContext } from "../hooks/useAuthContext";

export default function() {
    const [modalOpen, setModalOpen] = useState(false);
    const [events, setEvents] = useState([]);
    const calendarRef = useRef(null);

    const { user } = useAuthContext()

    const onEventAdded = (event) => {
        console.log(event.start)
        let calendarApi = calendarRef.current.getApi()
        calendarApi.addEvent({
            start: moment(event.start).toDate(),
            end: moment(event.end).toDate(),
            title: event.title,
            animal: event.animal
        });
    };

    async function handleEventAdd(data) {
        if (!user) {
            console.log("Você precisa fazer log in")
            return
        }
        await axios.post("https://sispet-app.adaptable.app/api/calendar/create-event", data.event, {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
            });
    };

    async function handleDatesSet(data) {
        if (!user) {
            console.log("Você precisa fazer log in")
            return
        }
        console.log(data.start)
        console.log(moment(data.start).toISOString())
        const response = await axios.get(`https://sispet-app.adaptable.app/api/calendar/get-events?start=`+moment(data.start).toISOString()+`&end=`+moment(data.end).toISOString, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
            });
            setEvents(response.data);
    };

    return (
        <Fragment> 
            <div className="agendamento">
                <button class="btn btn-primary" onClick={() => setModalOpen(true)}>Agendar</button>
            </div>
                <div className="calendar">
                    <FullCalendar
                        ref={calendarRef}
                        events={events}
                        plugins={[ dayGridPlugin ]}
                        initialView="dayGridMonth"
                        locale="pt-br"
                        eventAdd={(event) => handleEventAdd(event)}
                        datesSet={(date) => handleDatesSet(date)}
                    />
                </div>            
            <AddEventModal 
                isOpen={modalOpen} 
                onClose={() => setModalOpen(false)} 
                onEventAdded={(event) => onEventAdded(event)}
            />
        </Fragment>
    )
}