# Projeto de Upload e Listagem de Arquivos no S3

Este projeto é uma aplicação para upload e listagem de arquivos em um bucket do Amazon S3. O backend é desenvolvido em .NET e o front-end é construído com Angular.

## Funcionalidades

- **Upload de Arquivos**: Permite fazer upload de arquivos para um bucket S3.
- **Listagem de Arquivos**: Permite listar todos os arquivos em um bucket S3 com a opção de filtrar por prefixo.
- **Download de Arquivo**: Permite baixar um arquivo específico do bucket S3 usando uma chave.

## Tecnologias Utilizadas

- **Backend**: .NET 6/7/8
- **Front-end**: Angular
- **Serviço de Armazenamento**: Amazon S3

## API

### 1. Upload de Arquivo

- **Endpoint**: `POST /api/Files`
- **Descrição**: Faz o upload de um arquivo para um bucket S3.
- **Parâmetros**:
  - `file` (form-data): Arquivo a ser enviado.
  - `bucketName` (form-data): Nome do bucket S3 onde o arquivo será armazenado.
  - `prefix` (form-data, opcional): Prefixo para o caminho do arquivo no bucket S3.

- **Exemplo de Requisição**:
  ```bash
  curl -X POST "https://localhost:7286/api/Files" \
       -F "file=@path/to/your/file.txt" \
       -F "bucketName=your-bucket-name" \
       -F "prefix=optional-prefix"
  ```

### 2. Listar Arquivos

- **Endpoint**: `GET /api/Files`
- **Descrição**: Lista todos os arquivos em um bucket S3, com a opção de filtrar por prefixo.
- **Parâmetros**:
  - `bucketName` (query string): Nome do bucket S3.
  - `prefix` (query string, opcional): Prefixo para filtrar os arquivos.

- **Exemplo de Requisição**:
  ```bash
  curl -X GET "https://localhost:7286/api/Files?bucketName=your-bucket-name&prefix=optional-prefix"
  ```

### 3. Baixar Arquivo

- **Endpoint**: `GET /api/Files/{key}`
- **Descrição**: Obtém um arquivo específico do bucket S3 usando a chave do arquivo.
- **Parâmetros**:
  - `bucketName` (path): Nome do bucket S3.
  - `key` (path): Chave do arquivo no bucket S3.

- **Exemplo de Requisição**:
  ```bash
  curl -X GET "https://localhost:7286/api/Files/your-file-key?bucketName=your-bucket-name"
  ```

## Configuração do Ambiente

### Backend (.NET)

1. **Instalação**: Clone o repositório e navegue para o diretório do projeto.
2. **Instalação de Dependências**: Execute `dotnet restore` para restaurar as dependências.
3. **Configuração**: Configure as credenciais da AWS e o nome do bucket no arquivo de configuração.
4. **Execução**: Execute `dotnet run` para iniciar a aplicação backend.

### Front-end (Angular)

1. **Instalação**: Clone o repositório e navegue para o diretório do projeto.
2. **Instalação de Dependências**: Execute `npm install` para instalar as dependências.
3. **Configuração**: Atualize o arquivo `environment.ts` com a URL do backend.
4. **Execução**: Execute `ng serve` para iniciar a aplicação front-end.

## Contribuição

Sinta-se à vontade para contribuir com melhorias. Faça um fork do repositório, crie uma branch para suas alterações e envie um pull request.
