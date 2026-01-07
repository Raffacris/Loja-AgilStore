const prompt = require("prompt-sync")();
const showMenu = require("./utils/Menu");
const service = require("./services/ProductService");

let option;

do {
  showMenu();
  option = prompt("Escolha uma opção: ");

  switch (option) {

    case "1": {
      console.log("\n--- Adicionar Produto ---");
      const nome = prompt("Nome: ");
      const categoria = prompt("Categoria: ");
      
      // .replace(',', '.') transforma "10,50" em "10.50" antes de converter para número
      const quantidade = Number(prompt("Quantidade: ").replace(',', '.'));
      const preco = Number(prompt("Preço: ").replace(',', '.'));

      if (isNaN(quantidade) || isNaN(preco)) {
        console.log("❌ Erro: Quantidade ou Preço inválidos. Use apenas números.");
      } else {
        service.addProduct({ nome, categoria, quantidade, preco });
        console.log("✅ Produto adicionado com sucesso!");
      }
      break;
    }

    case "2": {
      console.log("\n--- Lista de Produtos ---");
      const produtos = service.listProducts();
      if (produtos.length > 0) {
        console.table(produtos);
      } else {
        console.log("📭 A lista está vazia.");
      }
      break;
    }

    case "3": {
      console.log("\n--- Atualizar Produto ---");
      const idUpdate = Number(prompt("ID do produto: "));

      if (isNaN(idUpdate)) {
        console.log("❌ ID inválido.");
        break;
      }

      const nome = prompt("Novo nome (enter para manter): ");
      const categoria = prompt("Nova categoria (enter para manter): ");
      
      // Capturamos como string primeiro para checar se está vazio
      const qtdeInput = prompt("Nova quantidade (enter para manter): ").replace(',', '.');
      const precoInput = prompt("Novo preço (enter para manter): ").replace(',', '.');

      const updated = service.updateProduct(idUpdate, {
        nome: nome || undefined,
        categoria: categoria || undefined,
        quantidade: qtdeInput === "" ? undefined : Number(qtdeInput),
        preco: precoInput === "" ? undefined : Number(precoInput)
      });

      if (updated) {
        console.log("✅ Produto atualizado com sucesso!");
      } else {
        console.log("❌ Produto não encontrado.");
      }
      break;
    }

    case "4": {
      console.log("\n--- Excluir Produto ---");
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
      console.log("\n--- Buscar Produto ---");
      const tipoBusca = prompt("Buscar por (1) ID ou (2) Nome? ");

      if (tipoBusca === "1") {
        const id = Number(prompt("Digite o ID do produto: "));
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
      break;
    }

    case "0": {
      console.log("👋 Encerrando o sistema...");
      break;
    }

    default:
      console.log("❌ Opção inválida!");
  }

  if (option !== "0") {
    prompt("\nPressione ENTER para continuar...");
  }

} while (option !== "0");