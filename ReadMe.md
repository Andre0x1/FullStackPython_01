Detalhes de criação do projeto:

	Projeto criado como sendo teste para criação de um modelo fullTack Python-Django
	
Nescesario instalação:
    
    Django : pip install Django
    Node.js: pip install nodejs
    Rest_framework:pip install djangorestframework 


1- Passos durante a criação do projeto:

	Django startproject 'Nomeprojeto' -- Cria pasta referente ao projeto total;
	Django startapp 'NomeApp -- cria pasta referente ao app dentro do projeto;

2- Dentro de settings.py Adicionar as seguintes linhas:

	NomeApp.apps.ApiConfig
	rest_framewrok

3- Criar funções dentro de views que vão ser mostradas no site

4- Adicionar a url no Nomeprojeto.urls e sua corresoindete no NomeApp.urls e vincular funções da view.

5- Rodar no terminal:

	python .\manage.py makemigrations
	python .\manage.py migrate
	python .\manage.py runserver

Parte -02

1- Criar modelos em NomeApp.models

	class NomeClasse(models.Model):
		#Dados da Classe,

2- Focar logica nos models e não nas views

3- Criar serializers para o seus modulos, com as variaveis referentes ao modelo 
    
    from rest_framework import serializers
    from .models import Room    
    
    class RoomSerializers(serializers.ModelSerializer):

4- Toda mudança nos modelos é nescessario rodar:

    python .\manage.py makemigrations
	python .\manage.py migrate

Parte 03

1- Instalar NPM e NodeJS.

2- Criar no APP para o frontend
    
    django-admin startapp frontend

3 Criar pastas dentro de frontend

    src - componentes
    static- css , frontend , images
    templates - frontend

4- Rodar no terminal para criar dados do node.js:
    
    npm init -y

5- Instalar pacotes do NPM:
    
    npm i webpack webpack-cli --save-dev
    npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
    npm i react react-dom --save-dev
    npm install @material-ui/core
    npm install @babel/plugin-proposal-class-properties
    npm install react-router-dom
    npm install @material-ui/icons

6- Criar configuration scripts

    Criar em frontend : babel.config.json 
    Copiar texto em : https://github.com/techwithtim/Music-Controller-Web-App-Tutorial/blob/main/Tutorial%201%20-%204/frontend/babel.config.json
    criar em frontend:webpack.config.js
    Copiar texto em : https://github.com/techwithtim/Music-Controller-Web-App-Tutorial/blob/main/Tutorial%201%20-%204/frontend/webpack.config.js

7- Adicionar em package.json scripts:
    
    "dev": "webpack --mode development --watch"
    "build": "webpack --mode production"

8- Criar em src/index.js e templates/frontend/index.html

9- Completar dados de index.html

10- Definir funções em view.py para renderizar paginas

11- Criar urls.py em frontend

12 Adicionar linhas em NomeApp.urls

13- Vincular em front.urls  chamada para indesx do .views

14- Criar App.js em Components

15 - Importar App.js em Index.js

16 - Em musicControler adicionar em setting.py

    INSTALLED APPS: 
    'frontendend.apps.FrontendConfig'

16 - Rodar comando em frontend
    
    npm run dev

Parte 04

1- Criar em frontend/static/css: index.css

2- Criar estilos:
        
    #nome_id:
3- Criar em components e criar Funções

    HomePage.js

4- Inserir em Apps.JS

    import Homepage from "./HomePage";

5- Atualizar render em Apps.js para:

     render(){
        return <HomePage />;
    }

6- Crias paginas em components:
    
    RoomJoinPage.js
    CreateRoomPage.js

7- Importar em HomePage.js:

    import CreateRoomPage from "./CreateRoomPage";
    import RoomJoinPage from "./RoomJoinPage"; 
    import {BrowserRouter as Router,Switch,Route,Link,Redirect} from "react-router-dom";

8- Criar dentro de render() Router com Switch para Routes das paginas criadas:

    <Router>
        <Switch>
            <Route exact path='/'><p>Homepage</p></Route>
            --etc..
        </Switch>
    </Router>

9- Atualizar as path em urls.py:



    

    