---
layout: default
title: "Sequential threshold average score voting"
description: "Sequential threshold average score voting is a rated party-agnostic proportional method inspired by sequential proportional score voting."
---
# {{ site.title }}
## {{ page.title }}
### Introduction

Sequential threshold average score voting (STAS voting) is a rated party-agnostic proportional method inspired by [sequential proportional score voting](/miscellaneous/voting-theory/sequential-proportional-score-voting) (SPSV).

### Description

Voters cast ballots by rating all candidates on a scale of 0 to *k* for some positive integer *k*, where a blank rating is interpreted as a 0. Each ballot starts off with a weight of 1. Candidates are elected sequentially using the following process, which continues until all seats are filled:

1. Of the currently unelected candidates, the candidate with the greatest sum of weighted scores is elected.
2. Each ballot has its weight set to $$\frac{1}{k} \sum_{i=1}^k \frac{1}{1 + m_i}$$, where *m<sub>i</sub>* is the number of already-elected candidates given a rating of at least *i* by that ballot.

This can be thought of as considering every possible approval threshold and, for each one, converting the score ballot into an approval ballot using that threshold. The new weight assigned to the score ballot is then simply the average of the weights that [sequential proportional approval voting](https://en.wikipedia.org/wiki/Sequential_proportional_approval_voting) (SPAV) would assign to these approval ballots. Hence, the reweighting process can be described as taking the average over the weights for different approval thresholds, or the "threshold average" for short.

Note that the approval ballots generated during this process are exactly the approval ballots produced by the [Kotze-Pereira transformation](https://electowiki.org/wiki/Kotze-Pereira_transformation).

### Analysis

With the above reweighting formula, STAS voting is equivalent to [D'Hondt](https://en.wikipedia.org/wiki/D%27Hondt_method) when voters vote perfectly along party lines. However, if the formula $$\frac{1}{k} \sum_{i=1}^k \frac{1}{1 + 2m_i}$$ is used instead, then under such circumstances it becomes equivalent to [Webster/Sainte-Laguë](https://en.wikipedia.org/wiki/Webster/Sainte-Lagu%C3%AB_method).

STAS voting is similar to [reweighted range voting](https://electowiki.org/wiki/Reweighted_Range_Voting) (RRV) in that it is a Thiele-type proportional method that assigns a single weight per round to each ballot. However, STAS voting tends to deweight ballots to a lesser extent in cases where a candidate given a low rating is elected. Similarly, STAS voting will often deweight scores less than SPSV does. Below is a table that demonstrates this effect. [An explanation of the scenario being depicted can be found here.]({% post_url 2020-10-27-the-motivation-behind-spsv-part-5 %}#section-b-comparison-with-rrv)

<div style="overflow-x:auto;">
  <table>
    <thead>
      <tr>
        <th>Candidate</th>
        <th>Method</th>
        <th>N/A</th>
        <th>C</th>
		<th>D</th>
		<th>E</th>
		<th>F</th>
		<th>G</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>A</td>
        <td>RRV</td>
        <td>5</td>
        <td>4.17</td>
		<td>3.57</td>
		<td>3.13</td>
		<td>2.78</td>
		<td>2.5</td>
      </tr>
      <tr>
        <td>A</td>
        <td>SPSV</td>
        <td>5</td>
        <td>4.5</td>
		<td>4.33</td>
		<td>4.25</td>
		<td>4.2</td>
		<td>4.17</td>
      </tr>
	  <tr>
        <td>A</td>
        <td>STASV</td>
        <td>5</td>
        <td>4.5</td>
		<td>4.33</td>
		<td>4.25</td>
		<td>4.2</td>
		<td>4.17</td>
      </tr>
      <tr>
        <td>B</td>
        <td>RRV</td>
        <td>1</td>
        <td>0.83</td>
		<td>0.71</td>
		<td>0.63</td>
		<td>0.56</td>
		<td>0.5</td>
      </tr>
      <tr>
        <td>B</td>
        <td>SPSV</td>
        <td>1</td>
        <td>0.5</td>
		<td>0.33</td>
		<td>0.25</td>
		<td>0.2</td>
		<td>0.17</td>
      </tr>
	  <tr>
        <td>B</td>
        <td>STASV</td>
        <td>1</td>
        <td>0.9</td>
		<td>0.87</td>
		<td>0.85</td>
		<td>0.84</td>
		<td>0.83</td>
      </tr>
    </tbody>
  </table>
</div>

When voters [min-max vote](https://electowiki.org/wiki/Tactical_voting#Definitions), STAS voting reduces to SPAV. Equivalently, SPAV and STAS voting with a scale of 0 to 1 are mathematically identical and give the same results.