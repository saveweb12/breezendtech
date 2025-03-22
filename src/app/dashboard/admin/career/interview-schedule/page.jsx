// "use client";
// import { useState } from "react";
// import { Calendar, dateFnsLocalizer } from "react-big-calendar";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import { format, parse, startOfWeek, getDay } from "date-fns";
// import { useForm } from "react-hook-form";

// const locales = { "en-US": require("date-fns/locale/en-US") };
// const localizer = dateFnsLocalizer({
//     format,
//     parse,
//     startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
//     getDay,
//     locales,
// });

// export default function BigCalendar() {
//     const [events, setEvents] = useState([
//         {
//             title: "Meeting with Client",
//             start: new Date(),
//             end: new Date(),
//             allDay: false,
//         },
//     ]);

//     const { register, handleSubmit, reset } = useForm();
//     const [modalOpen, setModalOpen] = useState(false);

//     // 📌 Function to handle event submission
//     const onSubmit = (data) => {
//         const newEvent = {
//             title: data.title,
//             start: new Date(data.start),
//             end: new Date(data.end),
//             allDay: data.allDay === "true",
//         };

//         setEvents([...events, newEvent]);
//         reset();
//         setModalOpen(false);
//     };

//     return (
//         <>

//             <div className=" p-6 mt-16">
//                 <h2 className="text-2xl font-bold mb-4">Event Calendar</h2>
//                 <div className="bg-white">

//                     {/* 📅 Calendar */}
//                     <Calendar
//                         localizer={localizer}
//                         events={events}
//                         startAccessor="start"
//                         endAccessor="end"
//                         style={{ height: 500 }}
//                     />

//                     {/* ➕ Add Event Button */}
//                     <button
//                         onClick={() => setModalOpen(true)}
//                         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//                     >
//                         Add Event
//                     </button>

//                     {/* 🏷️ Event Modal */}
//                     {modalOpen && (
//                         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//                             <div className="bg-white p-6 rounded shadow-lg">
//                                 <h3 className="text-xl font-semibold mb-4">Add New Event</h3>

//                                 <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
//                                     <input
//                                         type="text"
//                                         placeholder="Event Title"
//                                         {...register("title", { required: true })}
//                                         className="w-full p-2 border rounded"
//                                     />
//                                     <input
//                                         type="datetime-local"
//                                         {...register("start", { required: true })}
//                                         className="w-full p-2 border rounded"
//                                     />
//                                     <input
//                                         type="datetime-local"
//                                         {...register("end", { required: true })}
//                                         className="w-full p-2 border rounded"
//                                     />
//                                     <select {...register("allDay")} className="w-full p-2 border rounded">
//                                         <option value="false">Timed Event</option>
//                                         <option value="true">All Day Event</option>
//                                     </select>

//                                     <div className="flex justify-end space-x-2">
//                                         <button type="button" onClick={() => setModalOpen(false)} className="px-4 py-2 bg-gray-300 rounded">
//                                             Cancel
//                                         </button>
//                                         <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
//                                             Add Event
//                                         </button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// }

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
