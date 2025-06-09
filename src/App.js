
import './App.css';
import Page from './pages/Page';
import { UiProvider } from './Context/UiProvider';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {

  return (
    <Router>
      <UiProvider>
        <Page />
      </UiProvider>
    </Router>
  );
}

export default App;
