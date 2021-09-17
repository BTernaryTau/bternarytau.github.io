---
layout: default
title: "Sequential cancellation criterion"
description: "The sequential cancellation criterion is an extension of the cancellation criterion to sequential multi-winner voting methods. This criterion requires that, whenever a voter likes each of the candidates elected so far the same amount as another voter does, their ballots be capable of cancelling each other out in the next round."
---
# {{ site.title }}
## {{ page.title }}

The sequential cancellation criterion is an extension of the [cancellation criterion](/miscellaneous/voting-theory/cancellation-criterion) to sequential multi-winner voting methods. This criterion requires that, whenever a voter likes each of the candidates elected so far the same amount as another voter does, their ballots be capable of cancelling each other out in the next round. While the cancellation criterion itself can be applied to multi-winner methods, it is incompatible with proportional representation which arguably makes it a bad criterion to pass in multi-winner contexts. The sequential cancellation criterion fixes this by only requiring cancellation when two voters have given the same amount of support to all candidates elected so far.

To give a more formal definition of the sequential cancellation criterion, some terms and notation will need to be defined first. An incomplete list of winners is a (possibly empty) list of candidates that is smaller than the number of seats $$k$$ in the election. The notation $$m(b_1, b_2, \dots, b_n)[1:i]$$ refers to the list of the first $$i$$ winners produced by the voting method $$m$$ given the list of ballots $$b_1, b_2, \dots, b_n$$. The notation $$b(c)$$ refers to the [level of support](/miscellaneous/voting-theory/unified-levels-of-support) that candidate $$c$$ receives from ballot $$b$$.

A sequential voting method $$m$$ passes the sequential cancellation criterion if for every ballot $$b$$ and incomplete list of winners $$W$$, there exists some ballot $$b'$$ such that both of the following hold:

1. For every candidate $$c$$ in $$W$$, $$b'(c) = b(c)$$.
2. For any list of ballots $$b_1, b_2, \dots, b_n$$, if $$m(b_1, b_2, \dots, b_n)[1:\vert W \vert] = W$$ and $$m(b_1, b_2, \dots, b_n, b, b')[1:\vert W \vert] = W$$, then $$m(b_1, b_2, \dots, b_n, b, b')[1:\vert W \vert+1] = m(b_1, b_2, \dots, b_n)[1:\vert W \vert+1]$$.

Note that this definition assumes that $$m$$ is deterministic and passes the [anonymity criterion](/miscellaneous/voting-theory/anonymity-criterion) (though there is an [extension](https://www.votingtheory.org/forum/topic/122/handling-non-deterministic-tie-breaking-in-voting-criteria/2) that also applies to non-deterministic methods).

Because no candidates are elected before the first round, the sequential cancellation criterion requires that ballots obey the [cancellation criterion](/miscellaneous/voting-theory/cancellation-criterion) during that round. This also means that it reduces to the cancellation criterion for single-winner methods since they only have one round.

In most cases, a pair of ballots that cancels in one round won't cancel in previous or subsequent rounds. This means it's possible that adding a cancelling pair of ballots to the election changes the candidates elected in earlier rounds; when this happens, the ballots aren't required to cancel.

### Application to bloc voting methods

The sequential cancellation criterion was primarily designed with proportional methods in mind, but it also behaves nicely in the context of [bloc voting](https://electowiki.org/wiki/Bloc_voting). In fact, the sequential cancellation criterion and the cancellation criterion are equivalent for bloc methods. Below is an informal sketch of the relevant proof.

First, it must be shown that if a bloc method passes the sequential cancellation criterion, it passes the cancellation criterion as well. A bloc method works by applying a single-winner method to elect a candidate, removing that candidate from the ballots, and then repeating those two steps until all seats are filled. The sequential cancellation criterion requires that a voting method pass cancellation in the first round, so the single-winner method employed by the bloc method must pass cancellation. Since the bloc method uses this same method in every round, it will pass cancellation in every round. Thus, the bloc method itself must pass cancellation.

Next, it must be shown that if a bloc method passes the cancellation criterion, it also passes the sequential cancellation criterion. Consider some arbitrary ballot $$b$$ and incomplete list of winners $$W$$. Let $$b_{-W}$$ be the ballot formed by taking $$b$$ and removing every candidate from $$W$$. Since the single-winner method employed passes cancellation, there must exist some cancelling ballot $$b'_{-W}$$ for $$b_{-W}$$. Let $$b'$$ be this cancelling ballot but modified so that it maps each candidate $$c$$ in $$W$$ to $$b(c)$$. If adding $$b$$ and $$b'$$ doesn't change the first $$\vert W \vert$$ winners, then in the next round all candidates in $$W$$ will have been removed and these ballots will reduce to $$b_{-W}$$ and $$b'_{-W}$$. This means the next winner elected will also remain unchanged if $$b$$ and $$b'$$ are added. Therefore, this bloc method must pass sequential cancellation.

It's worth noting that this same argument applies to non-bloc voting methods that still have the same basic structure as bloc methods, such as [single non-transferable vote](https://electowiki.org/wiki/Single_non-transferable_vote) and [satisfaction approval voting](https://en.wikipedia.org/wiki/Satisfaction_approval_voting).

### Comparison to vote unitarity

[Vote unitarity](https://electowiki.org/wiki/Vote_unitarity) is an alternate proposal for defining one person, one vote in the context of proportional representation. Unlike the sequential cancellation criterion, it does not attempt to extend the cancellation criterion (and thus does not reduce to the cancellation criterion for single-winner methods). Instead, it takes a different approach centered around constraining the spending of ballot weights.

Below is a table comparing vote unitarity with the sequential cancellation criterion and the cancellation criterion.

<div style="overflow-x:auto;">
  <table style="min-width:750px;">
    <thead>
      <tr>
        <th></th>
		<th>Cancellation</th>
        <th>Sequential Cancellation</th>
        <th>Vote Unitarity</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td markdown="span">**Applies to all voting methods**</td>
        <td>Yes</td>
        <td>No, only sequential methods (including single-winner methods)</td>
		<td>No, only sequential proportional methods</td>
      </tr>
      <tr>
        <td markdown="span">**Compatible with proportional representation**</td>
        <td>No</td>
        <td>Yes</td>
		<td>Yes</td>
      </tr>
	  <tr>
        <td markdown="span">**Doesn't require access to internal mechanics**</td>
        <td>Yes</td>
        <td>Yes</td>
		<td>No, requires access to ballot weights</td>
      </tr>
	  <tr>
        <td markdown="span">**If two methods always produce the same results, either both pass or both fail**</td>
        <td>Yes</td>
        <td>Yes, but candidates must always be elected in the same order</td>
		<td>No</td>
      </tr>
    </tbody>
  </table>
</div>
