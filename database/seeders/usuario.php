<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class usuario extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("usuarios")->insert([
            'nombreUser'=>'divina comedia',
            'email'=>'Dante',
            'contraseña'=> 'Alighieri',
        ]);
    }
}
