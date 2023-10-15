import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout'
import Beranda from './pages/beranda';
import Tentang from './pages/tentang';
import Kontak from './pages/kontak';

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={
                    <Layout />
                }>
                    <Route index element={
                        <Beranda />
                    } />
                    <Route path='/tentang' element={<Tentang />} />
                    <Route path='/kontak' element={<Kontak />} />
                </Route>
            </Routes>
        </BrowserRouter >
    );
}