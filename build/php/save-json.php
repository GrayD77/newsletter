<?php
	$file = '../files/'.$_POST['fileName'].'.json';
	$json = $_POST['myJson'];

	file_put_contents($file, $json);
?>
