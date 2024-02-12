<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pembeli;
use Illuminate\Support\Facades\Validator;

class PembeliController extends Controller
{
    public function index()
    {
        $query = Pembeli::latest();
        $pembeli = $query->get();

        return response()->json($pembeli, 200);
    }

    public function store(Request $request)
    {
        $rules = [
            'nama_pembeli' => 'required|string|max:258',
            'alamat_pembeli' => 'required|string|max:258',
            'umur_pembeli' => 'required|string|max:258',
            'jenis_kelamin' => 'required|string|max:258',
        ];

        $messages = [
            'nama_pembeli.required' => 'Nama pembeli is required',
            'alamat_pembeli.required' => 'Alamat pembeli is required',
            'umur_pembeli.required' => 'Jenis pembeli is required',
            'jenis_kelamin.required' => 'Jenis pembeli is required',
        ];

        $validator = Validator::make($request->all(), $rules, $messages);

        if ($validator->fails()) {
            return response()->json( $validator->errors(), 400);
        }

        try {

            Pembeli::create([
                'nama_pembeli' => $request->input('nama_pembeli'),
                'alamat_pembeli' => $request->input('alamat_pembeli'),
                'umur_pembeli' => $request->input('umur_pembeli'),
                'jenis_kelamin' => $request->input('jenis_kelamin'),
            ]);

            return response()->json([
                'message' => "Pembeli successfully created."
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => "Something went really wrong!",
                'details' => $e->getMessage()
            ], 500);
        }
    }

    public function show(string $id)
    {
        $pembeli = Pembeli::where('id_pembeli',$id)->first();

        if (!$pembeli) {
            return response()->json([
                'message' => "pembeli Not Found"
            ], 404);
        }

        return response()->json($pembeli, 200);
    }


    public function update(Request $request, string $id)
    {
        $rules = [
            'nama_pembeli' => 'required|string|max:258',
            'alamat_pembeli' => 'required|string|max:258',
            'umur_pembeli' => 'required|string|max:258',
            'jenis_kelamin' => 'required|string|max:258',
        ];

        $messages = [
            'nama_pembeli.required' => 'Nama Pembeli is required',
            'alamat_pembeli.required' => 'Jenis Pembeli is required',
            'umur_pembeli.required' => 'Alamat Pembeli is required',
            'jenis_kelamin.required' => 'Alamat Pembeli is required',
        ];  

        $validator = Validator::make($request->all(), $rules, $messages);

        if ($validator->fails()) {
            return response()->json( $validator->errors(), 400);
        }

        try {
            $pembeli = Pembeli::where('id_pembeli', $id)->first();

            if (!$pembeli) {
                return response()->json([
                    'message' => "pembeli Not Found"
                ], 404);
            }

            $updatedData = [
                'nama_pembeli' => $request->input('nama_pembeli'),
                'alamat_pembeli' => $request->input('alamat_pembeli'),
                'umur_pembeli' => $request->input('umur_pembeli'),
                'jenis_kelamin' => $request->input('jenis_kelamin'),
            ];


            Pembeli::where('id_pembeli', $id)->update($updatedData);

            return response()->json([
                'message' => "data pembeli successfully updated."
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => "Something went really wrong"
            ], 500);
        }
    }


    public function destroy(string $id)
    {
        $pembeli = Pembeli::where('id_pembeli', $id)->first();

        if (!$pembeli) {
            return response()->json([
                'message' => "pembeli Not Found"
            ], 404);
        }

        pembeli::where('id_pembeli', $id)->delete();

        return response()->json([
            'message' => "pembeli successfully deleted."
        ], 200);
    }
}
