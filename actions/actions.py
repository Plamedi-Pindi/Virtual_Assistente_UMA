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

USER_DB = {
    "id": "1234",
    "password": "minhapw2"
}

class ActionValidateCredentials(Action):

    def name(self) -> Text:
        return "action_validar_credenciais"
    
    def extract_credentials(self, tracker: Tracker) -> (str, str):
        student_id = tracker.get_slot("student_id")
        password = tracker.get_slot("password")

        if not student_id or not password:
            # tenta extrair dos textos diretamente (entidades ou regex)
            last_msg = tracker.latest_message.get("text", "")

            # simples parsing por exemplo
            import re
            sid_match = re.search(r"\b\d{6,8}\b", last_msg)
            pwd_match = re.search(r"senha\s*[=:]?\s*([^\s]+)", last_msg, re.IGNORECASE)
            student_id = student_id or (sid_match.group() if sid_match else None)
            password = password or (pwd_match.group(1) if pwd_match else None)
        return student_id, password

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        
        student_id, password = self.extract_credentials(tracker)

        if not student_id or not password:
            dispatcher.utter_message(text="Não consegui identificar seu código ou senha. Pode repetir?")

        if student_id in USER_DB and USER_DB[student_id] == password:
            dispatcher.utter_message(response="utter_auth_success")
            return [SlotSet("student_id", student_id),
                    SlotSet("password", password),
                    SlotSet("is_authenticated", True)]
        else:
            dispatcher.utter_message(response="utter_auth_failed")
            return [SlotSet("is_authenticated", False)]

        return []




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
