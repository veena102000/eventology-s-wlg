<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Recipient email address
    $to = "your-email@example.com"; // Replace with your email address
    $from = $email;
    $headers = "From: $from" . "\r\n" .
        "Reply-To: $from" . "\r\n" .
        "X-Mailer: PHP/" . phpversion();

    // Email subject
    $email_subject = "Contact Form Submission: $subject";

    // Email body
    $email_body = "You have received a new message from the contact form on your website.\n\n" .
        "Here are the details:\n\n" .
        "Name: $name\n" .
        "Email: $email\n" .
        "Subject: $subject\n" .
        "Message:\n$message";

    // Send email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Thank you for contacting us. We will get back to you soon.";
    } else {
        echo "Sorry, something went wrong. Please try again later.";
    }
} else {
    // Not a POST request
    echo "Invalid request.";
}
