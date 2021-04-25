Detalhes de criação do projeto:

	Projeto criado como sendo teste para criação de um modelo fullTack Python-Django
	
Passos durante a criação do projeto:

	Django startproject 'Nomeprojeto' -- Cria pasta referente ao projeto total;
	Django startapp 'NomeApp -- cria pasta referente ao app dentro do projeto;

2- Dentro de settings.py:
	adicionar as seguintes linhas: NomeApp.apps.ApiConfig
								   rest_framewrok

3- Criar funções dentro de views --Que vão ser mostradas no site

4- Adicionar a ulr no Nomeprojeto.urls e sua corresoindete no NomeApp.urls e vincular funções da view.

5- Rodar python .\manage.py makemigrations
				.\manage.py migrate
				.\manage.py run server