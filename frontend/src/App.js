
import './App.css';
import AddStudent from './components/AddStudent';

import Header from './components/Header';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import UpdateStudent from './components/UpdateStudent';
import DeleteStudent from './components/DeleteStudent';
import AllTeacher from './components/AllTeacher';
import AllStudent from './components/AllStudent';
import addTeacher from './components/addTeacher';
import DeleteTeacher from './components/addTeacher';
import UpdateTeacher from './components/updateTeacher';

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

          <Route path='/' exact Component={addTeacher}/>
          <Route path='/update/:id' exact Component={UpdateTeacher}/>
          <Route path='/delete/:id' exact Component={DeleteTeacher}/>
          <Route path='/teachers' exact Component={AllTeacher}/>
        </Routes>
        
         
        
        
      </div>
      </Router>
   

  );
}

export default App;
