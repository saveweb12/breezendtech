"use client"
import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export default function MyCalendar() {
    const [events, setEvents] = useState([
        {
            title: "Team Meeting",
            start: new Date(),
            end: new Date(),
            allDay: false,
            type: "meeting",
        },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [newEvent, setNewEvent] = useState({
        title: "",
        start: "",
        end: "",
        type: "meeting",
    });

    // Function to handle event addition
    const handleAddEvent = () => {
        if (!newEvent.title || !newEvent.start || !newEvent.end) {
            alert("Please fill all fields!");
            return;
        }

        const eventToAdd = {
            title: newEvent.title,
            start: new Date(newEvent.start),
            end: new Date(newEvent.end),
            allDay: false,
            type: newEvent.type,
        };

        setEvents([...events, eventToAdd]); // Add event to state
        setShowModal(false); // Close modal
        setNewEvent({ title: "", start: "", end: "", type: "meeting" }); // Reset form
    };

    // Function to style events based on type
    const eventStyleGetter = (event) => {
        let backgroundColor = "#3174ad";

        switch (event.type) {
            case "meeting":
                backgroundColor = "#1e90ff";
                break;
            case "holiday":
                backgroundColor = "#32cd32";
                break;
            case "reminder":
                backgroundColor = "#ff4500";
                break;
        }

        return {
            style: {
                backgroundColor,
                color: "white",
                borderRadius: "5px",
                padding: "5px",
            },
        };
    };

    return (
        <div className="mt-16 ">
            <h2 className="text-2xl font-bold mb-4">Interview Schedules</h2>
            <div className="p-5 space-y-2 bg-white">

                {/* Calendar Component */}
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                    eventPropGetter={eventStyleGetter}
                />

                {/* Add Event Button */}

                <button
                    onClick={() => setShowModal(true)}
                    className="mb-3 bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Add Event
                </button>


                {/* Add Event Modal */}
                {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
                        <div className="bg-white p-5 rounded w-96">
                            <h2 className="text-xl mb-3">Add New Event</h2>

                            <input
                                type="text"
                                placeholder="Event Title"
                                value={newEvent.title}
                                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                                className="w-full p-2 border mb-2 rounded"
                            />

                            <input
                                type="datetime-local"
                                value={newEvent.start}
                                onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
                                className="w-full p-2 border mb-2 rounded"
                            />

                            <input
                                type="datetime-local"
                                value={newEvent.end}
                                onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
                                className="w-full p-2 border mb-2 rounded"
                            />

                            <select
                                value={newEvent.type}
                                onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value })}
                                className="w-full p-2 border mb-2 rounded"
                            >
                                <option value="meeting">Meeting</option>
                                <option value="holiday">Holiday</option>
                                <option value="reminder">Reminder</option>
                            </select>

                            <button
                                onClick={handleAddEvent}
                                className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                            >
                                Add Event
                            </button>
                            <button
                                onClick={() => setShowModal(false)}
                                className="bg-red-500 text-white px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
