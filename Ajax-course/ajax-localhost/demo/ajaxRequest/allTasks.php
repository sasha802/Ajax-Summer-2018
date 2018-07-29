<?php
    header('Content-type: application/json');

    $db = new mysqli('localhost', 'root', '', 'ponomarova');

    $sql = 'SELECT * ';
    $sql .= 'FROM ajaxDemo';
    $sql .= 'ORDER BY rank';

    $prepare = $db->prepare($sql);