from flask import Flask, render_template, request, redirect, url_for
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)

# Configure your email settings here
SMTP_SERVER = "smtp.example.com"  # Replace with your SMTP server
SMTP_PORT = 587  # Common port for SMTP
SMTP_USER = "your-email@example.com"  # Replace with your email address
SMTP_PASSWORD = "your-email-password"  # Replace with your email password
RECIPIENT_EMAIL = (
    "recipient-email@example.com"  # Replace with the recipient email address
)


@app.route("/")
def index():
    return render_template("contact_form.html")


@app.route("/send-email", methods=["POST"])
def send_email():
    if request.method == "POST":
        name = request.form["name"]
        email = request.form["email"]
        subject = request.form["subject"]
        message = request.form["message"]

        # Create the email
        msg = MIMEMultipart()
        msg["From"] = SMTP_USER
        msg["To"] = RECIPIENT_EMAIL
        msg["Subject"] = f"Contact Form Submission: {subject}"

        body = f"""
        You have received a new message from the contact form on your website.

        Here are the details:
        Name: {name}
        Email: {email}
        Subject: {subject}
        Message:
        {message}
        """

        msg.attach(MIMEText(body, "plain"))

        try:
            # Send the email
            with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
                server.starttls()  # Secure the connection
                server.login(SMTP_USER, SMTP_PASSWORD)
                server.sendmail(SMTP_USER, RECIPIENT_EMAIL, msg.as_string())
            return "Thank you for contacting us. We will get back to you soon."
        except Exception as e:
            return (
                f"Sorry, something went wrong. Please try again later. Error: {str(e)}"
            )


if __name__ == "__main__":
    app.run(debug=True)
