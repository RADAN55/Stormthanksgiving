const BAND={id:"k1",label:"Grades K–1",elpa:"ELPA21 Kindergarten and Grade 1 bands",audience:"combined K–1 EL group or push-in small group (ELPA21 K and Grade 1 bands). Adults read directions aloud; students tap, say, and draw. Lanes: Emerging = listen and say with picture support; Progressing = read short sentences; Challenge = read and write a sentence.",
 ela:"RI.K.1 / RI.1.1 Ask and answer questions · RI.K.2 / RI.1.2 Main topic · RI.K.3 / RI.1.3 Connect two pieces of information · W.K.2 / W.1.2 Informative writing · SL.K.1 / SL.1.1 Conversations · L.K.6 / L.1.6 Use new words",
 need:2, needAll:4, minWords:{emerging:6,progressing:12,challenge:20}, targets:"Emerging: 1 sentence with a frame · Progressing: 2 sentences · Challenge: 3 sentences", readLen:"2–3 sentences · 3–4 sentences · 4–5 sentences", countriesPlan:"United States + Canada (whole group), then 2 more"};
const VOCAB=[
 {en:"turkey",es:"pavo",pos:"noun",def:"a big bird. People eat it on Thanksgiving.",ex:"We eat turkey.",icon:"🦃"},
 {en:"family",es:"familia",pos:"noun",def:"the people you live with and love",ex:"My family eats together.",icon:"👨‍👩‍👧"},
 {en:"food",es:"comida",pos:"noun",def:"things we eat",ex:"I like food.",icon:"🍲"},
 {en:"thank you",es:"gracias",pos:"phrase",def:"words we say when someone is kind",ex:"Thank you, Mom!",icon:"🙏"},
 {en:"share",es:"compartir",pos:"verb",def:"to give some to a friend",ex:"I share my pie.",icon:"🤝"},
 {en:"happy",es:"feliz",pos:"adjective",def:"feeling good and smiling",ex:"I am happy.",icon:"😊"},
 {en:"eat",es:"comer",pos:"verb",def:"to put food in your mouth",ex:"We eat dinner.",icon:"🍽️"},
 {en:"together",es:"juntos",pos:"adverb",def:"with other people, not alone",ex:"We sit together.",icon:"👫"},
 {en:"moon",es:"luna",pos:"noun",def:"the big light in the night sky",ex:"The moon is round.",icon:"🌕"},
 {en:"harvest",es:"cosecha",pos:"noun",def:"when farmers pick the food they grew",ex:"Fall is harvest time.",icon:"🌾"},
];
const COUNTRIES=[
 {id:"usa",flag:"🇺🇸",name:"United States",region:"North America",date:"November",food:"turkey, potatoes, pie",who:"family",acts:"big dinner, parade on TV",
  emerging:"Thanksgiving is in November. We eat turkey. We eat pie.",
  progressing:"Thanksgiving is in November. Families eat a big dinner. They eat turkey, potatoes, and pie. They say thank you.",
  challenge:"In the United States, Thanksgiving is in November. Families come together and eat a big dinner. They eat turkey, potatoes, and pumpkin pie. Many people watch a parade on TV. Everyone says what they are thankful for.",
  qs:[{q:"When is Thanksgiving?",o:["In November","In May","In July","In January"],a:0},{q:"What do people eat?",o:["Pizza","Turkey","Fish","Soup"],a:1},{q:"Who eats together?",o:["Families","Dogs","Cars","Robots"],a:0}]},
 {id:"canada",flag:"🇨🇦",name:"Canada",region:"North America",date:"October",food:"turkey, pumpkin pie",who:"family",acts:"dinner, walk outside, see the leaves",
  emerging:"Canada has Thanksgiving in October. Families eat turkey. They see red leaves.",
  progressing:"In Canada, Thanksgiving is in October. It is a Monday. Families eat turkey and pumpkin pie. They walk outside and see the red and orange leaves.",
  challenge:"Canada has Thanksgiving in October, not November. It comes early because it gets cold fast in Canada. Families eat turkey and pumpkin pie. Many people take a walk to see the red and orange leaves. It is a long weekend.",
  qs:[{q:"When is Thanksgiving in Canada?",o:["In October","In November","In June","In March"],a:0},{q:"What do people see outside?",o:["Snowmen","Red and orange leaves","The beach","Fireworks"],a:1},{q:"What pie do they eat?",o:["Apple pie","Pumpkin pie","Mud pie","No pie"],a:1}]},
 {id:"korea",flag:"🇰🇷",name:"South Korea",region:"Asia",date:"Fall (Chuseok)",food:"rice cakes (songpyeon)",who:"family, grandparents",acts:"visit grandparents, make rice cakes, see the full moon",
  emerging:"Korea has Chuseok in the fall. Families make rice cakes. They see the big moon.",
  progressing:"In Korea, the holiday is Chuseok. It is in the fall. Families visit grandparents. They make little rice cakes called songpyeon. At night they look at the full moon.",
  challenge:"South Korea has a fall holiday called Chuseok. Families go to the town where their grandparents live. They make little rice cakes called songpyeon. The rice cakes look like half-moons. At night everyone looks at the big full moon and says thank you for the harvest.",
  qs:[{q:"What is the holiday in Korea?",o:["Chuseok","Halloween","Christmas","New Year"],a:0},{q:"What do families make?",o:["Pizza","Rice cakes","Cookies","Tacos"],a:1},{q:"What do they look at in the night?",o:["The sun","The full moon","A movie","A tree"],a:1}]},
 {id:"pr",flag:"🇵🇷",name:"Puerto Rico",region:"Caribbean",date:"November",food:"pavochón (turkey), rice and beans, coquito",who:"big family",acts:"big dinner, music, start of Christmas",
  emerging:"Puerto Rico has Thanksgiving in November. They eat turkey with garlic. They eat rice.",
  progressing:"Puerto Rico has Thanksgiving in November, like the United States. The turkey has garlic and spices. It is called pavochón. Families eat rice and beans too. They play music.",
  challenge:"In Puerto Rico, Thanksgiving is in November, the same day as in the United States. The turkey is cooked with garlic and spices, so it tastes like roast pork. It is called pavochón. Families eat rice with pigeon peas and drink coquito. After Thanksgiving, Christmas music starts!",
  qs:[{q:"What is the turkey called in Puerto Rico?",o:["Pavochón","Songpyeon","Pizza","Pumpkin"],a:0},{q:"What do families eat with the turkey?",o:["Rice and beans","Ice cream","Cereal","Noodles"],a:0},{q:"When is Thanksgiving in Puerto Rico?",o:["In November","In April","In August","In February"],a:0}]},
];
const SORT_ITEMS=[
 {t:"Families eat together.",k:"same"},{t:"People say thank you.",k:"same"},{t:"People eat turkey.",k:"diff"},{t:"People look at the full moon.",k:"diff"},
 {t:"The holiday is in the fall.",k:"same"},{t:"People make rice cakes.",k:"diff"},{t:"It is a happy day.",k:"same"},{t:"The turkey has garlic.",k:"diff"},
];
const LISTENING={text:"Hi! My name is Min-ji. I am six years old. In the fall, my family has Chuseok. We make rice cakes with my grandma. The rice cakes are small and sweet. At night we look at the big moon. In November, we have Thanksgiving with our neighbors. We bring rice cakes. Our neighbors bring a turkey. I am thankful for my family.",
 qs:[{q:"How old is Min-ji?",o:["Four","Six","Ten","Twelve"],a:1},{q:"Who makes rice cakes with Min-ji?",o:["Her grandma","Her teacher","A neighbor","Her dog"],a:0},{q:"What do they look at in the night?",o:["The moon","A movie","The sun","A bird"],a:0},{q:"What do the neighbors bring?",o:["A turkey","A cake","Rice","A moon"],a:0},{q:"What is Min-ji thankful for?",o:["Her family","Her toys","The bus","Rain"],a:0}]};
