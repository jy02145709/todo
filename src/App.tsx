import { createGlobalStyle } from "styled-components";
import ToDoList from "./components/ToDoList";
import { RecoilRoot } from "recoil";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f7f7f7;
    color: #333;
    line-height: 1.6;
    padding: 20px;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  input, button, select {
    font-family: inherit;
    font-size: 1rem;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  button {
    cursor: pointer;
    background-color: #4CAF50;
    color: white;
    border: none;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #45a049;
  }

  select {
    border: 1px solid #ccc;
    background-color: white;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    background-color: #fff;
    margin-bottom: 10px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }

  span {
    font-size: 1rem;
  }

  
`;

function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <ToDoList />
      </RecoilRoot>
    </>
  );
}

export default App;
