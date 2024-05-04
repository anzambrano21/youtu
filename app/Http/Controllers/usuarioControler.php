<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\usuario;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;



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
            
            $request->setLaravelSession(session());

            
            return response()->json([
                'message' => 'Login successful'
            ]);
        }

        return response()->json([
            'message' => 'Invalid credentials'
        ], 401);
    }
    public function getSesion(Request $request){
        
        return response()->json($request->session()->all());
    }
    

}
