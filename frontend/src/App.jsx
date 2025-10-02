import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import Card from "./components/Card";
import SearchBox from './components/SearchBox'

function App() {
  const [count, setCount] = useState(0);

  return <>
  {/* <h1 className="bg-black h-16">hello dear</h1> */}
  {/* <Card title={'dummy title'} company={'dummy company'} /> */}
  <SearchBox />
    </>;
}

export default App;
