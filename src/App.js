import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage";
import BookingPage from "./pages/booking";
import "antd/dist/antd.min.css";
import LayoutMain from "./components/Layouts/index";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutMain />}>
          <Route index element={<Home />} />
          <Route path="/booking" element={<BookingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
