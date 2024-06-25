// import Message from './Message';
import RegisterPage from './components/RegisterPage';
import ListGroup from './components/ListGroup';
import InputForm from './components/InputForm';
import emailVerification from './components/emailVerification';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className="app-container">
                <div className="background">
                    <Routes>
                        <Route path="/" element={<div className="component-style"><InputForm></InputForm></div>} />
                        <Route path="/emailVerification" element={<div className="component-style"><emailVerification></emailVerification></div>} />
                        <Route path="/RegisterPage" element={<div className="component-style"><RegisterPage></RegisterPage></div>} />
                        <Route path="/list" element={<div className="component-style"><ListGroup></ListGroup></div>} />

                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App; // export app component to be used somewhere else