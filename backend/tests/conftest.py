"""Configuracao compartilhada dos testes.

A ``DATABASE_URL`` e definida antes de importar a aplicacao porque a configuracao
exige esse valor. O endereco abaixo nunca e conectado: o health check nao toca o
banco e ``create_async_engine`` nao abre conexao ao ser criada.
"""

import os

os.environ.setdefault(
    "DATABASE_URL",
    "postgresql+asyncpg://change:local_password@localhost:5432/change_test",
)

from collections.abc import AsyncGenerator

import pytest
from httpx import ASGITransport, AsyncClient

from app.main import app


@pytest.fixture
async def client() -> AsyncGenerator[AsyncClient]:
    """Cliente HTTP que fala com a aplicacao ASGI em memoria, sem rede."""
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as async_client:
        yield async_client
