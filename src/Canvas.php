<?php

namespace Jacobfitzp\NovaCanvas;

use Laravel\Nova\Fields\Field;

class Canvas extends Field
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'nova-editor';

    public function __construct($name, $attribute = null, callable $resolveCallback = null)
    {
        // Set default options.
        $this->withMeta([
            'output' => 'html',
            'toolbar' => config('nova-canvas.toolbars.default'),
            'disk' => config('nova.storage_disk'),
            'endpoint' => config('nova-canvas.images.endpoint'),
            'path' => config('nova-canvas.images.path'),
        ]);

        parent::__construct($name, $attribute, $resolveCallback);
    }

    /**
     * Customize the toolbar configuration.
     * Can either be an array or comma-seperated string, alternatively pass preset name.
     *
     * @param string[]|string $options
     * @return self
     */
    public function toolbar(array|string $options): self
    {
        // Convert comma-seperated options or preset name.
        if (is_string($options)) {
            $options = filled(config("nova-canvas.toolbars.$options"))
                ? config("nova-canvas.toolbars.$options")
                : explode(',', $options);
        }

        return $this->withMeta(['toolbar' => $options]);
    }

    /**
     * Set the storage disk for file uploads.
     *
     * @param string $disk
     * @param string $path
     * @return self
     */
    public function disk(string $disk, ?string $path = null): self
    {
        $path ??= config('nova-canvas.images.path');

        return $this->withMeta(['disk' => $disk, 'path' => $path]);
    }

    /**
     * With character count feature.
     *
     * @return self
     */
    public function characterCount(): self
    {
        return $this->withMeta([
            'characterCount' => true,
            'characterCountMode' => 'characters',
        ]);
    }

    /**
     * With word count feature.
     *
     * @return self
     */
    public function wordCount(): self
    {
        return $this->withMeta([
            'characterCount' => true,
            'characterCountMode' => 'words',
        ]);
    }

    /**
     * Use JSON output instead of HTML.
     *
     * @return self
     */
    public function asJson(): self
    {
        return $this->withMeta(['output' => 'json']);
    }
}
