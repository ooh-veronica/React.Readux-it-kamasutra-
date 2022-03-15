import './App.css';
import './Components/Profile/Profile.css'
import HeaderContainer from './Components/Header/HeaderContainer';
import Nav from './Components/NavBar/Naav.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer.jsx';
import ProfileContainer from './Components/Profile/ProfileContainer';

const  App = (props) => {

  console.log('props1:', props)
  
  return (
    <BrowserRouter>
      
      <div className ="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>

          <Route path='/messages' 
            element={<DialogsContainer />} />


          {/* <Route path='/profile/:userId?' // ? даем понять,что параметр не обязательный
            element={<ProfileContainer />}/> */}
            <Route path="/profile" element={<ProfileContainer />}>
              <Route path=":userId" element={<ProfileContainer />} />
          </Route>
          
          <Route path='/users' 
            element={<UsersContainer />} />
            
          </Routes> 
        </div>
      </div>
        
    </BrowserRouter>
  );
}

export default App;
