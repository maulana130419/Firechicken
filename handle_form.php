<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Example: Send email
    $to = "your@email.com";
    $subject = "Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    
    if (mail($to, $subject, $body)) {
        echo "Message sent successfully!";
    } else {
        echo "Message delivery failed!";
    }
}
?>