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
| Step 2 	| Fazer login como Usuário
| Step 3 	| Acessar a tela >> Profissionais  |
| Step 4 	| Selecionar através dos filtros disponíveis o profissional e sua especialidade, caso deseje para este último|
| Step 5 	| Os filtros selecionados deverão ser exibidos em uma linha resumo para que o usuário saiba o que será buscado quando aplicá-los |
| Step 6 	| Clicar em Aplicar para que o filtro retorne suas seleções |
| Resultado esperado | Deverá ser exibido uma lista de profissionais apenas com as seleções indicadas pelo usuário para tipo de profissional e especialidade |
|  	|  	|

| **Caso de Teste** 	| **CT-06 – Entrar em contato com o profissional para Agendamento** 	|
|:---:	|:---:	|
|	Requisito 	| RF-003 - Deverá conter dados do profissional para agendamento. |
| Objetivo do Teste 	| Entrar em contato com o profissional desejado para agendamento do serviço |
| Pré-condição 	| O usuário precisa ter um login válido no sistema ProFinder |
| Step 1 	| Acessar um navegador e inserir a url do sistema <br>www.profinder.com.br<br> |
| Step 2 	| Fazer login como Usuário
| Step 3 	| Acessar a tela >> Profissionais  |
| Step 4 	| Clicar na opção "Contratar" para o profissional desejado|
| Resultado esperado | O usuário deverá ser redirecionado para a tela de "Etapa de Solicitação do Agendamento"|
|  	|  	|

| **Caso de Teste** 	| **CT-07 – Visualizar dados do Profissional** 	|
|:---:	|:---:	|
|	Requisito 	| RF-003 - Deverá conter dados do profissional para agendamento. |
| Objetivo do Teste 	| Usuário deverá visualizar os dados do profissional selecionado |
| Pré-condição 	| O usuário precisa ter um login válido no sistema ProFinder |
| Step 1 	| Acessar um navegador e inserir a url do sistema <br>www.profinder.com.br<br> |
| Step 2 	| Fazer login como Usuário
| Step 3 	| Acessar a tela >> Profissionais  |
| Step 4 	| Clicar na opção "Contratar" para o profissional desejado|
| Step 5 	| Redirecionar para tela de "Etapa de Solicitação do Agendamento"|
| Resultado esperado | Visualizar os dados do profissional selecionado ao lado esquerdo da tela  |
|  	|  	|

| **Caso de Teste** 	| **CT-08 – Redirecionamento para Whatsapp entre Usuário e Profissional** 	|
|:---:	|:---:	|
|	Requisito 	| RF-003 - Deverá conter dados do profissional para agendamento. |
| Objetivo do Teste 	| Usuário deve ser redirecionado para whatsapp do profissional selecionado |
| Pré-condição 	| O usuário precisa ter um login válido no sistema ProFinder |
| Step 1 	| Acessar um navegador e inserir a url do sistema <br>www.profinder.com.br<br> |
| Step 2 	| Fazer login como Usuário
| Step 3 	| Acessar a tela >> Profissionais  |
| Step 4 	| Clicar na opção "Contratar" para o profissional desejado|
| Step 5 	| Redirecionar para tela de "Etapa de Solicitação do Agendamento"|
| Step 6 	| Selecionar o botão "Iniciar conversa"|
| Resultado esperado | O usuário deverá ser redirecionado para whatsapp do profissional selecionado  |
|  	|  	|

| **Caso de Teste** 	| **CT-09 – Inserir data, hora e valor para avançar** 	|
|:---:	|:---:	|
|	Requisito 	| RF-003 - Deverá conter dados do profissional para agendamento. |
| Objetivo do Teste 	| Inserir o período acordado com o profissional e avançar para próxima etapa |
| Pré-condição 	| O usuário precisa ter um login válido no sistema ProFinder |
| Step 1 	| Acessar um navegador e inserir a url do sistema <br>www.profinder.com.br<br> |
| Step 2 	| Fazer login como Usuário
| Step 3 	| Acessar a tela >> Profissionais  |
| Step 4 	| Clicar na opção "Contratar" para o profissional desejado|
| Step 5 	| Redirecionar para tela de "Etapa de Solicitação do Agendamento"|
| Step 6 	| Inserir o período e horário de contratação do serviço que foi acordado com o profissional via whatsapp|
| Step 7 	| Clicar em "Avançar"|
| Resultado esperado | Usuário deverá ser redirecionado para a página de "Análise do agendamento" |
|  	|  	|

