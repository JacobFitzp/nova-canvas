<?php

namespace Jacobfitzp\NovaCanvas\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;
use Jacobfitzp\NovaCanvas\Http\Requests\UploadImageRequest;

class ImageUploadController extends Controller
{
    public function __invoke(UploadImageRequest $request): JsonResponse
    {
        // Store the uploaded file.
        $location = $request
            ->file('image')
            ->storePublicly(
                $request->input('path', '/'),
                $disk = $request->input('disk')
            );

        // Return the location of the uploaded file.
        if (filled($location)) {
            return response()->json([
                'path' => Storage::disk($disk)->url($location),
            ]);
        }

        // Nothing was uploaded.
        return response()
            ->json(['error' => 'Upload failed.']);
    }
}
