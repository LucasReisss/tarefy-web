import { useContext } from "react"
import AppContext from "../../store/AppContext"

export default function Cabecalho() {
  const {message} = useContext(AppContext)
    return (
        <header className='Cabecalho'>
        <h1>{message}</h1>
      </header>
    )
}