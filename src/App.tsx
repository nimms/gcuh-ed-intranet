import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import Home from './pages/Home';

library.add(faSearch);
class App extends React.Component {
  public render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
