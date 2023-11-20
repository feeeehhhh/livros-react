import React,{useState, useEffect} from "react";
import ControleEditora from "./controle/ControleEditora.ts";
import ControleLivros from "./controle/ControleLivros";

const controleLivro = new ControleLivros();
const controleEditora = new ControleEditora();


const LivroLinha=(props)=>{
  const {livro,excluir,getNomeEditora} = props;
  const nomeEditora = getNomeEditora

  return(
    <tr>
    <td>
      <button onClick={() => excluir(livro.id)}>Excluir</button>
    </td>
    <td>{livro.titulo}</td>
    <td>{livro.resumo}</td>
    <td>{nomeEditora}</td>
    <td>
      <ul>
        {livro.autores.map((autor, index) => (
          <li key={index}>{autor}</li>
        ))}
      </ul>
    </td>
  </tr>
);

}

// const LivroLista=()=>{
//   const controleLivro = new ControleLivros()
//   const controleEditora = new ControleEditora()

//   con
// }

const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);


  useEffect(() => {
    const carregarLivros = async () => {
      const livrosCarregados = controleLivro.obterLivros();
      setLivros(livrosCarregados);
      setCarregado(true);
    };

    carregarLivros();
  }, [carregado]);

  const excluir = (codigoLivro) => {
    controleLivro.excluir(codigoLivro);
    setCarregado(false);
  };

  return (
    <main>
      <h1>Lista de Livros</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LivroLinha key={livro.id} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;