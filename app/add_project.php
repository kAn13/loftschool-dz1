<?php

$data = array();

$data['mes'] = "ok";

header("Content-type: application/json");

echo json_encode($data);

exit;

?>
