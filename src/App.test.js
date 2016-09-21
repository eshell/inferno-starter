import Inferno from 'inferno';
import InfernoDOM from 'inferno-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  InfernoDOM.render(<App />, div);
});
