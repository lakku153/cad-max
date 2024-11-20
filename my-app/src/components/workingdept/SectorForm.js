import React, { useState } from 'react';
import Popup from './Popup';
import '../../Dashboard.css';


const SectorForm = () => {

    const [formData, setFormData] = useState({
        ClientName: '',
        KhasraNo: '',
<<<<<<< HEAD
        Area: '',
=======
>>>>>>> 8dec717e2aad4b23d862817b5a57ade3166ae442
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

                <div className="sector-form">
                    <div className="form-group">
                        <label>Client Name</label>
                        <input type="text" className="form-input" name="ClientName"
                            value={formData.ClientName} onChange={handleChange} placeholder="Enter Name" />
                    </div>
                    <div className="form-group">
                        <label>Khasra No.</label>
                        <input type="text" className="form-input" name="KhasraNo"
                            value={formData.KhasraNo} onChange={handleChange} placeholder="Enter Khasra No." />
                    </div>
                    <div className="form-group">
<<<<<<< HEAD
                        <label>Area</label>
                        <input type="text" className="form-input" name="Area"
                            value={formData.Area} onChange={handleChange} placeholder="Enter Total Area" />
                    </div>
                    <div className="form-group">
=======
>>>>>>> 8dec717e2aad4b23d862817b5a57ade3166ae442
                        <label>Total Cost</label>
                        <input type="text" className="form-input" name="TotalCost"
                            value={formData.TotalCost} onChange={handleChange} placeholder="Enter Total Cost" />
                    </div>
                    <div className="form-group final-field">
                        <label>Remarks</label>
                        <input type="text" className="form-input" name="remarks"
                            value={formData.remarks} onChange={handleChange} placeholder="Enter Remarks" />
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

export default SectorForm;