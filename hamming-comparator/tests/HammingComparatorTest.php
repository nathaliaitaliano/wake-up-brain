<?php

use Hamming\HammingComparator;
use PHPUnit\Framework\TestCase;

class HammingComparatorTest extends TestCase {
    public function setUp(): void {
        $this->hammingComparator = new HammingComparator();
    }

    public function test_if_complete_hamming_distance_for_same__single_nucleotide_strand_is_zero() {
        $this->assertEquals(0, $this->hammingComparator->distance('A', 'A'));
    }

    public function test_if_complete_hamming_distance_for_single_nucleotide_strand_is_one() {
        $this->assertEquals(1, $this->hammingComparator->distance('A', 'G'));
    }

    public function test_if_complete_hamming_distance_for_small_strand_is_zero() {
        $this->assertEquals(0, $this->hammingComparator->distance('CG', 'CG'));
    }

    public function test_if_complete_hamming_distance_for_small_strand_is_one() {
        $this->assertEquals(1, $this->hammingComparator->distance('AC', 'AT'));
    }

    public function test_if_complete_hamming_distance_for_small_strand_is_two() {
        $this->assertEquals(2, $this->hammingComparator->distance("AT", "CG"));
    }

    public function test_if_complete_hamming_distance_for_longer_strand_is_zero() {
        $this->assertEquals(0, $this->hammingComparator->distance("ACT", "ACT"));
    }

    public function test_if_complete_hamming_distance_for_longer_strand_is_one() {
        $this->assertEquals(1, $this->hammingComparator->distance("AAA", "AAG"));
    }

    public function test_if_complete_hamming_distance_for_longer_strand_is_three() {
        $this->assertEquals(3, $this->hammingComparator->distance("CGT", "ATC"));
    }

    public function test_if_complete_hamming_distance_for_very_longer_strand_is_zero() {
        $this->assertEquals(0, $this->hammingComparator->distance("GAGCCTACTAACGGGAT", "GAGCCTACTAACGGGAT"));
    }

    public function test_if_complete_hamming_distance_for_very_longer_strand_is_one() {
        $this->assertEquals(1, $this->hammingComparator->distance("GACCCTACTAACGGGAT", "GAGCCTACTAACGGGAT"));
    }

    public function test_if_complete_hamming_distance_for_very_longer_strand_is_nine() {
        $this->assertEquals(9, $this->hammingComparator->distance("GACTGCTCA", "AGGACGGAT"));
    }

    public function test_exception_when_strands_have_different_lengths() {
        $this->expectException(InvalidArgumentException::class);
        $this->expectErrorMessage("DNA strands must be of equal length.");
        $this->hammingComparator->distance("GATCTG", "AGGACGGATTCT");
    }
}
