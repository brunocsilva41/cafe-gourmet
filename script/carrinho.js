
        let carrinho = [];

        function adicionarAoCarrinho(nome, preco) {
            carrinho.push({ nome: nome, preco: preco });
            atualizarCarrinho();
        }

        function atualizarCarrinho() {
            const carrinhoLista = document.getElementById('carrinho-lista');
            const totalCarrinho = document.getElementById('totalCarrinho');
            let total = 0;

            carrinhoLista.innerHTML = '';
            carrinho.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.nome} - R$${item.preco.toFixed(2)}`;
                carrinhoLista.appendChild(li);
                total += item.preco;
            });

            totalCarrinho.textContent = total.toFixed(2);
            document.getElementById('contadorCarrinho').textContent = carrinho.length;
        }

        function mostrarCarrinho() {
            const carrinhoDiv = document.getElementById('carrinho');
            if (carrinhoDiv.style.display === 'none') {
                carrinhoDiv.style.display = 'block';
            } else {
                carrinhoDiv.style.display = 'none';
            }
        }

        function filtrarProdutos(categoria) {
            const produtos = document.querySelectorAll('.product-item');

            produtos.forEach(produto => {
                if (categoria === 'todos' || produto.dataset.category === categoria) {
                    produto.style.display = 'block';
                } else {
                    produto.style.display = 'none';
                }
            });
        }

            function atualizarCarrinho() {
                const carrinhoItens = document.getElementById('carrinhoItens');
                const totalCarrinho = document.getElementById('totalCarrinho');
                let total = 0;

                carrinhoItens.innerHTML = '';

                const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

                carrinho.forEach(item => {
                    const divItem = document.createElement('div');
                    divItem.classList.add('cart-item');
                    divItem.innerHTML = `
                        <img src="${item.imagem}" alt="${item.nome}">
                        <h3>${item.nome}</h3>
                        <p>Quantidade: 1</p>
                        <p>Preço: R$ ${item.preco.toFixed(2)}</p>
                    `;
                    carrinhoItens.appendChild(divItem);

                    total += item.preco;
                });

                totalCarrinho.innerHTML = `<h3>Total: R$ ${total.toFixed(2)}</h3>`;
            }

            function finalizarCompra() {
                window.location.href = 'finalizacao_compra.html';
            }

            window.onload = function() {
                atualizarCarrinho();
            };
        
