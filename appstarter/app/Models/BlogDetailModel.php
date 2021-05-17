<?php

namespace App\Models;

use CodeIgniter\Model;

class BlogDetailModel extends Model
{
    protected $table      = 'blog_detail';
    protected $primaryKey = 'content_id';

    protected $useAutoIncrement = true;

    protected $returnType     = 'array';
    protected $useSoftDeletes = false;

    // protected $allowedFields = ['id', 'title', 'published_by', 'read_time', 'content'];

    protected $useTimestamps = false;
    protected $createdField  = '';
    protected $updatedField  = '';
    protected $deletedField  = '';

    protected $validationRules    = [];
    protected $validationMessages = [];
    protected $skipValidation     = false;
}
