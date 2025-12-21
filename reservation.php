<?php
require "config.php";

$nom = $_POST['nom'];
$email = $_POST['email'];
$destination = $_POST['destination'];
$date_depart = $_POST['date_depart'];
$message = $_POST['message'];

$sql = "INSERT INTO reservations (nom, email, destination, date_depart, message)
        VALUES ('$nom', '$email', '$destination', '$date_depart', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "Votre réservation a été enregistrée avec succès.";
} else {
    echo "Erreur : " . $conn->error;
}

$conn->close();
?>