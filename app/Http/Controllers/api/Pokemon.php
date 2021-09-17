<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Validator;

class Pokemon extends Controller
{
    private $API_URL = 'https://pokeapi.co/api/v2/pokemon';

    //Get List of pokemon
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

        if( $response->status() == 200 ) {
            $total = $response->object()->count;
            $last_page = ceil( $total / $limit );
            return response()->json([
                'status' => $response->status(),
                'page'   => $request->page,
                'last_page' => $last_page,
                'data'   => $response->json(),
            ]);
        } else { 
            return response()->json([
                'status' => false,
                'error'  => 'Something went wrong'
            ]);
        }
    }

    //Get Detail of pokemen by {id}
    public function detail(Request $request, $id) {
        try{
            $response = Http::get($this->API_URL."/".$id);
            return response()->json([
                'status' => $response->status(),
                'data'   => $response->json()
            ]);
        }catch(\Exception $e){
            return response()->json([
                'status' => false,
                'error'  => $e->getMessage()
            ]);
        }
    }

    public function random() {
        try{
            $random = rand(0, 1);
            return response()->json([
                'status' => true,
                'isCaptured' => $random === 1 ? true : false
            ]);
        }catch(\Exception $e){
            return response()->json([
                'status' => false,
                'error'  => 'Something went wrong'
            ]);
        }
    }

}
