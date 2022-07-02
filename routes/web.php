<?php

use App\Http\Controllers\EmployeesController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/get/employee/list', [EmployeesController::class, 'getEmployeeList'])->name('employee.list');
Route::post('/store/employee/details', [EmployeesController::class, 'storeNewEmployeeDetails'])->name('employee.store');
Route::post('/get/individual/employee/details', [EmployeesController::class, 'getEmployeeDetails'])->name('employee.details');
Route::post('/update/employee/details', [EmployeesController::class, 'updateEmployeeDetails'])->name('employee.details_update');
Route::delete('/delete/employee/data/{employee}', [EmployeesController::class, 'deleteEmployeeDetails'])->name('employee.details_delete');
