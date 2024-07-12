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

    /**
     * Default toolbar configuration.
     *
     * @var string[]
     */
    protected array $defaultToolbar = ['format'];

    public function __construct($name, $attribute = null, callable $resolveCallback = null)
    {
        // Set default options.
        $this->withMeta([
            'toolbar' => $this->defaultToolbar,
            'disk' => config('nova.storage_disk'),
        ]);

        parent::__construct($name, $attribute, $resolveCallback);
    }

    /**
     * Customize the toolbar configuration.
     * Can either be an array or comma-seperated string.
     *
     * @param string[]|string $options
     * @return self
     */
    public function toolbar(array|string $options): self
    {
        // Convert comma-seperated options to an array.
        if (is_string($options)) {
            $options = explode(',', $options);
        }

        return $this->withMeta(['toolbar' => $options]);
    }

    /**
     * Set the storage disk for file uploads.
     *
     * @param string $disk
     * @return self
     */
    public function disk(string $disk): self
    {
        return $this->withMeta(['disk' => $disk]);
    }

    /**
     * With character count feature.
     *
     * @return self
     */
    public function withCharacterCount(): self
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
    public function withWordCount(): self
    {
        return $this->withMeta([
            'characterCount' => true,
            'characterCountMode' => 'words',
        ]);
    }
}
