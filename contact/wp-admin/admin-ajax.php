<?php
// Retrieve form data
$your_name = $_POST['your_name'];
$frm_name = $_POST['frm_name'];
$frm_email = $_POST['frm_email'];
$frm_phone = $_POST['frm_phone'];
$frm_msg = $_POST['frm_msg'];

// Validate form data
if (empty($frm_name) || empty($frm_email) || empty($frm_phone) || empty($frm_msg)) {
    // Handle error
    die('Error: Please fill out all required fields.');
}

// Connect to Gmail SMTP server
$smtp_host = 'smtp.gmail.com';
$smtp_port = 587;
$smtp_username = 'cdsb.muaadh@gmail.com';
$smtp_password = 'Star#vil13';

// Send email with form data
$to = 'cdsb.muaadh@gmail.com';
$subject = 'New form submission';
$message = "Name: $frm_name\nEmail: $frm_email\nPhone: $frm_phone\nMessage: $frm_msg";
$headers = "From: $your_name <$frm_email>";

if (mail($to, $subject, $message, $headers)) {
    // Handle success
    echo 'Success: Your message has been sent.';
} else {
    // Handle error
    echo 'Error: Your message could not be sent.';
}
?>