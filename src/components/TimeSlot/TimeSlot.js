import React from 'react';
import './TimeSlot.css';

const TimeSlot = () => {
    return(
    <div id ="body">
        <div className="card">
            <form>
            <div className="card-body">
                <div className="group">
                    <label className="label">Date:</label>
                        <select>
                        <option value="day1">Friday, August 30, 2019</option>    
                        <option value="day2">Friday, September 6, 2019</option>
                        <option value="day3">Friday, September 13, 2019</option>
                        </select>
                </div>
                <div className="group">
                    <label className="label">Time:</label>
                        <select>
                        <option value="time1">9am-10am</option>    
                        <option value="time2">10am-11am</option>
                        <option value="time3">11am-12pm</option>
                        </select>
                </div>
                <div className="card-button">
                    <input className="reserve" type="submit" value="Reserve" />
                </div>
            </div>
            </form>
        </div>
    </div>
    );
}
         
export default TimeSlot;