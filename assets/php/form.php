<?php

require "serveur_connect/connect.php";

// ==> hdu knjibo bihom data mn HTML TO PHP

$username = $_POST["username"];
$email =    $_POST["email"];
$subject = $_POST["subject"];
$Description = $_POST["Description"];

$error = "";

    /// ==> ila kant shu input khawya mzl m3mraatch
    if(empty($username) || empty($email))
    {
        echo "please write all informations";
    }
    else{
        // ==> hdu knjibo bihom data mn HTML TO PHP

        $username = mysqli_real_escape_string($connection, $_POST["username"]);
        $email = mysqli_real_escape_string($connection, $_POST["email"]);
        $subject = mysqli_real_escape_string($connection, $_POST["subject"]);
        $Description = mysqli_real_escape_string($connection, $_POST["Description"]);
        $from = "<strong> YOUR PORTFOLIO </strong>";


        $send_data = "INSERT INTO clients(username,email,subject,description) VALUES('$username','$email','$subject','$Description')";
        $execution_1 = mysqli_query($connection, $send_data) or die(mysqli_error($connection));
            
        if ($execution_1) {
            if (!is_dir("client_data")) {
                $folder_client = mkdir("client_data");
            }
            file_put_contents("client_data/$username.txt", "   name :  $username     email :   $email       subject :   $subject      Description :   $Description");

            $username = $_POST["username"];
            $email = $_POST["email"];
            $subject = $_POST["subject"];
            $Description = $_POST["Description"];
            $to_email ="faissalabr@gmail.com";
            $headers = "From: ". $email;
            $message = "You have Email From : " .$username . "<br/>" . "subject : " . "<strong>" . $subject . "</strong>". "<br/>". $Description;

            mail($to_email,$from,$message,$headers);

            echo "everything is aright";
        }
    }

?>
