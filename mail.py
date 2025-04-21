import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

def send_email(from_email, to_email, subject, message, smtp _server, smtp_port, smtp_user, smtp_password):

    #create the email message
    msg=MIMEMultipart()
    msg['From']=from_email
    msg['To']=to_email
    msg['Subject']=subject

    #attach the message body
    msg.attach(MIMEText(message, 'plain'))

    #connect to the smpt server and send the email
    try:
        server=smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(smtp_user, smtp_password)
        server.send_message(msg)
        server.quit()
        print("Email sent successfully!")
    except Exception as e:
        print(f"Failed to send email:{e}")

        #example usage
        from_email="boggulaveena48@gmail.com" 
        to_email=""
        subject="contact form submission"
        message="this is a test message from the contact form"
        smtp_server="smtp.example.com"
        smtp_port=587
        smtp_user="your_smtp_username"
        smtp_password="your_smptp_password"

        send_email(from_email, to_email, subject, message, smtp_server, smtp_port, smtp_user, smtp_password)

