"""Health check da API.

A resposta e deliberadamente simples e deterministica: nao expoe versao interna,
dependencias, credenciais nem detalhes de infraestrutura.
"""

from fastapi import APIRouter
from pydantic import BaseModel

from app.core.config import get_settings

router = APIRouter(tags=["health"])


class HealthResponse(BaseModel):
    """Corpo da resposta do health check."""

    status: str
    service: str


@router.get("/health", response_model=HealthResponse)
async def read_health() -> HealthResponse:
    """Confirma que a aplicacao esta no ar."""
    settings = get_settings()
    return HealthResponse(status="ok", service=settings.app_name)
