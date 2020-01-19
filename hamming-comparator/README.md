# Hamming Comparator

Calculate the Hamming difference between two DNA strands.

A mutation is simply a mistake that occurs during the creation or
copying of a nucleic acid, in particular DNA. Because nucleic acids are
vital to cellular functions, mutations tend to cause a ripple effect
throughout the cell. Although mutations are technically mistakes, a very
rare mutation may equip the cell with a beneficial attribute. In fact,
the macro effects of evolution are attributable by the accumulated
result of beneficial microscopic mutations over many generations.

The simplest and most common type of nucleic acid mutation is a point
mutation, which replaces one base with another at a single nucleotide.

By counting the number of differences between two homologous DNA strands
taken from different genomes with a common ancestor, we get a measure of
the minimum number of point mutations that could have occurred on the
evolutionary path between the two strands.

This is called the 'Hamming distance'.

It is found by comparing two DNA strands and counting how many of the
nucleotides are different from their equivalent in the other string.

    GAGCCTACTAACGGGAT
    CATCGTAATGACGGCCT
    ^ ^ ^  ^ ^    ^^

The Hamming distance between these two DNA strands is 7.

## Implementation notes

The Hamming distance is only defined for sequences of equal length. This means that based on the definition, each language could deal with getting sequences of equal length differently.

## Restrictions

Don't solve this with the `gmp_hamdist` function!
Solve this one yourself using other basic tools instead.

## Running the tests

1. Get [PHPUnit] if you don't have it already:
https://phpunit.readthedocs.io/en/8.5/installation.html

2. Execute the tests:
https://phpunit.readthedocs.io/en/8.5/textui.html#

## Kata Source
This kata was provide by https://exercism.io/