import React from 'react' ;
import { Switch, Link } from 'react-router-dom';

import '../Header/Header.css';

import MenuPrincipal from './MenuPrincipal/MenuPrincipal';


const Header = ( { funcaoConfiguraTema} ) => {
    return (
        <header>
            
            <div id='c-titulo-temas'>

                <Switch>
                    <h1><Link to='lista-posts'>World Sport Blog</Link></h1>
                </Switch>

                <div id='temas'>
                    <button id='c-temas-dark'
                    onClick={ () => { funcaoConfiguraTema( 'dark' ) } }
                    >☽
                    </button>

                    <button id='c-temas-padrao'
                    onClick={ () => { funcaoConfiguraTema( 'default' ) } }
                    >☼
                    </button>

                </div>

            </div>

            <MenuPrincipal/>

        </header>
        );
};

export default Header ;
