<?php

namespace Hamming;

use InvalidArgumentException;

class HammingComparator
{
    public function distance(string $strandA, string $strandB) {
        if (strlen($strandA) !== strlen($strandB)) {
            throw new InvalidArgumentException('DNA strands must be of equal length.');
        }
        
        $strandA = str_split($strandA, 1);
        $strandB = str_split($strandB, 1);
        $distance = array_diff_assoc($strandA, $strandB);
        return count($distance);
    }
}
