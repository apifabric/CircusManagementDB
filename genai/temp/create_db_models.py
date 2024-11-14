# using resolved_model gpt-4o-2024-08-06# created from response, to create create_db_models.sqlite, with test data
#    that is used to create project
# should run without error in manager 
#    if not, check for decimal, indent, or import issues

import decimal
import logging
import sqlalchemy
from sqlalchemy.sql import func 
from logic_bank.logic_bank import Rule
from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey, Date, DateTime, Numeric, Boolean, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import relationship
from datetime import date   
from datetime import datetime

logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

Base = declarative_base()  # from system/genai/create_db_models_inserts/create_db_models_prefix.py


class Circus(Base):
    """description: Details about different circus setups."""
    __tablename__ = 'circus'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    location = Column(String, nullable=True)
    start_date = Column(Date, default=date.today)
    end_date = Column(Date, default=date.today)


class Performer(Base):
    """description: Information about performers within a circus."""
    __tablename__ = 'performer'

    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    age = Column(Integer, nullable=True)
    specialty = Column(String, nullable=True)


class Act(Base):
    """description: Performances or acts available in the circus shows."""
    __tablename__ = 'act'

    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String, nullable=False)
    description = Column(Text, nullable=True)
    duration_minutes = Column(Integer, nullable=False)


class Show(Base):
    """description: Scheduled shows that occur at circuses."""
    __tablename__ = 'show'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    date = Column(Date, default=date.today)
    circus_id = Column(Integer, ForeignKey('circus.id'), nullable=False)


class Ticket(Base):
    """description: Tickets sold for circus shows."""
    __tablename__ = 'ticket'

    id = Column(Integer, primary_key=True, autoincrement=True)
    show_id = Column(Integer, ForeignKey('show.id'), nullable=False)
    price = Column(Integer, nullable=False)
    seat_number = Column(String, nullable=False)
    purchaser_name = Column(String, nullable=False)


class Animal(Base):
    """description: Animals involved in circus performances."""
    __tablename__ = 'animal'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    species = Column(String, nullable=False)
    age = Column(Integer, nullable=True)


class Caretaker(Base):
    """description: Individuals responsible for the care of circus animals."""
    __tablename__ = 'caretaker'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    start_date = Column(Date, default=date.today)


class Equipment(Base):
    """description: Equipment used in circus performances and logistics."""
    __tablename__ = 'equipment'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    function = Column(String, nullable=True)


class PerformerActAssociation(Base):
    """description: Link table to associate performers with acts."""
    __tablename__ = 'performer_act_association'

    id = Column(Integer, primary_key=True, autoincrement=True)
    performer_id = Column(Integer, ForeignKey('performer.id'), nullable=False)
    act_id = Column(Integer, ForeignKey('act.id'), nullable=False)


class AnimalShowAssociation(Base):
    """description: Link table to associate animals with shows."""
    __tablename__ = 'animal_show_association'

    id = Column(Integer, primary_key=True, autoincrement=True)
    animal_id = Column(Integer, ForeignKey('animal.id'), nullable=False)
    show_id = Column(Integer, ForeignKey('show.id'), nullable=False)


class CaretakerAnimalAssociation(Base):
    """description: Link table to associate caretakers with animals."""
    __tablename__ = 'caretaker_animal_association'

    id = Column(Integer, primary_key=True, autoincrement=True)
    caretaker_id = Column(Integer, ForeignKey('caretaker.id'), nullable=False)
    animal_id = Column(Integer, ForeignKey('animal.id'), nullable=False)


class ShowEquipmentAssociation(Base):
    """description: Link table to associate equipment with shows."""
    __tablename__ = 'show_equipment_association'

    id = Column(Integer, primary_key=True, autoincrement=True)
    show_id = Column(Integer, ForeignKey('show.id'), nullable=False)
    equipment_id = Column(Integer, ForeignKey('equipment.id'), nullable=False)


# ALS/GenAI: Create an SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# ALS/GenAI: Prepare for sample data

circus1 = Circus(name='Amazing Circus', location='New York', start_date=date(2023, 10, 1), end_date=date(2023, 12, 10))
circus2 = Circus(name='Wonderful Circus', location='Boston', start_date=date(2023, 11, 20), end_date=date(2024, 2, 1))
circus3 = Circus(name='Mystic Circus', location='Chicago', start_date=date(2023, 9, 15), end_date=date(2024, 1, 5))
circus4 = Circus(name='Epic Circus', location='Los Angeles', start_date=date(2023, 10, 5), end_date=date(2024, 3, 15))

