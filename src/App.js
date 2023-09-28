import './App.css';
import { ApiDataProvider } from './components/ContextData';
import Main from './pages/HomePage/Main';

function App() {
  document.title = "Google Reviews"
  return (
    <>
<ApiDataProvider>
      <Main></Main>
</ApiDataProvider>
    </>

  );
}

export default App;
