import './App.css'

type JobApplication = {
  company: String;
  role: String;
  location: String;
  status: String;
};
function App() {
  const job: JobApplication = {
    company: "MongDB",
    role: "Graduate Software Engineer",
    location: "Dubin",
    status: "Interview",
  };

  return (
    <main>
      <h1>ApplyFlow</h1>
      <p>My Job Application Tracker</p>
      <section>
        <h2>{job.company}</h2>
        <p>{job.role}</p>
        <p>Location: {job.location}</p>
        <p>Status: {job.status}</p>
      </section>
    </main>
  )
}

export default App
