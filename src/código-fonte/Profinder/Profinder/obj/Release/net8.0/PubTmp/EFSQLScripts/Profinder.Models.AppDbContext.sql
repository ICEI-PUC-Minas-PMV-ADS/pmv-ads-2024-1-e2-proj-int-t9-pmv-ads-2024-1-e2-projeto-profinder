IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20240619030522_InitialCreate'
)
BEGIN
    CREATE TABLE [Usuarios] (
        [Id] int NOT NULL IDENTITY,
        [NomeUsuario] nvarchar(max) NOT NULL,
        [Email] nvarchar(max) NOT NULL,
        [CPF] nvarchar(max) NOT NULL,
        [DataNascimento] date NOT NULL,
        [Telefone] nvarchar(max) NOT NULL,
        [Endereco] nvarchar(max) NOT NULL,
        [NumeroResidencia] int NOT NULL,
        [Cep] int NOT NULL,
        [Cidade] nvarchar(max) NOT NULL,
        [Bairro] nvarchar(max) NOT NULL,
        [Complemento] nvarchar(max) NULL,
        [Senha] nvarchar(max) NOT NULL,
        [ProcurandoCuidadorIdosos] bit NOT NULL,
        [ProcurandoCuidadorDeficiencia] bit NOT NULL,
        [Perfil] int NOT NULL,
        [NecessidadesEspecificas] nvarchar(max) NULL,
        [Habilidades] nvarchar(max) NULL,
        [Experiencia] nvarchar(max) NULL,
        [Formacao] nvarchar(max) NULL,
        [SobreMim] nvarchar(max) NULL,
        [CNPJ] nvarchar(max) NULL,
        [Discriminator] nvarchar(13) NOT NULL,
        CONSTRAINT [PK_Usuarios] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20240619030522_InitialCreate'
)
BEGIN
    CREATE TABLE [Contratacoes] (
        [Id] int NOT NULL IDENTITY,
        [ClienteId] int NOT NULL,
        [ProfissionalId] int NOT NULL,
        [DataInicio] datetime2 NOT NULL,
        [DataFim] datetime2 NOT NULL,
        [HoraInicio] time NOT NULL,
        [HoraFim] time NOT NULL,
        [DetalhesPaciente] nvarchar(max) NULL,
        [Valor] decimal(18,2) NOT NULL,
        [Status] nvarchar(max) NULL,
        CONSTRAINT [PK_Contratacoes] PRIMARY KEY ([Id]),
        CONSTRAINT [FK_Contratacoes_Usuarios_ClienteId] FOREIGN KEY ([ClienteId]) REFERENCES [Usuarios] ([Id]) ON DELETE NO ACTION,
        CONSTRAINT [FK_Contratacoes_Usuarios_ProfissionalId] FOREIGN KEY ([ProfissionalId]) REFERENCES [Usuarios] ([Id]) ON DELETE NO ACTION
    );
END;
GO

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20240619030522_InitialCreate'
)
BEGIN
    CREATE TABLE [Avaliacoes] (
        [Id] int NOT NULL IDENTITY,
        [Nota] int NOT NULL,
        [Comentario] nvarchar(max) NULL,
        [DataAvaliacao] datetime2 NOT NULL,
        [ProfissionalId] int NOT NULL,
        [ContratacaoId] int NOT NULL,
        CONSTRAINT [PK_Avaliacoes] PRIMARY KEY ([Id]),
        CONSTRAINT [FK_Avaliacoes_Contratacoes_ContratacaoId] FOREIGN KEY ([ContratacaoId]) REFERENCES [Contratacoes] ([Id]) ON DELETE CASCADE,
        CONSTRAINT [FK_Avaliacoes_Usuarios_ProfissionalId] FOREIGN KEY ([ProfissionalId]) REFERENCES [Usuarios] ([Id]) ON DELETE CASCADE
    );
END;
GO

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20240619030522_InitialCreate'
)
BEGIN
    CREATE UNIQUE INDEX [IX_Avaliacoes_ContratacaoId] ON [Avaliacoes] ([ContratacaoId]);
END;
GO

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20240619030522_InitialCreate'
)
BEGIN
    CREATE INDEX [IX_Avaliacoes_ProfissionalId] ON [Avaliacoes] ([ProfissionalId]);
END;
GO

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20240619030522_InitialCreate'
)
BEGIN
    CREATE INDEX [IX_Contratacoes_ClienteId] ON [Contratacoes] ([ClienteId]);
END;
GO

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20240619030522_InitialCreate'
)
BEGIN
    CREATE INDEX [IX_Contratacoes_ProfissionalId] ON [Contratacoes] ([ProfissionalId]);
END;
GO

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20240619030522_InitialCreate'
)
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20240619030522_InitialCreate', N'8.0.6');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20240619225726_mssql.azure_migration_370'
)
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20240619225726_mssql.azure_migration_370', N'8.0.6');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20240619231219_mssql.azure_migration_341'
)
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20240619231219_mssql.azure_migration_341', N'8.0.6');
END;
GO

COMMIT;
GO

