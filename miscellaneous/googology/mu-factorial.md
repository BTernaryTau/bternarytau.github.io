---
layout: default
title: "Mu factorial"
description: "The mu factorial is a factorial variant based on the hyper operators."
---
# {{ site.title }}
## {{ page.title }}

The mu factorial is a factorial variant based on the hyper operators. The notation $$n\mu!$$ is used to denote the mu factorial of a non-negative integer $$n$$.

$$
\begin{align*}
0\mu! &= 0 \\
n\mu! &= n \uparrow^{n - 2} ((n - 1)\mu!) &&\text{for } n > 0 \\
\end{align*}
$$

This definition uses [Knuth's up-arrow notation](https://en.wikipedia.org/wiki/Knuth%27s_up-arrow_notation) extended so that $$a \uparrow^{-1} b = a + b$$ and $$a \uparrow^0 b = a \cdot b$$. The definiton of the mu factorial may alternatively be written in a manner similar to the common definition of the factorial.

$$n\mu! = n \uparrow^{n - 2} ((n - 1) \uparrow^{n - 3} \dots \uparrow\uparrow (3 \uparrow (2 \cdot (1 + 0))))$$

The name "mu factorial" comes from "mixed up-arrow factorial", in reference to the hyper operator notation used in its definition. It also corresponds to "mixed-up factorial", since there is a risk of it being mixed up with other factorial variants such as the [mixed factorial](https://googology.fandom.com/wiki/Mixed_factorial).

### Small values of the mu factorial

$$
\def\arraystretch{1.5}
\begin{array}{|l|l|l|l|}
\hline
\pmb{n} & \pmb{n\mu}! & \textbf{Name} & \textbf{Pronunciation} \\[0.3ex]
\hline
0 & 0 & \text{facnull} & \text{/fækˈnʌl/} \\[0.3ex]
\hline
1 & 1 & \text{facadd} & \text{/fækˈæd/} \\[0.3ex]
\hline
2 & 2 & \text{facmul} & \text{/fækˈmʌl/} \\[0.3ex]
\hline
3 & 9 & \text{facexp} & \text{/fækˈɛksp/} \\[0.3ex]
\hline
4 & 4 \uparrow\uparrow 9 & \text{factet} & \text{/fækˈtɛt/} \\[0.3ex]
\hline
5 & 5 \uparrow\uparrow\uparrow (4 \uparrow\uparrow 9) & \text{facpent} & \text{/fækˈpɛnt/} \\[0.3ex]
\hline
6 & 6 \uparrow\uparrow\uparrow\uparrow (5 \uparrow\uparrow\uparrow (4 \uparrow\uparrow 9)) & \text{fachex} & \text{/fækˈhɛks/} \\[0.3ex]
\hline
\end{array}
$$

### Comparison to the mixed factorial

I came up with the mu factorial before I was aware of the mixed factorial, but the name "mu factorial" came after I researched other factorial variants and learned about the very similar mixed factorial. I tried to choose the details of the mu factorial to be as natural as possible in the context of googology. The base case $$0\mu! = 0$$ was chosen so that the value of $$n\mu!$$ would be generated from the previous value, the $$n$$th hyper operator, and $$n$$ itself. I also chose to have the previous value serve as the hyperexponent since this generally leads to larger values compared to using it as the base.

Notably, these design choices don't really affect the growth rate since both factorial variants diagonalize over the hyper operators. In fact, it can be shown that the mu factorial [grows at the same rate as the mixed factorial](/miscellaneous/googology/proofs/theorem-mu-0).

### Comparison to other functions

The mu factorial [grows at the same rate as the Ackermann function](/miscellaneous/googology/proofs/theorem-mu-1).
