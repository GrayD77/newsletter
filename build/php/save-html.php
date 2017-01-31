<?php

	$file = '../saved/'.$_POST['name'].'.html';

	if (file_exists($file)) {
		$action = "перезаписан";
	} else {
		$action = "создан";
	}

	$header = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
				<head>
					<meta charset="UTF-8">
					<title>*|MC:SUBJECT|*</title>
				</head>

				<body>';
	$footer = '</body>';
	$body = $_POST['html'];

	$htmlDocument = $header.$body.$footer;

	$url = 'saved/'.$_POST['name'].'.html';
	// Пишем содержимое обратно в файл
	file_put_contents($file, $htmlDocument);

	if (file_exists($file)) {

		echo '
			<p>Файл '. $action .' и доступен по <a class="copy-url" target="_blank" href="' . $url . '">ссылке:</a></p>
			<button class="copy-url">Скопировать URL</button>
		';

	} else {

		echo '
			<p>Файл не создан. Произошла ошибка.</p>
		';

	}

?>