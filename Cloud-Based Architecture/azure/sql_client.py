import pyodbc
from config import AZURE_SQL_SERVER, AZURE_SQL_DATABASE, AZURE_SQL_USERNAME, AZURE_SQL_PASSWORD

connection_string = f'DRIVER={{ODBC Driver 17 for SQL Server}};SERVER={AZURE_SQL_SERVER};DATABASE={AZURE_SQL_DATABASE};UID={AZURE_SQL_USERNAME};PWD={AZURE_SQL_PASSWORD}'

def query_database(query):
    with pyodbc.connect(connection_string) as conn:
        cursor = conn.cursor()
        cursor.execute(query)
        result = cursor.fetchall()
        for row in result:
            print(row)