performer1 = Performer(first_name='John', last_name='Doe', age=28, specialty='Juggler')
performer2 = Performer(first_name='Jane', last_name='Smith', age=32, specialty='Acrobat')
performer3 = Performer(first_name='Alice', last_name='Johnson', age=24, specialty='Clown')
performer4 = Performer(first_name='Bob', last_name='Williams', age=30, specialty='Magician')

act1 = Act(title='The Grand Juggle', description='A spectacular juggling act with lights.', duration_minutes=15)
act2 = Act(title='Flying Acrobats', description='Daring feats of acrobatics on the trapeze.', duration_minutes=20)
act3 = Act(title='Clown Parade', description='A fun-filled parade of clowns.', duration_minutes=10)
act4 = Act(title='Magic Extravaganza', description='A mesmerizing magic show.', duration_minutes=25)

show1 = Show(name='Night Show', date=date(2023, 10, 3), circus_id=1)
show2 = Show(name='Matinee Spectacle', date=date(2023, 11, 25), circus_id=2)
show3 = Show(name='Evening Drama', date=date(2023, 12, 12), circus_id=3)
show4 = Show(name='Holiday Bash', date=date(2024, 1, 7), circus_id=4)

ticket1 = Ticket(show_id=1, price=50, seat_number='A1', purchaser_name='Martin Laney')
ticket2 = Ticket(show_id=2, price=40, seat_number='B2', purchaser_name='Samantha Brown')
ticket3 = Ticket(show_id=3, price=60, seat_number='C3', purchaser_name='Liam Cooper')
ticket4 = Ticket(show_id=4, price=55, seat_number='D4', purchaser_name='Emma Nash')

animal1 = Animal(name='Leo', species='Lion', age=5)
animal2 = Animal(name='Ella', species='Elephant', age=8)
animal3 = Animal(name='Stripes', species='Tiger', age=4)
animal4 = Animal(name='Biggy', species='Bear', age=6)

caretaker1 = Caretaker(name='Mike Hart', start_date=date(2022, 1, 5))
caretaker2 = Caretaker(name='Lucy Adams', start_date=date(2018, 4, 9))
caretaker3 = Caretaker(name='Max Wall', start_date=date(2020, 7, 22))
caretaker4 = Caretaker(name='Nina Day', start_date=date(2019, 11, 11))

equipment1 = Equipment(name='Trampoline', function='Acrobatics')
equipment2 = Equipment(name='Spotlight', function='Lighting')
equipment3 = Equipment(name='Sound System', function='Audio')
equipment4 = Equipment(name='Safety Net', function='Safety')

performer_act_association1 = PerformerActAssociation(performer_id=1, act_id=1)
performer_act_association2 = PerformerActAssociation(performer_id=2, act_id=2)
performer_act_association3 = PerformerActAssociation(performer_id=3, act_id=3)
performer_act_association4 = PerformerActAssociation(performer_id=4, act_id=4)

animal_show_association1 = AnimalShowAssociation(animal_id=1, show_id=1)
animal_show_association2 = AnimalShowAssociation(animal_id=2, show_id=2)
animal_show_association3 = AnimalShowAssociation(animal_id=3, show_id=3)
animal_show_association4 = AnimalShowAssociation(animal_id=4, show_id=4)

caretaker_animal_association1 = CaretakerAnimalAssociation(caretaker_id=1, animal_id=1)
caretaker_animal_association2 = CaretakerAnimalAssociation(caretaker_id=2, animal_id=2)
caretaker_animal_association3 = CaretakerAnimalAssociation(caretaker_id=3, animal_id=3)
caretaker_animal_association4 = CaretakerAnimalAssociation(caretaker_id=4, animal_id=4)

show_equipment_association1 = ShowEquipmentAssociation(show_id=1, equipment_id=1)
show_equipment_association2 = ShowEquipmentAssociation(show_id=2, equipment_id=2)
show_equipment_association3 = ShowEquipmentAssociation(show_id=3, equipment_id=3)
show_equipment_association4 = ShowEquipmentAssociation(show_id=4, equipment_id=4)


session.add_all([circus1, circus2, circus3, circus4, performer1, performer2, performer3, performer4, act1, act2, act3, act4, show1, show2, show3, show4, ticket1, ticket2, ticket3, ticket4, animal1, animal2, animal3, animal4, caretaker1, caretaker2, caretaker3, caretaker4, equipment1, equipment2, equipment3, equipment4, performer_act_association1, performer_act_association2, performer_act_association3, performer_act_association4, animal_show_association1, animal_show_association2, animal_show_association3, animal_show_association4, caretaker_animal_association1, caretaker_animal_association2, caretaker_animal_association3, caretaker_animal_association4, show_equipment_association1, show_equipment_association2, show_equipment_association3, show_equipment_association4])
session.commit()
