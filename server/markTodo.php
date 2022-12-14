<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");
    require_once "configDB.php";

    extract($_GET);

    $sql = "UPDATE todos SET `completed`=$completed WHERE id = $id";
    try {
        $stmt = $db -> exec($sql);
        echo json_encode(["msg" => "Sikeres frissítés"]);
    } catch(PDOException $e) {
        echo json_encode(["msg" => "Nem sikerült a mentés: ".$e->getMessage()]);
    }
?>