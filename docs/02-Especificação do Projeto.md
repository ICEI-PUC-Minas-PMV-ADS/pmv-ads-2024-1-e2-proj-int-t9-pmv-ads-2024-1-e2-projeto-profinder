# Especificações do Projeto


A definição precisa do problema e dos pontos mais relevantes a serem abordados neste projeto foi realizada com a participação ativa dos usuários. Inicialmente, os membros da equipe conduziram um trabalho de imersão, o qual envolveu observações diretas dos usuários em seus ambientes naturais e a realização de entrevistas abertas e estruturadas. 

Com base nos dados obtidos, as personas foram desenvolvidas para representar perfis típicos de usuários do ProFinder. Cada persona foi cuidadosamente elaborada, levando em consideração características demográficas, comportamentais, motivações, frustrações, hobbies e histórias de vida relevantes para o contexto do projeto. 

Vale ainda ressaltar que as histórias de usuário foram criadas para ilustrar situações e cenários comuns enfrentados pelos usuários ao buscar e fornecer serviços de cuidado. 

## Personas



| <img src= '/docs/img/persona1.jpg' width="200px">  | **Ana Silva** | |
| :-------------: | :-------------: | :-------------: 
| Idade | 35 anos| 
|  Ocupação | Professora  |
|Aplicativos| Whatsapp, Instragram |
| **Motivações**  | **Frustações** | **Hobbies e História**  |
| Encontrar cuidadores confiáveis para cuidar de seus filhos enquanto está no trabalho|Dificuldade em conciliar horários de trabalho com horários disponíveis de cuidadores qualificados; | Gosta de ler, fazer atividade física; |
||Dificuldade em encontrar um serviço que disponha de diversos profissionais e suas especializações; |Gosta de passear no parque aos finais de semana com a família;|
|||Mãe de dois filhos pequenos|

| <img src= '/docs/img/persona2.jpg' width="200px">  | **João Oliveira** | |
| :-------------: | :-------------: | :-------------: 
| Idade | 68 anos| 
|  Ocupação | Aposentado  |
|Aplicativos| Facebook e Youtube |
| **Motivações**  | **Frustações** | **Hobbies e História**  |
| Encontrar profissionais que possam auxiliá-lo em tarefas diárias;|Encontrar pessoas de confiança para cuidar de sua saúde e bem-estar |Gosta de jardinagem;|
| Ter um profissional que possa ajudá-lo em suas necessidades básicas;|Encontrar pessoas especializadas em cuidar de idosos; |Gosta de assistir filmes clássicos;|
| Encontrar alguém que faça companhia;||Frequenta grupos de leitura na biblioteca local;|
|||Viúvo, mora sozinho em um bairro tranquilo;|


| <img src= '/docs/img/persona3.jpg' width="200px">  | **Marina Santos** | |
| :-------------: | :-------------: | :-------------: 
| Idade | 28 anos| 
|  Ocupação | Gerente de Marketing  |
|Aplicativos| Linkedln e Spotify |
| **Motivações**  | **Frustações** | **Hobbies e História**  |
| Encontrar cuidadores especializados para cuidar de seu irmão mais novo que possui deficiência física, enquanto ela está no trabalho. |Dificuldade em encontrar profissionais experientes e dedicados para cuidar das necessidades específicas de seu irmão;| Gosta de praticar yoga, cozinhar receitas saudáveis;| 
|||Participar de eventos culturais;|
|||Mora com o seu irmão em um apartamento na cidade; |

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| A aplicação deve permitir que o usuário gerencie suas tarefas | ALTA | 
|RF-002| A aplicação deve emitir um relatório de tarefas realizadas no mês   | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser responsiva | MÉDIA | 
|RNF-002| A aplicação deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)
