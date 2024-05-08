---
layout: default
title: "Favorite betrayal under STAR"
description: "STAR voting is known to fail the favorite betrayal criterion, but there is disagreement regarding which situations incentivize favorite betrayal."
---
# {{ site.title }}
## {{ page.title }}

STAR voting is known to fail the [favorite betrayal criterion](https://en.wikipedia.org/wiki/Comparison_of_electoral_systems#Strategy_criteria), but there is disagreement regarding which situations incentivize favorite betrayal. In [A Farewell to Pass/Fail:
Why We Ditched Later No Harm](https://www.starvoting.us/farewell_to_pass_fail), Emily Dempsey says:

> Specifically, STAR Voting only incentivizes Favorite Betrayal when there is a Condorcet Cycle.  Not much is known about how likely Condorcet Cycles are in real-world elections, but they are certainly less likely (and, I would wager, much more difficult for a voter to predict) than other problematic phenomena such as Vote Splitting and Center Squeeze Scenarios, in which many other voting systems incentivize Favorite Betrayal and STAR Voting does not.

On the other hand, Wikipedia [states the following](https://en.wikipedia.org/wiki/Comparison_of_electoral_systems#cite_note-starFB-33):

> In STAR voting, in order for favorite betrayal to be strategically advantageous, four separate things must be true: the favorite candidate X must be in the runoff under an honest vote, X must lose the runoff under an honest vote, the betrayal beneficiary Y must not be in the runoff under an honest vote, and the Y must win the runoff under a strategic vote.

It is fairly straightforward to show that all four of these criteria are indeed necessary:

1. Assume that X is not in the runoff under an honest vote. Then decreasing the rating given to X will also result in X not making the runoff. This means that decreasing the rating given to X cannot affect the outcome of the election. However, favorite betrayal requires that decreasing the rating given to X have an effect on the outcome of the election, so this is a contradiction. Therefore, X must be in the runoff under an honest vote.
2. Assume that X wins the runoff under an honest vote. Then the voter's most preferred outcome has occurred, so there is no incentive to cast a strategic vote instead of an honest vote. However, favorite betrayal involves casting a strategic vote, so this is a contradiction. Therefore, X must lose the runoff under an honest vote.
3. Assume that Y is in the runoff under an honest vote. By (1.) X must be the other candidate in the runoff, and by (2.) X must lose the runoff. This means that Y must win the runoff under an honest vote, so there is no incentive to cast a strategic vote to help Y win. However, favorite betrayal involves casting a strategic vote to help Y win, so this is a contradiction. Therefore, Y must not be in the runoff under an honest vote.
4. Assume that there is no strategic vote that causes Y to win the runoff. Since there is no incentive to attempt the impossible, there is no incentive to cast a strategic vote to help Y win the runoff. However, favorite betrayal involves casting a strategic vote to help Y win, so this is a contradiction. Therefore, Y must win the runoff under some strategic vote.

On the other hand, it is possible to devise a counterexample to the claim that a Condorcet cycle is necessary:

<div style="overflow-x:auto;">
  <table>
    <thead>
      <tr>
        <th>Number of Voters</th>
        <th>Candidate A</th>
        <th>Candidate B</th>
        <th>Candidate C</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>5</td>
        <td>1</td>
        <td>0</td>
      </tr>
      <tr>
        <td>1</td>
        <td>5</td>
        <td>0</td>
        <td>2</td>
      </tr>
      <tr>
        <td>2</td>
        <td>4</td>
        <td>0</td>
        <td>5</td>
      </tr>
      <tr>
        <td>6</td>
        <td>3</td>
        <td>5</td>
        <td>4</td>
      </tr>
    </tbody>
  </table>
</div>

In this election, Candidate A receives 36 points, Candidate B receives 31 points, and Candidate C receives 36 points, so A and C are the finalists. A is favored over C on 2 ballots while C is favored over A on 8 ballots, so C is the winner. However, the voter in the first row can change this outcome by betraying their favorite candidate:

<div style="overflow-x:auto;">
  <table>
    <thead>
      <tr>
        <th>Number of Voters</th>
        <th>Candidate A</th>
        <th>Candidate B</th>
        <th>Candidate C</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>1</td>
        <td>5</td>
        <td>0</td>
      </tr>
      <tr>
        <td>1</td>
        <td>5</td>
        <td>0</td>
        <td>2</td>
      </tr>
      <tr>
        <td>2</td>
        <td>4</td>
        <td>0</td>
        <td>5</td>
      </tr>
      <tr>
        <td>6</td>
        <td>3</td>
        <td>5</td>
        <td>4</td>
      </tr>
    </tbody>
  </table>
</div>

Now Candidate A receives 32 points, Candidate B receives 35 points, and Candidate C receives 36 points, so B and C are the finalists. B is favored over C on 7 ballots while C is favored over B on 3 ballots, so B wins the election. Notice that this voter cannot achieve this result by simply rating A and B the same; A will still have more points than B, preventing B from reaching the runoff.

Importantly, this example lacks a Condorcet cycle. Instead, B is the Condorcet winner, and will always win in the runoff. Thus, this disproves the claim that favorite betrayal is only incentivized under STAR voting when a Condorcet cycle exists.
