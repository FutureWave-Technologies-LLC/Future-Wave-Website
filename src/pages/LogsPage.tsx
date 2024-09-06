import { useNavigate } from 'react-router-dom';

function LogsPage() {
    const navigate = useNavigate();
    
    function goToHomePage() {
        navigate("/");
    }

    return (
        <div className="Logs">
            <h1>Logs</h1>
            <a href="https://docs.google.com/document/d/1YmoW6RroP7YpzDHo0FVBTEss3hRd-xOF86gJBfo1W4A/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View Logs</a>
            <br />
            <button onClick={goToHomePage}>Back to Home</button>
        </div>
    )
}

export default LogsPage;