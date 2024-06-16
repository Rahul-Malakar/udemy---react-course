import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
function App() {
  return (
    <div>
        <section className="hero is-primary">
            <div className="hero-body">
            <p className='title'>Personal digital assistants</p>
            </div>
        </section>
      

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard title="alexa" handle="@alexa1" image={AlexaImage} 
              description = 'this one is from amazon'/>
            </div>
            <div className="column is-4">
              <ProfileCard
                title="cortana"
                handle="@alexa2"
                image={CortanaImage}
                description = 'this one is from microsoft'
              />
            </div>
            <div className="column is-4">
              <ProfileCard title="siri" handle="@alexa3" image={SiriImage} 
              description = 'this one is from apple'/>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
