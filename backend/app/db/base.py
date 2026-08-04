"""Base declarativa do SQLAlchemy.

Ainda nao existem modelos mapeados. A base existe para que o Alembic tenha um
``MetaData`` unico como alvo desde a fundacao.
"""

from sqlalchemy.orm import DeclarativeBase


class Base(DeclarativeBase):
    """Classe base de todos os modelos mapeados do Chang'e."""
