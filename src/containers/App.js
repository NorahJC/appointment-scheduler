import React from 'react';
import TimeSlot from '../components/TimeSlot/TimeSlot';
import SelectTime from '../components/SelectTime/SelectTime';
import SlotList from '../components/SlotList/SlotList';
import './App.css';

function App() {
  return (
    <div className="body">
      <div>
        <h1 className="title">The Appointment Scheduler</h1>
      </div>
      {/* <TimeSlot /> */}
      <SelectTime />
      <SlotList />
     
    </div>
  );
}

export default App;
