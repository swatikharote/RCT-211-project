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
import AdminDestination from './AdminDestination'
import EditPage from './EditPage'


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
                <Route path='/wishlist' element={<WhishList />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/add-product' element={<AddProduct />} />
                <Route path='/destination' element={<Destination />} />

                <Route path='/housing/:id' element={<Housing />} />

                <Route path='/admin-destination' element={<AdminDestination/>}/>
                <Route path='/edit/:id' element={<EditPage/>}/>
                <Route path='*' element={<h1>Page Not Found</h1>}/>

            </Routes>
        </div>
    )
}

export default MainRoutes
