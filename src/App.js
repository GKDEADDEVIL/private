import './App.css';
import Credentials from './components/Credentials';
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

function App() {
  return (
    <div className="App">
      <Credentials />
    </div>
  );
}

export default App;
