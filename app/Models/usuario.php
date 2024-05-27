<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;


class usuario extends Authenticatable
{
    protected $fillable = ['nombreUser', 'email', 'password','est','admin','fotoP','apellido','direc','ci'];
    protected $table = 'usuarios';
    use HasFactory, Notifiable;
    protected $hidden = [
        'contraseña',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

}
