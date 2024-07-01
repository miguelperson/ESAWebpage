// import Message from './Message';
import RegisterPage from './components/RegisterPage';
import ListGroup from './components/ListGroup';
import InputForm from './components/InputForm';
import EmailVerification from './components/EmailVerification'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className="app-container">
                <div className="background">
                    <Routes>
                        <Route path="/" element={<div className="component-style"><InputForm /></div>} />
                        <Route path="/RegisterPage" element={<div className="component-style"><RegisterPage /></div>} />
                        <Route path="/list" element={<div className="component-style"><ListGroup /></div>} />
                        <Route path="/EmailVerification" element={<div className="component-style"><EmailVerification /></div>} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App; // export app component to be used somewhere else