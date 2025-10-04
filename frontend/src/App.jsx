import "./App.css";
// import Card from "./components/Card";
// import SearchBox from './features/jobs/components/SearchBox'
import Button from "./components/Button";
import JobList from "./features/jobs/components/JobList";
import SearchBox from "./features/jobs/components/SearchBox";
import MobileLayout from "./layouts/MobileLayout";

function App() {
  return (
    <>
      {/* <Card title={'dummy title'} company={'dummy company'} /> */}
      {/* <SearchBox /> */}
      {/* <Button /> */}
      {/* <SearchBox /> */}
      {/* <SearchBox />  */}

      <MobileLayout>
        <JobList />
      </MobileLayout>
      {/* <JobList /> */}

      
    </>
  );
}

export default App;
