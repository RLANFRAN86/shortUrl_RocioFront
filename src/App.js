import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register'
import Landing from './Components/Landing'


function App() {
  return (
    <div className="App">
      <h>Hola</h>
      <Router>
        <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/landing' element={<Landing/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
