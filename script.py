import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "BodyStats.settings")
import psycopg2
from django.conf import settings

def testar_conexao():
    try:
        # Recuperar as configurações do banco de dados do Django
        db_settings = settings.DATABASES['default']

        # Conectar ao banco de dados PostgreSQL
        conn = psycopg2.connect(
            dbname=db_settings['bd2'],
            user=db_settings['pablodias'],
            password=db_settings['root'],
            host=db_settings['localhost'],
            port=db_settings['5432']
        )

        # Fechar a conexão
        conn.close()

        print("Conexão bem-sucedida!")
    except Exception as e:
        print("Erro ao conectar:", e)

if __name__ == "__main__":
    testar_conexao()
