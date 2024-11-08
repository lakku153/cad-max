const ArchitectureForm = () => (
    <div className="architecture-form">
        <div className="form-group">
            <label>Type of Architectural</label>
            <input type="text" className="form-input" placeholder="Enter Type of Architectural" />
        </div>
        <div className="form-group">
            <label>Demarcation</label>
            <input type="text" className="form-input" placeholder="Enter Demarcation" />
        </div>
        <div className="form-group">
            <label>Area</label>
            <input type="text" className="form-input" placeholder="Enter Area" />
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

export default ArchitectureForm;