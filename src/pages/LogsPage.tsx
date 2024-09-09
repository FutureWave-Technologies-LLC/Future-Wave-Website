import NavigateButton from '../components/NavigateButton';

function LogsPage() {
    return (
        <div className="Logs">
            <h1>Logs</h1>
            <NavigateButton
                buttonText="View Logs"
                img = ""
                path="https://www.notion.so/Log-Page-8d67882915a449fea08f67ea588ffb63"/>
            <NavigateButton
                buttonText="Go to Home"
                img = ""
                path="/"/>
        </div>
    )
}

export default LogsPage;