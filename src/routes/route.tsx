import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import SearchMenu from "@/pages/Products/SearchMenu";
import ProfileRenter from "@/pages/Profile/ProfileRenter";
import ProfileOwner from "@/pages/Profile/ProfileOwner";
import AddKos from "@/pages/kos/AddKos";
import DetailKos from "@/pages/kos/DetailKos";
import BookingPage from "@/pages/Payment/BookingPage";
import EditKos from "@/pages/kos/EditKos";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/searchmenu" element={<SearchMenu />} />
          <Route path="/profilerenter" element={<ProfileRenter />} />
          <Route path="/profileowner" element={<ProfileOwner />} />
          <Route path="/buat-kos" element={<AddKos />} />
          <Route path="/edit-kos/:id" element={<EditKos />} />
          <Route path="/kos/:id" element={<DetailKos />} />
          <Route path="/bookingpage" element={<BookingPage />} />
        </Route>
        <Route path="*" element={<>Not found</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
