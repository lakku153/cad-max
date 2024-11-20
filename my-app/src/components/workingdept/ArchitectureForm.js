import React, { useState } from 'react';
import Popup from './Popup';
import '../../Dashboard.css';
const ArchitectureForm = () => {
    const [formData, setFormData] = useState({
        ClientName: '',
        BuildingType: '',
        Location: '',
        TotalArea: '',
<<<<<<< HEAD
        TotalCost: '',
=======
>>>>>>> 8dec717e2aad4b23d862817b5a57ade3166ae442
        DesignStyle: '',
        Remarks: ''
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
                <div className="architecture-form">
                    <div className="form-group">
<<<<<<< HEAD
                        <label>Client Name</label>
=======
                        <label>Client Name:</label>
>>>>>>> 8dec717e2aad4b23d862817b5a57ade3166ae442
                        <input
                            type="text"
                            name="ClientName"
                            value={formData.ClientName}
                            className='form-input'
                            onChange={handleChange}
<<<<<<< HEAD
                            placeholder="Enter Name"
                        />
                    </div>
                    <div className="form-group">
                        <label>Building Type</label>
=======
                        />
                    </div>
                    <div className="form-group">
                        <label>Building Type:</label>
>>>>>>> 8dec717e2aad4b23d862817b5a57ade3166ae442
                        <input
                            type="text"
                            name="buildingType"
                            value={formData.BuildingType}
                            className='form-input'
                            onChange={handleChange}
<<<<<<< HEAD
                            placeholder="Enter Building type"
                        />
                    </div>
                    <div className="form-group">
                        <label>Location</label>
=======
                        />
                    </div>
                    <div className="form-group">
                        <label>Location:</label>
>>>>>>> 8dec717e2aad4b23d862817b5a57ade3166ae442
                        <input
                            type="text"
                            name="location"
                            value={formData.Location}
                            className='form-input'
                            onChange={handleChange}
<<<<<<< HEAD
                            placeholder="Enter Location"
                        />
                    </div>
                    <div className="form-group">
                        <label>Area</label>
=======
                        />
                    </div>
                    <div className="form-group">
                        <label>Total Area:</label>
>>>>>>> 8dec717e2aad4b23d862817b5a57ade3166ae442
                        <input
                            type="number"
                            name="totalArea"
                            value={formData.TotalArea}
                            className='form-input'
                            onChange={handleChange}
<<<<<<< HEAD
                            placeholder="Enter Area"
                        />
                    </div>
                    <div className="form-group">
                        <label>Total Cost</label>
                        <input
                            type="number"
                            name="TotalCost"
                            value={formData.TotalCost}
                            className='form-input'
                            onChange={handleChange}
                            placeholder="Enter Total cost"
                        />
                    </div>
                    <div className="form-group">
                        <label>Design Style</label>
=======
                        />
                    </div>
                    <div className="form-group">
                        <label>Design Style:</label>
>>>>>>> 8dec717e2aad4b23d862817b5a57ade3166ae442
                        <input
                            type="text"
                            name="designStyle"
                            value={formData.DesignStyle}
                            className='form-input'
                            onChange={handleChange}
<<<<<<< HEAD
                            placeholder="Enter design style"
                        />
                    </div>
                    <div className="form-group">
                        <label>Remarks</label>
=======
                        />
                    </div>
                    <div className="form-group">
                        <label>Remarks:</label>
>>>>>>> 8dec717e2aad4b23d862817b5a57ade3166ae442
                        <input
                            type="text"
                            name="remarks"
                            value={formData.Remarks}
                            className='form-input'
                            onChange={handleChange}
<<<<<<< HEAD
                            placeholder="Enter remarks"
=======
>>>>>>> 8dec717e2aad4b23d862817b5a57ade3166ae442
                        />
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
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

export default ArchitectureForm;
