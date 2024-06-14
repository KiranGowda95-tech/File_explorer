import { useState } from 'react';
function Folder({ explorer }) {
  console.log('from folder file', explorer);
  const [expand, setExpand] = useState(false);

  const [showInputs, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation(e);
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div
          className='folder'
          onClick={() => {
            setExpand(!expand);
          }}
        >
          <span>📂{explorer.name}</span>
          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
          </div>
        </div>
        <div style={{ display: expand ? 'block' : 'none', paddingLeft: 25 }}>
          {showInputs.visible && (
            <div className='inputContainer'>
              <span>{showInputs.isFolder ? '📂' : '📄'}</span>
              <input
                type='text'
                onBlur={() => setShowInput({ ...showInputs, visible: false })}
                className='inputContainer__input'
                autoFocus
              />
            </div>
          )}
          {explorer.items.map((exp) => {
            return (
              <span className='file'>
                <Folder explorer={exp} key={exp.id} />
              </span>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <span>📄{explorer.name}</span>;
  }
}

export default Folder;
