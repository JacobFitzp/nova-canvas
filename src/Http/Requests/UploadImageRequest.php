<?php

namespace Jacobfitzp\NovaCanvas\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UploadImageRequest extends FormRequest
{
    /**
     * @return array<string,array<Rule|string>>
     */
    public function rules(): array
    {
        return [
            'image' => ['required', 'image'],
            'path' => ['string'],
            'disk' => [
                'required',
                'string',
                Rule::in(array_keys(config('filesystems.disks'))),
            ],
        ];
    }
}
