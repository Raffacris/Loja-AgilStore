const fs = require("fs");
const path = require("path");

// =========================
// CAMINHOS DOS ARQUIVOS
// =========================
const filePath = path.join(__dirname, "../data/products.json");
const idFilePath = path.join(__dirname, "../data/idCounter.json");

// =========================
// FUNÇÕES AUXILIARES
// =========================
function loadProducts() {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
  }
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function saveProducts(products) {
  fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
}

function generateId() {
  if (!fs.existsSync(idFilePath)) {
    fs.writeFileSync(idFilePath, JSON.stringify({ lastId: 0 }));
  }

  const data = JSON.parse(fs.readFileSync(idFilePath, "utf-8"));
  const newId = data.lastId + 1;

  fs.writeFileSync(
    idFilePath,
    JSON.stringify({ lastId: newId }, null, 2)
  );

  return newId;
}

// =========================
// CRUD DE PRODUTOS
// =========================

// ➕ ADICIONAR
function addProduct(product) {
  const products = loadProducts();
  product.id = generateId(); // ID FIXO
  products.push(product);
  saveProducts(products);
}

// 📋 LISTAR
function listProducts() {
  return loadProducts();
}

// 🔍 BUSCAR POR ID
function findProductById(id) {
  const products = loadProducts();
  return products.find(p => Number(p.id) === Number(id));
}

// 🔍 BUSCAR POR NOME
function findProductByName(name) {
  const products = loadProducts();
  return products.filter(p =>
    p.nome.toLowerCase().includes(name.toLowerCase())
  );
}

// ✏️ ATUALIZAR
function updateProduct(id, updatedData) {
  const products = loadProducts();
  const index = products.findIndex(p => Number(p.id) === Number(id));

  if (index === -1) return false;

  if (updatedData.nome) products[index].nome = updatedData.nome;
  if (updatedData.categoria) products[index].categoria = updatedData.categoria;
  if (!isNaN(updatedData.quantidade)) products[index].quantidade = updatedData.quantidade;
  if (!isNaN(updatedData.preco)) products[index].preco = updatedData.preco;

  saveProducts(products);
  return true;
}

// 🗑️ EXCLUIR
function deleteProduct(id) {
  const products = loadProducts();
  const index = products.findIndex(p => Number(p.id) === Number(id));

  if (index === -1) return false;

  products.splice(index, 1);
  saveProducts(products);
  return true;
}

// =========================
// EXPORTAÇÕES
// =========================
module.exports = {
  addProduct,
  listProducts,
  findProductById,
  findProductByName,
  updateProduct,
  deleteProduct
};
