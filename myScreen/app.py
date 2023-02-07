import requests
from flask import Flask, render_template, request, jsonify
from bs4 import BeautifulSoup
from pymongo import MongoClient

# mongo DB database 생성 후 클러스터 url 입력
# client = MongoClient('')
# db = client.dbsparta
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

# @app.route("/", methods=["GET"])
# def movie_get():
#     movie_list = list(db.movies.find({}, {'_id': False}))
#     return jsonify({'movies':movie_list})

# port 는 자신이 사용할 port 지정
if __name__ == '__main__':
    app.run('0.0.0.0', port=5001, debug=True)