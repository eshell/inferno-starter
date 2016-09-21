import Inferno from 'inferno';
import Component from 'inferno-component';
import logo from './inferno.png';
import './App.css';

const Layout = ({app}) => (
  <div className="container-fluid">
  <div className="row">
    <div className="col-sm-12">
      <Header title="Inferno!"/>
      <Content/>
      <Footer/>
    </div>
  </div>
  </div>
)

const Header = ({title}) => (
  <div className="text-sm-center">
    <img src={logo} id="logo" alt="logo" />
    <h2>Welcome to {title}</h2>
  </div>
)

const Footer = () => (
  <div className="text-sm-center text-muted">
    Inferno starter 1.0.0-alpha11
  </div>
)

class Content extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log('App mounted!');
  }

  render() {
    return (
      <div className="alert alert-danger text-sm-center">
        To get started, edit <code>src/App.js</code> and save to reload.
      </div>
    );
  }
}


export default Layout;
