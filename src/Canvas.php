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
            'output' => config('nova-canvas.defaults.output'),
            'disk' => config('nova-canvas.defaults.disk') ?? config('nova.storage_disk'),
            'endpoint' => config('nova-canvas.images.endpoint'),
            'path' => config('nova-canvas.defaults.path'),
            'scrollable' => config('nova-canvas.defaults.scrollable'),
        ]);

        // Set default toolbar.
        $this->toolbar(config('nova-canvas.defaults.toolbar'));

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
        return $this->withMeta([
            'disk' => $disk,
            'path' => $path ?? config('nova-canvas.defaults.path'),
        ]);
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

    /**
     * Use HTML output instead of JSON.
     *
     * @return self
     */
    public function asHtml(): self
    {
        return $this->withMeta(['output' => 'html']);
    }

    /**
     * Set the editor content to a fixed height and make scrollable.
     *
     * @param int|null $height Height of the editor in px, null to disable.
     * @return self
     */
    public function scrollable(?int $height = 400): self
    {
        return $this->withMeta(['scrollable' => $height]);
    }
}
