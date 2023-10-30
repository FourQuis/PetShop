import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from './GlobalState';
import Header from './components/Header/Header';
import Footer from './components/footer/Footer';
import MainPages from './components/mainpages/Pages';
import { TopHeader } from './components/top-header/TopHeader';



function App() {
    return (
        <BrowserRouter>
            <DataProvider>
                <TopHeader />
                <Header />
                <MainPages />
                <Footer />
            </DataProvider>
        </BrowserRouter>
    );
}

export default App;
