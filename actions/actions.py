# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"

from typing import Any, Text, Dict, List

from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
from rasa_sdk.events import SlotSet
import requests
import json

with open('Data.json', 'r', encoding='utf-8') as arquivo:
    Dados = json.load(arquivo)
   
# Credencias dos alunos
Alunos = [
    {
        "id": 1,
        "numeroEst": "12345",
        "senha": 'Senha@1234'
    },
    {
        "id": 1,
        "numeroEst": "23456",
        "senha": 'Minhasenha@1234'
    },
]


class ActionFindCourse(Action):

    def name(self) -> Text:
        return "action_consultar_curso"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        
        licenciatura = []
        for dado in Dados:
            if "id" in dado and dado["id"] == 1:
                licenciatura = dado["cursos"]

        for curso in licenciatura:
            if curso["nome"] == "Engenharia Informática":
                print(curso["descricao"])
                dispatcher.utter_message(text=curso["descricao"])

        return []


class ActiolnValidarCredenciais(Action):

    def name(self) -> Text:
        return "action_validar_credenciais"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        
        # Pegar os dados do aluno
        numeroEstudante = tracker.get_slot("numero_estudante_slt")
        senhaEstudante = tracker.get_slot("senha_estudante_slt")
        tentativas = tracker.get_slot("tentativas_login") or 0


        autenticado = False

        for aluno in Alunos:
            if aluno["numeroEst"] == numeroEstudante and aluno["senha"] == senhaEstudante:
                autenticado = True
                break

        if autenticado:
            dispatcher.utter_message(text="✅ Autenticação bem-sucedida.")
            return [
                SlotSet("is_authenticated", True),
                SlotSet("tentativas_login", 0)
            ]
        else:
            tentativas += 1
            if tentativas >= 3:
                dispatcher.utter_message(text="❌ Número de tentativas excedido. Por favor, procure o atendimento humano.")
                return [
                    SlotSet("is_authenticated", False),
                    SlotSet("numero_estudante_slt", None),
                    SlotSet("senha_estudante_slt", None),
                    SlotSet("tentativas_login", 0)
                ]
            else:
                dispatcher.utter_message(
                    text=f"❌ Número de estudante ou senha incorretos. Tentativa {int(tentativas)}/3. Tente novamente.")
                return [
                    SlotSet("is_authenticated", False),
                    SlotSet("numero_estudante_slt", None),
                    SlotSet("senha_estudante_slt", None),
                    SlotSet("tentativas_login", tentativas)
                ]
                





# This is a simple example for a custom action which utters "Hello World!"

# from typing import Any, Text, Dict, List
#
# from rasa_sdk import Action, Tracker
# from rasa_sdk.executor import CollectingDispatcher


# class ActionHelloWorld(Action):
#
#     def name(self) -> Text:
#         return "action_hello_world"
#
#     def run(self, dispatcher: CollectingDispatcher,
#             tracker: Tracker,
#             domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
#
#         dispatcher.utter_message(text="Hello World!")
#
#         return []
