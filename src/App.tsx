import { useState } from 'react';
import './App.css';

// Describe information that every job must contain
type JobStatus =
| "Saved"
| "Applied"
| "Assessment"
| "Interview"
| "Offer"
| "Rejected";

type JobApplication = {
  id: number;
  role: string;
  company: string;
  appliedDate: string;
  status: JobStatus;
};


function App() {
  

  // The modal is initially closed
  const [isModalOpen, setIsModalOpen] = useState(false);

  // React remembers an array of jobs applications
  const [jobs, setJobs] = useState<JobApplication[]>([]);

  // "" - means it starts empty
  const [company, setCompany] = useState(""); 
  const [role, setRole] = useState("");
  const [appliedDate, setAppliedDate] = useState("");
  const [status, setStatus] = useState<JobStatus>("Applied");

  // This function runs ONLY when we click Add Application
  function handleAddApplication() {
    if (!role.trim() || !company.trim()) {
      alert("Please enter both role and company.");
      return;
    }

    const newJob: JobApplication = {
      id: Date.now(),
      role: role,
      company: company,
      appliedDate: appliedDate,
      status: status,
    };

    // Adds a new job
    setJobs((currentJobs) => [...currentJobs, newJob]);

    setRole("");
    setCompany("");
    setAppliedDate("");
    setStatus("Applied");
    setIsModalOpen(false);

  }
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
      <section className='jobs-list'>
        <h2>Your Applications</h2>
         {/* Jobs array is empty */}
        {jobs.length === 0 ? (
          <p>No applications yet. Add your first one!</p>
        ) : (
          jobs.map((job) => (
            <article className='job-card' key={job.id}>
              <div>
                <h3>{job.role}</h3>
                <p>{job.company}</p>
                <small>
                  Applied: {job.appliedDate || "No date selected"}
                </small>
              </div>

              <span className={`status-badge status-${job.status.toLowerCase()}`}>
                {job.status}
              </span>
            </article>
          ))
        )}
      </section>

      {isModalOpen && (
        <div className='modal-overlay'>
          <section
          className='modal' 
          role='dialog' 
          aria-modal="true" 
          aria-labelledby='modal-title'>
            <h2 id='modal-title'>Add a new application</h2>
            <div className='job-form'>
              <label>Role<input type="text" placeholder='Software Engineer' value={role} onChange={(event) => setRole(event.target.value)}/></label>
              <label>Company<input type="text" placeholder='For example, Google' value={company} onChange={(event) => setCompany(event.target.value)}/>
              </label>

            <div className='form-row'>
              <label>Applied date <input type="date" value={appliedDate} onChange={(event) => setAppliedDate(event.target.value)}/>
              </label>
              <label>Status
                <select value={status} onChange={(event) => setStatus(event.target.value as JobStatus)}>
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
            <button
                  type="button"
                  className="add-button"
                  onClick={handleAddApplication}
                >
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