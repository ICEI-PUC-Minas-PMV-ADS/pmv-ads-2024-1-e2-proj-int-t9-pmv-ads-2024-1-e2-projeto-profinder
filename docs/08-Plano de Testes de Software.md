# Plano de Testes de Software

 
| **Caso de Teste** 	| **CT-01 – Cadastro de Usuário Válido** 	|
|:---:	|:---:	|
|	Requisito 	| RF-001 - O software deve ser capaz de cadastrar usuários e profissionais. |
| Objetivo do Teste 	| Verificar se usuário/profissional consegue cadastrar-se na aplicação. |
| Step 1 	| Acessar um navegador e inserir a url do sistema <br>www.profinder.com.br<br> |
| Step 2 	| Clicar no botão Criar Conta |
| Step 3 	| Selecionar cadastrar-se como Usuário ou Profissional |
| Step 4 	| Preencher todos os campos obrigatórios |
| Step 5 	| Indicar o tipo de profissional que deseja encontrar, caso usuário, ou sua especialidade,  caso do Profissional|
| Step 6 	| Clicar em Concluir |
| Resultado esperado | O cadastro do usuário/profissional deve ser realizado e uma mensagem de sucesso ("Cadastro Realizado com Sucesso!") deverá ser exibida |
|  	|  	|

| **Caso de Teste** 	| **CT-02 – Cadastro de Usuário Inválido** 	|
|:---:	|:---:	|
|	Requisito 	| RF-001 - O software deve ser capaz de cadastrar usuários e profissionais. |
| Objetivo do Teste 	| Verificar se usuário/profissional consegue cadastrar-se na aplicação sem que todos os campos obrigatórios sejam preenchidos. |
| Step 1 	| Acessar um navegador e inserir a url do sistema <br>www.profinder.com.br<br> |
| Step 2 	| Clicar no botão Criar Conta |
| Step 3 	| Selecionar cadastrar-se como Usuário ou Profissional |
| Step 4 	| DEIXAR de preencher um ou mais campos obrigatórios |
| Step 5 	| Indicar o tipo de profissional que deseja encontrar, caso usuário, ou sua especialidade, caso profissional|
| Step 6 	| Clicar em Concluir |
| Resultado esperado | O cadastro do usuário/profissional não deverá ser realizado e uma mensagem de erro deverá ser exibida com a mensagem "Preencha todos os campos obrigatórios para concluir o cadastro" |
|  	|  	|

| **Caso de Teste** 	| **CT-03 – Login Válido** 	|
|:---:	|:---:	|
|	Requisito 	| RF-002 - Deverá ser possível fazer busca por profissional e especialidade. |
| Objetivo do Teste 	| Fazer login com sucesso para utilizar as funcionalidades do sistema |
| Step 1 	| Acessar um navegador e inserir a url do sistema <br>www.profinder.com.br<br> |
| Step 2 	| Clicar no botão Entrar |
| Step 3 	| Inserir e-mail e senha válidos |
| Step 4 	| Clicar no botão de Login  |
| Resultado esperado | O usuário/profissional deverá ser redirecionado para a área correspondente ao seu perfil |
|  	|  	|

| **Caso de Teste** 	| **CT-04 – Login Inválido** 	|
|:---:	|:---:	|
|	Requisito 	| RF-002 - Deverá ser possível fazer busca por profissional e especialidade. |
| Objetivo do Teste 	| Não permitir que usuário/profissional faça login com dados inválidos ou deixe de preenchê-los |
| Step 1 	| Acessar um navegador e inserir a url do sistema <br>www.profinder.com.br<br> |
| Step 2 	| Clicar no botão Entrar |
| Step 3 	| Inserir e-mail e senha inválidos ou deixar de preencher um dos campos |
| Step 4 	| Clicar no botão de Login  |
| Resultado esperado | O usuário/profissional não acessará o sistema e deverá receber uma mesagem de "Dados inválidos" para informações incorretas ou "Preencha os campos obrigatórios" para campos não preenchidos. |
|  	|  	|


| **Caso de Teste** 	| **CT-05 – Acessar área de Usuário para buscar profissionais e especialidades** 	|
|:---:	|:---:	|
|	Requisito 	| RF-002 - Deverá ser possível fazer busca por profissional e especialidade. |
| Objetivo do Teste 	| Acessar área de usuário para buscar profissionais |
| Pré-condição 	| O usuário precisa ter um login válido no sistema ProFinder |
| Step 1 	| Acessar um navegador e inserir a url do sistema <br>www.profinder.com.br<br> |
| Step 2 	| Clicar no botão Entrar |
| Step 3 	| Fazer login inserindo dados válidos |
| Step 4 	| Visualizar a tela Profissionais  |
| Step 5 	| Selecionar através dos filtros disponíveis o profissional e sua especialidade, caso deseje para este último|
| Step 6 	| Os filtros selecionados deverão ser exibidos em uma linha resumo para que o usuário saiba o que será buscado quando aplicá-los |
| Step 7 	| Clicar em Aplicar para que o filtro retorne suas seleções |
| Resultado esperado | Deverá ser exibido uma lista de profissionais apenas com as seleções indicadas pelo usuário para tipo de profissional e especialidade |
|  	|  	|

| **Caso de Teste** 	| **CT-06 – Entrar em contato com o profissional para Agendamento** 	|
|:---:	|:---:	|
|	Requisito 	| RF-003 - Deverá conter dados do profissional para agendamento. |
| Objetivo do Teste 	| Entrar em contato com o profissional desejado para agendamento do serviço |
| Pré-condição 	| O usuário precisa ter um login válido no sistema ProFinder |
| Step 1 	| Acessar um navegador e inserir a url do sistema <br>www.profinder.com.br<br> |
| Step 2 	| Clicar no botão Entrar |
| Step 3 	| Fazer login inserindo dados válidos |
| Step 4 	| Visualizar a tela Profissionais  |
| Step 5 	| Selecionar através dos filtros disponíveis o profissional e sua especialidade, caso deseje para este último|
| Step 6 	| Os filtros selecionados deverão ser exibidos em uma linha resumo para que o usuário saiba o que será buscado quando aplicá-los |
| Step 7 	| Clicar em Aplicar para que o filtro retorne suas seleções |
| Step 8 	| Visualizar uma listagem em formato de cards com os profissionais e suas informações gerais |
| Step 9 	| Clicar no botão "Contratar"  |
| Resultado esperado | O usuário deverá ser redirecionado para uma nova aba onde poderá iniciar um diálogo com o profissional e prosseguir com o agendamento/contratação do serviço  |
|  	|  	|

