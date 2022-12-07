


const pegarCategorias = salvarState => {

    const _listaCategorias = [
        {
            'id': 1,
            'descricao':'PremierLeague'
        },
        {
            'id': 2,
            'descricao':'UCL'
        },
        {
            'id': 3,
            'descricao':'WorldCup'
        },
        {
            'id': 4,
            'descricao':'Brasileirao'
        },
    ];
    salvarState(_listaCategorias);
};

export default pegarCategorias;