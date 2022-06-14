
<?php  
 //insert.php  
 $connect = mysqli_connect("localhost", "root", "", "hellomm");  
 if(isset($_POST["name"]))  
 {  
      $name = mysqli_real_escape_string($connect, $_POST["name"]); 
      $email = mysqli_real_escape_string($connect, $_POST["email"]);  
      $phone = mysqli_real_escape_string($connect, $_POST["phone"]);
      $subject = mysqli_real_escape_string($connect, $_POST["subject"]);  
      $message = mysqli_real_escape_string($connect, $_POST["message"]);  
      $sql = "INSERT INTO okay(name, email, phone, subject, message) VALUES ('".$name."', '".$email."','".$phone."','".$subject."','".$message."')";  
      if(mysqli_query($connect, $sql))  
{
$showMessage = "Your Query has been received, We will contact you soon.";
}
	 else {

	 	$showMessage =  "invalid email";
}


$jsonData = array(
	"message"	=> $showMessage
);
echo json_encode($jsonData); 


}
?>

