import React, { useContext } from 'react' ;

import '../Posts/Posts.css';

import TemaContext from '../../../../contexts/TemaContexts';


const Posts = () => {

    const tema = useContext(TemaContext);

    return (

        <article className='post' style={ {backgroundColor: tema.corFundoTema1} }>
            
            <h3 className='p-titulo' style={ {color: tema.corTexto1} }>Titulo do Post</h3>
                <p style={ {color: tema.corTexto1} }>Postado em:25/10/2021</p>

            <div className='p-img-texto'>

                <div className='p-img'> 
                    <img src='imagens/Cristianoronaldo7.jpg'/>
                </div>

                <div className='p-texto' style={ {color: tema.corTexto1} }>
                        <p>Manchester United é atropelado e Liverpool faz 5 fora de casa </p>
                        <p>Manchester United é atropelado e Liverpool faz 5 fora de casa </p>
                        <p>Manchester United é atropelado e Liverpool faz 5 fora de casa </p>
                        <p>Manchester United é atropelado e Liverpool faz 5 fora de casa </p>
                        
                </div>
                    
            </div>

            <div className='p-categ-btn'>

                <div className='p-categoria' style={ {color: tema.corTexto1} }>
                        Categoria: Premier League
                </div>

                <button className='p-btn-continue-lendo'>Continue lendo...</button>

            </div>

        </article>

        );
};

export default Posts ;