---
title: 
description: 
aliases: 
tags: 
draft: false
date: 2024-06-13
---
# Manually editing a VMAP file
.VMAP files is the uncompiled map which Hammer 2 can edit. These are "DMX file\[s] under binary encoding version 4" - [VMAP - Valve Developer Community](https://developer.valvesoftware.com/wiki/VMAP). 
The ASCII encoding version can be exported easily from Hammer by using "Save Copy As Text". This exports a Really Really long text file (4.7 Million lines, 95 Million characters).

For my use case, I just wanted to change all the models I accidently specified as `.mdl` to `.vmdl`, I didn't realise they were different, and it displayed fine in editor, but in the properties had a "N/A" icon, and didn't allow the game to load on compile. 
I did this just by opening it in vscode and find and replace-ing all .mdl to .vmdl
There was some additional reference information at the top of the file, I changed this too and it seemed to work fine.

This text file can then be converted back into a editable VMAP using [DMXconvert](https://developer.valvesoftware.com/wiki/Dmxconvert), it's included in `Counter Strike: Global Offensive/game/bin/win64`.
The command to run is 
```bash
dmxconvert -i <in file> -o <out file> -oe binary -of vmap
```


# minimap
just ignore "Create minimap" use [Radgen](https://developer.valvesoftware.com/wiki/RadGen) [Radgen minimap creation - CS2 Mapping Academy #11 (Counter Strike 2) - YouTube](https://www.youtube.com/watch?v=vDhUOtkXiOM)
radgen v1.0.0
![[RadGen_-_v1.0.0.zip]]

# console commands 
commands to quickly test ingame
```
sv_cheats 1; sv_warmup_to_freezetime_delay 0; mp_freezetime 0; bot_kick; mp_roundtime_defuse 60; mp_round_restart_delay 0; endround; sv_infinite_ammo 2
```

---
