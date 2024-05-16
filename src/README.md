## Configuração de Ambiente de Desenvolvimento

#### Instalação via terminal do Visual Studio Code


*Microsoft.AspNetCore.Mvc.Razor.RuntimeCompilation*


```bash
  dotnet add package Microsoft.AspNetCore.Mvc.Razor.RuntimeCompilation
```
- Permite que a aplicação seja atualizada simultaneamente sem a necessidade de rodar o compilador via terminal.


*EntityFrameworkCore.Tools*
```bash
dotnet tool install --global dotnet-ef
```

- Permite executar comandos como dotnet ef migrations add e dotnet ef database update diretamente do terminal integrado do Visual Studio Code.

*Microsoft.EntityFrameworkCore.SqlServer*
```bash
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
```
- Permite criar os relacionamentos com o banco de dados do Azure.

*Microsoft.EntityFrameworkCore*
```bash
dotnet add package Microsoft.EntityFrameworkCore
```
- Principal pacote para utilizar as ferramentas do framework.

*Microsoft.Data.SqlClient*
```bash
dotnet add package Microsoft.Data.SqlCliente
```

- Configuração necessária para acessar e conectar com o banco de dados remotamente.

*Microsoft.EntityFramwork.Design*
```bash
dotnet add package Microsoft.EntityFrameworkCore.Design
```

*Outros pacotes necessários*
```bash
dotnet add package Swashbuckle.AspNetCore
dotnet add package Azure.Identity
```

*Extensões do VScode*
- C# Dev Kit
- Azure Tools
- .NET Install Tool
