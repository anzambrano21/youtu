<?php

namespace App\Http\Controllers;

use App\Models\color;
use Illuminate\Http\Request;

class ColorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $colo=color::create([
            "colorP"=>$request->Cp,
            "colorS"=>$request->Cs,
            "colorC"=>$request->Cc,
            "tamP"=>$request->Tp,
            "tamT"=>$request->Tt,
            "tamSub"=>$request->Ts,
            "tamBotom"=>$request->Tb,
            "est"=>$request->st
        ]);
        return $request;
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\color  $color
     * @return \Illuminate\Http\Response
     */
    public function show($color)
    {
        $wallet = color::where("id", $color)->get();
        return response()->json($wallet);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\color  $color
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $color)
    {
        $col=color::find($color);
        if ($request->st==1 ){
            $col->colorP=$request->Cp;
            $col->colorS=$request->Cs;
            $col->colorC=$request->Cc;
            $col->tamP=$request->Tp;
            $col->tamT=$request->Tt;
            $col->tamSub=$request->Ts;
            $col->tamBotom=$request->Tb;
            $col->est=1;
        }else{
            $col->est=0;
        }


        $col->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\color  $color
     * @return \Illuminate\Http\Response
     */
    public function destroy(color $color)
    {
        //
    }
}
