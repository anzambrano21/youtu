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
        Auth::login($usua);
        return $usua;


    }
    public function show(usuario $usuario)
    {
        return $usuario;

    }
    public function log(Request $request)
    {
        try {
            $credentials = $request->only('nombreUser', 'contraseña');
    
            $exists = DB::table('usuarios')
                ->where('nombreUser', $credentials['nombreUser'])
                ->where('contraseña', $credentials['contraseña'])
                ->exists();
            if ($exists) {

                  
            } else {
                return false;
            }
        } catch (\Exception $e) {
            // Aquí puedes manejar el error como prefieras
            return response()->json(['error' => 'Hubo un problema con la sesión'], 500);
        }
    }
    

}
