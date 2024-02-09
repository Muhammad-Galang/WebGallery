<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Kategori;
use Illuminate\Support\Facades\Validator;

class KategoriController extends Controller
{
    public function index()
    {
        $query = Kategori::latest();
        $kategori = $query->get();

        return response()->json($kategori, 200);
    }

    public function store(Request $request)
    {
        $rules = [
            'nama_kategori' => 'required|string|max:258',
            'field_01' => 'required|string|max:258',
            'field_02' => 'required|string|max:258',
            'alamat_kategori' => 'required|string|max:258',
            'jenis_kategori' => 'required|string|max:258',
        ];

        $messages = [
            'nama_kategori.required' => 'Nama kategori is required',
            'field_01.required' => 'Baris pertama is required',
            'field_02.required' => 'Baris kedua is required',
            'alamat_kategori.required' => 'Alamat kategori is required',
            'jenis_kategori.required' => 'Jenis kategori is required',
        ];

        $validator = Validator::make($request->all(), $rules, $messages);

        if ($validator->fails()) {
            return response()->json( $validator->errors(), 400);
        }

        try {

            Kategori::create([
                'nama_kategori' => $request->input('nama_kategori'),
                'field_01' => $request->input('field_01'),
                'field_02' => $request->input('field_02'),
                'alamat_kategori' => $request->input('alamat_kategori'),
                'jenis_kategori' => $request->input('jenis_kategori'),
            ]);

            return response()->json([
                'message' => "Kategori successfully created."
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
        $kategori = Kategori::where('id_kategori',$id)->first();

        if (!$kategori) {
            return response()->json([
                'message' => "kategori Not Found"
            ], 404);
        }

        return response()->json($kategori, 200);
    }


    public function update(Request $request, string $id)
    {
        $rules = [
            'nama_kategori' => 'required|string|max:258',
            'field_01' => 'required|string|max:258',
            'field_02' => 'required|string|max:258',
            'alamat_kategori' => 'required|string|max:258',
                'jenis_kategori' => 'required|string|max:258',
        ];

        $messages = [
            'nama_kategori.required' => 'Nama Kategori is required',
            'field_01.required' => 'Baris pertama is required',
            'field_02.required' => 'Baris kedua is required',
            'alamat_kategori.required' => 'Jenis Kategori is required',
            'jenis_kategori.required' => 'Alamat Kategori is required',
        ];

        $validator = Validator::make($request->all(), $rules, $messages);

        if ($validator->fails()) {
            return response()->json( $validator->errors(), 400);
        }

        try {
            $kategori = Kategori::where('id_kategori', $id)->first();

            if (!$kategori) {
                return response()->json([
                    'message' => "kategori Not Found"
                ], 404);
            }

            $updatedData = [
                'nama_kategori' => $request->input('nama_kategori'),
                'field_01' => $request->input('field_01'),
                'field_02' => $request->input('field_02'),
                'alamat_kategori' => $request->input('alamat_kategori'),
                'jenis_kategori' => $request->input('jenis_kategori'),
            ];


            Kategori::where('id_kategori', $id)->update($updatedData);

            return response()->json([
                'message' => "kategori successfully updated."
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => "Something went really wrong"
            ], 500);
        }
    }


    public function destroy(string $id)
    {
        $kategori = kategori::where('id_kategori', $id)->first();

        if (!$kategori) {
            return response()->json([
                'message' => "kategori Not Found"
            ], 404);
        }

        kategori::where('id_kategori', $id)->delete();

        return response()->json([
            'message' => "kategori successfully deleted."
        ], 200);
    }
}
