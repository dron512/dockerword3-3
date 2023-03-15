from flask import Flask
app = Flask(__name__)

@app.route("/")
def index():
    return "<h1>index</h1>"

# 일반적인 라우트 방식입니다.
@app.route('/board')
def board():
    return "그냥 보드"

# URL 에 매개변수를 받아 진행하는 방식입니다.
@app.route('/board/<article_idx>')
def board_view(article_idx):
    return article_idx


app.run(host="0.0.0.0",port=5000,debug=True)