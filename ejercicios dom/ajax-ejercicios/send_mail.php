<?php
if (isset($_POST)) {
   error_reporting(0);
   $name=$_POST["name"];
   $email=$_POST["email"];
   $subject=$_POST["subject"];
   $comments=$_POST["comments"];

   $domain=$_SERVER["HTTP_HOST"];
   $to="correo";
   $subject_mail="contacto desde el formulario del sitio $domain";
   $message="
   <p>
   datos envaidos desde el formulario del sitio <b>$domain</b>
   </p>
   <ul>
   <li>nombre:<b>$name</b></li>
   <li>email: <b>$email</b></li>
   <li>asunto: <b>$subject</b></li>
   <li>comentarios: <b>$comments</b></li>
   </ul>
   ";
   $headers="MIME-Version: 1.0\r\n"."Content-Type:text/html;charset=urf-8\r\n"."From:Envio automatico no responder<no reply@$omain>";
   $send_mail=mail($to,$subject_mail,$message,$headers);
   if ($send_mail) {
    $res=[
        "err"=>false,
        "message"=>"tus datos han sido enviados"
    ];
   }else{
    $res=[
        "err"=>true,
        "message"=>"error al enviar tus datos intenta nuevamente"
    ];
   }
}
?>