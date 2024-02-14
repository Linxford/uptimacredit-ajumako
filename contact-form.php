
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = trim($_POST["name"]);
    $phone = trim($_POST["phone"]);
    $email = trim($_POST["email"]);
    $subject = trim($_POST["subject"]);
    $message = trim($_POST["message"]);

    // Validate data (you may add more validation as needed)
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        echo "All fields are required.";
        exit;
    }

    // Email configuration
    $to = "info@uptimacredit.com"; // Change this to your email address
    $subject = "Contact Form: $subject";
    $message_body = "Name: $name\nPhone: $phone\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $name <$email>";

    // Send email
        if (mail($to, $subject, $message_body, $headers)) {
            $_SESSION['success'] = "Message sent successfully. We will get back to you soon!";
        } else {
            $_SESSION['error'] = "Failed to send message. Please try again later.";
        }
    }

    // Redirect back to the contact form page
    header("Location: /contact.html");
    exit;

?>
