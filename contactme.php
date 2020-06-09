<?php
	$outcome="";
	if (($_POST['submit'])!=null) {
		$firstName=$_POST["firstName"];
		$lastName=$_POST["lastName"];
		$email=$_POST["email"];
		$phoneNumber=$_POST["phoneNumber"];
		$reason=$_POST["reason"];
		$to="naymah.hashmi@gmail.com";
		$subject="Contact Request";
		$message="First Name: $firstName\n
				  Last Name: $lastName\n
				  Phone Number: $phoneNumber\n 
				  Reason: $reason";
		$header="";
		if (mail($to,$subject,$message,$header)){
			$outcome="<p style='color:green; font-size:20px; margin-bottom:20px;'> Your message was successfully sent</p>";
		}
		else{
			$outcome="<p style='color:red; font-size:20px; margin-bottom:20px;'>There was an error with your submission, please try again</p>";
		}
		
	}
?>


<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Contact Me</title>
		<link rel="stylesheet" type="text/css" href="main.css">
		<script type="text/javascript" src="navigationbar.js"></script>
	</head>
	<body>
		<header>
			<img id="image" src="Project Images\\Naymah.png">
			<div id="name">
				<h1 id="naymah">NAYMAH HASHMI</h1>
				<h4 id="objective">I am an Architecture graduate from NJIT with a passion for interior design, architecture, and urban design and also excel in multiple architecture softwares.</h4>
			</div>
			<nav>
				<li class="navLinks"><a href="index.html">HOME</a></li>
				<li class="navLinks"><a href="resume1.html">RESUM&Eacute;</a></li>
				<li class="navLinks"><a href="portfolio.html">PORTFOLIO</a></li>
				<li class="navLinks"><a href="contactme.php" id="selected">CONTACT ME</a></li>
			</nav>
		</header>
		<div id="container" style="display:flex;flex-direction:row">
			<div id="about">
				<h2>ABOUT ME</h2>
				<p>I am a 5th year architecture student in the Architecture License Program at NJIT. I have completed 4 years of studio and architecture core courses and electives, including structures, construction, and environmental control systems. I have advanced proficiency in various computer software such as AutoCAD, Rhino, Photoshop, and many more. I live in New Jersey with a short commute to Manhattan and Philly. I am looking to improve my technical skills in architecture as well as continue developing design strategies. 

Any questions or concerns, please leave a message. </p>
			</div>
			<div id="contact">
				<h2>CONTACT ME</h2>
				<?=$outcome?>
				<form action="" method="post">
					First Name: <input type="text" name="firstName" required><br>
					Last Name: <input type="text" name="lastName" required><br>
					Email Address: <input type="email" name="email" required><br>
					Phone Number: <input type="tel" name="phoneNumber" required><br>
					Reason for Contact:<br>
					<textarea name="reason" required></textarea>
					<br>
					<input name="submit" type="submit">
				</form>
			</div>
		</div>
	</body>
</html>
