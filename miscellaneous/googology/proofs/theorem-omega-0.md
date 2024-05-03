---
layout: default
title: "Theorem 𝜔-0"
description: "This theorem establishes a simple lower bound on the Wainer hierarchy up to 𝜔 in terms of hyper operators."
---
# {{ site.title }}
## Theorem $$\omega$$-0

This theorem establishes a simple lower bound on the [Wainer hierarchy](https://en.wikipedia.org/wiki/Fast-growing_hierarchy#The_Wainer_hierarchy) up to $$\omega$$ in terms of [hyper operators](https://en.wikipedia.org/wiki/Hyperoperation).

$$
\begin{align*}
f_\alpha(n) + 1 &\ge 2 [\alpha + 1] n \text{ for } \alpha < \omega \\
f_\omega(n) + 1 &\ge 2 [n + 1] n \\
\end{align*}
$$

### Proposition $$\omega$$-0

$$f_\alpha(n) \ge 2 [\alpha + 1] n$$ for $$n, \alpha \in \N_+$$.

#### Proof

Base case:

$$
\begin{align*}
f_1(n) &= 2 \cdot n \\
&= 2 [1 + 1] n\\
\end{align*}
$$

Induction step for $$\alpha$$:

$$
\begin{align*}
f_{\alpha + 1}(n) &= f_\alpha^n(n) \\
&\ge (2 [\alpha + 1])^n n &&\text{by the induction hypothesis} \\
&\ge (2 [\alpha + 1])^n 1 \\
&= (2 [\alpha + 1])^{n - 1} (2 [\alpha + 1] 1) \\
&= (2 [\alpha + 1])^{n - 1} 2 \\
&= 2 [\alpha + 2] n \\
\end{align*}
$$

### Proof of Theorem $$\omega$$-0

Cases where $$\alpha = 0$$:

$$
\begin{align*}
f_0(n) + 1 &= (n + 1) + 1 \\
&= 2 + n \\
&= 2 [0 + 1] n\\
\end{align*}
$$

Cases where $$n = 0$$ and $$1 \le \alpha < \omega$$:

$$
\begin{align*}
f_\alpha(0) + 1 &= f_{\alpha - 1}^0(0) + 1 \\
&= 0 + 1 \\
&= 1 \\
&\ge 2 [\alpha + 1] 0\\
\end{align*}
$$

Cases where $$n \ge 1$$ and $$1 \le \alpha < \omega$$:

$$
\begin{align*}
f_\alpha(n) + 1 &> f_\alpha(n) \\
&\ge 2 [\alpha + 1] n &&\text{by Proposition } \omega\text{-0} \\ \\
\end{align*}
$$

Cases where $$\alpha = \omega$$:

$$
\begin{align*}
f_\omega(n) + 1 &= f_{\omega[n]}(n) + 1 \\
&= f_n(n) + 1 \\
&\ge 2 [n + 1] n &&\text{by the previous cases} \\
\end{align*}
$$
