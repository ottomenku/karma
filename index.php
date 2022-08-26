<?php
use Jenssegers\Blade\Blade;
$blade = new Blade('views', 'cache');

echo $blade->make('homepage', ['name' => 'John Doe'])->render();

?>
