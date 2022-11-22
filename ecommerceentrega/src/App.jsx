import Rutas from "./routes/Rutas"
import GlobalStateContext from "./Context/GlobalStateContext"


function App() {
  return (
    <GlobalStateContext>
      <Rutas/>
    </GlobalStateContext>
  )
}

export default App
