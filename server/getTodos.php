<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");
    require_once "configDB.php";

    // echo "asd".$host;

    $sql = "SELECT id, completed, text FROM todos";
    $stmt = $db -> query($sql);
    echo json_encode($stmt -> fetchAll());
?>