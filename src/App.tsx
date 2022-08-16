import React, {useState} from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet
} from "react-router-dom";
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

import './App.css';
import Navbar from './components/Navbar'
import Modal from "./components/Modal";
import useBearStore from './store'
import Home from './pages/Home'
import Trade from './pages/Trade'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
})

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="trade" element={<Trade/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

const Layout = () => {
    const {isAuth, auth} = useBearStore((state) => state)
    const [isModalOpened, setIsModalOpened] = useState(false)
    const handleCloseModal = () => {
        setIsModalOpened(false)
    }
    const handleModalOpen = () => {
        setIsModalOpened(true)
    }
    return (
        <div>
            <div className="container">
                <Navbar logout={auth} isAuth={isAuth} openModal={handleModalOpen}/>
                <Outlet/>
            </div>
            {isModalOpened && <Modal onAuth={auth} onCloseModal={handleCloseModal}/>}
        </div>
    )
}

export default App;
