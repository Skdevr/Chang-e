"""Testes do health check.

Nao dependem do PostgreSQL.
"""

from httpx import AsyncClient

from app.core.config import get_settings


async def test_health_retorna_200(client: AsyncClient) -> None:
    """O endpoint responde HTTP 200."""
    response = await client.get(f"{get_settings().api_v1_prefix}/health")

    assert response.status_code == 200


async def test_health_retorna_status_e_servico(client: AsyncClient) -> None:
    """O corpo confirma o status e o nome do servico."""
    response = await client.get(f"{get_settings().api_v1_prefix}/health")

    assert response.json() == {"status": "ok", "service": "change-api"}
