// React Imports
import React from 'react'
import ReactDOM from 'react-dom/client'
//Font Imports
import '@fontsource/atkinson-hyperlegible';
//Bootstrap Imports
import 'bootstrap/dist/css/bootstrap.min.css';
//Style Imports
import "./App.scss"
//Component Imports
import Title from "./components/Title.tsx";
import CoatSelect from "./components/CoatSelect.tsx";
import Footer from "./components/Footer.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Title/>
        <CoatSelect/>
        <Footer/>
    </React.StrictMode>,
)
