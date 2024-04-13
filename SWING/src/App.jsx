import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Title from "./components/Title.jsx";
import { Route, Routes } from "react-router-dom";
import Login from "./Layout/Pages/Login.jsx";
import SignIn from "./Layout/Pages/SignIn.jsx";
import Home from "./components/Home.jsx";
import Movie from "./components/Movie.jsx";
import Search from "./components/Search.jsx";
import SavedShows from "./components/SavedShows.jsx";
import Account from "./Layout/Pages/Account.jsx";
import Notuser from "./components/Notuser.jsx";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path="/Success" element={<Success />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/Main" element={<Title />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Movies" element={<Movie />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Save" element={<SavedShows />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/notuser" element={<Notuser />} />
      </Routes>
    </div>
  );
}

export default App;
