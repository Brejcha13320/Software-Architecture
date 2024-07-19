import boto3
from config import AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_S3_BUCKET_NAME

s3_client = boto3.client(
    's3',
    aws_access_key_id=AWS_ACCESS_KEY_ID,
    aws_secret_access_key=AWS_SECRET_ACCESS_KEY
)

def upload_file_to_s3(file_name, object_name=None):
    if object_name is None:
        object_name = file_name
    s3_client.upload_file(file_name, AWS_S3_BUCKET_NAME, object_name)
    print(f'File {file_name} uploaded to {AWS_S3_BUCKET_NAME}/{object_name}')
