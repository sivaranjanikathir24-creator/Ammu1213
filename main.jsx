import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, MapPin, Coffee, Plane, Moon, Gift, Lock, ChevronDown } from "lucide-react";
import "./styles.css";

const missItems = ["Un voice ❤️","Un messages ❤️","Un presence","Un random talks 😂","Un care","Un attention 😂","Un smile ❤️","Un irritating moments 😂","Un “Ammu” ❤️","Just YOU."];

const thoughts = ["Mama saptiya? 👀","Mama rest edutha? 🫶","Mama miss me? 😌","Obviously miss pannanum 😂","Pattu smile please ❤️","Germany romba over 😂","Unna hug panna aasai 🥺","En mama best 😂❤️","Yaaravadhu unna hurt panna… 😤","Okay okay Ammu calm down 😂❤️"];

const rules = [
  "Mama happy-ah irukkanum ❤️","Sapdaama irukka koodadhu 😂","Health-a ignore panna koodadhu","Problem irundha Ammu kitta sollanum","Ammu-va miss pannanum 😂❤️","Birthday-la extra happy-ah irukkanum 🎂","Ammu love-ah doubt panna koodadhu ❤️","Enna nadandhaalum… Ammu kitta escape kidayadhu 😂❤️"
];

const future = ["Same place-la coffee ☕","Random long drives 🚗","Late night walks 🌙","Travel together ✈️","Stupid pictures 😂","Laugh until our stomach hurts","Eat together 🍴","Celebrate birthdays together 🎂","Long hugs 🫂","Wake up in the same place 🏠","Build an ordinary life together ❤️"];

function burst(setBursts) {
  const id = Date.now();
  setBursts(b => [...b, id]);
  setTimeout(() => setBursts(b => b.filter(x => x !== id)), 900);
}

function RevealText({ children, delay=0 }) {
  return <motion.div initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.25}} transition={{duration:.8,delay}}>{children}</motion.div>;
}

function Section({children, className=""}) {
  return <section className={`section ${className}`}>{children}</section>;
}

