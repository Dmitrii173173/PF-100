from setuptools import setup, find_packages

setup(
    name="portfolio",
    version="0.1.0",
    packages=find_packages(),
    install_requires=[
        "fastapi==0.104.1",
        "uvicorn==0.24.0",
        "pydantic==2.4.2",
        "python-multipart==0.0.6",
        "sqlalchemy==2.0.23",
        "psycopg2-binary==2.9.9",
        "python-jose==3.3.0",
        "passlib==1.7.4",
        "python-dotenv==1.0.0",
        "alembic==1.12.1"
    ],
) 