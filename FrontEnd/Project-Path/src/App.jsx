import "./App.css";
import Table from "./Component/Table";

function App() {
  const headers = ["Student Name", "Project Name"];  

  return (
    <>
      <Table headers={headers} />
    </>
  );
}

export default App;
