import React, { useState } from 'react' ;
import { BrowserRouter } from 'react-router-dom';

import './PaginaInicial.css';

import Header from '../Header/Header';
import ConteudoCentral from '../ConteudoCentral/ConteudoCentral';
import BarraLateral from '../BarraLateral/BarraLateral';
import Rodape from '../Rodape/Rodape';

import TemaContext from '../../contexts/TemaContexts';

const PaginaInicial = () => {
    
    
    const temaDefault = {
        corFundoTema1: 'white',
        corTexto1: 'black'     
    } 
    const [tema, setTema] = useState('white')

    const modificarTema = temaSelecionado => {
        console.log( 'temaSelecionado: ${temaSelecionado}' );

        switch( temaSelecionado ) {

            case 'dark':  
                setTema( {
                    corFundoTema1: '#051401',
                    corTexto1: 'White'     
                });
                break;
            
            default:
                setTema( temaDefault )
        }
    };

    return (
        <TemaContext.Provider value={ tema }>

            <BrowserRouter>

                <div id='box-pagina-inicial'>

                    <Header funcaoConfiguraTema={ modificarTema }/>    

                        <div id='container'>

                            <ConteudoCentral/>
                            <BarraLateral/>

                        </div>
                
                    <Rodape/>

                </div>

            </BrowserRouter>    
        
        </TemaContext.Provider>    
    );
};

export default PaginaInicial;
