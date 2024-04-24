<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\usuario;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;



class usuarioControler extends Controller
{
    public function index()
    {

        $wallet = usuario::all();
        return response()->json($wallet);



    }
    public function store(Request $request)
    {
        $usua = new usuario;
        $usua->nombreUser = $request->nombreUser;
        $usua->email = $request->email;
        $usua->contraseña = $request->contraseña;
        $usua->save();
        return $usua;


    }
    public function show(usuario $usuario)
    {
        return $usuario;

    }
    public function login(Request $request)
    {
        $credentials = $request->only('nombreUser', 'contraseña');

        $exists = DB::table('usuarios')
            ->where('nombreUser', $credentials['nombreUser'])
            ->where('contraseña', $credentials['contraseña'])
            ->exists();
        if ($exists) {
            return "true";
        } else {
            return false;
        }


    }

}
