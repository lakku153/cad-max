const AreaForm = () => (
    <div className="area-form">
        <div className="form-group">
            <label>Area</label>
            <input type="text" className="form-input" placeholder="Enter Area" />
        </div>
        <div className="form-group">
            <label>Khasra No.</label>
            <input type="text" className="form-input" placeholder="Enter Khasra No." />
        </div>
        <div className="form-group final-field">
            <label>Remarks</label>
            <input type="text" className="form-input" placeholder="Enter Remarks" />
        </div>
        <div className="form-group">
            <label>Total Cost</label>
            <input type="text" className="form-input" placeholder="Enter Total Cost" />
        </div>
        <button className="submit-btn">Submit</button>
    </div>
);

export default AreaForm;