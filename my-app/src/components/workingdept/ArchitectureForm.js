import React, { useState } from 'react';
import Popup from './Popup';
import '../../Dashboard.css';
const ArchitectureForm = () => {
    const [formData, setFormData] = useState({
        buildingType: '',
        location: '',
        totalArea: '',
        designStyle: '',
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
                <div className="architecture-form">
                    <div className="form-group">
                        <label>Building Type:</label>
                        <input
                            type="text"
                            name="buildingType"
                            value={formData.buildingType}
                            className='form-input'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Location:</label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            className='form-input'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Total Area:</label>
                        <input
                            type="number"
                            name="totalArea"
                            value={formData.totalArea}
                            className='form-input'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Design Style:</label>
                        <input
                            type="text"
                            name="designStyle"
                            value={formData.designStyle}
                            className='form-input'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Remarks:</label>
                        <input
                            type="text"
                            name="remarks"
                            value={formData.remarks}
                            className='Form-input'
                            onChange={handleChange}
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
