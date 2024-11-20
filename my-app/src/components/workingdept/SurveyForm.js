import React, { useState } from 'react';
import Popup from './Popup';
import '../../Dashboard.css';
const SurveyForm = () => {
    const [formData, setFormData] = useState({
        ClientName: '',
        TypeOfSurvey: '',
        KhasraNo: '',
        Area: '',
        Demarcation: '',
        DayInSurvey: '',
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
                <div className="survey-form">
                    <div className="form-group">
                        <label>Client Name</label>
                        <input
                            type="text"
                            name="ClientName"
                            value={formData.ClientName}
                            className='form-input'
                            onChange={handleChange}
                            placeholder="Enter Name"
                        />
                    </div>
                    <div className="form-group">
                        <label>Type of Survey</label>
                        <input
                            type="text"
                            name="TypeOfSurvey"
                            value={formData.TypeOfSurvey}
                            className='form-input'
                            onChange={handleChange}
                            placeholder="Enter type of survey"
                        />
                    </div>
                    <div className="form-group">
                        <label>Khasra No</label>
                        <input
                            type="text"
                            name="KhasraNo"
                            value={formData.KhasraNo}
                            className='form-input'
                            onChange={handleChange}
                            placeholder="Enter Khasra No."
                        />
                    </div>
                    <div className="form-group">
                        <label>Area</label>
                        <input
                            type="number"
                            name="Area"
                            value={formData.Area}
                            className='form-input'
                            onChange={handleChange}
                            placeholder="Enter Area"
                        />
                    </div>
                    <div className="form-group">
                        <label>Demarcation</label>
                        <input
                            type="text"
                            name="designStyle"
                            value={formData.designStyle}
                            className='form-input'
                            onChange={handleChange}
                            placeholder="Enter Demarcation"
                        />
                    </div>
                    <div className="form-group">
                        <label>Day in Survey</label>
                        <input
                            type="text"
                            name="DayInSurvey"
                            value={formData.DayInSurvey}
                            className='form-input'
                            onChange={handleChange}
                            placeholder="Enter day in survey"
                        />
                    </div>
                    <div className="form-group">
                        <label>Total Cost</label>
                        <input
                            type="text"
                            name="TotalCost"
                            value={formData.TotalCost}
                            className='form-input'
                            onChange={handleChange}
                            placeholder="Enter total cost"
                        />
                    </div>
                    <div className="form-group">
                        <label>Remarks</label>
                        <input
                            type="text"
                            name="remarks"
                            value={formData.remarks}
                            className='form-input'
                            onChange={handleChange}
                            placeholder="Enter remarks"
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

export default SurveyForm;
