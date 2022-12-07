import React, {useState, useEffect} from 'react' ;
import { Route, Switch, Redirect} from 'react-router-dom';

import '../ConteudoCentral/ConteudoCentral.css';

import ListaPosts from './ListaPosts/ListaPosts';
import ListaCategorias from './ListaCategorias/ListaCategorias';
import NovoPost from './NovoPost/NovoPost';

import pegarCategorias from '../../utilis/pegarCategorias';

const ConteudoCentral = () => {
    
    const [categorias, setCategorias] = useState([]);

   

    useEffect( () => {
        pegarCategorias( setCategorias );
    }, [] );
    
    return (
            <main>

                <Switch>

                    <Route exact path="/">
                        <Redirect to='/lista-posts' />
                    </Route>

                    <Route path="/lista-posts">
                        <ListaPosts/>
                    </Route>
                    
                    <Route path="/lista-categorias">
                        <ListaCategorias lista={categorias}/>
                    </Route>
                    
                    <Route path="/novo-post">
                        <NovoPost/>
                    </Route>

                </Switch>
            </main>
            );
};

export default ConteudoCentral ;