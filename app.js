const prompt = require("prompt-sync")();
const showMenu = require("./utils/Menu");
const service = require("./services/ProductService");

let option;

do {
  showMenu();
  option = prompt("Escolha uma opção: ");

  switch (option) {

    case "1": {
      const nome = prompt("Nome: ");
      const categoria = prompt("Categoria: ");
      const quantidade = Number(prompt("Quantidade: "));
      const preco = Number(prompt("Preço: "));

      service.addProduct({ nome, categoria, quantidade, preco });
      console.log("✅ Produto adicionado!");
      break;
    }

    case "2": {
      console.table(service.listProducts());
      break;
    }

    case "3": {
      const idUpdate = Number(prompt("ID do produto: "));

      if (isNaN(idUpdate)) {
        console.log("❌ ID inválido.");
        break;
      }

      const nome = prompt("Novo nome (enter para manter): ");
      const categoria = prompt("Nova categoria (enter para manter): ");
      const quantidade = prompt("Nova quantidade (enter para manter): ");
      const preco = prompt("Novo preço (enter para manter): ");

      const updated = service.updateProduct(idUpdate, {
        nome,
        categoria,
        quantidade: quantidade === "" ? undefined : Number(quantidade),
        preco: preco === "" ? undefined : Number(preco)
      });

      if (updated) {
        console.log("✅ Produto atualizado com sucesso!");
      } else {
        console.log("❌ Produto não encontrado.");
      }
      break;
    }

    case "4": {
      const idDelete = Number(prompt("ID do produto: "));

      if (isNaN(idDelete)) {
        console.log("❌ ID inválido.");
        break;
      }

      const deleted = service.deleteProduct(idDelete);

      if (deleted) {
        console.log("🗑️ Produto removido com sucesso!");
      } else {
        console.log("❌ Produto não encontrado.");
      }
      break;
    }

    case "5": {
  const tipoBusca = prompt("Buscar por (1) ID ou (2) Nome? ");

  if (tipoBusca === "1") {
    const id = Number(prompt("Digite o ID do produto: "));

    if (isNaN(id)) {
      console.log("❌ ID inválido.");
      break;
    }

    const product = service.findProductById(id);

    if (product) {
      console.table([product]);
    } else {
      console.log("❌ Produto não encontrado.");
    }

  } else if (tipoBusca === "2") {
    const nomeBusca = prompt("Digite o nome ou parte do nome: ");

    const results = service.findProductByName(nomeBusca);

    if (results.length > 0) {
      console.table(results);
    } else {
      console.log("❌ Nenhum produto encontrado.");
    }

  } else {
    console.log("❌ Opção inválida.");
  }

  prompt("Pressione ENTER para voltar ao menu...");
  break;
}


    case "0": {
      console.log("👋 Encerrando o sistema...");
      break;
    }

    default:
      console.log("❌ Opção inválida!");
  }

} while (option !== "0");

