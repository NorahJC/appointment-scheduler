import React from 'react';
import './Modal.css';

const Modal = () => {
    return (
        <div >
            <form id="modal-cont">
                <h2>Reserve Slot</h2>
                <div className="label-cont">
                    <label className="mod"> Name: 
                        <span className="field-required">*</span>
                        <input type="text" id="name" name="name" placeholder= "Jane Doe" required/>
                    </label>
                    <label className="mod"> Number:
                        <span className="field-required">*</span> 
                        <input type="tel" id="number" name="number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="678-200-3000" required/>
                    </label>
                </div>
                
                <div>
                    <input className="w3-input" type="submit" vale="Submit"/>
                </div>
            </form>
        </div>
    );
}
export default Modal;