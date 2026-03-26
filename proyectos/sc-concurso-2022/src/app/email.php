<?php

//Load Composer's autoloader
require './PHPMailer-master/src/PHPMailer.php';
require './PHPMailer-master/src/SMTP.php';
require './PHPMailer-master/src/Exception.php';

//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);
//validations
if ($_SERVER["REQUEST_METHOD"] == "POST") { 
    if($nombre != '' && $email != '' && $region != '' && $receta != ''){

        try {
            //Server settings
            // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
            $mail->CharSet = 'UTF-8';
            $mail->isSMTP();                                            //Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
            $mail->Username   = 'hola@supercerdo.cl';                     //SMTP username
            $mail->Password   = '8op?sw@d4j8wEsi!iz?y';                               //SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
            $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
        
            //Recipients
            $mail->setFrom('hola@supercerdo.cl', 'Concurso SuperCerdo');
            // $mail->addAddress('hola@supercerdo.cl', 'SuperCerdo');     //Add a recipient
            $mail->addAddress('hola@mccanndigital.cl');
            // $mail->addAddress('ellen@example.com');               //Name is optional
            // $mail->addReplyTo('info@example.com', 'Information');
            // $mail->addCC('cc@example.com');
            // $mail->addBCC('hola@mccanndigital.cl');
            // $mail->addBCC('ffariascubillos@gmail.com');
            // $mail->addBCC('felipe.farias@mccann.cl');
        
            //Attachments
            // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
            // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name
            // $mail->addAttachment('./tmp/new.png', 'new,png');    //Optional name
        
            //Content
            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = 'Concurso SuperCerdo!';
            $email_template = 'email_template.html';
            $msjHTML = file_get_contents($email_template);
            $msjHTML = str_replace('%nombre%', $nombre, $msjHTML);
            $msjHTML = str_replace('%email%', $email, $msjHTML);
            $msjHTML = str_replace('%region%', $region, $msjHTML);
            $msjHTML = str_replace('%receta%', $receta, $msjHTML);
            $msjHTML = str_replace('%fecha%', $fecha, $msjHTML);
            // ENVIO HTML.
            $mail->Body = $msjHTML;
            $mail->AltBody = 'Los datos del usuario son: Nombre: '.$nombre.', Email: '.$email.', Region: '.$region;
        
            $mail->send();
            // echo 'Message has been sent';
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
        //Fin try phpmailer
    }
} else {
    echo 'Sin permisos!';
}


?>