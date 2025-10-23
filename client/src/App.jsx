import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import ByCredit from './pages/BuyCredit'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      <Navbar/>
    
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/result' element={<Result/>}/> 
         <Route path='/buy' element={<ByCredit/>}/> 
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

