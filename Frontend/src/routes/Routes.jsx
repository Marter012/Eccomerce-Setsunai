import {Routes as ReactDomRoutes, Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import Pieces from '../pages/Pieces/Pieces'
import PlaceOrder from '../pages/PlaceOrder/PlaceOrder'


const Routes = () => {
  return (
    <ReactDomRoutes>      
      <Route path='/' element={<Home/>}/>
      <Route path='/pieces' element={<Pieces/>}/>
      <Route path='/placeOrder' element={<PlaceOrder/>}/>
    </ReactDomRoutes>
  )
}

export default Routes
