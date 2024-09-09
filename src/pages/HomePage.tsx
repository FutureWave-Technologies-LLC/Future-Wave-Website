import NavigateButton from '../components/NavigateButton';

function HomePage() {
    return (
        <div className="Home">
            <div className="centered">
            <div>
                <h1>FutureWave LLC</h1>
                <h2>The Future is now.</h2>
            </div>
            <div>
                <NavigateButton
                    buttonText="About Us"
                    img = ""
                    path="/about-us"
                />
                <NavigateButton
                    buttonText="Logs"
                    img = ""
                    path="/logs"
                />
            </div>
            </div>
            
        </div>
    )
}

export default HomePage