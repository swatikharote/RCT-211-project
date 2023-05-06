import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './HomePage'
import LoginPage from './LoginPage'
import About from './About'
import Community from './Community'
import Housing from './Housing'
import Payment from './Payment'
import SignUp from './SignUp'
import Support from './Support'
import WhishList from './WhishList'
import { PrivateRoute } from '../Components/PrivateRoutes'
import Admin from './Admin'
import AddProduct from './AddProduct';
import { Destination } from './Destination'


const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/about' element={<About />} />
                <Route path='/community' element={<Community />} />
                <Route path='/product' element={<PrivateRoute><Housing /></PrivateRoute>} />
                <Route path='/payment' element={<Payment />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/support' element={<Support />} />
                <Route path='/wishlist' element={<PrivateRoute><WhishList /></PrivateRoute>} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/add-product' element={<AddProduct />} />
                <Route path='/destination' element={<Destination />} />
            </Routes>
        </div>
    )
}

export default MainRoutes
