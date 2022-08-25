<?php
  
        if($_POST) {
            $visitor_name = "";
            $visitor_email = "";
            $email_title = "";
            $calendar_date = "";
            $visitor_message = "";
            $email_body = "<div>";
              
            if(isset($_POST['visitor_name'])) {
                $visitor_name = filter_var($_POST['visitor_name']);
                $email_body .= "<div>
                                   <label><b>Visitor Name:</b></label>&nbsp;<span>".$visitor_name."</span>
                                </div>";
            }
         
            if(isset($_POST['visitor_email'])) {
                $visitor_email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['visitor_email']);
                $visitor_email = filter_var($visitor_email, FILTER_VALIDATE_EMAIL);
                $email_body .= "<div>
                                   <label><b>Visitor Email:</b></label>&nbsp;<span>".$visitor_email."</span>
                                </div>";
            }
              
            if(isset($_POST['email_title'])) {
                $email_title = filter_var($_POST['email_title']);
                $email_body .= "<div>
                                   <label><b>Reason For Contacting Us:</b></label>&nbsp;<span>".$email_title."</span>
                                </div>";
            }
              
            if(isset($_POST['calendar_date'])) {
                $calendar_date = filter_var($_POST['calendar_date']);
                $email_body .= "<div>
                                   <label><b>Preferred Date:</b></label>&nbsp;<span>".$calendar_date."</span>
                                </div>";
            }
              
            if(isset($_POST['visitor_message'])) {
                $visitor_message = htmlspecialchars($_POST['visitor_message']);
                $email_body .= "<div>
                                   <label><b>Visitor Message:</b></label>
                                   <div>".$visitor_message."</div>
                                </div>";
            }
              
            
            $recipient = "timonschill@googlemail.com";
            
              
            $email_body .= "</div>";
         
            $headers  = 'MIME-Version: 1.0' . "\r\n"
            .'Content-type: text/html; charset=utf-8' . "\r\n"
            .'From: ' . $visitor_email . "\r\n";
              
            if(mail($recipient, $email_title, $email_body, $headers)) {
                echo "<p>Thank you for reaching out, $visitor_name. I will get back to you shortly.</p>";
            } else {
                echo '<p>Sorry but the email did not go through.</p>';
            }
              
        } else {
            echo '<p>Something went wrong</p>';
        }
?>