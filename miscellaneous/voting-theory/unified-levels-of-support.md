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

### Example Usage

Consider two ranked ballots, A>B=C=D>E>F and A=B>C>D=E. Following the rules from the ranked ballots section, both ballots give candidates A, C, E, and F the same levels of support (1–4 respectively). The first ballot gives B less support and D more support than the second ballot does, since the first ballot maps B and D to 2 while the second ballot maps B to 1 and D to 3.

Unified levels of support allows for comparisons of how much support each candidate receives from each of those ballots, despite those ballots giving equal rankings to many candidates and despite the second ballot lacking an explicit ranking for candidate F.

### Applications

Unified levels of support is intended to function as an interface for any voting criteria that depend on comparing levels of support across candidates and/or across ballots. Since it is new, no criteria that make use of it exist yet.

### Limitations

One example of a voting method that unified levels of support can't completely handle is the version of score voting that uses average scores [unaffected by blanks](https://rangevoting.org/Blanks.html). In this case, the mapping scheme is incomplete because there is nowhere to map blanks to. For voting methods that count blanks as 0s instead, blanks and 0s can simply be treated as the same rating, enabling the framework to provide complete mappings for those methods.