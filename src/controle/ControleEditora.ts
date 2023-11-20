import Editora from "../modelo/Editora";


let editoras: Array<Editora> = [
    { codEditora: 1, nome: "Editora A" },
    { codEditora: 2, nome: "Editora B" },
    { codEditora: 3, nome: "Editora C" }
]

class ControleEditora {
    public getEditora() {
        return editoras
    }

    public getNomeEditora(codEditora: number,) {
        const nomedaEditora = editoras.filter((editora) => editora.codEditora === codEditora)
        console.log(nomedaEditora)
        if (nomedaEditora.length > 0) {
            return nomedaEditora[0].nome;
        } else {
            return 'Editora não encontrada';
        }
    }



}
export default ControleEditora


