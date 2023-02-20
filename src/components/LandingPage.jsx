import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Product from '../pages/Products'
import Login from '../pages/Login'
import Register from '../pages/Register'
import NotFound from '../pages/NotFound'
import Layout from './layout/Layout'
const LandingPage = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                     <Route path='/products' element={<Product />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='register/' element={<Register />}></Route> 
                    <Route path="*" element={ <NotFound /> } />
                </Routes>
            </Layout>
        </>
    )
}

export default LandingPage