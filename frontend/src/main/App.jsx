import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Main from '../components/template/Main'
import Footer from '../components/template/Footer'

export default props =>
 
        <div className="app">
            <Logo />
            <Nav />
            <Main icon="home" title="Início" subtitle="BEM VINDO A IBLISS  DIGITAL SECURITY" />
            <Footer />
        </div>
    