import Livro from "../modelo/Livro";

let livros: Array<Livro> = [
    {
        codigo: 1,
        codEditora: 1,
        titulo: 'Organize sua desordem mental',
        resumo: 'Pensamentos tóxicos, depressão, ansiedade — nossa desordem mental é frequentemente agravada por um mundo caótico e sustentada pela incapacidade que temos de controlar pensamentos desordenados. Mas não devemos nos acomodar a essa desordem mental como se fosse o nosso novo normal.',
        autores: ['Dra. Caroline Leaf']
    },
    {
        codigo: 2,
        codEditora: 2,
        titulo: 'A arte da guerra',
        resumo: 'A obra “A Arte da Guerra” é uma obra de cunho literário de um pensador chinês denominado Sun Tzu. Esse livro foi escrito aproximadamente no ano de 500 a.C. O seu principal intuito é funcionar como uma espécie de manual de estratégia para conflitos.',
        autores: ['Sun Tzu']
    },
    {
        codigo: 3,
        codEditora: 3,
        titulo: 'Como fazer amigos e influenciar pessoas',
        resumo: 'Como Fazer Amigos e Influenciar Pessoas se inicia com os 3 princípios para lidar com as pessoas. São eles: Não critique, não condene, não se queixe – De acordo com o primeiro princípio, para conseguir se aproximar de outras pessoas e assim, tornar-se amigo delas, não se deve procurar defeito no outro.',
        autores: ['Dale Carnegie']
    }
]

class ControleLivros{
    obterLivros():Array<Livro> {
        return livros
    }

    incluir(novoLivro: Livro){
        const novoCodigo =livros.reduce((max, livro)=>(livro.codigo > max ? livro.codigo : max),0)+1;


        novoLivro.codigo = novoCodigo
        livros.push(novoLivro)
    }



    excluir(codigo:number){
        const indice =livros.findIndex(livro=> livro.codigo === codigo)

        if(indice !== -1){
            livros.splice(indice,1)
        }
    }

}
export default ControleLivros