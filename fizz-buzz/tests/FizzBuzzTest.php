<?php

use Kata\FizzBuzz;
use PHPUnit\Framework\TestCase;

class FizzBuzzTest extends TestCase {

    public function testReturnNumberWhenNotDivisibleForThreeAndFive() {
        $fizzBuzz = new FizzBuzz();
        $this->assertEquals(1, $fizzBuzz->fizzBuzzNumber(1));
    }

    public function test_if_number_divisible_for_three_return_fizz() {
        $fizzBuzz = new FizzBuzz();
        $this->assertEquals("Fizz", $fizzBuzz->fizzBuzzNumber(3));
    }

    public function test_if_number_divisible_for_five_return_buzz() {
        $fizzBuzz = new FizzBuzz();
        $this->assertEquals("Buzz", $fizzBuzz->fizzBuzzNumber(5));
    }

    public function test_if_number_divisible_for_three_and_five_return_fizzBuzz() {
        $fizzBuzz = new FizzBuzz();
        $this->assertEquals("FizzBuzz", $fizzBuzz->fizzBuzzNumber(15));
    }
 }