---
layout: default
title: "Theorem 𝜇-1"
description: "The mu factorial grows at the same rate as the Ackermann function."
---
# {{ site.title }}
## Theorem $$\mu$$-1

The [mu factorial](/miscellaneous/googology/mu-factorial) has the same growth rate as the [Ackermann-Péter function](https://en.wikipedia.org/wiki/Ackermann_function) in terms of [dominance over translations](https://sites.google.com/site/largenumbers/home/3-3/asymptotics).

$$n\mu! \eqv A(n, n)$$

### Lemma $$\mu$$-2

$$n\mu! > n + 4$$ for all $$n \in \N_0, n \ge 3$$.

#### Proof

Base case:

$$
\begin{align*}
3\mu! &= (3 \uparrow (2 \cdot (1 + 0))) \\
&= 9 \\
&> 7 \\
&= 3 + 4 \\
\end{align*}
$$

Induction step for $$n \ge 3$$:

$$
\begin{align*}
(n + 1)\mu! &= (n + 1) \uparrow^{n - 1} (n\mu!) \\
&> (n + 1) \uparrow^{n - 1} (n + 4) &&\text{by the induction hypothesis} \\
&> (n + 1) + (n + 4) \\
&> n + 5 \\
\end{align*}
$$

### Proposition $$\mu$$-2

$$n\mu! > A(n, n)$$ for all $$n \in \N_0, n \ge 4$$.

#### Proof

$$
\begin{align*}
n\mu! &= n \uparrow^{n - 2} ((n - 1)\mu!) \\
&> n \uparrow^{n - 2} (n + 3) &&\text{by Lemma } \mu\text{-2} \\
&> 2 \uparrow^{n - 2} (n + 3) \\
&> 2 \uparrow^{n - 2} (n + 3) - 3 \\
&= A(n, n) &&\text{by the Ackermann-Péter Closed Form Theorem} \\
\end{align*}
$$

### Lemma $$\mu$$-3

$$n\mu! < 2 \uparrow^n (n + 1)$$ for all $$n \in \N_0$$.

#### Proof

Base cases:

$$
\begin{align*}
0\mu! &= 0 \\
&< 2 \\
&= 2 \uparrow^0 (0 + 1) \\
1\mu! &= 1 \\
&< 4 \\
&= 2 \uparrow^1 (1 + 1) \\
2\mu! &= 2 \\
&< 16 \\
&= 2 \uparrow^2 (2 + 1) \\
\end{align*}
$$

Induction step for $$n \ge 2$$:

$$
\begin{align*}
(n + 1)\mu! &= (n + 1) \uparrow^{n - 1} (n\mu!) \\
&< (n + 1) \uparrow^{n - 1} (2 \uparrow^n (n + 1)) &&\text{by the induction hypothesis} \\
&< (n + 1) \uparrow^{n - 1} ((n + 1) \uparrow^n (n + 1)) \\
&= (n + 1) \uparrow^n (n + 2) \\
&< (n + 2) \uparrow^n (n + 2) \\
&= (n + 2) \uparrow^{n + 1} 2 \\
&< 2 \uparrow^{n + 1} (n + 2) &&\text{by the Knuth Arrow Commutative Inequality} \\
\end{align*}
$$

### Lemma $$\mu$$-4

$$2 \uparrow^n m \le 2 \uparrow^n (m + 2) - 3$$ for all $$m, n \in \N_0$$.

#### Proof

Base cases where $$n = 0$$:

$$
\begin{align*}
2 \uparrow^0 m &= 2 \cdot m \\
&< 2 \cdot m + 1 \\
&= 2 \cdot m + 2 \cdot 2 - 3 \\
&= 2 \uparrow^0 (m + 2) - 3 \\
\end{align*}
$$

Base cases where $$m = 0$$ and $$n \ge 1$$:

$$
\begin{align*}
2 \uparrow^n 0 &= 1 \\
&= 4 - 3 \\
&= 2 \uparrow^n 2 - 3 \\
&= 2 \uparrow^n (0 + 2) - 3 \\
\end{align*}
$$

Induction step for $$m$$, with the assumption that the lemma holds for $$n$$:

$$
\begin{align*}
2 \uparrow^{n + 1} (m + 1) &= 2 \uparrow^n (2 \uparrow^{n + 1} m) \\
&\le 2 \uparrow^n (2 \uparrow^{n + 1} (m + 2) - 3) &&\text{by the induction hypothesis} \\
&\le 2 \uparrow^n (2 \uparrow^{n + 1} (m + 2) - 1) - 3 &&\text{by assumption} \\
&< 2 \uparrow^n (2 \uparrow^{n + 1} (m + 2)) - 3 \\
&= 2 \uparrow^{n + 1} (m + 3) - 3 \\
\end{align*}
$$

Performing induction over $$n$$ completes the proof.

### Proposition $$\mu$$-3

$$n\mu! < A(n + 1, n + 1)$$ for all $$n \in \N_0$$.

#### Proof

Base cases:

$$
\begin{align*}
0\mu! &= 0 \\
&< 3 \\
&= 2 + (1 + 3) - 3 \\
&= A(1, 1) \\
1\mu! &= 1 \\
&< 7 \\
&= 2 \cdot (2 + 3) - 3 \\
&= A(2, 2) \\
2\mu! &= 2 \\
&< 61 \\
&= 2 \uparrow (3 + 3) - 3 \\
&= A(3, 3) \\
\end{align*}
$$

Induction step for $$n \ge 2$$:

$$
\begin{align*}
(n + 1)\mu! &= (n + 1) \uparrow^{n - 1} (n\mu!) \\
&< (n + 1) \uparrow^{n - 1} (2 \uparrow^n (n + 1)) &&\text{by Lemma } \mu\text{-3} \\
&< (2 \uparrow^n (n + 1)) \uparrow^{n - 1} (2 \uparrow^n (n + 1)) \\
&= (2 \uparrow^n (n + 1)) \uparrow^n 2 \\
&< 2 \uparrow^n (n + 3) &&\text{by the Knuth Arrow Theorem} \\
&\le 2 \uparrow^n (n + 5) - 3 &&\text{by Lemma } \mu\text{-4} \\
&= A(n + 2, n + 2) &&\text{by the Ackermann-Péter Closed Form Theorem} \\
\end{align*}
$$

### Proof of Theorem $$\mu$$-1

By Proposition $$\mu$$-2, it cannot be the case that $$n\mu! \gs A(n, n)$$. By Proposition $$\mu$$-3, it cannot be the case that $$n\mu! \gf A(n, n)$$. Therefore, $$n\mu! \eqv A(n, n)$$.

### Referenced results

Ackermann-Péter Closed Form Theorem: Theorem 4 in [Ackermann and the superpowers](https://www.dcc.fc.up.pt/~acm/ack.pdf#page=5)

Knuth Arrow Theorem: Theorem 3.1 in [Knuth's iterated powers](https://www.sciencedirect.com/science/article/pii/0001870879900525)

Knuth Arrow Commutative Inequality: Theorem 3.2 in [Knuth's iterated powers](https://www.sciencedirect.com/science/article/pii/0001870879900525)
