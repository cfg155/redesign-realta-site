<?php

namespace App\Models;

// Setup Database Connection
function cookieDB()
{
    return \Config\Database::connect('cookiedb', true);
}
