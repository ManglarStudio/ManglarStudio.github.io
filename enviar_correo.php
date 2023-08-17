<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = $_POST["nombre"];
  $email = $_POST["email"];
  $mensaje = $_POST["mensaje"];

  $destinatario = "gaston.estacio@pucese.edu.ec";
  $asunto = "Nuevo mensaje de $nombre";

  $cabeceras = "From: $email";

  // Enviamos el correo
  if (mail($destinatario, $asunto, $mensaje, $cabeceras)) {
    echo "¡Mensaje enviado con éxito!";
  } else {
    echo "Error al enviar el mensaje. Por favor, intenta nuevamente más tarde.";
  }
}
?>
