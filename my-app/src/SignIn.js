import React, { useState, useEffect } from 'react';

const SignIn = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // State for the checkbox
  const [logoLinks, setLogoLinks] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here (e.g., API call)
    console.log('Name:', name);
    console.log('Password:', password);
    console.log('Role:', role);
    console.log('Remember Me:', rememberMe);
  };

  useEffect(() => {
    const fetchLogoUrls = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/logos');
        const data = await response.json();
        setLogoLinks(data);
      } catch (error) {
        console.error('Error fetching logo URLs:', error);
      }
    };

    fetchLogoUrls();
  }, []);

  // Styles
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '100vh',
    paddingTop: '20px',
  };
  const borderStyle = {
    borderLeft: '2px solid #ccc',
    borderRight: '2px solid #ccc',
    padding: '20px',
  };
  const formStyle = {
    padding: '20px',
    width: '300px',
  };
  const buttonStyle = {
    backgroundColor: '#F27520',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '50%',
    textAlign: 'center',
  };
  const logosContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '20px',
  };
  const logoStyle = {
    width: '40px',
    height: 'auto',
  };
  const linkStyle = {
    display: 'block',
    marginTop: '10px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <div style={borderStyle}>
        <div style={formStyle}>
          <h2>Sign In</h2>
          <div>
            <select value={role} onChange={(e) => setRole(e.target.value)} required>
              <option value="">Cadmax Login:-</option>
            </select>
            <br />
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <br />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <br />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <div>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label> Keep me signed in</label>
            </div>
            <br />
            <button type="submit" style={buttonStyle}>Sign In</button>
          </form>
          
          {/* Horizontal Line */}
          <hr style={{ margin: '20px 0' }} />

          {/* Logos Section */}
          <div style={logosContainerStyle}>
            {logoLinks.github && (
              <>
                <img src={logoLinks.github} alt="GitHub" style={logoStyle} />
                <span style={{ borderLeft: '1px solid #ccc', height: '30px', margin: '0 10px' }}></span>
              </>
            )}
            {logoLinks.facebook && (
              <>
                <img src={logoLinks.facebook} alt="Facebook" style={logoStyle} />
                <span style={{ borderLeft: '1px solid #ccc', height: '30px', margin: '0 10px' }}></span>
              </>
            )}
            {logoLinks.google && (
              <>
                <img src={logoLinks.google} alt="Google" style={logoStyle} />
                <span style={{ borderLeft: '1px solid #ccc', height: '30px', margin: '0 10px' }}></span>
              </>
            )}
            {logoLinks.apple && (
              <img src={logoLinks.apple} alt="Apple" style={logoStyle} />
            )}
          </div>

          <div style={linkStyle}>
              No account? <a href="/create-account">Create an account</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
