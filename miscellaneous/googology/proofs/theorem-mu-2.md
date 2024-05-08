---
layout: default
title: "Theorem 𝜇-2"
description: "The mu factorial grows at the same rate as f𝜔 in the Wainer hierarchy."
---
# {{ site.title }}
## Theorem $$\mu$$-2

The [mu factorial](/miscellaneous/googology/mu-factorial) has the same growth rate as $$f_\omega$$ in the [Wainer hierarchy](https://en.wikipedia.org/wiki/Fast-growing_hierarchy#The_Wainer_hierarchy) in terms of [dominance over translations](https://sites.google.com/site/largenumbers/home/3-3/asymptotics).

$$n\mu! \eqv f_\omega(n)$$

### Lemma $$\mu$$-5

$$(2 \uparrow^{n - 1} n) + n < 2 \uparrow^n n$$ for all $$n \in \N_0, n \ge 3$$.

#### Proof

Case where $$n = 3$$:

$$
\begin{align*}
(2 \uparrow^{3 - 1} 3) + 3 &= 16 + 3 \\
&= 19 \\
&< 65,536 \\
&= 2 \uparrow^3 3 \\
\end{align*}
$$

Cases where $$n \ge 4$$:

$$
\begin{align*}
(2 \uparrow^{n - 1} n) + n &< (2 \uparrow^{n - 1} n) + (2 \uparrow^{n - 1} n) &&\text{by the Knuth Arrow Successor Inequality} \\
&= 2 \cdot (2 \uparrow^{n - 1} n) \\
&< 4 \uparrow^{n - 1} n &&\text{by the Knuth Arrow Multiplicative Inequality} \\
&\le n \uparrow^{n - 1} n \\
&= n \uparrow^n 2 \\
&< 2 \uparrow^n n &&\text{by the Knuth Arrow Commutative Inequality} \\
\end{align*}
$$

### Lemma $$\mu$$-6

$$n\mu! < 2 \uparrow^{n - 1} n$$ for all $$n \in \N_0$$.

#### Proof

Base cases:

$$
\begin{align*}
0\mu! &= 0 \\
&< 2 \\
&= 2 \uparrow^{0 - 1} 0 \\
1\mu! &= 1 \\
&< 2 \\
&= 2 \uparrow^{1 - 1} 1 \\
2\mu! &= 2 \\
&< 4 \\
&= 2 \uparrow^{2 - 1} 2 \\
3\mu! &= 9 \\
&< 16 \\
&= 2 \uparrow^{3 - 1} 3 \\
\end{align*}
$$

Induction step for $$n \ge 3$$:

$$
\begin{align*}
(n + 1)\mu! &= (n + 1) \uparrow^{n - 1} (n\mu!) \\
&< (n + 1) \uparrow^{n - 1} (2 \uparrow^{n - 1} n) &&\text{by the induction hypothesis} \\
&\le (2 \uparrow^{n - 1} n) \uparrow^{n - 1} (2 \uparrow^{n - 1} n) &&\text{by the Knuth Arrow Successor Inequality} \\
&< 2 \uparrow^{n - 1} ((2 \uparrow^{n - 1} n) + n) &&\text{by the Knuth Arrow Theorem} \\
&< 2 \uparrow^{n - 1} (2 \uparrow^n n) &&\text{by Lemma } \mu\text{-5} \\
&= 2 \uparrow^n (n + 1) \\
\end{align*}
$$

### Proposition $$\mu$$-4

$$n\mu! < f_\omega(n)$$ for all $$n \in \N_0$$.

#### Proof

Case where $$n = 0$$:

$$
\begin{align*}
0\mu! &= 0 \\
&< 1 \\
&= f_\omega(0) \\
\end{align*}
$$

Cases where $$n \ge 1$$:

$$
\begin{align*}
n\mu! &< 2 \uparrow^{n - 1} n &&\text{by Lemma } \mu\text{-6} \\
&\le f_n(n) &&\text{by Proposition } \omega\text{-0} \\
&= f_{\omega[n]}(n) \\
&= f_\omega(n) \\
\end{align*}
$$

### Proposition $$\mu$$-5

$$(n + 1)\mu! > f_\omega(n)$$ for all $$n \in \N_0, n \ge 2$$.

#### Proof

Case where $$n = 2$$:

$$
\begin{align*}
(2 + 1)\mu! &= 9 \\
&> 8 \\
&= f_\omega(2) \\
\end{align*}
$$

Cases where $$n \ge 3$$:

$$
\begin{align*}
(n + 1)\mu! &= (n + 1) \uparrow^{n - 1} (n\mu!) \\
&> (n + 1) \uparrow^{n - 1} (2 \cdot (n + 1)) &&\text{by Lemma } \mu\text{-0} \\
&> (n + 1) \uparrow^{n - 1} (2 \cdot n) \\
&> 2 \uparrow^{n - 1} (2 \cdot n) \\
&\ge 2 \cdot f_\omega(n) &&\text{by Theorem } \omega\text{-1} \\
&> f_\omega(n) \\
\end{align*}
$$

### Proof of Theorem $$\mu$$-2

By Proposition $$\mu$$-4, it cannot be the case that $$n\mu! \gf f_\omega(n)$$. By Proposition $$\mu$$-5, it cannot be the case that $$n\mu! \gs f_\omega(n)$$. Therefore, $$n\mu! \eqv f_\omega(n)$$.

### Referenced results

Knuth Arrow Successor Inequality: Theorem 3.5 in [Knuth's iterated powers](https://www.sciencedirect.com/science/article/pii/0001870879900525)

Knuth Arrow Multiplicative Inequality: Lemma 3.7 in [Knuth's iterated powers](https://www.sciencedirect.com/science/article/pii/0001870879900525)

Knuth Arrow Commutative Inequality: Theorem 3.2 in [Knuth's iterated powers](https://www.sciencedirect.com/science/article/pii/0001870879900525)

Knuth Arrow Theorem: Theorem 3.1 in [Knuth's iterated powers](https://www.sciencedirect.com/science/article/pii/0001870879900525)

[Proposition 𝜔-0](/miscellaneous/googology/proofs/theorem-omega-0#proposition-omega-0)

[Lemma 𝜇-0](/miscellaneous/googology/proofs/theorem-mu-0#lemma-mu-0)

[Theorem 𝜔-1](/miscellaneous/googology/proofs/theorem-omega-1)
