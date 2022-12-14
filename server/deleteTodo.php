<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");
    require_once "configDB.php";

    extract($_GET);

    $sql = "DELETE FROM todos WHERE id = $id";
    try {
        $stmt = $db -> exec($sql);
        echo json_encode(["msg" => "Sikeres törlés"]);
    } catch(PDOException $e) {
        echo json_encode(["msg" => "Nem sikerült a törlés: ".$e->getMessage()]);
    }
?>