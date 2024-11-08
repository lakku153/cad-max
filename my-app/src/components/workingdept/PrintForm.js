import React, { useState } from 'react';
import Popup from './Popup';
import '../../Dashboard.css';


const PrintForm = () => {

    const [formData, setFormData] = useState({
        TypeOfPrint: '',
        KhasraNo: '',
        PaperSize: '',
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

                <div className="print-form">
                    <div className="form-group">
                        <label>Type Of Print</label>
                        <input type="text" className="form-input" name="TypeOfPrint"
                            value={formData.TypeOfPrint} onChange={handleChange} placeholder="Enter Type of Print" />
                    </div>
                    <div className="form-group">
                        <label>Khasra No.</label>
                        <input type="text" className="form-input" name="KhasraNo"
                            value={formData.KhasraNo} onChange={handleChange} placeholder="Enter Khasra No." />
                    </div>
                    <div className="form-group">
                        <label>Paper Size</label>
                        <input type="text" className="form-input" name="PaperSize"
                            value={formData.PaperSize} onChange={handleChange} placeholder="Enter Paper Size" />
                    </div>
                    <div className="form-group">
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

export default PrintForm;