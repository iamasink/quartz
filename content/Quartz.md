---
draft: false
aliases: 
tags: 
description: what runs (builds? idk) the place
---
[quartz](https://quartz.jzhao.xyz/)  is kinda cool. i probably wouldn't have used it if i didn't already use obsidian, but I don't even use obsidian that much!! but it is a nice editor and markdown is cool (except it's weird line breaking stuff but that can be fixed here :3)
and like I would be way too lazy to do anything of the sorts otherwise. html isn't hard, but its more friction than i want for this.
i'm not sure if i'm a fan of folders, there are tags and i don't want to have to classify stuff twice, because knowing me i won't. but also having smaller pages in a folder might be nice? i'm indecisive and it sucks!! i'll figure it out eventually i guess.

for some reason, i'm hesitant to call this a "blog", that seems too professional and not me, but i guess that's what it is. twitter is just "micro-blogging", after all.

this took me like 4 attempts to get working, but for some reason i kept deleting my progress every time, it was more work than necessary. 
eventually i want to move this from q.iamas.ink to something like iamas.ink/blog/, but this part is hosted on github pages because i couldn't figure it out otherwise. for now, theres some redirects ([[Caddy#Redirect a path to a subdomain with path]]) this way, and if i ever do get around to changing it, it should redirect the other way.

i recently also came across [Quarto](https://quarto.org), which i might prefer to quartz.
theres also [Lume](https://lume.land/), which I really like the look of
the awesome thing is, with markdown, i can switch quite easily and wont have to actually modify much (i could even use multiple at once, i guess.)
sigh, so much i want to do, so little ~~time~~ energy. not time, i have probably too much (and would anyone like to trade some for money, i guess??? employ me??)

# customisation
i would like a separate page for the explorer and recent notes sections to rest, but i don't see any way to do that easily.
the `tagPage` and `folderPage` files are probably similar to what i want, but i don't fully understand whats going on. 
I guess i'd need to edit `contentPage` and add something for this?
something in the headmatter is probably the best way to go about it, i'll try follow how drafts work.
actually, this seems really complicated!!
there is some pages at `quartz\components\pages`, including `404.tsx` which seems promising, bad pages are redirected to that 404 page so i should be able to figure out how that works.
i guess i'll just edit `pages\Content.tsx`?

everything seems to get output in `emitters\contentPage.tsx` as:
```js
  const opts: FullPageLayout = {
    ...sharedPageComponents,
    ...defaultContentPageLayout,
    pageBody: Content(),
    ...userOpts,
  }
```
where Content() is the export from `pages\Content.tsx`.. 
i feel like this should be fairly easy to do, but i don't really know what i'm doing lol

it's 5am (though i've only been awake for around 10 hours) so this is where i give up (and this particular idea will probably rot away). 
