<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id();
            $table->text("nombreUser");
            $table->text("email");
            $table->text("password");
            $table->text("est")->default('activado');
            $table->boolean("admin")->default(false);
            $table->text("fotoP");
            $table->text("apellido");
            $table->text("direc");
            $table->integer("ci");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usuario');
    }
};
