import React from 'react';
import SelectTime from '../components/SelectTime/SelectTime';
import SlotList from '../components/SlotList/SlotList';
import Modal from '../components/Modal/Modal';
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
      <Modal/>
     
    </div>
  );
}

export default App;
