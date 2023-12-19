import './App.css';
import Home from './components/home/home'
import Employee from './components/employee/employee';
import About from './components/about/about'
import Header from './components/header/header'
import EmpDetails from './components/empdetails/empdetails';
import LeaveForm from './components/leaveform/leaveform';
import Error from './components/error/error';
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/error" element={<Error />}/>
        <Route path="/*" element={<Home />}/>
        <Route path="/about" element = {<About />}/>
        <Route path="/employees" element={<Employee />}/>
        <Route path="/employees/:id" element={<EmpDetails />}>
          <Route path="addleaves" element={<LeaveForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;