
import './App.css';
import Page from './pages/Page';
import { UiProvider } from './Context/UiProvider';
import GlobalUiContextProvider from './Context/GlobalUiContextProvider';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <Router>
      <GlobalUiContextProvider>
      <UiProvider>
        <Page />
      </UiProvider>
      </GlobalUiContextProvider>
    </Router>

  );
}

export default App;
