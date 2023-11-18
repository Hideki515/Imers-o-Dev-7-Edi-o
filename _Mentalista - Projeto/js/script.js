var numSecreto = parseInt(Math.random() * 1001);
        var cont = 0;
        var tentativas = [];

        function verificarChute() {
            var inputChute = document.getElementById("chute");
            var resultadoDiv = document.getElementById("resultado");
            var tentativasDiv = document.getElementById("tentativas");

            var num = parseInt(inputChute.value);

            if (isNaN(num) || num < 1 || num > 1000) {
                resultadoDiv.innerHTML = "Por favor, digite um número válido entre 1 e 1000.";
                inputChute.value = "";
                return;
            }

            tentativas.push(num);

            if (num == numSecreto) {
                resultadoDiv.innerHTML = "Acertou!";
                exibirTentativas();
            } else if (num > numSecreto) {
                resultadoDiv.innerHTML = "Errou.. o número secreto é menor que " + num;
            } else if (num < numSecreto) {
                resultadoDiv.innerHTML = "Errou.. o número secreto é maior que " + num;
            }

            cont++;

            if (cont == 10) {
                resultadoDiv.innerHTML = "Você errou todas as tentativas e o número secreto é: " + numSecreto;
                exibirTentativas();
            }

            inputChute.value = "";
        }

        function exibirTentativas() {
            var tentativasDiv = document.getElementById("tentativas");
            tentativasDiv.innerHTML = "Tentativas: " + tentativas.join(", ");
        }