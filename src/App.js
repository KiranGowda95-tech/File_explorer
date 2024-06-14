import './App.css';
import explorer from '../src/data/folderData.js';
import Folder from '../src/components/folder.js';
import { useState } from 'react';
import useTraverseTree from './hooks/use-traverse-tree.js';

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  console.log(explorer);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  return (
    <div className='App'>
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
}

export default App;
