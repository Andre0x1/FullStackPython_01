Detalhes de criação do projeto:

	Projeto criado como sendo teste para criação de um modelo fullTack Python-Django
	
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
	python .\manage.py run server

Parte -02

1- Criar modelos em NomeApp.models

	class NomeClasse(models.Model):
		#Dados da Classe,

2- Focar logica nos models e não nas views

3- Toda mundaça nos modelos é nescessario rodar:

    python .\manage.py makemigrations
	python .\manage.py migrate

Parte 03

1- Instalar NPM e NodeJS.

2- Criar no APP para o frontend
    
    django-admin startapp frontend

3 Criar pastas dentro de frontend