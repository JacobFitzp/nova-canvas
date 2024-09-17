<?php

return [
    // Define available toolbar presets.
    'toolbars' => [
        // DO NOT remove the default toolbar.
        'default' => ['format', '|', 'heading1', 'heading2', 'heading3', '|', 'bold', 'italic', 'strikethrough', 'underline', '|', 'alignLeft', 'alignCenter', 'alignRight', '|', 'orderedList', 'bulletList', '|', 'link', 'blockquote', 'codeBlock', 'image', '|', 'undo', 'redo'],

        // Add your own presets here ...
    ],

    // Image upload options.
    'images' => [
        // The endpoint used for handling image uploads.
        'endpoint' => '/nova-vendor/jacobfitzp/nova-canvas/upload',
    ],
];
