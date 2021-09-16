<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Validator;

class Pokemon extends Controller
{
    private $API_URL = 'https://pokeapi.co/api/v2/pokemon';

    public function index(Request $request){
        $validateRequest = Validator::make($request->all(), [
            'page' => 'required'
        ]);

        if( $validateRequest->fails() ) return response()->json([
            'status' => false,
            'errors' => $validateRequest->errors()
        ]);

        $limit = 10; // only 10 pokemon for each page

        $start = ($request->page - 1) * $limit; //Calculate offset

        $response = Http::get($this->API_URL."?offset=".$start."&limit=".$limit);

        return response()->json([
            'status' => $response->status(),
            'page'   => $request->page,
            'results'   => $response->json(),
        ]);
    }
}
