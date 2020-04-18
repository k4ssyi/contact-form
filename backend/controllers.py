from starlette.requests import Request

import settings
from request_body import Item
from utils import EmailOperation


def index(request: Request):
    return {"Hello": "World"}


async def mail(item: Item):
    smtp_host = "smtp.gmail.com"
    smtp_port = 587
    from_email = item.email
    to_email = settings.TO_EMAIL
    username = settings.TO_EMAIL
    password = settings.EMAIL_PASSWORD
    content = item.content
    subject = f"{item.name} ({from_email}) から新しいお問い合わせです。"

    msg = EmailOperation.create_message(from_email, to_email, content, subject)
    EmailOperation.send_mail(smtp_host, smtp_port, username, password, msg)

    return {"mail": msg}
