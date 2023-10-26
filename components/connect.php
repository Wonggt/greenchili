<?php  
	$servername = "localhost";
	$username = "root";
	$password = "";

	// create connection
	try{

		$conn = new PDO("mysql:host=$servername;dbname=food_db" ,
				$username, $password);
		//set the PDO error mode to exception

		$conn ->setAttribute(PDO::ATTR_ERRMODE, PDO :: ERRMODE_EXCEPTION);
		// echo "Connected Successfully";
	}


	catch (PDOExeption $e){
		echo "Connection failed: " . $e->getMessage();
	}

?>