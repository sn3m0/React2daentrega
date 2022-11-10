import Rutas from "./routes/Rutas"
import GlobalStateContext from "./Context/GlobalStateContext"

function App() {
  return (
    <div>
    <GlobalStateContext>
    <Rutas/>
    </GlobalStateContext>
  </div>
  )
}

export default App
