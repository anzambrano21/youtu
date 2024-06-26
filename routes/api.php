<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\usuarioControler;
use App\Http\Controllers\ColorController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/
Route::apiResource('usuario',usuarioControler::class);
Route::apiResource('color',ColorController::class);
Route::match(['get', 'post'], '/log', [usuarioControler::class,'log']);
Route::get('/secion', [usuarioControler::class,'getsesion']);
Route::post('/actu/{usuario}',[usuarioControler::class,'actualizar']);
