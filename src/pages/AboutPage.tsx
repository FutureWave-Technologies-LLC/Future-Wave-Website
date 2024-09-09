import NavigateButton from '../components/NavigateButton';

function AboutUsPage() {
    return (
        <div className="aboutUs">
            <h1>About FutureWave LLC:</h1>
            <p>At FutureWave LLC, we are more than just developers—we are digital architects, crafting innovative web 
                solutions that empower your business to thrive in the online world. 
                With a team of passionate, forward-thinking software engineers, 
                we specialize in creating bespoke websites and web applications 
                that blend cutting-edge technology with seamless user experiences.</p>
            <p>Our engineers excel in both frontend and backend development, ensuring every aspect of your
                 digital presence is meticulously crafted and optimized for performance. 
                 Whether it's stunning interfaces or complex systems powered by robust 
                 databases, FutureWave delivers solutions that are not only functional but 
                 transformative. We believe in pushing boundaries, working hard,
                  and leveraging our years of experience to bring your vision to 
                  life. With FutureWave, your business is always riding the crest 
                  of innovation. Join us, and let's build a future where your 
                  digital ambitions know no limits..</p>
        <h2>Members:</h2>
        <div className="buttonContainer">
            <NavigateButton
                buttonText="Bryce"
                img = "./src/images/placeHoldImg.png"
                path="/"
            />
            <NavigateButton
                buttonText="Clifton"
                img = "./src/images/placeHoldImg.png"
                path="/"
            />
            <NavigateButton
                buttonText="Elias"
                img = "./src/images/placeHoldImg.png"
                path="/"
            />
            <NavigateButton
                buttonText="Jake"
                img = "./src/images/placeHoldImg.png"
                path="/"
            />
            <NavigateButton
                buttonText="Aye"
                img = "./src/images/placeHoldImg.png"
                path="/"
            />
            <NavigateButton
                buttonText="Xam"
                img = "./src/images/placeHoldImg.png"
                path="/"
            />
        </div>
        <NavigateButton
                buttonText="Back to Home"
                img = ""
                path="/"
            />
        </div>
    )
}

export default AboutUsPage;