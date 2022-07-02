import '../src/css/Main.css';
import { Component } from 'react';
import AppRouter from './router/AppRouter';
import '@fortawesome/fontawesome-free/css/all.min.css';

class App extends Component {
  render() {
    return (<AppRouter />);
  }
}

export default App;
