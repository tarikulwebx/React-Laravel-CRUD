<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class EmployeesController extends Controller
{
    // Get Employee List from Database
    public function getEmployeeList() {
        try {
            $employees = Employee::orderBy('id', 'DESC')->get();
            return response()->json($employees);
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    // Store New Employee
    public function storeNewEmployeeDetails(Request $request) {
        try {
            $employeeName = $request->get("employeeName");
            $employeeSalary = $request->get("employeeSalary");

            Employee::create([
                'employee_name' => $employeeName,
                'salary' => $employeeSalary
            ]);

            return response()->json([
                'employee_name' => $employeeName,
                'salary' => $employeeSalary
            ]);
            
        } catch (Exception $e) {
            Log::error($e);
        }
    }


    /**
     * Get Employee individual employee details
     */
    public function getEmployeeDetails(Request $request) {
        try {
            $employee = Employee::findOrFail($request->get('employeeId'));
            return response()->json($employee);
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    /**
     * Update Employee Details
     */
    public function updateEmployeeDetails(Request $request) {
        try {
            $employeeId = $request->get("employeeId");
            $employeeName = $request->get("employeeName");
            $employeeSalary = $request->get("employeeSalary");

            Employee::where('id', $employeeId)->update([
                'employee_name' => $employeeName,
                'salary' => $employeeSalary
            ]);

            return response()->json([
                'employee_name' => $employeeName,
                'salary' => $employeeSalary
            ]);

        } catch (Exception $e) {
            Log::error($e);
        }
    }

    /**
     * Delete employee data
     */
    public function deleteEmployeeDetails(Employee $employee) {
        try {
            $employee->delete();
        } catch (Exception $e) {
            Log::error($e);
        }
    }
}
