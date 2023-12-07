<?php
$elem = require('data.php');
if($_GET['queryparams'] === 'get-api-quiz') {
    header("Access-Control-Allow-Origin: *");
    echo json_encode($elem);
}