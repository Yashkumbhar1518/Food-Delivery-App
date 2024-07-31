import Home from "./pages/Home";
import   {  BrowserRouter  , Route, Routes } from 'react-router-dom'
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup";
function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
