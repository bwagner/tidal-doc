(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return c}));var a=n(3),l=n(7),r=(n(0),n(215)),s={title:"Time",id:"time"},i={unversionedId:"reference/time",id:"reference/time",isDocsHomePage:!1,title:"Time",description:"This page will present you all the functions that can be used to play with time",source:"@site/docs/reference/time.md",slug:"/reference/time",permalink:"/docs/reference/time",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/time.md",version:"current",lastUpdatedBy:"Bernard Gray",lastUpdatedAt:1654633784,sidebar:"reference",previous:{title:"Conditions",permalink:"/docs/reference/conditions"},next:{title:"Harmony & Melody",permalink:"/docs/reference/harmony_melody"}},o=[{value:"Speeding up, slowing down",id:"speeding-up-slowing-down",children:[{value:"fast",id:"fast",children:[]},{value:"fastGap",id:"fastgap",children:[]},{value:"slow",id:"slow",children:[]},{value:"sparsity",id:"sparsity",children:[]},{value:"hurry",id:"hurry",children:[]},{value:"slowSqueeze",id:"slowsqueeze",children:[]},{value:"fastSqueeze",id:"fastsqueeze",children:[]}]},{value:"Zooming in, Zooming Out",id:"zooming-in-zooming-out",children:[{value:"compress",id:"compress",children:[]},{value:"zoom",id:"zoom",children:[]},{value:"within",id:"within",children:[]}]},{value:"Shifting time",id:"shifting-time",children:[{value:"off",id:"off",children:[]},{value:"rotL",id:"rotl",children:[]},{value:"rotR",id:"rotr",children:[]},{value:"spin",id:"spin",children:[]},{value:"weave",id:"weave",children:[]},{value:"weaveWith",id:"weavewith",children:[]}]},{value:"Reversing time",id:"reversing-time",children:[{value:"rev",id:"rev",children:[]},{value:"jux",id:"jux",children:[]},{value:"juxBy",id:"juxby",children:[]}]},{value:"Swing",id:"swing",children:[{value:"swingBy",id:"swingby",children:[]},{value:"swing",id:"swing-1",children:[]},{value:"ghost",id:"ghost",children:[]},{value:"ghost&#39;",id:"ghost-1",children:[]},{value:"ghost&#39;&#39;",id:"ghost-2",children:[]}]},{value:"Inside and outside",id:"inside-and-outside",children:[{value:"inside",id:"inside",children:[]},{value:"outside",id:"outside",children:[]}]},{value:"Delay functions",id:"delay-functions",children:[{value:"stut",id:"stut",children:[]},{value:"stutWith",id:"stutwith",children:[]}]}],b={toc:o};function c(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This page will present you all the functions that can be used to play with time: slowing it down, speeding it up, reversing time, offsetting in time, etc... Each function will be presented following the same model:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Type signature"),": how the function is declared on the ",Object(r.b)("strong",{parentName:"li"},"Haskell")," side."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Description"),": verbal description of the function."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Examples"),": a small list of examples that you can copy/paste in your editor.")),Object(r.b)("h2",{id:"speeding-up-slowing-down"},"Speeding up, slowing down"),Object(r.b)("h3",{id:"fast"},"fast"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: fast :: Pattern Time -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"fast")," speeds up a pattern. For example, the following will play the sound pattern ",Object(r.b)("inlineCode",{parentName:"p"},'"bd sn kurt"')," twice as fast (i.e. so it repeats twice per cycle), and the vowel pattern three times as fast:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound (fast 2 "bd sn kurt")\n   # fast 3 (vowel "a e o")\n')),Object(r.b)("p",null,"The first parameter can be patterned, for example to play the pattern at twice the speed for the first half of each cycle and then four times the speed for the second half:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ fast "2 4" $ sound "bd sn kurt cp"\n')),Object(r.b)("p",null,"You can also use this function by its older alias, ",Object(r.b)("inlineCode",{parentName:"p"},"density"),". "),Object(r.b)("h3",{id:"fastgap"},"fastGap"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: fastGap :: Pattern Time -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"fastGap")," speeds up a pattern like ",Object(r.b)("inlineCode",{parentName:"p"},"fast"),", but rather than it playing multiple times as fast would it instead leaves a gap in the remaining space of the cycle. For example, the following will play the sound pattern ",Object(r.b)("inlineCode",{parentName:"p"},'"bd sn"')," only once but compressed into the first half of the cycle, i.e. twice as fast."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound (fastGap 2 "bd sn")\n')),Object(r.b)("h3",{id:"slow"},"slow"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: slow :: Pattern Time -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"slow")," slows down a pattern. For example, the following will play the sound pattern ",Object(r.b)("inlineCode",{parentName:"p"},'"bd sn kurt"')," twice as slow (i.e. so it repeats once every two cycles), and the vowel pattern three times as slow:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound (slow 2 "bd sn kurt")\n   # slow 3 (vowel "a e o")\n')),Object(r.b)("h3",{id:"sparsity"},"sparsity"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"sparsity")," is a synonym of ",Object(r.b)("inlineCode",{parentName:"p"},"slow"),"."),Object(r.b)("h3",{id:"hurry"},"hurry"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: hurry :: Pattern Time -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"hurry")," is similiar to fast, in that it speeds up a pattern, but it also increases the speed control by the same factor, so if you're triggering samples, the sound gets higher in pitch. For example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ every 2 (hurry 2) $ sound "bd sn:2 ~ cp"\n')),Object(r.b)("h3",{id:"slowsqueeze"},"slowSqueeze"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: slowSqueeze :: Pattern Time -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"fastSqueeze")," slows down a pattern according to the given time pattern. It is the slow analogue to ",Object(r.b)("inlineCode",{parentName:"p"},"fastSqueeze"),". If the time pattern only has a single value in a cycle, ",Object(r.b)("inlineCode",{parentName:"p"},"slowSqueeze")," becomes equivalent to slow:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow "<2 4>" $ s "bd*8"\n')),Object(r.b)("p",null,"is the same as:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slowSqueeze "<2 4>" $ s "bd*8"\n')),Object(r.b)("p",null,"but when the time pattern has multiple values in it the behavior is a little different! Instead, a slowed version of the pattern will be made for each value in the time pattern and then they're all combined together in a cycle, according to the structure of the time pattern. For example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slowSqueeze "2 4 8 16" $ s "bd*8"\n')),Object(r.b)("p",null,"is equivalent to:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "bd*4 bd*2 bd bd/2"\n')),Object(r.b)("p",null,"and:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slowSqueeze "2 4 [8 16]" $ s "bd*8"\n')),Object(r.b)("p",null,"is equivalent to:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "bd*4 bd*2 [bd bd/2]"\n')),Object(r.b)("h3",{id:"fastsqueeze"},"fastSqueeze"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: fastSqueeze :: Pattern Time -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"fastSqueeze")," speeds up a pattern by a time pattern given as input, squeezing the resulting pattern inside one cycle and playing the original pattern at every repetition."),Object(r.b)("p",null,"To better understand how it works let's compare it with ",Object(r.b)("inlineCode",{parentName:"p"},"fast"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ fast "1 2" $ s "bd sn"\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'-- output\n(0>\xbd)|s: "bd"\n(\xbd>\xbe)|s: "bd"\n(\xbe>1)|s: "sn"\n')),Object(r.b)("p",null,"This will give bd played in the first half cycle and bd sn in the second half. On the other hand, using ",Object(r.b)("inlineCode",{parentName:"p"},"fastSqueeze"),";"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'fastSqueeze "1 2" $ s "bd sn"\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'--output\n(0>\xbc)|s: "bd"\n(\xbc>\xbd)|s: "sn"\n(\xbd>\u215d)|s: "bd"\n(\u215d>\xbe)|s: "sn"\n(\xbe>\u215e)|s: "bd"\n(\u215e>1)|s: "sn"\n')),Object(r.b)("p",null,"The original pattern will play in the first half and two repetitions of the original pattern will play in the second half. That is, every repetition contains the whole pattern."),Object(r.b)("p",null,"If the time pattern has a single value, it becomes equivalent to fast:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ fastSqueeze 2 $ s "bd sn"\n-- is equal to\nd1 $ fast 2 $ s "bd sn"\n-- and equivalent to\nd1 $ s "[bd sn]*2"\n')),Object(r.b)("h2",{id:"zooming-in-zooming-out"},"Zooming in, Zooming Out"),Object(r.b)("h3",{id:"compress"},"compress"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"compress")," takes a pattern and squeezes it within the specified time span (i.e. the 'arc'). The new resulting pattern is a sped up version of the original."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ compress (1/4, 3/4) $ s "[bd sn]!"\n')),Object(r.b)("p",null,"In the above example, the pattern will play in an arc spanning from 25% to 75% of the duration of a cycle. It is equivalent to:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "~ [bd sn]! ~"\n')),Object(r.b)("p",null,"Another example, where all events are different:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ compress (1/4, 3/4) $ n (run 4) # s "arpy"\n')),Object(r.b)("p",null,"It differs from ",Object(r.b)("inlineCode",{parentName:"p"},"zoom")," in that it preserves the original pattern but it speeds up its events so to match with the new time period. "),Object(r.b)("h3",{id:"zoom"},"zoom"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: zoom :: (Time, Time) -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,"Plays a portion of a pattern, specified by the beginning and end of a time span (known as an 'arc'). The new resulting pattern is played over the time period of the original pattern:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ zoom (0.25, 0.75) $ sound "bd*2 hh*3 [sn bd]*2 drum"\n')),Object(r.b)("p",null,"In the pattern above, zoom is used with an arc from 25% to 75%. It is equivalent to this pattern:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "hh*3 [sn bd]*2"\n')),Object(r.b)("p",null,"Here\u2019s an example of it being used with a conditional:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ every 4 (zoom (0.25, 0.75)) $ sound "bd*2 hh*3 [sn bd]*2 drum"\n')),Object(r.b)("h3",{id:"within"},"within"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: within :: Arc -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,"Use ",Object(r.b)("inlineCode",{parentName:"p"},"within")," to apply a function to only a part of a pattern. within takes two arguments: a start time and an end time, specified as floats between ",Object(r.b)("inlineCode",{parentName:"p"},"0")," and ",Object(r.b)("inlineCode",{parentName:"p"},"1"),", which are applied to the relevant pattern. Note that the second argument must be greater than the first for the function to have any effect."),Object(r.b)("p",null,"For example, to apply ",Object(r.b)("inlineCode",{parentName:"p"},"fast 2")," to only the first half of a pattern:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ within (0, 0.5) (fast 2) $ sound "bd*2 sn lt mt hh hh hh hh"\n')),Object(r.b)("p",null,"Or, to apply ",Object(r.b)("inlineCode",{parentName:"p"},'(# speed "0.5")')," to only the last quarter of a pattern:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ within (0.75, 1) (# speed "0.5") $ sound "bd*2 sn lt mt hh hh hh hh"\n')),Object(r.b)("h2",{id:"shifting-time"},"Shifting time"),Object(r.b)("h3",{id:"off"},"off"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: Pattern Time -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"off")," is similar to superimpose, in that it applies a function to a pattern, and layers up the results on top of the original pattern. The difference is that ",Object(r.b)("inlineCode",{parentName:"p"},"off")," takes an extra pattern being a time (in cycles) to shift the transformed version of the pattern by."),Object(r.b)("p",null,"The following plays a pattern on top of itself, but offset by an eighth of a cycle, with a distorting bitcrush effect applied:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ off 0.125 (# crush 2) $ sound "bd [~ sn:2] mt lt*2"\n')),Object(r.b)("p",null,"The following makes arpeggios by adding offset patterns that are shifted up the scale:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 2 $ \n  n (off 0.25 (+12) $ off 0.125 (+7) $ slow 2 "c(3,8) a(3,8,2) f(3,8) e(3,8,4)") \n  # sound "superpiano"\n')),Object(r.b)("h3",{id:"rotl"},"rotL"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: rotL :: Time -> Pattern a -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"rotL")," Shifts a pattern back in time by the given amount, expressed in cycles. This will skip to the fourth cycle when evaluated:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'do\n{\n  resetCycles;\n  d1 $ rotL 4 $ seqP [ \n    (0, 12, sound "bd bd*2"), \n    (4, 12, sound "hh*2 [sn cp] cp future*4"), \n    (8, 12, sound (samples "arpy*8" (run 16)))\n  ]\n}\n')),Object(r.b)("p",null,"Useful when building and testing out longer sequences."),Object(r.b)("h3",{id:"rotr"},"rotR"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"rotR")," is the opposite of ",Object(r.b)("inlineCode",{parentName:"p"},"rotL")," as it shifts the pattern forwards in time. "),Object(r.b)("h3",{id:"spin"},"spin"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: spin :: Pattern Int -> ControlPattern -> ControlPattern\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"spin")," will play the given number of copies of the given control pattern at once. For ",Object(r.b)("inlineCode",{parentName:"p"},"n")," copies, each successive copy will be offset in time by an additional ",Object(r.b)("inlineCode",{parentName:"p"},"1/n")," of a cycle, and also panned in space by an additional ",Object(r.b)("inlineCode",{parentName:"p"},"n1"),". This function works particularly well on multichannel systems."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 3 $ spin 4 $ sound "drum*3 tabla:4 [arpy:2 ~ arpy] [can:2 can:3]"\n')),Object(r.b)("h3",{id:"weave"},"weave"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: weave :: Time -> ControlPattern -> [ControlPattern] -> ControlPattern\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"weave")," applies one control pattern to a list of other control patterns, with a successive time offset. For example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ weave 16 (pan sine)\n  [sound "bd sn cp",\n   sound "casio casio:1",\n   sound "[jvbass*2 jvbass:2]/2",\n   sound "hc*4"\n  ]\n')),Object(r.b)("p",null,"In the above, the ",Object(r.b)("inlineCode",{parentName:"p"},"pan sine")," control pattern is slowed down by the given number of cycles, in particular ",Object(r.b)("inlineCode",{parentName:"p"},"16"),", and applied to all of the given sound patterns. What makes this interesting is that the ",Object(r.b)("inlineCode",{parentName:"p"},"pan")," control pattern is successively offset for each of the given sound patterns; because the ",Object(r.b)("inlineCode",{parentName:"p"},"pan")," is closed down by 16 cycles, and there are four patterns, they are 'spread out', i.e. with a gap of four cycles. For this reason, the four patterns seem to chase after each other around the stereo field. Try listening on headphones to hear this more clearly."),Object(r.b)("p",null,"You can even have it the other way round, and have the effect parameters chasing after each other around a sound parameter, like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ weave 16 (sound "arpy" >| n (run 8))\n  [vowel "a e i",\n   vowel "i [i o] o u",\n   vowel "[e o]/3 [i o u]/2",\n   speed "1 2 3"\n  ]\n')),Object(r.b)("h3",{id:"weavewith"},"weaveWith"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: weaveWith :: Time -> Pattern a -> [Pattern a -> Pattern a] -> Pattern a\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"weaveWith")," (formerly known as ",Object(r.b)("inlineCode",{parentName:"p"},"weave'"),") is similar to the above, but ",Object(r.b)("inlineCode",{parentName:"p"},"weaves")," with a list of functions, rather than a list of controls. For example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ weaveWith 3 (sound "bd [sn drum:2*2] bd*2 [sn drum:1]")\n  [fast 2, \n   (# speed "0.5"),\n   chop 16\n  ]\n')),Object(r.b)("h2",{id:"reversing-time"},"Reversing time"),Object(r.b)("h3",{id:"rev"},"rev"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: rev :: Pattern a -> Pattern a\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"rev")," returns a 'reversed' version of the given pattern."),Object(r.b)("p",null,"For example ",Object(r.b)("inlineCode",{parentName:"p"},'rev "1 [~ 2] ~ 3"')," is equivalent to rev ",Object(r.b)("inlineCode",{parentName:"p"},'"3 ~ [2 ~] 1"'),"."),Object(r.b)("p",null,"Note that ",Object(r.b)("inlineCode",{parentName:"p"},"rev")," reverses on a cycle-by-cycle basis. This means that ",Object(r.b)("inlineCode",{parentName:"p"},'rev (slow 2 "1 2 3 4")')," would actually result in ",Object(r.b)("inlineCode",{parentName:"p"},'(slow 2 "2 1 4 3")'),". This is because the ",Object(r.b)("inlineCode",{parentName:"p"},"slow 2 "),"makes the repeating pattern last two cycles, each of which is reversed independently."),Object(r.b)("p",null,"In practice ",Object(r.b)("inlineCode",{parentName:"p"},"rev")," is generally used with conditionals, for example with ",Object(r.b)("inlineCode",{parentName:"p"},"every"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ every 3 rev $ n "0 1 [~ 2] 3" # sound "arpy"\n')),Object(r.b)("p",null,"or ",Object(r.b)("inlineCode",{parentName:"p"},"jux"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ jux rev $ n (iter 4 "0 1 [~ 2] 3") # sound "arpy"\n')),Object(r.b)("h3",{id:"jux"},"jux"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: jux :: (ControlPattern -> ControlPattern) -> ControlPattern -> ControlPattern\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"jux")," function creates strange stereo effects, by applying a function to a pattern, but only in the right-hand channel. For example, the following reverses the pattern on the righthand side:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 32 $ jux (rev) $ striate\' 32 (1/16) $ sound "bev"\n')),Object(r.b)("p",null,"When passing functions to functions like ",Object(r.b)("inlineCode",{parentName:"p"},"jux")," and ",Object(r.b)("inlineCode",{parentName:"p"},"every"),", it\u2019s possible to chain multiple transforms together with ., for example this both reverses and halves the playback speed of the pattern in the righthand channel:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 32 $ jux ((# speed "0.5") . rev) $ striate\' 32 (1/16) $ sound "bev"\n')),Object(r.b)("h3",{id:"juxby"},"juxBy"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: juxBy :: Pattern Double -> (ControlPattern -> ControlPattern) -> ControlPattern -> ControlPattern\n")),Object(r.b)("p",null,"With ",Object(r.b)("inlineCode",{parentName:"p"},"jux"),", the original and effected versions of the pattern are panned hard left and right (i.e., panned at 0 and 1). This can be a bit much, especially when listening on headphones. The variant ",Object(r.b)("inlineCode",{parentName:"p"},"juxBy")," has an additional parameter, which brings the channel closer to the centre. For example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ juxBy 0.5 (fast 2) $ sound "bd sn:1"\n')),Object(r.b)("p",null,"In the above, the two versions of the pattern would be panned at ",Object(r.b)("inlineCode",{parentName:"p"},"0.25")," and ",Object(r.b)("inlineCode",{parentName:"p"},"0.75"),", rather than ",Object(r.b)("inlineCode",{parentName:"p"},"0")," and ",Object(r.b)("inlineCode",{parentName:"p"},"1"),". "),Object(r.b)("h2",{id:"swing"},"Swing"),Object(r.b)("h3",{id:"swingby"},"swingBy"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: swingBy :: Pattern Time -> Pattern Time -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,"The function ",Object(r.b)("inlineCode",{parentName:"p"},"swingBy x n")," breaks each cycle into ",Object(r.b)("inlineCode",{parentName:"p"},"n")," slices, and then delays events in the second half of each slice by the amount ",Object(r.b)("inlineCode",{parentName:"p"},"x"),", which is relative to the size of the (half) slice. So if ",Object(r.b)("inlineCode",{parentName:"p"},"x")," is ",Object(r.b)("inlineCode",{parentName:"p"},"0")," it does nothing, ",Object(r.b)("inlineCode",{parentName:"p"},"0.5")," delays for half the note duration, and ",Object(r.b)("inlineCode",{parentName:"p"},"1")," will wrap around to doing nothing again. The end result is a shuffle or swing-like rhythm. For example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ swingBy (1/3) 4 $ sound "hh*8"\n')),Object(r.b)("p",null,"will delay every other ",Object(r.b)("inlineCode",{parentName:"p"},'"hh" 1/3')," of the way to the next ",Object(r.b)("inlineCode",{parentName:"p"},'"hh"'),"."),Object(r.b)("h3",{id:"swing-1"},"swing"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: swing :: Pattern Time -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"swing")," is an alias for ",Object(r.b)("inlineCode",{parentName:"p"},"swingBy (1/3)"),"."),Object(r.b)("h3",{id:"ghost"},"ghost"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: ghost :: Pattern ControlMap -> Pattern ControlMap\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"ghost")," adds quieter, pitch-shifted, copies of an event after the event, emulating ghost notes that are common in drumming patterns."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ stack [ ghost $ sound "~ sn", sound "bd*2 [~ bd]" ]\n')),Object(r.b)("p",null,"The example above creates a kick snare pattern with ghost notes applied to the snare hit. "),Object(r.b)("h3",{id:"ghost-1"},"ghost'"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"ghost'")," is currently undocumented."),Object(r.b)("h3",{id:"ghost-2"},"ghost''"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"ghost''")," is currently undocumented."),Object(r.b)("h2",{id:"inside-and-outside"},"Inside and outside"),Object(r.b)("h3",{id:"inside"},"inside"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: inside :: Pattern Time -> (Pattern a -> Pattern b) -> Pattern a -> Pattern b\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"inside")," carries out an operation 'inside' a cycle. For example, ",Object(r.b)("inlineCode",{parentName:"p"},'while rev "0 1 2 3 4 5 6 7"')," is the same as ",Object(r.b)("inlineCode",{parentName:"p"},'"7 6 5 4 3 2 1 0"'),", ",Object(r.b)("inlineCode",{parentName:"p"},'inside 2 rev "0 1 2 3 4 5 6 7"')," gives ",Object(r.b)("inlineCode",{parentName:"p"},'"3 2 1 0 7 6 5 4"'),"."),Object(r.b)("p",null,"What this function is really doing is 'slowing down' the pattern by a given factor, applying the given function to it, and then 'speeding it up' by the same factor. In other words, this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'inside 2 rev "0 1 2 3 4 5 6 7"\n')),Object(r.b)("p",null,"Is doing this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'fast 2 $ rev $ slow 2 "0 1 2 3 4 5 6 7"\n')),Object(r.b)("p",null,".. so rather than whole cycles, each half of a cycle is reversed."),Object(r.b)("h3",{id:"outside"},"outside"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: outside :: Pattern Time -> (Pattern a -> Pattern b) -> Pattern a -> Pattern b\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"outside")," is the inverse of the ",Object(r.b)("inlineCode",{parentName:"p"},"inside")," function. ",Object(r.b)("inlineCode",{parentName:"p"},"outside")," applies its function outside the cycle. Say you have a pattern that takes 4 cycles to repeat and apply the ",Object(r.b)("inlineCode",{parentName:"p"},"rev")," function:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ rev $ cat [s "bd bd sn",s "sn sn bd", s"lt lt sd", s "sd sd bd"]\n')),Object(r.b)("p",null,"The above generates: "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ rev $ cat [s "sn bd bd",s "bd sn sn", s "sd lt lt", s "bd sd sd"]\n')),Object(r.b)("p",null,"However if you apply ",Object(r.b)("inlineCode",{parentName:"p"},"outside"),": "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ outside 4 (rev) $ cat [s "bd bd sn",s "sn sn bd", s"lt lt sd", s "sd sd bd"]\n')),Object(r.b)("p",null,"The result` is:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ rev $ cat [s "bd sd sd", s "sd lt lt", s "sn sn bd", s "bd bd sn"]\n')),Object(r.b)("p",null,"Notice the whole idea has been reversed. What this function is really doing is 'speeding up' the pattern by a given factor, applying the given function to it, and then 'slowing it down' by the same factor. In other words, this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 4 $ rev $ fast 4 $ cat [s "bd bd sn",s "sn sn bd", s"lt lt sd", s "sd sd bd"]\n')),Object(r.b)("p",null,"This compresses the idea into a single cycle before ",Object(r.b)("inlineCode",{parentName:"p"},"rev")," operates and then slows it back to the original speed. "),Object(r.b)("h2",{id:"delay-functions"},"Delay functions"),Object(r.b)("p",null,"See also: ",Object(r.b)("a",{parentName:"p",href:"https://tidalcycles.org/docs/reference/audio_effects#delay"},"Effects/Delay")),Object(r.b)("h3",{id:"stut"},"stut"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: stut :: Pattern Integer -> Pattern Double -> Pattern Rational -> ControlPattern -> ControlPattern\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"stut")," applies a type of delay to a pattern. It has three parameters, which could be called ",Object(r.b)("inlineCode",{parentName:"p"},"depth"),", ",Object(r.b)("inlineCode",{parentName:"p"},"feedback")," and ",Object(r.b)("inlineCode",{parentName:"p"},"time"),". Depth is an integer and the others floating point. This adds a bit of echo:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ stut 4 0.5 0.1 $ sound "bd sn"\n')),Object(r.b)("p",null,"The above results in ",Object(r.b)("inlineCode",{parentName:"p"},"4")," repeats (the original plus ",Object(r.b)("inlineCode",{parentName:"p"},"3")," echoes), each echo ",Object(r.b)("inlineCode",{parentName:"p"},"50%")," (that's the ",Object(r.b)("inlineCode",{parentName:"p"},"0.5"),") quieter than the last, separated by 1/10th (that's the ",Object(r.b)("inlineCode",{parentName:"p"},"0.1"),") of a cycle."),Object(r.b)("p",null,"It is possible to reverse the echo:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ stut 4 0.5 (-0.1) $ sound "bd sn"\n')),Object(r.b)("h3",{id:"stutwith"},"stutWith"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: stutWith :: Pattern Int -> Pattern Time -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"stutWith")," (formerly known as ",Object(r.b)("inlineCode",{parentName:"p"},"stut'"),") is similar to stut described above, but instead of just decreasing volume to produce echoes, ",Object(r.b)("inlineCode",{parentName:"p"},"stutWith")," applies a function each step and overlays the result delayed by the given time."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ stutWith 3 (1/3) (# vowel "{a e i o u}%2") $ sound "bd sn"\n')),Object(r.b)("p",null,"In this case there are two overlays delayed by 1/3 of a cycle, where each has the vowel filter applied."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ stutWith 4 (1/6) (|* speed "1.5") $ sound "arpy arpy:2"\n')),Object(r.b)("p",null,"In the above, three versions are put on top, with each step getting higher in pitch as ",Object(r.b)("inlineCode",{parentName:"p"},'|* speed "1.5"')," is successively applied. "))}c.isMDXComponent=!0},215:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var b=l.a.createContext({}),c=function(e){var t=l.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return l.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},u=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,h=p["".concat(s,".").concat(u)]||p[u]||d[u]||r;return n?l.a.createElement(h,i(i({ref:t},b),{},{components:n})):l.a.createElement(h,i({ref:t},b))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var b=2;b<r;b++)s[b]=n[b];return l.a.createElement.apply(null,s)}return l.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);