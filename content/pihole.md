---
title: 
description: 
aliases: 
tags: 
draft: false
date:
---
# filtering the pihole tail output
I want to exclude the extra information displayed in grey.
example:
![[Pasted image 20240603175427.png]]
pihole -t \[filter]
include only query and blocked (white and red)
```bash
pihole -t '\(query\[A*\]\|blocked\)'
```
regex explanation
`(query[A*]|blocked)\
match `query[A*]` or `blocked`
A* matches A and AAAA (and any other amount of A's which wont ever appear)

new output:
![[Pasted image 20240603175429.png]]