import { useNavigate } from 'react-router-dom';

function AboutUsPage() {
    const navigate = useNavigate();
    
    function goToHomePage() {
        navigate("/");
    }

    return (
        <div className="AboutUs">
            <h1>About FutureWave LLC:</h1>
            <p>At FutureWave LLC, we are more than just developers—we are digital architects, crafting innovative web solutions that empower your business to thrive in the online world. With a team of passionate, forward-thinking software engineers, we specialize in creating bespoke websites and web applications that blend cutting-edge technology with seamless user experiences.

Our engineers excel in both frontend and backend development, ensuring every aspect of your digital presence is meticulously crafted and optimized for performance. Whether it's stunning interfaces or complex systems powered by robust databases, FutureWave delivers solutions that are not only functional but transformative.

We believe in pushing boundaries, working hard, and leveraging our years of experience to bring your vision to life. With FutureWave, your business is always riding the crest of innovation. Join us, and let's build a future where your digital ambitions know no limits..</p>
            <button onClick={goToHomePage}>Back to Home</button>
        </div>
    )
}

export default AboutUsPage;