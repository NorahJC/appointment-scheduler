import React from 'react';
import './SlotList.css';

const times = [
    {   id: "1",
        time: "9am-10am"
    },
    {   id: "2", 
        time: "10am-11am"
    },
    {   id: "3",
        time: "11am-12pm"
    },
    {   id: "4",
        time: "12pm-1pm"
    },
    {   id: "5",
        time: "1pm-2pm"
    },
    {   id: "6",
        time: "2pm-3pm"
    },
    {   id: "7",
        time: "3pm-4pm"
    },
    {   id: "8",
        time: "4pm-5pm"
    }
];

const SlotList = () => (
    <div className="btn-container">
        {times.map(hour => (
            <div className="btn-design" key = {hour.id}>
                <button className="btn-slot">{hour.time}</button>
            </div>
            
        ))}
    </div>
);

export default SlotList;