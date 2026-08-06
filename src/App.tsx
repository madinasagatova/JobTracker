import { useState } from 'react';
import './App.css';

function App() {
  // the modal is initially closed
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
          <section
          className='modal' 
          role='dialog' 
          aria-modal="true" 
          aria-labelledby='modal-title'>
            <h2 id='modal-title'>Add a new application</h2>
            <div className='job-form'>
              <label>Role<input type="text" placeholder='Software Engineer'/></label>
              <label>Company<input type="text" placeholder='For example, Google'/>
              </label>

            <div className='form-row'>
              <label>Applied date <input type="date" />
              </label>
              <label>Status
                <select defaultValue={"Applied"}>
                  <option value="Saved">Saved</option>
                  <option value="Applied">Applied</option>
                  <option value="Assessment">Assessment</option>
                  <option value="Interview">Interview</option>
                  <option value="Offer">Offer</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </label>
            </div>
            <div className='modal-actions'>
            <button type='button' className='cancel-button' onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button type='button' className='add-button'>
              Add Application
            </button>
          </div>
        </div>
      </section>
      </div>
      )}
    </main>
  );
}

export default App;
