// import Hello from "./Hello";
// import MyName from "./MyName";

import Person from "./Person";

function App() {
  const firstName = "Jane";
  const lastName = "Doe";
  const age = 32;
  const job = "Developer";

  return (
    <div className="app">
      <Person firstName={firstName} lastName={lastName} age={age} job={job} />
    </div>
  );
}

export default App;


// <div className="app">
//   <Hello />
//   <MyName name="Orel" age={22} job="Dev" />
//   <Person fullname={firstName + lastName} age={age} job={job} />
// </div>
