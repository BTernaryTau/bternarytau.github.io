---
layout: default
title: "Theorem 𝜇-0"
description: "The mu factorial grows at the same rate as the mixed factorial."
---
# {{ site.title }}
## Theorem $$\mu$$-0

The [mu factorial](/miscellaneous/googology/mu-factorial) has the same growth rate as the [mixed factorial](https://googology.fandom.com/wiki/Mixed_factorial) in terms of [dominance over translations](https://sites.google.com/site/largenumbers/home/3-3/asymptotics).

$$n\mu! \eqv n^*$$

### Lemma $$\mu$$-0

$$(n - 1)\mu! > 2 \cdot n$$ for all $$n \in \N_0, n \ge 4$$.

#### Proof

Base case:

$$
\begin{align*}
(4 - 1)\mu! &= 3\mu!\\
&= (3 \uparrow (2 \cdot (1 + 0))) \\
&= 9 \\
&> 8 \\
&= 2 \cdot 4 \\
\end{align*}
$$

Induction step for $$n \ge 4$$:

$$
\begin{align*}
n\mu! &= n \uparrow^{n - 2} ((n - 1)\mu!) \\
&> n \uparrow^{n - 2} (2 \cdot n) &&\text{by the induction hypothesis} \\
&> n + (2 \cdot n) \\
&> 2 + (2 \cdot n) \\
&= 2 \cdot (n + 1) \\
\end{align*}
$$

### Lemma $$\mu$$-1

$$n \uparrow^{n - 2} n > (n - 1)^*$$ for all $$n \in \N_0, n \ge 2$$.

#### Proof

Base cases:

$$
\begin{align*}
2 \uparrow^{2 - 2} 2 &= 2 \cdot 2 \\
&= 4 \\
&> 1 \\
&= 1^* \\
&= (2 - 1)^* \\
3 \uparrow^{3 - 2} 3 &= 3 \uparrow 3 \\
&= 27 \\
&> 3 \\
&= 1 + 2 \\
&= 2^* \\
&= (3 - 1)^* \\
4 \uparrow^{4 - 2} 4 &= 4 \uparrow\uparrow 4 \\
&> 9 \\
&= (1 + 2) \cdot 3 \\
&= 3^* \\
&= (4 - 1)^* \\
\end{align*}
$$

Induction step for $$n \ge 4$$:

$$
\begin{align*}
(n + 1) \uparrow^{n - 1} (n + 1) &= (n + 1) \uparrow^{n - 2} ((n + 1) \uparrow^{n - 1} n) \\
&> (n + 1) \uparrow^{n - 2} (2 \uparrow^{n - 1} n) \\
&> n \uparrow^{n - 2} (2 \uparrow^{n - 1} n) \\
&> n \uparrow^{n - 2} (2 \cdot n) \\
&= n \uparrow^{n - 2} (n + n) \\
&> (n \uparrow^{n - 2} n) \uparrow^{n - 2} n &&\text{by the Knuth Arrow Theorem} \\
&> (n \uparrow^{n - 2} n) \uparrow^{n - 3} n \\
&> (n - 1)^* \uparrow^{n - 3} n &&\text{by the induction hypothesis} \\
&= n^* \\
\end{align*}
$$

### Proposition $$\mu$$-0

$$n\mu! > n^*$$ for all $$n \in \N_0, n \ge 4$$.

#### Proof

$$
\begin{align*}
n\mu! &= n \uparrow^{n - 2} ((n - 1)\mu!) \\
&> n \uparrow^{n - 2} (2 \cdot n) &&\text{by Lemma } \mu\text{-0} \\
&= n \uparrow^{n - 2} (n + n) \\
&> (n \uparrow^{n - 2} n) \uparrow^{n - 2} n &&\text{by the Knuth Arrow Theorem} \\
&> (n - 1)^* \uparrow^{n - 2} n &&\text{by Lemma } \mu\text{-1} \\
&> (n - 1)^* \uparrow^{n - 3} n \\
&= n^* \\
\end{align*}
$$

### Proposition $$\mu$$-1

$$n\mu! < (n + 2)^*$$ for all $$n \in \N_0$$.

#### Proof

Base case:

$$
\begin{align*}
0\mu! &= 0 \\
&< 3 \\
&= 1 + 2 \\
&= 2^* \\
&= (0 + 2)^* \\
\end{align*}
$$

Induction step:

$$
\begin{align*}
(n + 1)\mu! &= (n + 1) \uparrow^{n - 1} (n\mu!)\\
&< (n + 1) \uparrow^{n - 1} (n + 2)^* &&\text{by the induction hypothesis} \\
&< (n + 2)^* \uparrow^{n - 1} (n + 2)^* \\
&= (n + 2)^* \uparrow^n 2 \\
&< (n + 2)^* \uparrow^n (n + 3) \\
&= (n + 3)^* \\
\end{align*}
$$

### Proof of Theorem $$\mu$$-0

By Proposition $$\mu$$-0, it cannot be the case that $$n\mu! \gs n^*$$. By Proposition $$\mu$$-1, it cannot be the case that $$n\mu! \gf n^*$$. Therefore, $$n\mu! \eqv n^*$$.

### Referenced results

Knuth Arrow Theorem: Theorem 3.1 in [Knuth's iterated powers](https://www.sciencedirect.com/science/article/pii/0001870879900525)
