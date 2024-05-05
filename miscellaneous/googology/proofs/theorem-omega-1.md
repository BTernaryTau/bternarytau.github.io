---
layout: default
title: "Theorem 𝜔-1"
description: "This theorem establishes a simple upper bound on the Wainer hierarchy up to 𝜔 in terms of hyper operators."
---
# {{ site.title }}
## Theorem $$\omega$$-1

This theorem establishes a simple upper bound on the [Wainer hierarchy](https://en.wikipedia.org/wiki/Fast-growing_hierarchy#The_Wainer_hierarchy) up to $$\omega$$ in terms of [hyper operators](https://en.wikipedia.org/wiki/Hyperoperation).

$$
\begin{align*}
2 \cdot f_\alpha(n) &\le 2 [\alpha + 1] (2 \cdot n) \text{ for } \alpha < \omega \\
2 \cdot f_\omega(n) &\le 2 [n + 1] (2 \cdot n) \\
\end{align*}
$$

[The correctness of this bound was originally proven by Deedlit](https://googology.fandom.com/wiki/User_blog:D57799/Ranging_FGH_before_omega#Deedlit.27s_proof) for $$1 \le \alpha < \omega$$ and $$n \ge 1$$. This proof follows the same approach as Deedlit's proof. It is worth noting that Deedlit has also proven the correctness of a [more complicated but tighter upper bound](https://math.stackexchange.com/a/1810305).

### Lemma $$\omega$$-0

In order for $$2 \cdot f^m(n) \le g^m(2 \cdot n)$$ to hold for all $$m, n \in \N_0$$, it is sufficient for the following conditions to be met.

1. $$f$$ is a function $$f : \N_0 \to \N_0$$
2. $$g$$ is a [non-decreasing function](https://en.wikipedia.org/wiki/Monotonic_function) $$g : \N_0 \to \N_0$$
3. $$2 \cdot f(n) \le g(2 \cdot n)$$ for all $$n \in \N_0$$

#### Proof

Base case:

$$
\begin{align*}
2 \cdot f^0(n) &= 2 \cdot n \\
&= g^0(2 \cdot n) \\
\end{align*}
$$

Induction step for $$m$$:

$$
\begin{align*}
2 \cdot f^m(n) &\le g^m(2 \cdot n) &&\text{by the induction hypothesis} \\
g(2 \cdot f^m(n)) &\le g(g^m(2 \cdot n)) &&\text{by conditions 1 and 2} \\
2 \cdot f(f^m(n)) &\le g(g^m(2 \cdot n)) &&\text{by condition 3} \\
2 \cdot f^{m + 1}(n) &\le g^{m + 1}(2 \cdot n) \\
\end{align*}
$$

### Lemma $$\omega$$-1

$$2 \cdot n \le 2 [m] n$$ for all $$m, n \in \N_0, m \ge 2$$.

#### Proof

Base cases where $$m = 2$$:

$$
\begin{align*}
2 \cdot n &= 2 [2] n \\
\end{align*}
$$

Base cases where $$n = 0$$ and $$m \ge 3$$:

$$
\begin{align*}
2 \cdot 0 &= 0 \\
&< 1 \\
&= 2 [m] 0 \\
\end{align*}
$$

Base cases where $$n = 1$$:

$$
\begin{align*}
2 \cdot 1 &= 2 \\
&= 2 [m] 1 \\
\end{align*}
$$

Induction step for $$n \ge 1$$, with the assumption that the lemma holds for $$m$$:

$$
\begin{align*}
2 \cdot (n + 1) &= 2 \cdot n + 2 \\
&\le 2 \cdot n + 2 \cdot n \\
&= 2 \cdot (2 \cdot n) \\
&\le 2 \cdot (2 [m + 1] n) &&\text{by the induction hypothesis} \\
&\le 2 [m] (2 [m + 1] n) &&\text{by assumption} \\
&= 2 [m + 1] (n + 1) \\
\end{align*}
$$

Performing induction over $$m$$ completes the proof.

### Lemma $$\omega$$-2

$$(2 [\alpha + 1])^m (2 [\alpha + 2] n) = 2 [\alpha + 2] (n + m)$$ for all $$m, n, \alpha \in \N_0$$.

#### Proof

Base case:

$$
\begin{align*}
(2 [\alpha + 1])^0 (2 [\alpha + 2] n) &= 2 [\alpha + 2] n \\
&= 2 [\alpha + 2] (n + 0) \\
\end{align*}
$$

Induction step for $$m$$:

$$
\begin{align*}
(2 [\alpha + 1])^{m+1} (2 [\alpha + 2] n) &= 2 [\alpha + 1] ((2 [\alpha + 1])^m (2 [\alpha + 2] n)) \\
&= 2 [\alpha + 1] (2 [\alpha + 2] (n + m)) &&\text{by the induction hypothesis} \\
&= 2 [\alpha + 2] (n + m + 1) \\
\end{align*}
$$

### Proof of Theorem $$\omega$$-1

Base case:

$$
\begin{align*}
2 \cdot f_0(n) &= 2 \cdot (n + 1) \\
&= 2 + (2 \cdot n) \\
&= 2 [0 + 1] (2 \cdot n) \\
\end{align*}
$$

Induction step for $$\alpha$$:

$$
\begin{align*}
2 \cdot f_{\alpha + 1}(n) &= 2 \cdot f_\alpha^n(n) \\
&\le (2 [\alpha + 1])^n (2 \cdot n) &&\text{by the induction hypothesis and Lemma } \omega\text{-0} \\
&\le (2 [\alpha + 1])^n (2 [\alpha + 2] n) &&\text{by Lemma } \omega\text{-1} \\
&= 2 [\alpha + 2] (2 \cdot n) &&\text{by Lemma } \omega\text{-2} \\
\end{align*}
$$

Case where $$\alpha = \omega$$:

$$
\begin{align*}
2 \cdot f_\omega(n) &= 2 \cdot f_{\omega[n]}(n) \\
&= 2 \cdot f_n(n) \\
&\le 2 [n + 1] (2 \cdot n) &&\text{by the previous cases} \\
\end{align*}
$$
