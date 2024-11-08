const PrintForm = () => (
    <div className="print-form">
        <div className="form-group">
            <label>Type of Print</label>
            <input type="text" className="form-input" placeholder="Enter Type of Print" />
        </div>
        <div className="form-group">
            <label>Khasra No.</label>
            <input type="text" className="form-input" placeholder="Enter Khasra No." />
        </div>
        <div className="form-group">
            <label>Paper Size</label>
            <input type="text" className="form-input" placeholder="Enter Paper Size" />
        </div>
        <div className="form-group">
            <label>Total Cost</label>
            <input type="text" className="form-input" placeholder="Enter Total Cost" />
        </div>
        <div className="form-group final-field">
            <label>Remarks</label>
            <input type="text" className="form-input" placeholder="Enter Remarks" />
        </div>
        <button className="submit-btn">Submit</button>
    </div>
);

export default PrintForm;