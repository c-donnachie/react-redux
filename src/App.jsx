import './App.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from './redux/userSlice'
import Header from '@/components/Header/Header'
import Email from '@/components/Email/Email'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1") // Cambiado a una API que devuelve datos de usuario
      .then((response) => response.json())
      .then((data) => {
        const { name, username, email } = data; // Extraer las propiedades necesarias del objeto data
        dispatch(addUser({ name, username, email })); // Pasar un objeto con las propiedades correctas a addUser
      })
      .catch((error) => console.log(error))
  }, [dispatch])

  return (
    <>
      <Header />
      <Email />
    </>
  )
}

export default App
