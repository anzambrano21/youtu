<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\usuario;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;



class usuarioControler extends Controller
{
    public function index()
    {

        $wallet = usuario::all();
        return response()->json($wallet);



    }
    public function store(Request $request)
    {
                
        $request->validate([
            'nombreUser' => 'required|max:255',
            'email' => 'required|email',
            'password' => 'required|min:3',
        ]);
        
        $user = usuario::create([
            'nombreUser' => $request->nombreUser,
            'email' => $request->email,
            'password' =>  Hash::make($request->password),
        ]);
        

        return response()->json([
            'message' => 'User registered successfully',
            'user' => $user
        ]);

    }
    public function show(usuario $usuario)
    {
        return $usuario;

    }
    public function log(Request $request)
    {
        $credentials = $request->only('email', 'password');
        
        if (Auth::attempt($credentials)) {
            $user = usuario::where('email', $credentials['email'])->first();
            Session::put("email",$request["email"]);
            Session::put("user",$user["nombreUser"]);
            Session::put("home","Login successful");  

     
            return Session::all();
        }

        return response()->json([
            'message' => 'Invalid credentials'
        ], 401);
    }
    public function getSesion(Request $request){
        
        return Session::all() ;
    }
    public function update(Request $request){
        $registro = usuario::find($request);

        // Actualiza los campos necesarios
        $registro->campo1 = $request->campo1;
        $registro->campo2 = $request->campo2;
    
        // Guarda los cambios en la base de datos
        $registro->save();
    }
    

}
