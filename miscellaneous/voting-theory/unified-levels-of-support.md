---
layout: default
title: "Unified levels of support"
description: "Unified levels of support serves as a general framework for comparing the amounts of support that ballots give to candidates."
---
# {{ site.title }}
## {{ page.title }}
### Introduction

Unified levels of support serves as a general framework for comparing the amount of support a ballot gives to one candidate to the amount of support it gives to another candidate. This framework consists of procedures for producing mappings from candidates to levels of support for various ballot formats. The levels of support are represented by the positive integers, where integers closer to 0 correspond to higher levels of support. It is important to emphasize that unified levels of support is not intended for use in comparing support levels across different ballot types, only within them.

### Mapping rules

#### Single-mark ballots

For single-mark ballots, the candidate that is marked is mapped to 1. All other candidates are mapped to 2.

#### *n*-mark ballots

*n*-mark ballots are very similar to single-mark ballots. Marked candidates are mapped to 1, and unmarked candidates are mapped to 2.

#### Approval ballots

For approval ballots, candidates who are approved of are mapped to 1, and candidates who aren't approved of are mapped to 2.

#### Ranked ballots

For ranked ballots, a candidate ranked *i*th is mapped to *i*. One important clarification is that ranked ballots with equal rankings are assumed to be using [dense ranking](https://en.wikipedia.org/wiki/Ranking#Dense_ranking_%28%221223%22_ranking%29). As an example, the ballot A>B=C=D>E is considered to rank E 3rd, not 5th, so E is mapped to 3. Another detail is that any unranked candidates are treated as if they are ranked immediately below the last ranked candidate. Thus, the ballot A>B>C is considered to rank D and E 4th, so both are mapped to 4.

#### Rated ballots

For rated ballots with ratings *r*<sub>1</sub>, *r*<sub>2</sub>, …, *r<sub>n</sub>*, where *r*<sub>1</sub> indicates maximum support and *r<sub>n</sub>* indicates minimum support, a candidate with a rating of *r<sub>i</sub>* is mapped to *i*.

#### For-or-against-*n* ballots

For-or-against-*n* ballots allow voters to either vote for *n* candidates or vote against *n* candidates. Candidates voted for are mapped to 1, candidates left unmarked are mapped to 2, and candidates voted against are mapped to 3.

### Example usage

Consider two ranked ballots, A>B=C=D>E>F and A=B>C>D=E. Following the rules from the ranked ballots section, both ballots give candidates A, C, E, and F the same levels of support (1–4 respectively). The first ballot gives B less support and D more support than the second ballot does, since the first ballot maps B and D to 2 while the second ballot maps B to 1 and D to 3.

Unified levels of support allows for comparisons of how much support each candidate receives from each of those ballots, despite those ballots giving equal rankings to many candidates and despite the second ballot lacking an explicit ranking for candidate F.

### Design consistency

The mapping procedures included in unified levels of support are designed to be as consistent with each other as possible. Below is a table of all the instances in which one mapping scheme can be viewed as a subset of a different ballot format's mapping scheme.

<div style="overflow-x:auto;">
  <table>
    <tbody>
      <tr>
        <td>Single-mark ballots</td>
        <td markdown="span">*n*-mark ballots where *n* = 1</td>
      </tr>
      <tr>
        <td>Single-mark ballots</td>
		<td>Approval ballots with 1 candidate approved</td>
      </tr>
	  <tr>
        <td>Single-mark ballots</td>
		<td>Ranked ballots with 1 candidate ranked 1st and all others not ranked</td>
      </tr>
	  <tr>
        <td>Single-mark ballots</td>
		<td>Ranked ballots with 1 candidate ranked 1st and all others ranked 2nd</td>
      </tr>
	  <tr>
        <td>Single-mark ballots</td>
		<td markdown="span">Rated ballots with 2 ratings where 1 candidate is rated *r*<sub>1</sub> and all others are rated *r*<sub>2</sub></td>
      </tr>
	  <tr>
        <td>Single-mark ballots</td>
		<td markdown="span">For-or-against-*n* ballots where *n* = 1 and 1 candidate is voted for</td>
      </tr>
	  <tr>
        <td markdown="span">*n*-mark ballots</td>
		<td markdown="span">Approval ballots with *n* candidates approved</td>
      </tr>
	  <tr>
        <td markdown="span">*n*-mark ballots</td>
		<td markdown="span">Ranked ballots with *n* candidates ranked 1st and all others not ranked</td>
      </tr>
	  <tr>
        <td markdown="span">*n*-mark ballots</td>
		<td markdown="span">Ranked ballots with *n* candidates ranked 1st and all others ranked 2nd</td>
      </tr>
	  <tr>
        <td markdown="span">*n*-mark ballots</td>
		<td markdown="span">Rated ballots with 2 ratings where *n* candidates are rated *r*<sub>1</sub> and all others are rated *r*<sub>2</sub></td>
      </tr>
	  <tr>
        <td markdown="span">*n*-mark ballots</td>
		<td markdown="span">For-or-against-*n* ballots where *n* candidates are voted for</td>
      </tr>
	  <tr>
        <td>Approval ballots</td>
		<td>Ranked ballots with approved candidates ranked 1st and all others not ranked</td>
      </tr>
	  <tr>
        <td>Approval ballots</td>
		<td>Ranked ballots with approved candidates ranked 1st and all others ranked 2nd</td>
      </tr>
	  <tr>
        <td>Approval ballots</td>
		<td markdown="span">Rated ballots with 2 ratings where approved candidates are rated *r*<sub>1</sub> and all others are rated *r*<sub>2</sub></td>
      </tr>
	  <tr>
        <td>Ranked ballots</td>
		<td markdown="span">Rated ballots with 1 rating per rank where all candidates ranked *i*th are rated *r<sub>i</sub>*</td>
      </tr>
	  <tr>
        <td markdown="span">For-or-against-*n* ballots</td>
		<td markdown="span">Rated ballots with 3 ratings where *n* candidates are rated either *r*<sub>1</sub> or *r*<sub>3</sub> and all others are rated *r*<sub>2</sub></td>
      </tr>
    </tbody>
  </table>
</div>

### Notation

The level of support given to some candidate $$c$$ by some ballot $$b$$ is typically denoted by $$b(c)$$.

### Applications

Unified levels of support is intended to function as an interface for any voting criteria that depend on comparing levels of support across candidates and/or across ballots. An example of a criterion that uses it for comparisons across ballots is the [sequential cancellation criterion](/miscellaneous/voting-theory/sequential-cancellation-criterion). An example of a criterion that uses it for comparisons across ballots and comparisons across candidates is the [free cancellation criterion](/miscellaneous/voting-theory/free-cancellation-criterion).

#### Opposite ballots

One major application of unified levels of support is the concept of opposite ballots. Opposite ballots are ballots which express opposite sets of preferences. More formally, for some ballot $$b$$, an opposite ballot $$b'$$ is any ballot such that for each candidate $$c$$, $$b'(c) = k - b(c)$$ for some integer constant $$k$$.

For ranked ballots, this should give results that are at least mostly intuitive. A>B>C=D maps A to 1, B to 2, C to 3, and D to 3, so using *k* = 4, it's clear that C=D>B>A is a valid opposite ballot since it maps A to 4 - 1 = 3, B to 4 - 2 = 2, C to 4 - 3 = 1, and D to 4 - 3 = 1. What may be a little less obvious is that C=D>B is also a valid opposite ballot since it has the exact same mapping.

This behaves pretty similarly for rated ballots. Using a scale of 0-5, the ballot A/5, B/3, C/1, D/0 maps A to 1, B to 3, C to 5, and D to 6. Using *k* = 7 gives A/0, B/2, C/4, D/5 as its opposite, which is pretty straightforward (it maps A to 7 - 1 = 6, B to 7 - 3 = 4, C to 7 - 5 = 2, and D to 7 - 6 = 1). However, rated ballots that don't use the full scale provided will always have multiple opposites. For instance, A/5, B/3, C/1, D/1 has A/0, B/2, C/4, D/4 as an opposite for *k* = 7 and A/1, B/3, C/5, D/5 as an opposite for *k* = 6.

There are some ballot types for which it is not always possible to construct an opposite ballot. Single-mark ballots are an obvious example; the opposite of a ballot where A is marked while B and C aren't would be a ballot where B and C are marked and A isn't, but this is clearly not a valid single-mark ballot. The *n*-mark ballot is currently the only other ballot format supported by unified levels of support for which this is the case. However, other formats with this property can be generated by restricting ballots to a subset of one of the above formats. One instance of this is RCV-style ranked ballots that allow unranked candidates but disallow equal rankings.

### Limitations

One example of a voting method that unified levels of support can't completely handle is the version of score voting that uses average scores [unaffected by blanks](https://rangevoting.org/Blanks.html). In this case, the mapping scheme is incomplete because there is nowhere to map blanks to. For voting methods that count blanks as 0s instead, blanks and 0s can simply be treated as the same rating, enabling the framework to provide complete mappings for those methods.