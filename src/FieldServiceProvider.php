<?php

namespace Jacobfitzp\NovaCanvas;

use Laravel\Nova\Nova;
use Laravel\Nova\Events\ServingNova;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class FieldServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(): void
    {
        // Nova assets.
        Nova::serving(static function (ServingNova $event) {
            Nova::script('nova-canvas', __DIR__ . '/../dist/js/field.js');
            Nova::style('nova-canvas', __DIR__ . '/../dist/css/field.css');
            Nova::style('nova-canvas-highlighting', 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css');
        });

        // Publish config file.
        $this->publishes([
            __DIR__ . '/../config/nova-canvas.php' => config_path('nova-canvas.php'),
        ], 'nova-canvas');

        // Register routes.
        $this->routes();
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register(): void
    {
        $this->mergeConfigFrom(
            __DIR__ . '/../config/nova-canvas.php',
            'nova-canvas'
        );
    }

    /**
     * Register routes.
     *
     * @return void
     */
    public function routes(): void
    {
        Route::prefix('nova-vendor/jacobfitzp/nova-canvas')
            ->middleware(['nova:api'])
            ->group(__DIR__ . '/../routes/api.php');
    }
}
