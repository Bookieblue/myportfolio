<?php

  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  if (!empty($email) && !empty($message)){
     if (filter_var($email, FILTER_VALIDATE_EMAIL)){
      
         $receiver = "oluwabukola.fasan@gmail.com";
         $subject = "from: $name <$email>";
         $body = "Name: $name\nEmail: $email\nSubject: $subject\n\nRegards, \n$name";
         $sender = "From: $email";

         if (mail ($receiver, $subject, $body, $sender)){ //mail() is an inbuilt php function to send mail
             echo "Your message has been sent";
         }
         else{
            echo "Sorry, failed to send your message!";
         }
     }
     else{
        echo "Enter a valid email address!";
     }
  }
  else{
    echo "Email and message field is required!"; 
  }

?>