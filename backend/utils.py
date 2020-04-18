import smtplib
from email import message


class EmailOperation:
    @classmethod
    def create_message(
        cls, from_email: str, to_email: str, content: str, subject: str
    ) -> object:
        msg = message.EmailMessage()
        msg.set_content(content)
        msg["Subject"] = subject
        msg["From"] = from_email
        msg["To"] = to_email

        return msg

    @classmethod
    def send_mail(
        cls, smtp_host: str, smtp_port: int, username: str, password: str, msg
    ) -> None:
        server = smtplib.SMTP(smtp_host, smtp_port)
        server.ehlo()
        server.starttls()
        server.ehlo()
        server.login(username, password)
        server.send_message(msg)
        server.quit()
