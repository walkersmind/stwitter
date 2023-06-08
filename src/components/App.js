import { useEffect, useState } from "react";
import AppRouter from "./Router";
import authService from "../fbase";
import Auth from "../routes/Auth";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        console.log(authService.currentUser);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : <p>"Initializing..."</p>}
      <footer>&copy;{new Date().getFullYear()} Stwitter</footer>
    </>
  );
}

export default App;
