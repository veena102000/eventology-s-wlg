from flask import Flask, request
import smtplib
from email.mime.text import MIMEText

app = Flask(__name__)


@app.route("/send_email", methods=["POST"])
def send_email():
    # Extract data from the form
    data = request.json
    customer_name = data.get("name")
    event_type = data.get("event_type")
    event_time = data.get("event_time")

    # Compose the email
    subject = f"New Event Booking Request from {customer_name}"
    body = f"""Hello Manager,

You have received a new event booking request:

- **Customer Name:** {customer_name}
- **Event Type:** {event_type}
- **Event Time:** {event_time}

Best regards,
Your Events App
    """

    sender_email = "boggulaveena48@gmail.com"  # Your email
    sender_password = "Lasyapriya.10!"  # Your email password
    recipient_email = "lasyapriya1011@gmail.com"  # Manager's email

    # Set up the SMTP server
    smtp_server = "smtp.boggulaveena48@gmail.com"
    # Replace with your email provider's SMTP server
    smtp_port = 587  # Port for TLS

    try:
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()
            server.login(sender_email, sender_password)

            # Create the email message
            msg = MIMEText(body, "plain")
            msg["Subject"] = subject
            msg["From"] = sender_email
            msg["To"] = recipient_email

            # Send the email
            server.sendmail(sender_email, recipient_email, msg.as_string())

        return {"message": "Email sent successfully!"}, 200

    except Exception as e:
        print(f"Error: {e}")
        return {"message": "Failed to send email"}, 500


if __name__ == "__main__":
    app.run(debug=True)
