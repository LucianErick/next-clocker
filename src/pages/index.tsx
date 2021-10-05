import Login from "@/components/Login";
import { auth } from "@/config/firebase/client";
import { useEffect, useState } from "react";
import Agenda  from '../components/Agenda/index' 

const Home = () => {

  const [isAuth, setIsAuth] = useState({
    loading: true,
    user: null
  });

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setIsAuth({
        loading: false,
        user
      })
    })
  }, [])

  if (isAuth.loading) {
    return (
      'loading...'
    )
  }

  return isAuth.user
    ?
    <Agenda/>
    :
    <Login />
}

export default Home;