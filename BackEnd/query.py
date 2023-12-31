from dotenv import load_dotenv
load_dotenv()

import os
from supabase import create_client
from flask import jsonify
from generateID import ID

generateID = ID()

class Query:
    def __init__(self):
        self.url = os.environ.get("SUPABASE_URL")
        self.key = os.environ.get("SUPABASE_KEY")
        self.supabase = create_client(self.url, self.key)

    def login(self, id, password):
        response = self.supabase.table('user').select("*").eq('id', id).eq('password', password).execute()
        print(response)
        return response.data
    
    def signup(self, nama, pin, password):
        id = generateID.generateId()
        insert = self.supabase.table("user").insert({
            "id" : id,
            "nama" : "vincent",
            "password" : "123",
            "pin" : 817210,
            "saldo" : 0,
            "saving" : 0,
            "id_tipe" : 34521
        }).execute()
        print(insert)
        return insert.data
