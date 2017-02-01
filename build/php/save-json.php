<?php
	if (!isset($_POST['fileName'])) return;
	if (!isset($_POST['myJson'])) return;

	$file = '../files/'.$_POST['fileName'].'.json';
	$json = $_POST['myJson'];

	file_put_contents($file, $json);
?>
