import smtplib
from email.message import EmailMessage


def send_booking_email(event_owner_email, booking_details):
    sender_email = "youremail@example.com"
    sender_password = "yourpassword"

    msg = EmailMessage()
    msg["Subject"] = "New Event Booking"
    msg["From"] = sender_email
    msg["To"] = event_owner_email

    msg.set_content(f"Booking Details:\n{booking_details}")

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
            smtp.login(sender_email, sender_password)
            smtp.send_message(msg)
            print("Email sent successfully!")
    except Exception as e:
        print(f"Failed to send email: {e}")


# Example usage
event_owner_email = "eventowner@example.com"
booking_details = """
Event: Wedding Celebration
Name: John Doe
Date: 2025-04-15
Guests: 100
Special Requests: Vegetarian menu
"""
send_booking_email(event_owner_email, booking_details)
