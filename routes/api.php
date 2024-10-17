<?php

use Illuminate\Support\Facades\Route;
use Jacobfitzp\NovaCanvas\Http\Controllers\ImageUploadController;
use Spatie\LaravelImageOptimizer\Middlewares\OptimizeImages;

Route::post('/upload', ImageUploadController::class)
    ->middleware(OptimizeImages::class)
    ->name('nova-canvas.upload');
