// import Message from './Message';
import Message from './Message';
import ListGroup from './components/ListGroup';
import InputForm from './components/InputForm';
import './App.css';
function App() {
    return (
        <div className="login-container">

        <ListGroup></ListGroup>
         <Message></Message>
        <InputForm></InputForm>

    </div>
    );
}

export default App; // export app component to be used somewhere else