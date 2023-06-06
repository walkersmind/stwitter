import { useState } from "react";
import AppRouter from "./Router";
import authService from "../fbase";
import Auth from "../routes/Auth";

function App() {
  console.log(authService.currentUser);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <Auth />
      <footer>&copy;{new Date().getFullYear()} Stwitter</footer>
    </>
  );
}

export default App;
