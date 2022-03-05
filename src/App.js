import './App.css';
import './Components/Profile/Profile.css'
import Header from './Components/Header/Heaader.jsx';
import Nav from './Components/NavBar/Naav.jsx';
import Proofile from './Components/Profile/Proofile.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer.jsx';

const  App = (props) => {

  console.log('props1:', props)
  
  return (
    <BrowserRouter>
      
      <div className ="app-wrapper">
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>

          <Route path='/messages' 
            element={<DialogsContainer />} />


          <Route path='/profile' 
            element={<Proofile />}/>
          
          <Route path='/users' 
            element={<UsersContainer />} />
            
          </Routes> 
        </div>
      </div>
        
    </BrowserRouter>
  );
}

export default App;
