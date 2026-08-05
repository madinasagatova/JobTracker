import { useState } from 'react';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <main>
      <header className='page-header'>
        <div>
          <h1>ApplyFlow</h1>
          <p>Track Your Job Application</p>
        </div>
        
        <button className='add-button' onClick={() => setIsModalOpen(true)}>
          <span className='plus-icon'>+</span>
          New Application
        </button>
      </header>

      {isModalOpen && (
        <div className='modal-overlay'>
          <div className='modal' role='dialog' aria-modal="true" aria-labelledby='modal-title'>
            <h2 id='modal-title'>Add a new application</h2>
            <p>Your application form will go here.</p>
            <button onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default App
