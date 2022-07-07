<?php
if(isset($_POST['Contact_btn'])){
$name=$_POST['user_name'];
$email=$_POST['user_email'];
$subject=$_POST['user_subject'];
$msg=$_POST['user_msg'];
$to="minhazhussain2004@gmail.com";
$header="from:email";
if(mail($to,$subject,$msg,$header)){
$msg1="message submitted successful";


}
}


?>



<html>
<head>
<meta charset="uft-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>CONTACT</title>
</head>
<body>
<div class="contact">
<form method="POST">
<strong>
<?php if(!empty($msg1)){
echo $msg1;
}



?>

</strong>
<h2>CONTACT ME</h2>
<input type="text" placeholder="name" name="user_name" required><br>
<input type="email" placeholder="email" name="user_email" required><br>
<input type="text" placeholder="subject" name="user_subject" required><br>
<textarea placeholder="type message" row="6" name="user_msg" required></textarea><br>
<button name="contact_btn">send</button>





</form>
</div>
</body>
</html>