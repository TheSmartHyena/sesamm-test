import './App.css';

import { WeatherDisplay } from './components/WeatherDisplay';
import { StoreProvider, useStore } from './hooks/useStore';
import { initialState, reducer } from './reducer/stateReducer';
import { TokenComponent } from './components/TokenComponent';
import { CityComponent } from './components/CityComponent';
import { SearchButtonComponent } from './components/SearchButtonComponent';
import { CityList } from './components/CityList';
import { RequestComponent } from './components/RequestComponent';

const Main = () => {
  const [state] = useStore()

  return (
    <div className="App">
        <TokenComponent />
        
        <br />
        <br />

        <CityComponent />

        <br />
        <br />

        <SearchButtonComponent />

        <br />
        <br />

        {state.cityList.length > 0 && 
          <CityList />
        }

        <br />
        <br />

        {state.cityIndex > -1 &&
          <WeatherDisplay />
        }

        <RequestComponent />
    </div>
  );
}

function App() {
  return (
    <StoreProvider initialState={initialState} reducer={reducer}>
      <Main />
    </StoreProvider>
  )
}

export default App;
