
import './App.css';
import AddStudent from './components/AddStudent';
import AllStudent from './components/AllStudent';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import UpdateStudent from './components/UpdateStudent';
import DeleteStudent from './components/DeleteStudent';
import UpdateTeacher from './components/updateTeacher.js';
import AddTeacher from './components/addTeacher.js'
import deleteTeacher from './components/DeleteTeacher.js'
import AllTeacher from './components/AllTeacher.js';

function App() {
  return (
      <Router>
      <div>
        <Header />
        
        <Routes>
          
          {/* <Route path='/add' exact Component={AddStudent}/>
          <Route path='/update/:id' exact Component={UpdateStudent}/>
          <Route path='/delete/:id' exact Component={DeleteStudent}/>
          <Route path='/' exact Component={AllStudent}/> */}

<<<<<<< HEAD
          <Route path='/add' exact Component={addTeacher}/>
          <Route path='/update/:id' exact Component={updateTeacher}/>
          <Route path='/delete/:id' exact Component={DeleteTeacher}/>
=======
          <Route path='/teachers' exact Component={AddTeacher}/>
          <Route path='/update/:id' exact Component={UpdateTeacher}/>
          <Route path='/delete/:id' exact Component={deleteTeacher}/>
>>>>>>> d1a69de5a9e2740275d8454528eb50076731b264
          <Route path='/' exact Component={AllTeacher}/>
        </Routes>
        
         
        
        
      </div>
      </Router>
   

  );
}

export default App;
