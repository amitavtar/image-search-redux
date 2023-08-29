
import { Provider } from 'react-redux';
import './App.css';
import ImageCard from './ImageCard';
import SearchPage from './SearchPage';
import store from './redux/store';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      {/* <ImageCard /> */}
      <SearchPage />
      </Provider>
    </div>
  );
}

export default App;
