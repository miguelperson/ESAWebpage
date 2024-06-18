// import Message from './Message';
import Message from './Message';
import ListGroup from './components/ListGroup';
import InputForm from './components/InputForm';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="app-container">
                <div className="background">
                    <Routes>
                        <Route path="/" element={<div className="component-style"><InputForm></InputForm></div>} />
                        <Route path="/message" element={<div className="component-style"><Message></Message></div>} />
                        <Route path="/list" element={<div className="component-style"><ListGroup></ListGroup></div>} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App; // export app component to be used somewhere else