import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();
    
    function goToAboutUs() {
        navigate("/about-us");
    }

    function goToLogs() {
        navigate("/logs");
    }

    return (
        <div className="Home">
            <div>
                <h1>FutureWave LLC</h1>
                <h2>The Future is now</h2>
            </div>
            <div className="buttonsContainer">
                <button onClick={goToAboutUs}>About Us</button>
                <button onClick={goToLogs}>Logs</button>
            </div>
        </div>
    )
}

export default HomePage