//declarao de uma classe == classe nomedaClasse
class Produto {
    //   construtor == definição dos atributos da classe 
    constructor() {
        this.id = 1;
        //   inseridos de modo dinamico
        // this.nomeProduto = "";
        // this.valor = 0;
        this.arrayProdutos = [];
    }

    // metodo para salvar :: salva o produto digitado pelo usuario no objeto produto
    salvar() {
        let produto = this.lerDados();

        // chama o metodo para validar o conteudo dos inputs(somente verificou inputs vazios)
        if (this.validarCampos(produto)) {
            // alert("Podemos salvar");
            this.adicionar(produto);
            this.listaDados();
            this.cancelar();
        }
        console.log(this.arrayProdutos);

    }

    // metodo para alimentar a tabela com os produtos 
    listaDados() {
        // variavel para referenciar um tbody da tabela 
        let tbody = document.getElementById("tbody");

        // limpar a tabela antes de ser mostrada
        tbody.innerText = "";

        // loop para percorrer o array de produtos 
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            let novaLinha = tbody.insertRow();

            // criar cada coluna (celula) de cada linha 
            let td_id = novaLinha.insertCell();
            let td_nome = novaLinha.insertCell();
            let td_valor = novaLinha.insertCell();
            let td_acoes = novaLinha.insertCell();

            // alimentar as celulas
            td_id.innerText = this.arrayProdutos[i].id;
            td_nome.innerText = this.arrayProdutos[i].nome;
            td_valor.innerText = this.arrayProdutos[i].valor;

            // criando um elemento de imagem para ser colocado na quarta coluna da linha 
            let imgEdit = document.createElement("img");
            // atribuindo a esse elemento o caminho da imagem
            imgEdit.src = "img/edit.png";
            // adicionando um filho para quarta coluna 
            td_acoes.appendChild(imgEdit);

            // para adicionar uma classe (.center) as coluns ***CSS NO JS
            td_id.classList.add("center");
            td_acoes.classList.add("center")

            // criando um elemento de imagem para ser colocado na quarta coluna da linha 
            let imgDelete = document.createElement("img");
            // atribuindo a esse elemento o caminho da imagem
            imgDelete.src = "img/delete.png";
            // adicionando um filho para quarta coluna 
            td_acoes.appendChild(imgDelete);

            // atribuir um metodo para imgDelete através do setAttribute como os parametros: ("evento", método)  <img onclick="produto.deletar(id)"> mas o id é variavel
            imgDelete.setAttribute("onclick", "produto.deletar(" + this.arrayProdutos[i].id + ")");
        }
    }

    adicionar(produto) {
        this.arrayProdutos.push(produto);
        this.id++;
    }

    // metodo para limpar os inputs
    cancelar() {
        document.getElementById("nomeProduto").value = "";
        document.getElementById("valorProduto").value = "";
        // alert("Cancelado!")
    }

    // metodo para ler o digitado no input
    lerDados() {
        let produto = {}

        produto.nome = document.getElementById("nomeProduto").value;
        produto.valor = document.getElementById("valorProduto").value;
        produto.id = this.id;

        return produto;
    }

    // validação dos conteudos dos inputs (impedindo input vazio)
    validarCampos(produto) {
        let msg = "";
        if (produto.nome == "") {
            msg += "- informe o nome do produto \n";
        }
        if (produto.valor == "") {
            msg += "-informe o valor do produto \n";
        }
        if (msg != "") {
            alert(msg)
            return false;
        }
        return true;
    }

    deletar(idProcurado) {
        // alert("Vamos deletar o produto " + idProcurado);
        if (confirm("Deseja realmente apagar o produto? " + idProcurado)){
            for (let i = 0; i < this.arrayProdutos.length; i++) {
                if (this.arrayProdutos[i].id == idProcurado) {
                    this.arrayProdutos.splice(i, 1);
                    tbody.deleteRow(i);
                }
            }
        }
    }
}

var produto = new Produto();