const QUIZ=[
 {q:"Which word means the people you live with and love?",o:["food","family","moon","turkey"],a:1},
 {q:"When is Thanksgiving in Canada?",o:["October","November","May","July"],a:0},
 {q:"What do families make on Chuseok?",o:["Rice cakes","Pizza","Tacos","Cereal"],a:0},
 {q:"What is pavochón?",o:["A turkey with garlic and spices","A rice cake","A song","A moon"],a:0},
 {q:"What do we say when someone is kind?",o:["Thank you","Go away","Stop","Maybe"],a:0},
 {q:"On Chuseok, people look at the ______.",o:["sun","full moon","beach","snow"],a:1},
 {q:"Which is a big bird people eat on Thanksgiving?",o:["chicken","turkey","duck","fish"],a:1},
 {q:"What is true for all the holidays?",o:["Families eat together.","Everyone eats turkey.","Everyone sees the moon.","It snows."],a:0},
 {q:"To ______ means to give some to a friend.",o:["share","eat","sleep","run"],a:0},
 {q:"Which sentence is correct?",o:["We eat together.","We eats together.","We eating together.","Together eat we."],a:0},
];
const FRAMES={emerging:["In ____, people eat ____.","I am thankful for ____.","My family eats ____."],progressing:["In ____, families eat ____.","In ____, families eat ____ too.","Both families eat together.","I am thankful for ____."],challenge:["In ____, Thanksgiving is in ____. Families eat ____.","In ____, the holiday is ____. Families ____.","Both holidays are happy because ____.","I am thankful for ____ because ____."]};
const CANDO={emerging:"I can say the name of two countries and one food they eat, using pictures and a sentence frame.",progressing:"I can read short sentences about a holiday and tell one way two holidays are the same.",challenge:"I can read a short text and write two or three sentences about a holiday with a new word."};
const LESSON_META={
 1:{content:"Students will learn 10 words about Thanksgiving and family and say them in a sentence.",language:"Students will say and match words with pictures and use the frame 'I like ____' / 'We eat ____'.",elp:["ELP 8: Determine meaning of words","ELP 9: Create clear speech"],ela:["L.K.6 / L.1.6 Use new words","SL.K.1 / SL.1.1 Conversations"]},
 2:{content:"Students will tell when four countries celebrate a day of thanks and one food they eat.",language:"Students will listen to and read short sentences and answer who/what/when questions.",elp:["ELP 1: Construct meaning from text","ELP 3: Speak about texts"],ela:["RI.K.1 / RI.1.1 Ask and answer questions","RI.K.2 / RI.1.2 Main topic"]},
 3:{content:"Students will tell one way two holidays are the same and one way they are different.",language:"Students will use 'both' and 'but' in sentences.",elp:["ELP 4: Make claims","ELP 7: Adapt language"],ela:["RI.K.3 / RI.1.3 Connect two pieces of information","SL.K.1 / SL.1.1"]},
 4:{content:"Students will listen to a story about Chuseok and Thanksgiving and ask a friend about a holiday.",language:"Students will answer questions about what they hear and ask 'What do you eat?'",elp:["ELP 1: Oral presentations","ELP 2: Oral exchanges"],ela:["SL.K.2 / SL.1.2 Ask and answer about a text read aloud","SL.K.3 / SL.1.3 Ask questions"]},
 5:{content:"Students will write about a holiday food and a family.",language:"Students will write 1–3 sentences with capital letters and periods using frames.",elp:["ELP 3: Write about topics","ELP 10: Conventions"],ela:["W.K.2 / W.1.2 Informative writing","L.K.2 / L.1.2 Capitalization and punctuation"]},
};
// ELPA21 practice
const P_LIT=["Min-ji has a bowl of rice dough. Mom says, \"Make a little ball.\" Min-ji makes a ball. She puts sweet sesame inside. She folds it. Now it looks like a half-moon!","\"Grandma says a pretty rice cake makes a pretty baby,\" Min-ji says. Mom laughs. \"Then make it pretty!\"","They call Grandma in Korea. Grandma shows a table with pears and rice cakes. \"Next year, bring your friends,\" Grandma says.","Min-ji looks at her rice cakes. Some are bumpy. Some are pretty. She will share them at school on Monday."];
const P_INFO=["In Germany, people have a harvest festival in October. It is called Erntedankfest.","People bring apples, bread, and pumpkins to church. They make a big crown from wheat.","After church, a band plays. Children carry paper lanterns.","When the festival ends, the food is given to people who need it. Sharing is part of saying thank you."];
const P_PROC=["How to Make a Rice Cake","1. Make a small ball of dough.","2. Press it flat.","3. Put sweet filling in the middle.","4. Fold it and pinch it shut.","5. Steam it. Then eat it!"];
const R_ITEMS=[
 {type:"mc",passage:"lit",dir:"Listen and read. Then answer.",q:"What does Min-ji put inside the rice cake?",o:["Sweet sesame","Cheese","A pear","Water"],a:0,domain:"Read along"},
 {type:"mc",passage:"lit",dir:"Read the story. Then answer.",q:"What does the rice cake look like?",o:["A star","A half-moon","A ball","A fish"],a:1,domain:"Read for details"},
 {type:"ms",passage:"lit",dir:"Pick ALL the right answers.",q:"What is on Grandma's table?",o:["pears","pizza","rice cakes","candy"],a:[0,2],domain:"Multiple select"},
 {type:"vocab",passage:"lit",dir:"Read the sentence. Then answer.",q:"\"Some are <b>bumpy</b>.\" What does <b>bumpy</b> mean?",o:["not smooth","very big","blue","hot"],a:0,domain:"Word meaning"},
 {type:"classify",passage:"info",dir:"Tap a detail. Then tap where it happens.",cols:["In the church","Outside after"],items:[["People bring apples and bread.",0],["A band plays.",1],["People make a wheat crown.",0],["Children carry lanterns.",1]],domain:"Sort details"},
 {type:"order",passage:"proc",dir:"Put the steps in order. 1 is first.",steps:["Steam it.","Fold it and pinch it shut.","Make a small ball of dough.","Put filling in the middle."],a:[2,3,1,0],domain:"Sequence"},
];
const W_TASKS=[
 {type:"edit",title:"Task 1 · Fix the Sentences",dir:"Choose the right word for each sentence.",domain:"Edit for grammar",text:["My family ",{o:["eat","eats","eating"],a:1}," turkey. We ",{o:["is","are","am"],a:1}," happy. I ",{o:["like","likes","liking"],a:0}," pie!"]},
 {type:"picture",title:"Task 2 · Write About the Picture",dir:"Look at the picture. Write ONE or more sentences. Start with a capital letter. End with a period.",domain:"Write a sentence about a picture",min:1,
  svg:`<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="200" fill="#fff6e6"/><rect x="40" y="110" width="320" height="18" rx="6" fill="#8a6240"/><rect x="60" y="128" width="14" height="60" fill="#5b3a1e"/><rect x="326" y="128" width="14" height="60" fill="#5b3a1e"/><ellipse cx="200" cy="100" rx="60" ry="22" fill="#f0862c" stroke="#5b3a1e" stroke-width="3"/><ellipse cx="200" cy="92" rx="40" ry="12" fill="#d7372a"/><circle cx="110" cy="70" r="22" fill="#f4c9a0" stroke="#5b3a1e" stroke-width="3"/><rect x="92" y="92" width="36" height="30" rx="8" fill="#3a7bd5"/><circle cx="300" cy="70" r="22" fill="#c68b59" stroke="#5b3a1e" stroke-width="3"/><rect x="282" y="92" width="36" height="30" rx="8" fill="#3f8f4a"/><circle cx="104" cy="66" r="2" fill="#2b1d12"/><circle cx="116" cy="66" r="2" fill="#2b1d12"/><path d="M 102 76 q 8 6 16 0" fill="none" stroke="#2b1d12" stroke-width="2"/><circle cx="294" cy="66" r="2" fill="#2b1d12"/><circle cx="306" cy="66" r="2" fill="#2b1d12"/><path d="M 292 76 q 8 6 16 0" fill="none" stroke="#2b1d12" stroke-width="2"/></svg>`,
  frames:["The friends eat ____.","They are ____.","I see a ____."]},
 {type:"email",title:"Task 3 · Write a Thank-You Note",dir:"Write a note to someone who helps you. Say thank you and tell why. Write TWO or more sentences.",domain:"Write a note",min:2,frames:["Dear ____,","Thank you for ____.","I am happy because ____.","From, ____"],checks:["Says Dear ____,","Says thank you","Tells why","Says From, ____"]},
 {type:"report",title:"Task 4 · Tell About Two Holidays",dir:"Use the notes. Write THREE or more sentences about two holidays.",domain:"Write from notes",min:3,notes:[["United States — Thanksgiving","November","turkey and pie","family dinner"],["Korea — Chuseok","fall","rice cakes","look at the moon"]],frames:["In the United States, people eat ____.","In Korea, people make ____.","Both holidays have ____."],checks:["Names both holidays","Tells one food for each","Uses 'both'"]},
];
