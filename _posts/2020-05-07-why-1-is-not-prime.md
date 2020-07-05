---
layout: post
title: "Why 1 is not prime"
date: 2020-07-05
---
Modern mathematicians have come to the consensus that the number 1 is not a prime number. However, many people still believe that 1 is in fact prime. This belief is justified by definitions like

> a prime number is a positive whole number that is only divisible by 1 and itself

and indeed, under this definition 1 would be prime. However, most definitions are worded to exclude 1, usually by specifying that a prime number must be greater than 1.[^1]

But why make the definition more complicated just to prevent 1 from being a prime number? Wouldn't it make more sense to just say it is prime? Well, it turns out that treating 1 as a prime number is quite awkward as it lacks many properties that all prime numbers have. This post will go over four of those properties, and in doing so will hopefully make the exclusion of 1 less of a mystery.

<!--break-->

The first property is that prime numbers can only appear in an integer's factorization finitely many times. For example, 64 can be written as 2<sup>6</sup>, but it cannot be written as 2<sup>7</sup>, 2<sup>8</sup>, or any other larger power of 2. This property is key to the [Fundamental Theorem of Arithmetic](https://en.wikipedia.org/wiki/Fundamental_theorem_of_arithmetic), which states that every positive integer can be uniquely represented as a product of primes.[^2] Thus, if you know an integer is equal to some product of primes, you also know that no other product of primes will be equal to that integer.

If we try to include 1 as a prime number, however, we run into a problem. Since 1 times any number equals that number, 1 can appear in a factorization an arbitrary number of times. As an example, 2 = 2 × 1 = 2 × 1 × 1 = 2 × 1 × 1 × 1 and so on. This means that counting 1 as a prime number breaks the Fundamental Theorem of Arithmetic, and in order to get it back we have to explicitly exclude 1 from the list of prime factors that the theorem applies to.

The Fundamental Theorem of Arithmetic is probably the most-often cited reason for why 1 isn't prime, but on its own it may not seem to be a sufficient justification. However, there are other properties that primes have and 1 lacks. For instance, the multiples of a prime that are greater than the prime itself are all composite numbers. This fact is exploited by an algorithm for finding primes up to some limit known as the [sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes). It works by finding the first prime it has yet to find, then marking all multiples of it as composite. It can then skip over those numbers when finding the next prime.

If we start the sieve of Eratosthenes at 2, everything works fine. In contrast, if we start it at 1, it immediately marks all other numbers as composite and declares 1 to be the only prime. Since all primes (and all other positive integers) are multiples of 1, the strategy employed by the sieve of Eratosthenes cannot work. Instead, it would need to be modified to skip the step of marking multiples as composite for 1. Again, we find ourselves needing to make special accommodations for 1 if we consider it to be prime.

Another instance in which including 1 as a prime creates a problem is [Euler's totient function](https://en.wikipedia.org/wiki/Euler%27s_totient_function). This function takes in a positive integer _n_ and outputs the number of totatives _n_ has, where a totative of _n_ is a positive integer _k_ ≤ _n_ where the [greatest common divisor](https://en.wikipedia.org/wiki/Greatest_common_divisor) of _k_ and _n_ is 1. That may feel like a lot to take in, so let's go through an example. Consider _φ_(6), where _φ_ is Euler's totient function. To find the value of this expression, we need to find all the totatives of 6. Starting with 1, we find that gcd(1, 6) = 1, so 1 is a totative of 6. In the case of 2, gcd(2, 6) = 2, so 2 is not a totative of 6. As for the rest, gcd(3, 6) = 3, gcd(4, 6) = 2, gcd(5, 6) = 1, and gcd(6, 6) = 6. Thus, 5 is the only other totative of 6, and _φ_(6) = 2.

As you may have guessed, prime numbers have a unique property that involves Euler's totient function. Specifically, for any prime number _p_, _φ_(_p_) = _p_ - 1. This arises from the fact that _p_ only has two factors, 1 and _p_. This means that gcd(_k_, _p_) equals _p_ when _k_ is a multiple of _p_ and 1 otherwise. For _k_ ≤ _p_, the only _k_ that's a multiple of _p_ is _p_ itself. Thus, every other _k_ will be a totative of _p_.

When calculating _φ_(1), there is only a single value of _k_ to consider, namely 1. It so happens that gcd(1, 1) = 1, so 1 is a totative of 1 and _φ_(1) = 1. Once again, this does not fit the pattern that the prime numbers follow. Thus, if we include 1 as a prime, we most amend our statement to say that for any prime number _p_ except 1, _φ_(_p_) = _p_ - 1.

Along with Euler's totient function, the [sum-of-divisors function](https://en.wikipedia.org/wiki/Divisor_function) also highlights a property of primes that 1 lacks. The sum-of-divisors function, referred to as σ, takes a positive integer as input and outputs the sum of all its positive divisors. For instance, 12 has 1, 2, 3, 4, 6, and 12 as divisors, so σ(12) = 1 + 2 + 3 + 4 + 6 + 12 = 28. As we've said before, a prime number _p_ has only two divisors, 1 and _p_, so it's easy to see that σ(_p_) = _p_ + 1 for any prime number. As has become quite predictable by now, 1 fails to follow this pattern. It only has a single divisor, 1, so σ(1) = 1 rather than 2 as it would if it followed the pattern.[^3]

I hope I have succeeded in giving a more satisfying explanation of why 1 isn't prime than whichever one (ha!)[^4] you knew of before. This was one of those aspects of math that seemed weirdly arbitrary to me when I was younger, and I am quite thankful to have a better understanding of why prime numbers are defined the way they are. The reasons for this go far beyond what I have discussed here, but I think the examples I chose do a decent job of balancing insight with simplicity.

[^1]: Some definitions instead say that prime numbers have exactly two positive integer factors, which I find to be a much more natural means of excluding 1 from the primes. Nonetheless, requiring primes to be greater than 1 seems to be more common; [Wikipedia](https://en.wikipedia.org/wiki/Prime_number), [Wolfram\|Alpha](https://www.wolframalpha.com/examples/mathematics/number-theory/prime-numbers/), and [Wolfram _MathWorld_](https://mathworld.wolfram.com/PrimeNumber.html) all use this option.
[^2]: This assumes that the use of the [empty product](https://en.wikipedia.org/wiki/Empty_product) is allowed.
[^3]: This failure can be actually be generalized to a whole set of divisor functions. Let _d_<sub>1</sub> through _d<sub>k</sub>_ represent the _k_ divisors of _n_. Define σ<sub>_x_</sub>(_n_) = _d_<sub>1</sub>_<sup>x</sup>_ + _d_<sub>2</sub>_<sup>x</sup>_ + ⋯ + _d<sub>k</sub><sup>x</sup>_. Then for any prime number _p_, σ<sub>_x_</sub>(_p_) = _p<sup>x</sup>_ + 1. In contrast, σ<sub>_x_</sub>(1) = 1.
[^4]: I'm sorry.
