import requests
from flask import Flask, render_template, request, jsonify
from bs4 import BeautifulSoup
from pymongo import MongoClient

# mongo DB database 생성 후 클러스터 url 입력
# client = MongoClient('')
# db = client.dbsparta
app = Flask(__name__)

client = MongoClient('mongodb+srv://test:sparta@cluster0.irxe3mh.mongodb.net/?retryWrites=true&w=majority')
db = client.myscreen


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/favorites', methods=["POST"])
def favorites():
    url_receive = request.form['url_give']

    url = url_receive

    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
    data = requests.get(url, headers=headers)

    soup = BeautifulSoup(data.text, 'html.parser')

    title = soup.select_one('meta[property="og:title"]')['content']
    image = soup.select_one('meta[property="og:image"]')['content']
    desc = soup.select_one('meta[property="og:description"]')['content']
    link = soup.select_one('meta[property="og:url"]')['content']

    doc = {
        'title': title,
        'image': image,
        'desc': desc,
        'link': link
    }

    return jsonify({'item': doc, 'msg': '저장 및 크롤링 완료'})


@app.route('/writeLink', methods=["POST"])
def writeLink():
    title = request.form['title']
    image = request.form['image']
    link = request.form['link']
    desc = request.form['desc']
    index = request.form['index']

    doc = {
        'title': title,
        'image': image,
        'link': link,
        'desc': desc,
        'index': index
    }

    db.favorites.insert_one(doc)

    return jsonify({'msg': 'success'})

# port 는 자신이 사용할 port 지정
if __name__ == '__main__':
    app.run('0.0.0.0', port=5001, debug=True)