function App() {
  const [opened, setOpened] = useState(false);
  const [bursts, setBursts] = useState([]);
  const [letter, setLetter] = useState(false);
  const [secret, setSecret] = useState(false);
  const [final, setFinal] = useState(false);

  const doBurst = () => burst(setBursts);

  return (
    <div className="app">
      <AnimatePresence>
        {!opened && (
          <motion.div className="opening" initial={{opacity:1}} exit={{opacity:0,scale:1.08}} transition={{duration:1}}>
            <div className="ambient-stars" />
            <motion.div className="opening-card" initial={{opacity:0,y:35}} animate={{opacity:1,y:0}} transition={{duration:1}}>
              <span className="eyebrow">Germany-la irukkura oru very special person-ku…</span>
              <p className="opening-small">India-la irundhu oru paithiyam idha create pannirukku 🥹❤️</p>
              <h1>HAPPY BIRTHDAY<br/><span>MAMAAAAAA!!!</span> ❤️</h1>
              <p>Un Ammu kitta irundhu…</p>
              <button className="primary" onClick={() => {doBurst(); setOpened(true)}}>OPEN THIS, MAMA ❤️ <Sparkles size={18}/></button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {bursts.map(id => <div className="burst" key={id}>{["❤️","✨","💙","🥹","🎉","⭐","💫"].map((e,i)=><span key={i} style={{"--i":i}}>{e}</span>)}</div>)}

      <main>
        <Section className="hero">
          <div className="hero-glow"/>
          <span className="eyebrow">A little corner of the internet • made by Ammu</span>
          <h2>Mama, this is for you. <span>❤️</span></h2>
          <p>Mama… Un birthday-ku normal-a oru wish pannitu poidalaam nu nenachen… Aana nee normal person-ah irundha dhaane? 😂 Nee enakku everything. So unakkaga oru whole website create panniten. 🥹❤️</p>
          <div className="welcome">Welcome to your little corner of the internet. ❤️</div>
          <ChevronDown className="scroll-hint" />
        </Section>

        <Section className="soft">
          <RevealText><span className="eyebrow">01 • WHO ARE YOU TO ME?</span><h2>Adhu mattum illa…</h2></RevealText>
          <div className="reveal-stack">
            {["My boyfriend? ❤️","My best friend? 🫶","My comfort?","My safe place?","My favourite person?"].map((x,i)=><motion.div key={x} className="glass-chip" whileHover={{scale:1.04}} transition={{type:"spring",stiffness:300}}>{x}</motion.div>)}
          </div>
          <RevealText><h3 className="mega">En EVERYTHING-um nee dhaan, Mama. ❤️</h3><p>Unakku escape illa Pattu. 😂❤️</p></RevealText>
        </Section>

        <Section className="blue">
          <RevealText><span className="eyebrow">02 • HOW YOU BECAME MY EVERYTHING</span><h2>Konjam konjam-ah…</h2></RevealText>
          <div className="cards">
            {["My favourite person ❤️","My comfort 🫶","My safe place 🏠","My partner in nonsense 😂","My favourite notification 📱","My late-night person 🌙","My biggest happiness ✨"].map((x,i)=><motion.div className="feature-card" key={x} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.07}}>{x}</motion.div>)}
          </div>
          <h3 className="mega">Nee oru person-lendhu… en whole world-a maarita.</h3>
          <div className="home-word">YOU BECAME HOME. ❤️</div>
        </Section>

        <Section className="distance">
          <RevealText><span className="eyebrow">03 • INDIA → GERMANY</span><h2>Google map-ku idhu distance.</h2><p>En heart-ku? <b>Nothing. ❤️</b></p></RevealText>
          <div className="map">
            <div className="place india"><div className="orb">🇮🇳</div><b>AMMU</b><small>INDIA</small></div>
            <div className="heart-path"><motion.div animate={{x:["0%","100%","0%"]}} transition={{duration:3.5,repeat:Infinity,ease:"easeInOut"}}>❤️</motion.div></div>
            <div className="place germany"><div className="orb">🇩🇪</div><b>MAMA</b><small>GERMANY</small></div>
          </div>
          <p className="quote">India-la naan… Germany-la nee… Still… same love. same heart. same us. ❤️</p>
          <h3 className="mega">One day this distance will become zero. ❤️</h3>
        </Section>

        <Section className="warm">
          <RevealText><span className="eyebrow">04 • WHAT YOU HAVE DONE FOR ME</span><h2>Unakku naan solladha thanks romba irukku…</h2></RevealText>
          <div className="letterish">
            <p>Un support. Un understanding. Un care. En tears-ah handle pannadhu. En silly things-ah kooda tolerate pannadhu.</p>
            <p><b>Nee Germany pona journey…</b></p>
            <p>Adhula un courage irukku. Un effort irukku. Un dreams irukku. And somehow… adhula enakkum oru place irukku nu ninaikkumbodhu… I feel so emotional. ❤️</p>
          </div>
          <h3 className="mega">I AM SO PROUD OF YOU, MAMA. ❤️</h3>
        </Section>

        <Section className="soft">
          <RevealText><span className="eyebrow">05 • THINGS AMMU MISSES</span><h2>FULL MAMA PACKAGE. 🥹❤️</h2></RevealText>
          <div className="cards miss-grid">
            {missItems.map(x=><motion.button key={x} className="feature-card clickable" whileTap={{scale:.94}} onClick={doBurst}>{x}</motion.button>)}
          </div>
        </Section>

        <Section className="thoughts">
          <RevealText><span className="eyebrow">06 • RANDOM AMMU THOUGHTS</span><h2>Inside Ammu's brain 😂</h2></RevealText>
          <div className="bubble-cloud">{thoughts.map((x,i)=><motion.div key={x} className="bubble" initial={{opacity:0,scale:.7}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:i*.06}}>{x}</motion.div>)}</div>
        </Section>

        <Section className="night promise">
          <RevealText><span className="eyebrow">07 • ONE THING YOU SHOULD NEVER FORGET</span><h2>AMMU IS ALWAYS HERE. ❤️</h2></RevealText>
          <div className="promise-grid">{["Good days-la","Bad days-la","When you win","When you fail","When happy","When lost"].map(x=><div key={x}><span>{x}</span><b>I am here.</b></div>)}</div>
          <h3 className="mega">UN AMMU UN KUDAVE IRUPPEN. ❤️</h3><p className="large">No matter what.</p>
        </Section>

        <Section className="sad">
          <RevealText><span className="eyebrow">08 • WHEN YOU ARE SAD</span><h2>Ammu kitta nee strong-ah act panna thevai illa.</h2></RevealText>
          <div className="comfort"><p>Azhanum na azhu. Kovam na sollu. Silent-ah irukkanum na iru. Pesanum na pesu.</p><p>Nothing sollama irukkanum na kooda… <b>Ammu irukken. ❤️</b></p></div>
          <h3 className="mega">YOU DON'T HAVE TO HIDE YOUR BAD DAYS FROM ME.</h3>
          <p className="large">Un happy version-a mattum naan love panna illa. <b>Un every version-um love panren.</b></p>
        </Section>

        <Section className="peach">
          <RevealText><span className="eyebrow">09 • YOUR HAPPINESS</span><h2>Money?</h2><div className="fun">NO 😂</div><h2>Germany trip?</h2><div className="fun">Okay… adhuvum venum ✈️</div><h2>Food?</h2><div className="fun">DEFINITELY 😂</div></RevealText>
          <div className="happiness">UNNA HAPPY-AH PAAKANUM. ❤️</div>
          <p className="large">Your happiness matters to me more than you realise.</p>
        </Section>

        <Section className="rules">
          <RevealText><span className="eyebrow">10 • AMMU'S OFFICIAL RULES</span><h2>Rulebook for Mama 😂</h2></RevealText>
          <div className="rulebook">{rules.map((x,i)=><div key={x}><span>0{i+1}</span><p>{x}</p></div>)}</div>
        </Section>

        <Section className="blue">
          <RevealText><span className="eyebrow">11 • I CHOOSE YOU</span><h2>Would I choose you?</h2></RevealText>
          <div className="choose">{["YES.","Again? YES.","Another city? YES.","Another country? YES.","Hard days? YES.","Fights? Still yes. 😂❤️"].map((x,i)=><motion.div key={x} initial={{opacity:0,x:-25}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*.12}}>{x}</motion.div>)}</div>
          <h3 className="mega">YES, MAMA. EVERY SINGLE TIME. ❤️</h3>
        </Section>

        <Section className="future">
          <RevealText><span className="eyebrow">12 • THINGS WE STILL HAVE TO DO</span><h2>Enakku grand-a edhuvum venam Pattu… Just us.</h2></RevealText>
          <div className="cards">{future.map(x=><div className="feature-card" key={x}>{x}</div>)}</div>
          <h3 className="mega">Ordinary life with you. ❤️</h3>
        </Section>

        <Section className="one-day">
          <RevealText><span className="eyebrow">13 • ONE DAY</span><h2>One day…</h2></RevealText>
          <div className="one-lines"><p>No India → Germany distance.</p><p>No video call goodbyes.</p><p>No “wish you were here”.</p><strong>Nee en pakkathula dhaan iruppa. ❤️</strong></div>
          <button className="primary" onClick={doBurst}>WHAT WILL AMMU DO? ❤️</button>
          <AnimatePresence>{bursts.length>0 && <motion.p className="mega" initial={{opacity:0}} animate={{opacity:1}}>UNNA VIDA MAATEN 😂❤️</motion.p>}</AnimatePresence>
          <p>Years worth of pending hugs irukku Pattu 😂</p>
        </Section>

        <Section className="birthday">
          <Gift className="giant-icon"/>
          <RevealText><span className="eyebrow">14 • BIRTHDAY WISHES</span><h2>More happiness. More peace. More dreams coming true.</h2></RevealText>
          <div className="wish-row">{["❤️ Happiness","🕊️ Peace","🚀 Success","💪 Confidence","✈️ Adventures","😂 Laughter","✨ Beautiful memories","🫶 Moments where you feel loved"].map(x=><span key={x}>{x}</span>)}</div>
          <h3 className="mega">And a little more Ammu…</h3><div className="home-word">Actually… FULL AMMU PACKAGE. 😂❤️</div>
        </Section>

        <Section className="night deepest">
          <RevealText><span className="eyebrow">15 • DEEPEST MESSAGE</span><h2>Behind everything… ONE THING NEVER CHANGES.</h2></RevealText>
          <div className="love-word">I LOVE YOU. ❤️</div>
          <p className="large">Romba. Romba romba. Nee ninaikkuradha vida kooda adhigama.</p>
          <p>You are precious to me.</p>
        </Section>

        <Section className="letter-section">
          <RevealText><span className="eyebrow">16 • A LETTER FROM AMMU</span><h2>There are some things that deserve more than a text.</h2></RevealText>
          <motion.div className={`envelope ${letter ? "open":""}`} whileHover={{y:-5}}>
            <div className="seal">❤️</div>
            <div className="paper">
              <p>Mama… Enakku enna sollanum nu therila. Unna pathi pesumbodhu words konjam kammiya feel aagudhu.</p>
              <p>Because nee enakku just oru love story illa. Nee en life-la oru part illa… nee en life-la romba periya part.</p>
              <p>Unna romba miss panren. Sometimes distance romba kashtama irukku. Unna paakanum nu thonum. Un kooda irukkanum nu thonum. Un voice ketkanum nu thonum. Just un pakkathula summa ukkanthirkanum nu kooda thonum.</p>
              <p>Aana evlo distance irundhaalum… oru vishayam mattum change aagala. I still choose you. Every single day.</p>
              <p>Nee Germany-la irundhaalum… en heart-la nee romba close. Unna pathi naan romba proud-ah irukken.</p>
              <p>En life-la “home” nu oru feeling irukku na… adhula nee irukka.</p>
              <p>Happy Birthday, Mama. Distance temporary. Namma love temporary illa.</p>
              <p>I love you, Pattu. Romba. Always.</p>
              <p>No matter what happens… un Ammu un kooda iruppen. Unna happy-ah paakanum. Un dreams achieve aaganum. Un heart peaceful-ah irukkanum.</p>
              <p>Whenever life feels too much… come back to me. Ammu will be here. Always.</p>
              <p className="signature">— Un Ammu ❤️</p>
            </div>
          </motion.div>
          <button className="primary" onClick={()=>setLetter(!letter)}>{letter ? "CLOSE MY LETTER" : "OPEN MY LETTER"} 💌</button>
        </Section>

        <Section className="secret">
          <RevealText><span className="eyebrow">17 • SECRET SURPRISE</span><h2>Psst… Pattu… one more thing 👀</h2></RevealText>
          <button className="secret-heart" onClick={()=>{setSecret(true);doBurst()}}><Heart size={54}/><Lock size={18}/></button>
          <AnimatePresence>{secret && <motion.div className="secret-box" initial={{opacity:0,scale:.8}} animate={{opacity:1,scale:1}}><p>MAMA 😂 Don’t touch nu sonna click pannitiya? Curiosity boy 😂❤️</p><h3>Un Ammu unna semma love panra da. 🥹❤️</h3><button className="secondary" onClick={()=>setSecret(false)}>I KNOW 😂</button></motion.div>}</AnimatePresence>
        </Section>

        <Section className="night final-promise">
          <RevealText><span className="eyebrow">18 • FINAL PROMISE</span><h2>You have me.</h2></RevealText>
          <div className="promise-grid">{["When you are happy","When you are sad","When you win","When you fail","When you feel strong","When you feel completely lost"].map(x=><div key={x}><span>{x}</span><b>you have me.</b></div>)}</div>
          <div className="love-word">AMMU IS HERE. ALWAYS. ❤️</div>
          <p className="large">YOU ARE NOT ALONE WHILE AMMU IS HERE.</p>
          <p>Because seeing you happy means everything to me. ❤️</p>
        </Section>

        <Section className="celebration">
          <div className="confetti" />
          <Sparkles className="giant-icon"/>
          <RevealText><span className="eyebrow">19 • THE BIG BIRTHDAY MOMENT</span><h2>HAPPY BIRTHDAY<br/>MAMAAAAAAA!!! ❤️</h2></RevealText>
          <div className="subtitle-list">My favourite person. • My safe place. • My comfort. • My biggest headache 😂. • My happiness. • My home. • My everything.</div>
          <p className="large">I hope this birthday gives you everything beautiful.</p>
          <p>And when life doesn’t… remember Ammu is here to annoy you until you smile. 😂❤️</p>
          <h3>Stay happy, Mama. Please. ❤️</h3>
        </Section>

        <Section className="final">
          <RevealText><span className="eyebrow">20 • ONE LAST THING, MAMA…</span><h2>If I could give you one thing in life…</h2></RevealText>
          <button className="primary" onClick={()=>setFinal(true)}>OPEN IT ❤️</button>
          <AnimatePresence>
            {final && <motion.div className="final-reveal" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.2}}>
              <p>If I could give you one thing in life… I would give you the ability to see yourself through my eyes.</p>
              <p>So you would know… how special you are to me. How proud I am of you. How much I miss you. How much I love you.</p>
              <div className="love-word">Happy Birthday, my everything. ❤️</div>
              <div className="home-word">AMMU IS ALWAYS HERE. ❤️</div>
              <p className="signature">Forever your Ammu. ❤️</p>
            </motion.div>}
          </AnimatePresence>
        </Section>
      </main>

      <footer>Made with all the love Ammu couldn't fit into one message. ❤️</footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
