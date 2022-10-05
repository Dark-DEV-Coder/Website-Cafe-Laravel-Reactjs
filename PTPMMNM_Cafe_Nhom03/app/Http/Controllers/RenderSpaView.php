<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RenderSpaView extends Controller
{
    //
    public function index()
    {
        return view('spa-view');
    }
}
