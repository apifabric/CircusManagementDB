# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, Date, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  November 14, 2024 16:00:18
# Database: sqlite:////tmp/tmp.krez1z4qmJ-01JCNPDRGRYMFVNMHTJBEN1RY7/CircusManagementDB/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Act(SAFRSBaseX, Base):
    """
    description: Performances or acts available in the circus shows.
    """
    __tablename__ = 'act'
    _s_collection_name = 'Act'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    description = Column(Text)
    duration_minutes = Column(Integer, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    PerformerActAssociationList : Mapped[List["PerformerActAssociation"]] = relationship(back_populates="act")



class Animal(SAFRSBaseX, Base):
    """
    description: Animals involved in circus performances.
    """
    __tablename__ = 'animal'
    _s_collection_name = 'Animal'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    species = Column(String, nullable=False)
    age = Column(Integer)

    # parent relationships (access parent)

    # child relationships (access children)
    CaretakerAnimalAssociationList : Mapped[List["CaretakerAnimalAssociation"]] = relationship(back_populates="animal")
    AnimalShowAssociationList : Mapped[List["AnimalShowAssociation"]] = relationship(back_populates="animal")



class Caretaker(SAFRSBaseX, Base):
    """
    description: Individuals responsible for the care of circus animals.
    """
    __tablename__ = 'caretaker'
    _s_collection_name = 'Caretaker'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    start_date = Column(Date)

    # parent relationships (access parent)

    # child relationships (access children)
    CaretakerAnimalAssociationList : Mapped[List["CaretakerAnimalAssociation"]] = relationship(back_populates="caretaker")



class Circu(SAFRSBaseX, Base):
    """
    description: Details about different circus setups.
    """
    __tablename__ = 'circus'
    _s_collection_name = 'Circu'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    location = Column(String)
    start_date = Column(Date)
    end_date = Column(Date)

    # parent relationships (access parent)

    # child relationships (access children)
    ShowList : Mapped[List["Show"]] = relationship(back_populates="circus")



class Equipment(SAFRSBaseX, Base):
    """
    description: Equipment used in circus performances and logistics.
    """
    __tablename__ = 'equipment'
    _s_collection_name = 'Equipment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    function = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    ShowEquipmentAssociationList : Mapped[List["ShowEquipmentAssociation"]] = relationship(back_populates="equipment")



class Performer(SAFRSBaseX, Base):
    """
    description: Information about performers within a circus.
    """
    __tablename__ = 'performer'
    _s_collection_name = 'Performer'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    age = Column(Integer)
    specialty = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    PerformerActAssociationList : Mapped[List["PerformerActAssociation"]] = relationship(back_populates="performer")



class CaretakerAnimalAssociation(SAFRSBaseX, Base):
    """
    description: Link table to associate caretakers with animals.
    """
    __tablename__ = 'caretaker_animal_association'
    _s_collection_name = 'CaretakerAnimalAssociation'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    caretaker_id = Column(ForeignKey('caretaker.id'), nullable=False)
    animal_id = Column(ForeignKey('animal.id'), nullable=False)

    # parent relationships (access parent)
    animal : Mapped["Animal"] = relationship(back_populates=("CaretakerAnimalAssociationList"))
    caretaker : Mapped["Caretaker"] = relationship(back_populates=("CaretakerAnimalAssociationList"))

    # child relationships (access children)



class PerformerActAssociation(SAFRSBaseX, Base):
    """
    description: Link table to associate performers with acts.
    """
    __tablename__ = 'performer_act_association'
    _s_collection_name = 'PerformerActAssociation'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    performer_id = Column(ForeignKey('performer.id'), nullable=False)
    act_id = Column(ForeignKey('act.id'), nullable=False)

    # parent relationships (access parent)
    act : Mapped["Act"] = relationship(back_populates=("PerformerActAssociationList"))
    performer : Mapped["Performer"] = relationship(back_populates=("PerformerActAssociationList"))

    # child relationships (access children)



class Show(SAFRSBaseX, Base):
    """
    description: Scheduled shows that occur at circuses.
    """
    __tablename__ = 'show'
    _s_collection_name = 'Show'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    date = Column(Date)
    circus_id = Column(ForeignKey('circus.id'), nullable=False)

    # parent relationships (access parent)
    circus : Mapped["Circu"] = relationship(back_populates=("ShowList"))

    # child relationships (access children)
    AnimalShowAssociationList : Mapped[List["AnimalShowAssociation"]] = relationship(back_populates="show")
    ShowEquipmentAssociationList : Mapped[List["ShowEquipmentAssociation"]] = relationship(back_populates="show")
    TicketList : Mapped[List["Ticket"]] = relationship(back_populates="show")



class AnimalShowAssociation(SAFRSBaseX, Base):
    """
    description: Link table to associate animals with shows.
    """
    __tablename__ = 'animal_show_association'
    _s_collection_name = 'AnimalShowAssociation'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    animal_id = Column(ForeignKey('animal.id'), nullable=False)
    show_id = Column(ForeignKey('show.id'), nullable=False)

    # parent relationships (access parent)
    animal : Mapped["Animal"] = relationship(back_populates=("AnimalShowAssociationList"))
    show : Mapped["Show"] = relationship(back_populates=("AnimalShowAssociationList"))

    # child relationships (access children)



class ShowEquipmentAssociation(SAFRSBaseX, Base):
    """
    description: Link table to associate equipment with shows.
    """
    __tablename__ = 'show_equipment_association'
    _s_collection_name = 'ShowEquipmentAssociation'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    show_id = Column(ForeignKey('show.id'), nullable=False)
    equipment_id = Column(ForeignKey('equipment.id'), nullable=False)

    # parent relationships (access parent)
    equipment : Mapped["Equipment"] = relationship(back_populates=("ShowEquipmentAssociationList"))
    show : Mapped["Show"] = relationship(back_populates=("ShowEquipmentAssociationList"))

    # child relationships (access children)



class Ticket(SAFRSBaseX, Base):
    """
    description: Tickets sold for circus shows.
    """
    __tablename__ = 'ticket'
    _s_collection_name = 'Ticket'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    show_id = Column(ForeignKey('show.id'), nullable=False)
    price = Column(Integer, nullable=False)
    seat_number = Column(String, nullable=False)
    purchaser_name = Column(String, nullable=False)

    # parent relationships (access parent)
    show : Mapped["Show"] = relationship(back_populates=("TicketList"))

    # child relationships (access children)
