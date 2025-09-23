import { useState } from 'react';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    setIsAuthenticated(true);
    setUsername('Mario');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <img src="../src/assets/react.svg" alt="Logo" style={styles.logoImage} />
      </div>
      <div style={styles.buttons}>
        {isAuthenticated ? (
          <div style={styles.authenticated}>
            <span>Ciao, {username}</span>
            <button onClick={handleLogout} style={styles.button}>Logout</button>
          </div>
        ) : (
          <>
            <button style={styles.button}>Register</button>
            <button onClick={handleLogin} style={styles.button}>Login</button>
          </>
        )}
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 100,
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    height: '40px',
  },
  buttons: {
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    backgroundColor: '#ffbf00cd',
    color: '#fff',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  authenticated: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  }
};

export default Header;