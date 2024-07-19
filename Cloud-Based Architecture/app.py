from aws.s3_client import upload_file_to_s3
from azure.sql_client import query_database

# Subir un archivo a S3
file_name = 'test_file.txt'
upload_file_to_s3(file_name)

# Consultar la base de datos de Azure
query = 'SELECT * FROM my_table'
query_database(query)
