<?php

  if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = "New Form Submission from Website";
    $mailFrom = $_POST['email'];
    $message = $_POST['subject'];

    $mailTo = "klaire@berkeley.edu";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an email from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.html?mailsend");
  }

 ?>
