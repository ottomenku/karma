<?php
use Jenssegers\Blade\Blade;
$blade = new Blade('views', 'cache');

echo $blade->make('base2', ['name' => 'John Doe'])->render();

?>
