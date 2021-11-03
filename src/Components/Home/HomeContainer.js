import './home.css';
import logo from '../../images/final_logo.png';


const HomeContainer = () => {
    return(
        <div className="home-container">
            <div className="logo-container">
                <img src={logo} alt="tangible logo"/>
            </div>
            <div className="mission-statement">
                <h2>Empowering the real estate and design industries to take action on climate change.</h2>
            </div>
            <div className="stay-tuned-container">
                <h2 className="stay-tuned">STAY TUNED...</h2>
            </div>
        </div>
    )
}

export default HomeContainer;