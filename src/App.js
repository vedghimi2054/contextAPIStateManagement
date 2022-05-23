import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './component/Navbar';
import { Home } from './component/Home'
import { Product } from './component/Product';
import { Profile } from './component/Profile';
import { AuthProvider } from './component/Auth';
import { Login } from './component/Login';
import { RequireAuth } from './component/RequireAuth';

function App() {

  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={
            <RequireAuth>
              <Profile />
            </RequireAuth>} />
          <Route path='/product' element={<Product />} />
          <Route path='/login' element={<Login />} />

          <Route path='*' element={<h2>Page not found</h2>}></Route>
        </Routes>
      </AuthProvider>
    </>
  )
  //   const [userDetails, setUserDetails] = useState({
  //     name: "suman",
  //     age: 12
  //   });
  //   return (
  //     <div className="App">
  //       <h1>This is a parent class </h1>
  //       <ChildComponent userDetails={userDetails} />
  //     </div>
  //   );
  // }
  // const ChildComponent = ({userDetails}) => {
  //   console.log("childcomponent", userDetails)
  //   return (
  //     <>
  //       <h2>This is a child COmponent</h2>
  //       <SubChildComponent userDetails={userDetails} />
  //     </>
  //   )
  // }
  // const SubChildComponent = ({userDetails}) => {
  //   return (
  //     <>
  //       <h3>This is a SubChildComponent</h3>
  //       <p>name:{userDetails.name}</p>
  //       <p>age:{userDetails.age}</p>

  //     </>
  //   )
}

export default App;
