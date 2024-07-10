<?php

namespace Jacobfitzp\NovaCanvas;

use Laravel\Nova\Fields\Field;

class Forge extends Field
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
    protected array $toolbar = ['format'];

    public function __construct($name, $attribute = null, callable $resolveCallback = null)
    {
        parent::__construct($name, $attribute, $resolveCallback);

        $this->withMeta([
            'toolbar' => $this->toolbar,
        ]);
    }

    /**
     * Customize the toolbar configuration.
     *
     * @param string[] $options
     * @return self
     */
    public function toolbar(array $options): self
    {
        return $this->withMeta([
            'toolbar' => $options,
        ]);
    }
}
