<?php

function encryptUserId($userId)
{
    $encrypter = \Config\Services::encrypter();
    $encrypt = base64_encode($encrypter->encrypt($userId));

    return $encrypt;

    // $msg = 'heyy';

    // $encrypt = base64_encode($encrypter->encrypt($msg));
    // $decrypt = base64_decode($encrypt);
    // $decrypt2 = $encrypter->decrypt(base64_decode($encrypt));
    // echo $encrypt . '<br>';
    // echo $decrypt . '<br>';
    // echo $decrypt2;
}

function decryptUserId($userId)
{
    $encrypter = \Config\Services::encrypter();
    $decrypt = $encrypter->decrypt(base64_decode($userId));

    return $decrypt;
}
