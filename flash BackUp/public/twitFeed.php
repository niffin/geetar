<?php

$filename = 'http://twitter.com/statuses/user_timeline.xml?screen_name=yotamginzburg';

$handle = fopen($filename, 'r');

$contents = stream_get_contents($handle);

fclose($handle);

echo $contents;

?>