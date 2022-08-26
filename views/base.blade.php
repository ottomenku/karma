<!doctype html>
<html lang="HU">
    <head>
        <meta charset="utf-8">

        <title>Karma 1.0</title>
     
    </head>
    <body>
<h4> Karma 1.0</h4>
<h3> Spiriszam: {{ $data['spiriszam'] }}</h3>
<h3> ciklus: {{ $data['ciklus'] }}</h3>

@foreach ($data['nepesseg'] as $piri)
    <h3>ID:  {{ $loop->index}}, jó ad/kap: {{ $spiri->adjo }} / {{ $spiri->kapjo }}    
                                roszz ad/kap: {{ $spiri->adrossz}} / {{ $spiri->kaprossz }}      
    </h3>
@endforeach




    </body>
</html>