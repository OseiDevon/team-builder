import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Form from './Form'

const tmList = [
  { name: "name1", email: "email1", role: "role1" },
  { name: "name2", email: "email2", role: "role2" },
  { name: "name3", email: "email3", role: "role3" },
];

function App() {
  const [teamMembers, setTeamMembers] = useState(tmList);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>TEAM BUILDER APP</h1>
        <Form members={teamMembers} setMembers={setTeamMembers}/>
        {console.log(teamMembers)}
      </header>
    </div>
  );
}

export default App;
