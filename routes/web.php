<?php
use App\Http\Controllers\RyokanController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::redirect('/', '/ryokan');
Route::get('/ryokan', function () {
    return view('ryokan');
})->name('ryokan');

Route::post('/ryokan', function (Request $request) {
    $ryokanController = new RyokanController();
    $ryokanController->storeInSession($request);
    return redirect()->route('onsen');
});

Route::get('/onsen', function () {
    return view('onsen');
})->name('onsen');

Route::get('/date', function () {
    return view('date');
})->name('date');

Route::get('/result', function () {
    return view('result');
})->name('result');
