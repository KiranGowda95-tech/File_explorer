import './App.css';
import explorer from '../src/data/folderData.js';
import Folder from '../src/components/folder.js';
import { useState } from 'react';

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  console.log(explorer);
  return (
    <div className='App'>
      <Folder explorer={explorerData} />
    </div>
  );
}

export default App;
