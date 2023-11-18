var jogadores = [];

        function adicionarJogador(nome) {
            var jogador = {
                nome: nome,
                vitoria: 0,
                empate: 0,
                derrotas: 0,
                pontos: 0
            };
            jogadores.push(jogador);
            exibirTela();
        }

        function exibirTela() {
            var elementoTabela = document.getElementById("tabelaJogadores");
            elementoTabela.innerHTML = '';

            for (var i = 0; i < jogadores.length; i++) {
                var jogador = jogadores[i];
                elementoTabela.innerHTML += `
                    <tr>
                        <td>${jogador.nome}</td>
                        <td>${jogador.vitoria}</td>
                        <td>${jogador.empate}</td>
                        <td>${jogador.derrotas}</td>
                        <td>${jogador.pontos}</td>
                        <td>
                            <button onClick="adicionarVitoria(${i})">Vitória</button>
                            <button onClick="adicionarEmpate(${i})">Empate</button>
                            <button onClick="adicionarDerrota(${i})">Derrota</button>
                        </td>
                    </tr>`;
            }
        }

        function adicionarVitoria(index) {
            jogadores[index].vitoria++;
            jogadores[index].pontos += 3;
            exibirTela();
        }

        function adicionarDerrota(index) {
            jogadores[index].derrotas++;
            exibirTela();
        }

        function adicionarEmpate(index) {
            jogadores[index].empate++;
            jogadores[index].pontos++;
            exibirTela();
        }

        // Exemplo de adição de jogadores
        adicionarJogador("Paulo");
        adicionarJogador("Rafa");
        adicionarJogador("Hideki");
