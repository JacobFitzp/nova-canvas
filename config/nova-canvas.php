<?php

return [
    // Default options for the Canvas field.
    'defaults' => [
        // Output format, "html" or "json".
        'output' => 'html',
        // Default toolbar configuration.
        'toolbar' => 'default',
        // Fixed editor height in px, null to grow to fit content.
        'scrollable' => null,
        // Storage disk for file uploads, null defaults to `nova.storage_disk` value.
        'disk' => null,
        // Path for file uploads.
        'path' => 'nova-canvas',
    ],

    // Define available toolbar presets.
    'toolbars' => [
        'default' => ['format', '|', 'heading1', 'heading2', 'heading3', '|', 'bold', 'italic', 'strikethrough', 'underline', '|', 'alignLeft', 'alignCenter', 'alignRight', '|', 'orderedList', 'bulletList', '|', 'link', 'blockquote', 'codeBlock', 'image', '|', 'showSource', 'undo', 'redo'],
        // Add your own presets here ...
    ],

    // Image upload options.
    'images' => [
        // Available image sizes.
        // Label => Class
        'sizes' => [
            '25%' => 'w-1/4',
            '50%' => 'w-1/2',
            '100%' => 'w-full',
        ],

        // The endpoint used for handling image uploads.
        'endpoint' => '/nova-vendor/jacobfitzp/nova-canvas/upload',
    ],

    // Stylesheet to include for code highlighting in the editor (lowlight).
    'lowlight_stylesheet' => 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css',
];
