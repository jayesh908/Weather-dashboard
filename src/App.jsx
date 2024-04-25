import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Weather from './Weather'
function App() {

  return (
    <div>
     <div className='shadow-lg p-3 bg-info'><h1 className='text-center'>Weather Forecast</h1></div>
     <Weather/>
    </div>
  )
}

export default App
