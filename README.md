# Loja-AgilStore
A AgilStore é uma pequena loja de eletrônicos que recentemente expandiu seu catálogo de produtos para incluir uma variedade maior de itens, desde smartphones e laptops até acessórios como cabos, carregadores e fones de ouvido.

Com o crescimento do número de produtos e a diversidade de categorias, a equipe de gerenciamento identificou a necessidade de otimizar o controle de inventário, garantindo:
📦 Disponibilidade contínua de produtos
📊 Controle eficiente dos níveis de estoque
⚡ Redução de erros manuais
Atualmente, o controle é realizado por meio de  planilhas, o que tem se mostrado  ineficiente e suscetível a erros, especialmente em atualizações rápidas e buscas específicas.
Para solucionar esse problema, a AgilStore decidiu desenvolver uma  aplicação de gerenciamento automatizado de inventário, permitindo operações completas de CRUD (Create, Read, Update, Delete)
diretamente pelo terminal.
🎯 Objetivo do Projeto: 
Desenvolver uma aplicação em  JavaScript (Node.js)  para gerenciar o inventário de produtos da AgilStore, oferecendo uma forma prática, segura e organizada de:
- Adicionar produtos
- Listar produtos
- Atualizar informações
= Remover itens obsoletos
= Buscar produtos específicos

⚙️ Requisitos Funcionais
1️. Adicionar Produto
Permite ao usuário cadastrar um novo produto no inventário.
Dados solicitados: - Nome do produto - Categoria - Quantidade em estoque - Preço
🔹 O sistema gera automaticamente um ID único para cada produto.
2️. Listar Produtos
Exibe todos os produtos cadastrados no inventário em formato de tabela.

3.Atualizar Produto
Permite atualizar informações de um produto existente por meio do ID.
Regras: - Verificar se o ID informado existe no inventário - Permitir atualização de: - Nome - Categoria -
Quantidade - Preço - Validar os novos dados antes de salvar

4️. Excluir Produto
Remove um produto do inventário com base no ID.
Regras: - Verificar se o ID existe - Solicitar confirmação do usuário (opcional) - Remover o produto após
confirmação

5️. Buscar Produto
Busca e exibe detalhes de um produto específico.
Formas de busca: - Por ID - Por nome ou parte do nome
Comportamento: - Exibir todas as informações do produto encontrado - Exibir mensagem apropriada
caso nenhum produto seja localizado

➕ Requisitos Extras (Opcional)
💾 Persistência de Dados
Implementar salvamento automático dos dados em um arquivo JSON
Garantir que as informações não sejam perdidas ao encerrar a aplicação


🧰 Tecnologias Utilizadas
- JavaScript
- Node.js
- Interação via terminal (CLI)


Observações: 
Este projeto tem como foco o aprendizado e a prática de:
- Lógica de programação
- Manipulação de dados
- Estruturação de aplicações em Node.js
- Organização e boas práticas de código
✨ AgilStore – Inventário inteligente, controle eficiente.

