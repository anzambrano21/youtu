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

        $wallet = usuario::where("admin", 0)->get();
        return response()->json($wallet);



    }
    public function store(Request $request)
    {

        $request->validate([
            'nombreUser' => 'required|max:255',
            'email' => 'required|email',
            'password' => 'required|min:3',
        ]);
        $user1 = usuario::where('email', $request['email'])->first();
        if($user1!=null){
            Session::put("home", "El correo ya fue registrado");
            return Session::all();
        }
        $user = usuario::create([
            'nombreUser' => $request->nombreUser,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'fotoP'=> "none",
            'apellido'=> "none",
            'direc'=> "none",
            'ci'=>0

        ]);
        Session::put("email", $request["email"]);
        Session::put("user", $user["nombreUser"]);
        Session::put("home", "Login successful");
        Session::put("rol", 0);
        return Session::all();


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

            if ($user["est"] == "activado") {
                Session::put("email", $request["email"]);
                Session::put("user", $user["nombreUser"]);
                Session::put("home", "Login successful");
                Session::put("rol", $user["admin"]);
                return Session::all();
            }
            Session::put("home", "Usuario Desconocido");


            return Session::all();
        }

        return response()->json([
            'message' => 'Invalid credentials'
        ], 401);
    }
    public function getSesion(Request $request)
    {

        return Session::all();
    }
    public function update(Request $request, $id)
    {
        $registro = usuario::find($id);

        // Actualiza los campos necesarios
        if ($registro->est == "activado") {

            $registro->est = "desactivado";
        } else {
            $registro->est = "activado";
        }



        // Guarda los cambios en la base de datos
        $registro->save();
        return "listo";
    }
    public function actualizar(Request $request, $id)  {
        $user = usuario::where('email', $id)->first();
        $registro = usuario::find($user["id"]);
        
        $imageName = time().'.'.$request->imagePath->extension();  
        $request->imagePath->move(public_path('images'), $imageName);
        
        $registro->nombreUser=$request["nombre"];
        
        $registro->apellido=$request["apellido"];
        $registro->ci=$request["ci"];
        $registro->email=$request["Email"];
        $registro->direc=$request["Dir"];
        $registro->fotoP="/images/" . $imageName; 

        
        if(Hash::check($request["ConA"],$user["password"])){
            $registro->password=Hash::make($request["ConN"]);
        }
        $registro->save();
        return $request;
        
        
        
    }

}
