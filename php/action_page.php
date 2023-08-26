<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $to = "klaire@berkeley.edu"; // Replace with your email address
  $subject = "New Contact Form Submission";
  $headers = "From: $email";

  // Construct the email body
  $email_body = "Name: $name\n";
  $email_body .= "Email: $email\n";
  $email_body .= "Message:\n$message";

  // Send the email
  if (mail($to, $subject, $email_body, $headers)) {
      echo "Thank you for contacting me!";
  } else {
      echo "Sorry, something went wrong. Please try again later.";
  }
}
  // if (isset($_POST['submit'])) {
  //   $name = $_POST['name'];
  //   $subject = "New Form Submission from Website";
  //   $mailFrom = $_POST['email'];
  //   $message = $_POST['subject'];

  //   $mailTo = "klaire@berkeley.edu";
  //   $headers = "From: ".$mailFrom;
  //   $txt = "You have received an email from ".$name.".\n\n".$message;

  //   mail($mailTo, $subject, $txt, $headers);
  //   header("Location: index.html?mailsend");
  // }

 ?>