| **Caso de Teste** 	| **CT-10 – Usuário visualizar confirmações pelo Profissional do serviço agendado** 	|
|:---:	|:---:	|
|	Requisito 	| RF-003 - Deverá conter dados do profissional para agendamento. |
| Objetivo do Teste 	| Visualizar etapas confirmadas pelo profissional para Avançar com a contratação |
| Pré-condição 	| O usuário precisa ter um login válido no sistema ProFinder |
| Step 1 	| Acessar um navegador e inserir a url do sistema <br>www.profinder.com.br<br> |
| Step 2 	| Fazer login como Usuário
| Step 3 	| Acessar a tela >> Profissionais  |
| Step 4 	| Clicar na opção "Contratar" para o profissional desejado|
| Step 5 	| Redirecionar para tela de "Etapa de Solicitação do Agendamento"|
| Step 6 	| Inserir o período e horário de contratação do serviço que foi acordado com o profissional via whatsapp|
| Step 7 	| Clicar em "Avançar"|
| Step 8 	| Visualizar as etapas confirmadas pelo Profissional |
| Step 9	| Visualizar botão habilitado para clicar em "Avançar" |
| Resultado esperado | Usuário deverá ser redirecionado para a página de "Etapa de Conclusão do Agendamento" |
|  	|  	|

| **Caso de Teste** 	| **CT-11 – Visualizar resumo da contratação e opções de pagamento** 	|
|:---:	|:---:	|
|	Requisito 	| RF-003 - Deverá conter dados do profissional para agendamento. |
| Objetivo do Teste 	| Visualizar resumo do período contratado e opções de pagamento |
| Pré-condição 	| O usuário precisa ter um login válido no sistema ProFinder |
| Step 1 	| Acessar um navegador e inserir a url do sistema <br>www.profinder.com.br<br> |
| Step 2 	| Fazer login como Usuário
| Step 3 	| Acessar a tela >> Profissionais  |
| Step 4 	| Clicar na opção "Contratar" para o profissional desejado|
| Step 5 	| Redirecionar para tela de "Etapa de Solicitação do Agendamento"|
| Step 6 	| Inserir o período e horário de contratação do serviço que foi acordado com o profissional via whatsapp|
| Step 7 	| Clicar em "Avançar"|
| Step 8 	| Visualizar as etapas confirmadas pelo Profissional |
| Step 9 	| Visualizar botão habilitado para clicar em "Avançar" |
| Step 10 	| Visualizar a tela de "Etapa de Conclusão do Agendamento" |
| Resultado esperado | Usuário deverá visualizar os dados resumidos contendo nome do profissional, período contratado, horário e endereço onde o profissional prestará o serviço e opções para pagamento" |
|  	|  	|

| **Caso de Teste** 	| **CT-12 – Usuário efetivar pagamento** 	|
|:---:	|:---:	|
|	Requisito 	| RF-003 - Deverá conter dados do profissional para agendamento. |
| Objetivo do Teste 	| Usuário efetuar o pagamento com dados válidos |
| Pré-condição 	| O usuário precisa ter um login válido no sistema ProFinder |
| Step 1 	| Acessar um navegador e inserir a url do sistema <br>www.profinder.com.br<br> |
| Step 2 	| Fazer login como Usuário
| Step 3 	| Acessar a tela >> Profissionais  |
| Step 4 	| Clicar na opção "Contratar" para o profissional desejado|
| Step 5 	| Redirecionar para tela de "Etapa de Solicitação do Agendamento"|
| Step 6 	| Inserir o período e horário de contratação do serviço que foi acordado com o profissional via whatsapp|
| Step 7 	| Clicar em "Avançar"|
| Step 8 	| Visualizar as etapas confirmadas pelo Profissional |
| Step 9 	| Visualizar botão habilitado para clicar em "Avançar" |
| Step 10 	| Visualizar a tela de "Etapa de Conclusão do Agendamento" |
| Step 11 	| Inserir dados válidos para pagamento |
| Resultado esperado | Modal deverá ser exibido confirmando o pagamento e o usuário deverá ser redirecionado para a aba "Minhas Contratações"   |
|  	|  	|
