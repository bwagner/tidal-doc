(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var a=n(3),l=n(7),r=(n(0),n(216)),s={title:"Alteration",id:"alteration"},p={unversionedId:"patternlib/tour/alteration",id:"patternlib/tour/alteration",isDocsHomePage:!1,title:"Alteration",description:"This page will present you all the functions that can be used to manipulate and alter your patterns. Each function will be presented following the same model:",source:"@site/docs/patternlib/tour/alteration.md",slug:"/patternlib/tour/alteration",permalink:"/docs/patternlib/tour/alteration",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/patternlib/tour/alteration.md",version:"current",lastUpdatedBy:"callnasty",lastUpdatedAt:1651580836,sidebar:"docs",previous:{title:"Accumulation",permalink:"/docs/patternlib/tour/accumulation"},next:{title:"Performance",permalink:"/docs/patternlib/tour/performance"}},i=[{value:"Scaling",id:"scaling",children:[{value:"range",id:"range",children:[]},{value:"rangex",id:"rangex",children:[]},{value:"quantise",id:"quantise",children:[]}]},{value:"Repetitions",id:"repetitions",children:[{value:"ply",id:"ply",children:[]},{value:"stutter",id:"stutter",children:[]},{value:"stripe",id:"stripe",children:[]},{value:"slowstripe",id:"slowstripe",children:[]},{value:"palindrome",id:"palindrome",children:[]}]},{value:"Truncation",id:"truncation",children:[{value:"trunc",id:"trunc",children:[]},{value:"linger",id:"linger",children:[]},{value:"chunk",id:"chunk",children:[]},{value:"chunk&#39;",id:"chunk-1",children:[]},{value:"loopfirst",id:"loopfirst",children:[]}]},{value:"Shuffling and scrambling",id:"shuffling-and-scrambling",children:[{value:"shuffle",id:"shuffle",children:[]},{value:"scramble",id:"scramble",children:[]},{value:"rot",id:"rot",children:[]}]},{value:"Step sequencers",id:"step-sequencers",children:[{value:"step",id:"step",children:[]},{value:"step&#39;",id:"step-1",children:[]},{value:"lindenmeyer",id:"lindenmeyer",children:[]}]},{value:"Higher-order",id:"higher-order",children:[{value:"spread",id:"spread",children:[]},{value:"spreadf",id:"spreadf",children:[]},{value:"fastspread",id:"fastspread",children:[]},{value:"spreadChoose",id:"spreadchoose",children:[]}]}],c={toc:i};function b(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This page will present you all the functions that can be used to manipulate and alter your patterns. Each function will be presented following the same model:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Type signature"),": how the function is declared on the ",Object(r.b)("strong",{parentName:"li"},"Haskell")," side."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Description"),": verbal description of the function."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Examples"),": a small list of examples that you can copy/paste in your editor.")),Object(r.b)("h2",{id:"scaling"},"Scaling"),Object(r.b)("h3",{id:"range"},"range"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: range :: Num a => Pattern a -> Pattern a -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"range")," will take a pattern which goes from ",Object(r.b)("inlineCode",{parentName:"p"},"0")," to ",Object(r.b)("inlineCode",{parentName:"p"},"1")," (such as ",Object(r.b)("inlineCode",{parentName:"p"},"sine"),"), and scale it to a different range - between the first and second arguments. In the below example, ",Object(r.b)("inlineCode",{parentName:"p"},"range 1 1.5")," shifts the range of sine from ",Object(r.b)("inlineCode",{parentName:"p"},"0 - 1")," to ",Object(r.b)("inlineCode",{parentName:"p"},"1 - 1.5"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ jux (iter 4) $ sound "arpy arpy:2*2"\n  |+ speed (slow 4 $ range 1 1.5 sine)\n')),Object(r.b)("p",null,"The above is equivalent to the following:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ jux (iter 4) $ sound "arpy arpy:2*2"\n  |+ speed (slow 4 $ sine * 0.5 + 1)\n')),Object(r.b)("h3",{id:"rangex"},"rangex"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: rangex :: (Floating b, Functor f) => b -> b -> f b -> f b\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"rangex")," is an exponential version of ",Object(r.b)("inlineCode",{parentName:"p"},"range")," described above, good to use for frequencies. For example, ",Object(r.b)("inlineCode",{parentName:"p"},'range 20 2000 "0.5"')," will give ",Object(r.b)("inlineCode",{parentName:"p"},"1010")," - halfway between ",Object(r.b)("inlineCode",{parentName:"p"},"20")," and ",Object(r.b)("inlineCode",{parentName:"p"},"2000"),". But ",Object(r.b)("inlineCode",{parentName:"p"},"rangex 20 2000 0.5")," will give ",Object(r.b)("inlineCode",{parentName:"p"},"200")," - halfway between on a logarithmic scale. This usually sounds better if you\u2019re using the numbers as pitch frequencies. Since rangex uses logarithms, don\u2019t try to scale things to zero or less! "),Object(r.b)("h3",{id:"quantise"},"quantise"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: quantise :: (Functor f, RealFrac b) => b -> f b -> f b\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"quantise")," is useful for rounding a collection of numbers to some particular base fraction. For example,"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"quantise 5 [0, 1.3 ,2.6,3.2,4.7,5]\n")),Object(r.b)("p",null,"It will round all the values to the nearest ",Object(r.b)("inlineCode",{parentName:"p"},"(1/5)=0.2")," and thus will output the list ",Object(r.b)("inlineCode",{parentName:"p"},"[0.0,1.2,2.6,3.2,4.8,5.0]"),". You can use this function to force a continuous pattern like sine into specific values. In the following example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "superchip*8" # n (quantise 1 $ range (-10) (10) $ slow 8 $ cosine) \n                     # release (quantise 5 $ slow 8 $ sine + 0.1)\n')),Object(r.b)("p",null,"all the releases selected be rounded to the nearest ",Object(r.b)("inlineCode",{parentName:"p"},"0.1")," and the notes selected to the nearest ",Object(r.b)("inlineCode",{parentName:"p"},"1"),"."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"quantise")," with fractional inputs does the consistent thing: ",Object(r.b)("inlineCode",{parentName:"p"},"quantise 0.5")," rounds values to the nearest ",Object(r.b)("inlineCode",{parentName:"p"},"2"),", ",Object(r.b)("inlineCode",{parentName:"p"},"quantise 0.25")," rounds the nearest ",Object(r.b)("inlineCode",{parentName:"p"},"4"),", etc... "),Object(r.b)("h2",{id:"repetitions"},"Repetitions"),Object(r.b)("h3",{id:"ply"},"ply"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: ply :: Pattern Int -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"ply")," function repeats each event the given number of times. For example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'ply 3 $ s "bd ~ sn cp"\n')),Object(r.b)("p",null,"... is equivalent to ..."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'s "[bd bd bd] ~ [sn sn sn] [cp cp cp]"\n')),Object(r.b)("p",null,"The first parameter may be given as a pattern, so that:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'ply "2 3" $ s "bd ~ sn cp"\n')),Object(r.b)("p",null,"... is equivalent to ..."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'s "[bd bd] ~ [sn sn sn] [cp cp cp]"\n')),Object(r.b)("p",null,"Here is an example of it being used conditionally:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ every 3 (ply 4) $ s "bd ~ sn cp"\n')),Object(r.b)("h3",{id:"stutter"},"stutter"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: stutter :: Integral i => i -> Time -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"stutter")," is like ",Object(r.b)("inlineCode",{parentName:"p"},"stut")," that doesn't reduce the volume or ",Object(r.b)("inlineCode",{parentName:"p"},"ply")," if you controlled the timing. ",Object(r.b)("inlineCode",{parentName:"p"},"stutter n t")," repeats each event in the pattern ",Object(r.b)("inlineCode",{parentName:"p"},"n")," times, separated by ",Object(r.b)("inlineCode",{parentName:"p"},"t")," time (in fractions of a cycle)."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ stutter 4 (1/16) $ s "bd cp"\n')),Object(r.b)("p",null,"should be functionally equivalent to"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ stut 4 1 (1/16) $ s "bd cp"\n')),Object(r.b)("p",null,"Specific conveniences functions that use stutter are:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"echo   = stutter (2 :: Int)\ntriple = stutter (3 :: Int)\nquad   = stutter (4 :: Int)\ndouble = echo\n")),Object(r.b)("h3",{id:"stripe"},"stripe"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: stripe :: Pattern Int -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"stripe")," function repeats a pattern at random speeds. The first parameter gives the number of cycles to operate over, for example ",Object(r.b)("inlineCode",{parentName:"p"},"stripe 2")," will repeat a pattern twice, over two cycles. Each cycle will be played at a random speed, but in such a way that the total duration will be the same."),Object(r.b)("p",null,"For example in the following example, the start of every third repetition of the ",Object(r.b)("inlineCode",{parentName:"p"},"d1")," pattern will match with the clap on the d2 pattern."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ stripe 3 $ sound "bd sd ~ [mt ht]"\n\n\nd2 $ sound "cp"\n')),Object(r.b)("h3",{id:"slowstripe"},"slowstripe"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: slowstripe :: Pattern Int -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"slowstripe")," function is the same as ",Object(r.b)("inlineCode",{parentName:"p"},"stripe")," but the result is also slowed down by ",Object(r.b)("inlineCode",{parentName:"p"},"n")," time (where ",Object(r.b)("inlineCode",{parentName:"p"},"n")," is the first parameter of the function. This means that the mean average duration of the stripes is exactly one cycle, and every nth stripe starts on a cycle boundary (in indian classical terms, the sam). Usage:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slowstripe 3 $ sound "bd sd ~ [mt ht]"\n\nd2 $ sound "cp"\n')),Object(r.b)("h3",{id:"palindrome"},"palindrome"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: palindrome :: Pattern a -> Pattern a\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"palindrome")," function applies ",Object(r.b)("inlineCode",{parentName:"p"},"rev")," to a pattern every other cycle, so that the pattern alternates between forwards and backwards. For example this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ palindrome $ sound "arpy:0 arpy:1 arpy:2 arpy:3"\n')),Object(r.b)("p",null,"... is the same as this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 2 $ sound "arpy:0 arpy:1 arpy:2 arpy:3 arpy:3 arpy:2 arpy:1 arpy:0"\n')),Object(r.b)("p",null,"... and indeed this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ every 2 rev $ sound "arpy:0 arpy:1 arpy:2 arpy:3"\n')),Object(r.b)("h2",{id:"truncation"},"Truncation"),Object(r.b)("h3",{id:"trunc"},"trunc"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: trunc :: Pattern Time -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"trunc")," truncates a pattern so that only a fraction of the pattern is played. The following example plays only the first three quarters of the pattern:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ trunc 0.75 $ sound "bd sn*2 cp hh*4 arpy bd*2 cp bd*2"\n')),Object(r.b)("p",null,"You can also pattern the first parameter, for example to cycle through three values, one per cycle:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ trunc "<0.75 0.25 1>" $ sound "bd sn:2 [mt rs] hc"\n')),Object(r.b)("h3",{id:"linger"},"linger"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: linger :: Pattern Time -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"linger")," is similar to ",Object(r.b)("inlineCode",{parentName:"p"},"trunc"),", in that it truncates a pattern so that only the first fraction of the pattern is played. However unlike trunc, ",Object(r.b)("inlineCode",{parentName:"p"},"linger")," repeats that part to fill the remainder of the cycle."),Object(r.b)("p",null,"For example this repeats the first quarter, so you only hear a single repeating note:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ linger 0.25 $ n "0 2 [3 4] 2" # sound "arpy"\n')),Object(r.b)("p",null,"or slightly more interesting, applied only every fourth cycle:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ every 4 (linger 0.25) $ n "0 2 [3 4] 2" # sound "arpy"\n')),Object(r.b)("p",null,"or to a chopped-up sample:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ every 2 (linger 0.25) $ loopAt 2 $ chop 8 $ sound "breaks125"\n')),Object(r.b)("p",null,"You can also pattern the first parameter, for example to cycle through three values, one per cycle:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ linger "<0.75 0.25 1>" $ sound "bd sn:2 [mt rs] hc"\n\nd1 $ linger "<0.25 0.5 1>" $ loopAt 2 $ chop 8 $ sound "breaks125"\n')),Object(r.b)("h3",{id:"chunk"},"chunk"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: chunk :: Int -> (Pattern b -> Pattern b) -> Pattern b -> Pattern b\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"chunk")," divides a pattern into a given number of parts, then cycles through those parts in turn, applying the given function to each part in turn (one part per cycle). Example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ chunk 4 (# speed 2) $ sound "bd hh sn cp"\n')),Object(r.b)("p",null,"The below highlights in bold which part of the above pattern has the (# speed 2) function applied to it over four cycles:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-plaintext"},"BD hh sn cp\nbd HH sn cp\nbd hh SN cp\nbd hh sn CP\n")),Object(r.b)("p",null,"Another example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ chunk 4 (hurry 2) $ sound "bd sn:2 [~ bd] sn:2"\n')),Object(r.b)("h3",{id:"chunk-1"},"chunk'"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"chunk'")," does the same as chunk but cycles through the parts in the reverse direction. "),Object(r.b)("h3",{id:"loopfirst"},"loopfirst"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"loopFirst")," is a function that takes a pattern and loops only the first cycle of the pattern. For example, in the following code will only play the bass drum sample."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ loopFirst $ s "<<bd*4 ht*8> cp*4>"\n')),Object(r.b)("p",null,"This function combines with sometimes to insert events from the first cycle randomly into subsequent cycles of the pattern:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sometimes loopFirst $ s "<<bd*4 ht*8> cp*4>"\n')),Object(r.b)("h2",{id:"shuffling-and-scrambling"},"Shuffling and scrambling"),Object(r.b)("h3",{id:"shuffle"},"shuffle"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: shuffle :: Int -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"shuffle"),' takes a number and a pattern as input, divides the pattern into the given number of parts, and returns a new pattern as a random permutation of the parts, picking one of each per cycle. This could also be called "sampling without replacement". For example:'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound $ shuffle 3 "bd sn hh"\n')),Object(r.b)("p",null,"... will sometimes play ",Object(r.b)("inlineCode",{parentName:"p"},'"sn bd hh"')," or ",Object(r.b)("inlineCode",{parentName:"p"},'"hh sn bd"'),", but will never play ",Object(r.b)("inlineCode",{parentName:"p"},'"bd sn bd"')," or ",Object(r.b)("inlineCode",{parentName:"p"},'"hh hh hh"'),", because that isn't a permutation of the three parts. "),Object(r.b)("h3",{id:"scramble"},"scramble"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: scramble :: Int -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"scramble"),' takes a number and a pattern as input, divides the pattern into the given number of parts, and returns a new pattern by randomly selecting from the parts. This could also be called "sampling with replacement". For example:'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound $ scramble 3 "bd sn hh"\n')),Object(r.b)("p",null,"... will sometimes play ",Object(r.b)("inlineCode",{parentName:"p"},'"sn bd hh"')," or ",Object(r.b)("inlineCode",{parentName:"p"},'"hh sn bd"'),", but can also play ",Object(r.b)("inlineCode",{parentName:"p"},'"bd sn bd"')," or ",Object(r.b)("inlineCode",{parentName:"p"},'"hh hh hh"'),", because it can make any random combination of the three parts."),Object(r.b)("h3",{id:"rot"},"rot"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: rot :: Ord a => Pattern Int -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"rot")," function 'rotates' the values in a pattern, while preserving its structure. For example in the following, each value will shift to its neighbour's position one step to the left, so that ",Object(r.b)("inlineCode",{parentName:"p"},"b")," takes the place of ",Object(r.b)("inlineCode",{parentName:"p"},"a"),", ",Object(r.b)("inlineCode",{parentName:"p"},"a")," of ",Object(r.b)("inlineCode",{parentName:"p"},"c"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"c")," of ",Object(r.b)("inlineCode",{parentName:"p"},"b"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'rot 1 "a ~ b c"\n')),Object(r.b)("p",null,"The result is equivalent of:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'"b ~ c a"\n')),Object(r.b)("p",null,"The first parameter is the number of steps, and may be given as a pattern, for example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ rot "<0 0 1 3>" $ n "0 ~ 1 2 0 2 ~ 3*2" # sound "drum"\n')),Object(r.b)("p",null,"The above will not rotate the pattern for the first two cycles, will rotate it by one the third cycle, and by three the fourth cycle. "),Object(r.b)("h2",{id:"step-sequencers"},"Step sequencers"),Object(r.b)("h3",{id:"step"},"step"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: step :: String -> String -> Pattern String\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"step")," acts as a kind of simple step-sequencer using strings. For example, ",Object(r.b)("inlineCode",{parentName:"p"},'step "sn" "x x 12 "')," is equivalent to the pattern of strings given by ",Object(r.b)("inlineCode",{parentName:"p"},'"sn ~ sn ~ sn:1 sn:2 ~"'),". ",Object(r.b)("inlineCode",{parentName:"p"},"step")," substitutes the given string for each x, for each number it substitutes the string followed by a colon and the number, and for everything else it puts in a rest."),Object(r.b)("p",null,"In other words, ",Object(r.b)("inlineCode",{parentName:"p"},"step")," generates a pattern of strings in exactly the syntax you'd want for selecting samples and that can be fed directly into the s function."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s (step "sn" "x x 12 ")\n')),Object(r.b)("h3",{id:"step-1"},"step'"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: step' :: [String] -> String -> Pattern String\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"step' "),"is like ",Object(r.b)("inlineCode",{parentName:"p"},"step")," but more general, using the numbers in the step-sequencing string as indexes into the list of strings you give it."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s (step\' ["superpiano","supermandolin"] "0 1 000 1") # sustain 4 # n 0\n')),Object(r.b)("p",null,"is equivalent to"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "superpiano ~ supermandolin ~ superpiano!3 ~ supermandolin" # sustain 4 # n 0\n')),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"There is also ",Object(r.b)("inlineCode",{parentName:"p"},"steps"),". You can take a look at this function in the ",Object(r.b)("inlineCode",{parentName:"p"},"Accumulation")," section"))),Object(r.b)("h3",{id:"lindenmeyer"},"lindenmeyer"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: Num b => Int -> String -> String -> [b]\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"lindenmayer")," takes an integer ",Object(r.b)("inlineCode",{parentName:"p"},"b"),", a Lindenmayer system rule set and an initiating string as input in order to generate an L-system tree string of ",Object(r.b)("inlineCode",{parentName:"p"},"b")," iterations. It can be used in conjunction with a step function to convert the generated string into a playable pattern. For example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 16 $ sound $ step\' ["feel:0", "sn:1", "bd:0"]\n(take 512 $ lindenmayer 5 "0:1~~~,1:0~~~2~~~~~0~~~2~,2:2~1~,~:~~1~"\n"0")\n')),Object(r.b)("p",null,'... generates an L-system with initiating string "0" and maps it onto a list of samples.'),Object(r.b)("p",null,"Complex L-system trees with many rules and iterations can sometimes result in unwieldy strings. Using ",Object(r.b)("inlineCode",{parentName:"p"},"take n")," to only use the first ",Object(r.b)("inlineCode",{parentName:"p"},"n")," elements of the string, along with a ",Object(r.b)("inlineCode",{parentName:"p"},"slow")," function, can make the generated values more manageable. "),Object(r.b)("h2",{id:"higher-order"},"Higher-order"),Object(r.b)("h3",{id:"spread"},"spread"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: spread :: (a -> t -> Pattern b) -> [a] -> t -> Pattern b\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"spread")," function allows you to take a pattern transformation which takes a parameter, such as ",Object(r.b)("inlineCode",{parentName:"p"},"slow"),", and provide several parameters which are switched between. In other words it 'spreads' a function across several values. Taking a simple high hat loop as an example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "ho ho:2 ho:3 hc"\n')),Object(r.b)("p",null,"We can speed it up by different amounts, such as by 2x:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ fast 2 $ sound "ho ho:2 ho:3 hc"\n')),Object(r.b)("p",null,"Or by 3x:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ fast 3 $ sound "ho ho:2 ho:3 hc"\n')),Object(r.b)("p",null,"But if we use ",Object(r.b)("inlineCode",{parentName:"p"},"spread"),", we can make a pattern which alternates between the two speeds:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ spread fast[2,3] $ sound "ho ho:2 ho:3 hc"\n')),Object(r.b)("p",null,"Note that many functions now allow pattern input. This is equivalent to the above:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ fast "<2 3>" $ sound "ho ho:2 ho:3 hc"\n')),Object(r.b)("p",null,"Note that if you pass (",Object(r.b)("inlineCode",{parentName:"p"},"$"),") as the function to spread values over, you can put different functions as the list of values. For example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ spread ($) [density 2, rev, slow 2, striate 3, (# speed "0.8")] $ sound "[bd*2 [~ bd]] [sn future]*2 cp jvbass*4"\n')),Object(r.b)("p",null,"Above, the pattern will have these transforms applied to it, one at a time, per cycle:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-plaintext"},'cycle 1: density 2 - pattern will increase in speed\ncycle 2: rev - pattern will be reversed\ncycle 3: slow 2 - pattern will decrease in speed\ncycle 4: striate 3 - pattern will be granualized\ncycle 5: (# speed "0.8") - pattern samples will be played back more slowly\n')),Object(r.b)("p",null,"After ",Object(r.b)("inlineCode",{parentName:"p"},'(# speed "0.8")'),", the transforms will repeat and start at ",Object(r.b)("inlineCode",{parentName:"p"},"density 2")," again."),Object(r.b)("h3",{id:"spreadf"},"spreadf"),Object(r.b)("p",null,"A convenient shorthand for spread (",Object(r.b)("inlineCode",{parentName:"p"},"$"),")."),Object(r.b)("h3",{id:"fastspread"},"fastspread"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"fastspread")," works the same as ",Object(r.b)("inlineCode",{parentName:"p"},"spread"),", but the result is squashed into a single cycle. If you gave four values to ",Object(r.b)("inlineCode",{parentName:"p"},"spread"),", then the result would seem to speed up by a factor of four. Compare these two:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ spread ($) [gap 4, striate 4] $ sound "ho ho:2 ho:3 hc"\nd1 $ fastspread ($) [gap 4, striate 4] $ sound "ho ho:2 ho:3 hc"\n')),Object(r.b)("h3",{id:"spreadchoose"},"spreadChoose"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"spreadChoose")," (alias ",Object(r.b)("inlineCode",{parentName:"p"},"spreadr"),") works the same as spread, but the values are selected at random, one cycle at a time. For example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ spreadChoose ($) [gap 4, striate 4] $ sound "ho ho:2 ho:3 hc" \n')))}b.isMDXComponent=!0},216:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return h}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=l.a.createContext({}),b=function(e){var t=l.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},o=function(e){var t=b(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},u=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),o=b(n),u=a,h=o["".concat(s,".").concat(u)]||o[u]||d[u]||r;return n?l.a.createElement(h,p(p({ref:t},c),{},{components:n})):l.a.createElement(h,p({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var c=2;c<r;c++)s[c]=n[c];return l.a.createElement.apply(null,s)}return l.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);