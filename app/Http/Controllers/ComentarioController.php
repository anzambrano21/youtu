<?php

namespace App\Http\Controllers;

use App\Models\comentario;
use Illuminate\Http\Request;

class ComentarioController extends Controller
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\comentario  $comentario
     * @return \Illuminate\Http\Response
     */
    public function show(comentario $comentario)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\comentario  $comentario
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, comentario $comentario)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\comentario  $comentario
     * @return \Illuminate\Http\Response
     */
    public function destroy(comentario $comentario)
    {
        //
    }
}
