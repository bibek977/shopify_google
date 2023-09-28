import './App.css';
import { ButtonSelectProvider } from './components/ButtonSelect';
import { ApiDataProvider } from './components/ContextData';
import {PreviewCardProvider} from './components/PreviewCard';
import Main from './pages/HomePage/Main';

function App() {
  document.title = "Google Reviews"
  return (
    <>
<ApiDataProvider>
  <PreviewCardProvider>
    <ButtonSelectProvider>
      <Main></Main>
    </ButtonSelectProvider>
  </PreviewCardProvider>
</ApiDataProvider>
    </>

  );
}

export default App;
