<?php
	$file = 'people.txt';
	// Открываем файл для получения существующего содержимого
	$current = file_get_contents($file);
	// Добавляем нового человека в файл
	$current .= "John Smith\n";
	// Пишем содержимое обратно в файл
	file_put_contents($file, $current);
?>