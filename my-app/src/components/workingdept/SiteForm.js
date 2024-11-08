const SiteForm = () => (
    <div className="site-form">
        <div className="form-group">
            <label>Number of plots</label>
            <input type="text" className="form-input" placeholder="Enter Number of Plots" />
        </div>
        <div className="form-group">
            <label>Khasra No.</label>
            <input type="text" className="form-input" placeholder="Enter Khasra No." />
        </div>
        <div className="form-group">
            <label>Number of shops</label>
            <input type="text" className="form-input" placeholder="Enter Number of Shops" />
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

export default SiteForm;