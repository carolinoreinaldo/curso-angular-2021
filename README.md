# curso-angular-2021

Comandos : 
npm init -y

comentário ==> ele vai criar o arquivo package.json
comentário ==> o -y indica a resposta padrão "yes" para todas as perguntas
--------------------------------------
npm i json-server

comentário : vai instalar o json-server na aplicação

=================================================
Configurando o back-end
=================================================
 - Dentro do package.json foi criado o comando de inicialização :
"scripts": {
    "start": "json-server --watch db.json --port 5000"
}

- Para inicializar o backend utilizar o comando : 
npm start

=================================================
Criação da Aplicação Angular
=================================================
npm i -g @angular/cli
ng new minha-app --minimal //minimal retira algumas coisas instalando apenas o necessário

- Para inicializar o frontend utilizar o comando : 
npm start

- A portal padrão é a 4200 ==> http://localhost:4200
=================================================
Comandos úteis
=================================================
Alt + Shift + pra baixo -> Copia a linha
Alt + Shift + F -> Formata o documento
