import React, { useState } from 'react';
import Popup from './Popup';
import '../../Dashboard.css';

const UrbanForm = () => {
    const [formData, setFormData] = useState({
        ClientName: '',
        Area: '',
        KhasraNo: '',
        Demarcation: '',
        TotalCost: '',
        remarks: ''
    });

    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowPopup(true); // Show popup with form data
    };

    const handleConfirm = () => {
        alert('Form Submitted!');
        setShowPopup(false);
    };

    const handleCancel = () => {
        setShowPopup(false);
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="urban-form">
                    <div className="form-group">
                        <label>Client Name</label>
                        <input type="text" name="ClientName"
                            value={formData.ClientName} onChange={handleChange} className="form-input" placeholder="Enter Name" />
                    </div>
                    <div className="form-group">
                        <label>Area</label>
                        <input type="text" name="Area"
                            value={formData.Area} onChange={handleChange} className="form-input" placeholder="Enter Area" />
                    </div>
                    <div className="form-group">
                        <label>Khasra No.</label>
                        <input type="text" name="KhasraNo"
                            value={formData.KhasraNo} onChange={handleChange} className="form-input" placeholder="Enter Khasra No." />
                    </div>
                    <div className="form-group">
                        <label>Demarcation</label>
                        <input type="text" name="Demarcation"
                            value={formData.Demarcation} onChange={handleChange} className="form-input" placeholder="Enter Demarcation" />
                    </div>
                    <div className="form-group">
                        <label>Total Cost</label>
                        <input type="text" name="TotalCost"
                            value={formData.TotalCost} onChange={handleChange} className="form-input" placeholder="Enter Total Cost" />
                    </div>
                    <div className="form-group final-field">
                        <label>Remarks</label>
                        <input type="text" name="remarks"
                            value={formData.remarks} onChange={handleChange} className="form-input" placeholder="Enter Remarks" />
                    </div>
                    <button className="submit-btn">Submit</button>
                </div>

            </form>

            {showPopup && (
                <Popup
                    formData={formData}
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
            )}
        </div>
    );
};

export default UrbanForm;