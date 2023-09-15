# [SITE NA VERCEL](https://projeto-spa-lilac.vercel.app/)
-------------------------------------------------

> # Estrutura de pastas
> - public: conteúdo estático (não afetado pela programação).
> - src: todo o conteúdo dentro será reativo no projeto
> - components: pasta para agrupar os componentes criados no seu projeto
> - routes: pasta que poderá possuir, tanto as páginas de rotas, quando os imports e configuração das rotas com os as páginas que serão renderizadas
> - pages: pasta que pode armazenar páginas de seu projeto
-------------------------------------------------------------

> # Hooks
> - useState -> variavel de controle, para atribuir valores e controlar entrada de dados
> - useParams -> pegar o ID da URL
> - useNavigate -> hook para rotas do react-router-dom, sempre tem que estar dentro de uma função, podendo ser uma arrowFunction em um onClick e tambem em handles do seu projeto
> - useEffect -> hook para identificar renderização condicional, podendo ter 3 tipos:
>> ### useEffect(() => { })
>> ##### Renderizará o conteúdo dentro, apenas 1 vez, quando a página recarregar
>> -------------------------
>> ### useEffect(() => { }, [ ])
>> ##### Esse tipo, ele possui um campo chamado *Array de Dependência*, mas ele está vazio, ou seja, qualquer alteração na página, ele irá executar o código dentro dele
>> -------------------------
>> ### useEffect(() => { },[ variavel ])
>> ##### Esse tipo, ele analisará a variavel ou função que vc passar na *Array de Dependencias*, se essas variaveis mudarem, ele atualizará o código dentro dele
>> -------------------------
-----------------------------------------------------------------------------------------

> # Css Module
> - CSS Module -> modulos de css que precisam ser criados em ordem de uso, seguindo o HTML
------------------------------------------------------------------------------------------

> # Anotações
> - Todo arquivo JSX são componentes.
> - StrictMode é um comando que obriga usar tudo que vc declarar de variavel ou objeto. Com isso, ele renderiza 2 vezes, para garantir essa verificação de desempenho do projeto.
> - Nome dos componentes SEMPRE tem que iniciar com letra MAIÚSCULA!
