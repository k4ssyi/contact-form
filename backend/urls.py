from controllers import index, mail
from settings import app

# FastAPIのルーティング用関数
app.add_api_route("/", index)
app.add_api_route("/api/mail", mail, methods=["POST"])
