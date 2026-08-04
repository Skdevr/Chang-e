"""Configuracao centralizada da aplicacao, carregada do ambiente."""

from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Parametros de execucao validados na inicializacao.

    Valores sensiveis vem do ambiente ou de ``backend/.env`` e nunca do codigo.
    """

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )

    app_name: str = "change-api"
    environment: str = "local"
    api_v1_prefix: str = "/api/v1"

    database_url: str

    cors_origins: list[str] = ["http://localhost:5173"]


@lru_cache
def get_settings() -> Settings:
    """Retorna a configuracao da aplicacao, resolvida uma unica vez por processo."""
    return Settings()
