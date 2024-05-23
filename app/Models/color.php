<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class color extends Model
{
    protected $fillable = ['colorP', 'colorS', 'colorC','tamP','tamT','tamSub','tamBotom',"est"];
    protected $table = 'colors';
    use HasFactory;
}
