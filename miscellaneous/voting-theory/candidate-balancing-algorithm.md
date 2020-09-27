---
layout: default
title: "Candidate balancing algorithm"
---
# {{ site.title }}
## {{ page.title }}
### Introduction

The candidate balancing algorithm is an algorithm for balancing elected candidates among several groups. These groups must be disjoint subsets of the set of candidates, but they need not partition the candidate set.

### Description

The candidate balancing algorithm operates on an ordered list of candidates, generally the output of some bloc voting method. It follows these rules, starting with the first candidate on the list, until one candidate from each group has been elected:

1. If the candidate is not a member of any group, they are elected, and the algorithm proceeds to the next candidate in the list.
2. If the candidate is a member of a group that does already have an elected candidate, the algorithm simply proceeds to the next candidate in the list.
3. If the candidate is a member of a group that does not already have an elected candidate, they are elected and their group is marked as having an elected candidate. The algorithm then proceeds to the next candidate in the list.

Once each group has one elected candidate or the end of the list is reached, all elected candidates are removed from the list, and the algorithm recursively runs itself on the new list. The algorithm terminates as soon as all seats are filled.

### Pseudocode

```
function balanceCandidates(List candidates, Set groups, int numSeats) {
  List electedCandidates = List.empty();
  Set satisfiedGroups = Set.empty();
  int seatsRemaining = numSeats;
  
  for (candidate in candidates) {
    // Handle candidate without a group
    if (candidate.group == null) {
      electedCandidates.add(candidate);
      seatsRemaining--;
    } else if (!satisfiedGroups.contains(candidate.group)) {
      electedCandidates.add(candidate);
      satisfiedGroups.add(candidate.group);
      seatsRemaining--;
    }
    
    // Terminate if all seats are filled
    if (seatsRemaining == 0) {
      return electedCandidates;
    }
    
    if (satisfiedGroups == groups) {
      break;
    }
  }
  
  // Remove elected candidates
  candidates.removeAll(electedCandidates);
  
  // Make recursive call to fill remaining seats
  return electedCandidates.append(balanceCandidates(candidates, groups, seatsRemaining));
}
```

### Applications

One application for the candidate balancing algorithm is electing a gender-balanced list of candidates. To accomplish this, female candidates are placed in one group and male candidates in another, with non-binary candidates remaining uncategorized.