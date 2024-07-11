# certificateGen



Gerador de Certificados
Este projeto permite que você gere certificados personalizados usando um modelo predefinido. Você pode registrar pessoas, armazenar seus dados localmente e gerar certificados para elas.

Características
Registre pessoas com seu nome, curso, data de conclusão e mês.
Armazene pessoas registradas no armazenamento local do navegador.
Gere certificados para as pessoas registradas usando um modelo predefinido.
Limpe a lista de pessoas registradas.
Carregue uma lista de pessoas de um arquivo JSON.
Exibir a lista de pessoas registradas.
Tecnologias Utilizadas
HTML
CSS
JavaScript
jQuery
jsPDF
Inicialização
Começando
Pré-requisitos
Um navegador moderno
Servidor local para servir os arquivos HTML (opcional, mas recomendado)
Instalação

Clone o repositório:
git clone https://github.com/your-username/certificate-generator.git
cd certificate-generator


Abra a pasta do projeto e verifique se você tem os seguintes arquivos:

index.html
css/styles.css
js/scripts.js
images/certificado.png
Abra index.htmlno seu navegador para usar o aplicativo.

Uso
Registrar uma pessoa:

Preencha o formulário com o nome da pessoa, mês, data de conclusão e curso.
Clique no botão "Cadastrar" para cadastrar a pessoa.
Gerar Certificados:

Clique no botão "Gerar Certificado" para gerar certificados para todas as pessoas registradas. Os certificados serão salvos como arquivos PDF.
Limpar a lista de pessoas:

Clique no botão "Limpar Lista" para limpar a lista de pessoas cadastradas.
Carregar uma lista de pessoas:

Clique no botão "Escolher arquivo" para selecionar um arquivo JSON contendo a lista de pessoas.
Clique no botão "Carregar Lista" para carregar a lista. O arquivo JSON deve ter o seguinte formato:

[
    {"name": "John Doe", "month": "June", "completion_date": "2023-06-20", "course": "Python Programming"},
    {"name": "Jane Smith", "month": "July", "completion_date": "2023-07-15", "course": "Web Development"}
]

Exibir a lista de pessoas:

Clique no botão "Exibir Pessoas" para exibir a lista de pessoas cadastradas em um modal.
Costumização
Para personalizar o modelo de certificado ou ajustar o posicionamento do texto, modifique as linhas img.srce doc.textno scripts.jsarquivo.

Exemplo:

// Set the path to the certificate image template
img.src = 'images/c
