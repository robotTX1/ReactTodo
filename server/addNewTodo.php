<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");
    require_once "configDB.php";

    extract($_POST);

    $sql = "INSERT INTO todos (`completed`, `text`) VALUES (false, '$text')";
    try {
        $stmt = $db -> exec($sql);
        $todoId = $db->lastInsertId();
        echo json_encode(["msg" => "Sikeres mentés, az új todo ID-je: ".$todoId]);
    } catch(PDOException $e) {
        echo json_encode(["msg" => "Nem sikerült a mentés: ".$e->getMessage()]);
    }
?>