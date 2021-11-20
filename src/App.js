import {useState} from 'react'

import { WindowsChat } from './components/WindowChat'
import {ControllerChat} from './components/ControllerChat'

const App = () => {
  const []=useState()
  return (
    <div className="App">
      <WindowsChat />
      <ControllerChat/>
    </div>
  );
}

export default App;
