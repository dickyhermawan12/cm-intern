from sqlalchemy.orm import declarative_base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from pydantic import BaseSettings


class Settings(BaseSettings):
    db_host: str = "localhost"
    db_port: int = 5432
    db_user: str = "postgres"
    db_password: str = "admin"
    db_name: str = "demo"


settings = Settings()

# create engine that connects to rds instance (postgres)
engine = create_engine(
    f"postgresql://{settings.db_user}:{settings.db_password}@{settings.db_host}:{settings.db_port}/{settings.db_name}", echo=True)

Base = declarative_base()

SessionLocal = sessionmaker(bind=engine)
