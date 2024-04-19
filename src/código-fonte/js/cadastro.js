  function formatarCEP() {
            var cep = document.getElementById('cep').value;
            cep = cep.replace(/\D/g, ''); // Remove caracteres não numéricos

            // Formatar o CEP como "XXXXX-XXX"
            if (cep.length > 5) {
                cep = cep.substring(0, 5) + '-' + cep.substring(5, 8);
            }

            document.getElementById('cep').value = cep;
        }

        function buscarEndereco() {
            var cep = document.getElementById('cep').value;
            cep = cep.replace(/\D/g, ''); // Remove caracteres não numéricos

            if (cep.length != 8) {
                alert('CEP inválido. Por favor, digite um CEP válido.');
                return;
            }

            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://viacep.com.br/ws/' + cep + '/json/');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        var endereco = JSON.parse(xhr.responseText);
                        if (endereco.hasOwnProperty('erro')) {
                            alert('CEP não encontrado. Por favor, digite um CEP válido.');
                        } else {
                            document.getElementById('logradouro').value = endereco.logradouro;
                            document.getElementById('bairro').value = endereco.bairro;
                            document.getElementById('cidade').value = endereco.localidade;
                            document.getElementById('estado').value = endereco.uf;
                        }
                    } else {
                        alert('Ocorreu um erro ao buscar o endereço. Por favor, tente novamente mais tarde.');
                    }
                }
            };
            xhr.send();
        }