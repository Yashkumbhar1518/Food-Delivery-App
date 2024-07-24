import Home from "./pages/Home";
import   {  BrowserRouter  , Route, Routes } from 'react-router-dom'
import Login from "./pages/Login/Login";
function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
