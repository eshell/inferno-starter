import Inferno from 'inferno';
import Component from 'inferno-component';
import logo from './inferno.png';
import './App.css';

const Heading = ({title}) => (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Welcome to {title}</h2>
  </div>
)

class App extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log('App mounted!');
  }

  render() {
    return (
      <div className="App">
        <Heading title="Inferno!"/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
