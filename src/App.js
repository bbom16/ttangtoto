import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import BottomBar from "./components/BottomBar";
import KaKaoLogin from "./components/KaKaoLogin";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Login from "./routes/Login";
import MyPage from "./routes/MyPage";
import Rank from "./routes/Rank";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<BottomBar />}>
          <Route index element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/kakaoLogin" element={<KaKaoLogin />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/rank" element={<Rank />} />
        </Route>
        <Route path="*" element={<div>There's nothing here!</div>} />
      </Routes>
    </Router>
  );
}

export default App;
