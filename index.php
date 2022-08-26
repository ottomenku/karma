<?php
use eftec\bladeone\BladeOne;

class spiri
{
$kapjo=0;
$kaprossz=0;
$adjo=0;
$adrossz=0;
   public function ad($nepesseg)
   {
    $spiri=rand(0,count($nepesseg) );
    $action=rand(1, 3);
switch ($action) {
    case 1:
        $this->adjo++;
        $nepesseg[$spiri]->$kapjo++;
        break;
    case 2:
          $this->adrossz++;
          $nepesseg[$spiri]->$kaprossz++;
        break;   
}
 return $nepesseg;
   } 
}
public $data=[];
$data['spiriszam']=10;
$data['ciklus']=100;
$data['nepesseg']=[];

public function teremt()
{
 for ($i=0; $i <$data['spiriszam'] ; $i++) { 
    $nepesseg[$i]=new spiri();
 }

} 

public function futtat()
{
 for ($i=0; $i <$data['ciklus'] ; $i++) { 
$nepessegtomb=$data['nepesseg'];
    foreach ( $nepessegtomb as $spiri) {
        $data['nepesseg']=  $spiri->ad($data['nepesseg']);
    }
 }
} 

 teremt();
 futtat();

print_r($data);
// $views = __DIR__ . '/views';
// $cache = __DIR__ . '/cache';
 //$blade = new BladeOne($views,$cache,BladeOne::MODE_DEBUG); // MODE_DEBUG allows to pinpoint troubles.
 //echo $blade->run("base",$data); // it calls /views/hello.blade.php

?>
