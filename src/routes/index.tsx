import { createFileRoute } from "@tanstack/react-router";
import anikaPhoto from "@/assets/image.png.asset.json";
import mathewPhoto from "@/assets/image-2.png.asset.json";
import kirstenPhoto from "@/assets/image-3.png.asset.json";
import kimPhoto from "@/assets/image-4.png.asset.json";
import eljanrickPhoto from "@/assets/image-5.png.asset.json";
import haeleyPhoto from "@/assets/image-6.png.asset.json";
import andrewPhoto from "@/assets/andrew-francisco.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Power Safely — Electrical Tool Safety in Industrial Arts",
      },
      {
        name: "description",
        content:
          "TLE Industrial Arts advocacy: the problem of electrical tool misuse, our audience research, proposed solutions, a beginner JavaScript lab, and team credits.",
      },
      {
        property: "og:title",
        content: "Power Safely — Electrical Tool Safety in Industrial Arts",
      },
      {
        property: "og:description",
        content:
          "A student advocacy site on electrical tool safety for Grade 9-10 TLE Industrial Arts.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const team = [
  {
    name: "Anika Kahlee Casiño",
    roles: "Facilitator · Website Coder · Presenter",
    photo: anikaPhoto,
  },
  {
    name: "Mathew Xian Go",
    roles: "Co-Facilitator · Scribe",
    photo: mathewPhoto,
  },
  {
    name: "Kirsten Sookie Borres",
    roles: "Scribe · Presenter",
    photo: kirstenPhoto,
  },
  {
    name: "Kim Rhazell Casiano",
    roles: "Scribe",
    photo: kimPhoto,
  },
  {
    name: "Eljanrick Nuhay",
    roles: "Scribe",
    photo: eljanrickPhoto,
  },
  {
    name: "Haeley Faye Esguerra",
    roles: "Scribe",
    photo: haeleyPhoto,
  },
  {
    name: "Andrew John Francisco",
    roles: "Scribe",
    photo: andrewPhoto,
  },
];

const jsCards = [
  {
    number: "01",
    title: "Modifying the Code",
    blurb:
      "Take a working snippet and reshape it — change what it asks for, where the answer shows up, and when it runs.",
    items: [
      {
        q: "How do I change this code to ask for the user's age instead?",
        a: "Swap the question string inside prompt() for \"Enter your age:\" and store the answer in a new variable like userAge.",
      },
      {
        q: "Can you make this display the answer on the webpage instead of the console?",
        a: "Replace console.log() with document.getElementById(\"answer\").innerText = answer so the result shows inside a status box on the page.",
      },
      {
        q: "How can I make this run when a button is clicked?",
        a: "Wrap the code inside a function, then connect it to a button with onclick=\"checkTool()\" or addEventListener(\"click\", checkTool).",
      },
    ],
  },
  {
    number: "02",
    title: "Understanding the Basics",
    blurb:
      "Read a line of code the way you would read a safety label — slowly, and know what every part does.",
    items: [
      {
        q: "Explain this line by line like I'm 10 years old.",
        a: "Walk through each line out loud: what the computer stores, what it checks, and what it shows the user at the end.",
      },
      {
        q: "What does const do here, and why not use let?",
        a: "const is for values that never change — like MAX_VOLTAGE = 220. Use let only when the value must be updated later.",
      },
      {
        q: "What happens if a user inputs text instead of a number?",
        a: "The math breaks silently. Guard it with isNaN(input) and show a warning before doing any safety calculation.",
      },
    ],
  },
  {
    number: "03",
    title: "Adding Simple Logic",
    blurb:
      "Give your script judgment: check conditions first, repeat checks, and package steps into reusable routines.",
    items: [
      {
        q: "Can you add an if/else statement to check if the input is correct?",
        a: "if (age >= 14) { allow(); } else { deny(); } — only unlock the tool procedure when the check passes.",
      },
      {
        q: "How do I turn this code into a reusable function?",
        a: "Give the steps a name, like function checkPPE() { ... }, then call checkPPE() before every tool operation.",
      },
      {
        q: "How can I loop this so it asks the user 3 times?",
        a: "for (let i = 0; i < 3; i++) { ask(); } — the loop repeats the question until all three checks are done.",
      },
    ],
  },
  {
    number: "04",
    title: "Finding & Fixing Errors",
    blurb:
      "Debugging is a safety habit: find the fault before it finds you. Know the classic beginner errors and how to trace them.",
    items: [
      {
        q: "What are common beginner errors to watch out for with this code?",
        a: "Misspelled variable names, missing brackets, and quotes left unclosed — these throw ReferenceError and SyntaxError in the console.",
      },
      {
        q: "Can you add console.log() statements to help me debug this?",
        a: "Place console.log(\"value:\", input) at each step so you can see exactly where the code stops behaving.",
      },
    ],
  },
];

function WarningBar() {
  return (
    <div className="flex h-4 w-full border-b border-black/10 bg-safety-yellow">
      <div className="mx-2 h-full w-4 bg-black/10" />
      <div className="mx-2 h-full w-4 bg-black/10" />
      <div className="mx-2 h-full w-4 bg-black/10" />
     </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <WarningBar />

      {/* Hero */}
      <header className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-safety-red">
          Industrial Arts // TLE Learning Area: IA
        </span>
        <h1 className="mb-8 text-6xl font-extrabold italic leading-none tracking-tighter md:text-8xl">
          POWER <span className="bg-industrial px-2 text-industrial-foreground">SAFELY.</span>
        </h1>
        <p className="max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
          Addressing the widespread misuse of electrical tools in learning environments.
          Proper handling is the difference between a project and a fatality.
        </p>
      </header>

      {/* The Problem */}
      <section id="problem" className="bg-industrial py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-extrabold uppercase italic">
                The Problem
              </h2>
              <blockquote className="mb-6 border-l-4 border-safety-yellow pl-4 text-lg italic leading-relaxed text-white/90">
                “In Industrial Arts Learning Environments, there is a widespread misuse
                of electrical tools and a persistent neglect of basic safety protocols.
                This lack of proper handling and adherence to safety guidelines can and
                will increase the risk of very serious workplace injuries, equipment
                damage and electrical hazards for everybody.”
              </blockquote>
              <p className="leading-relaxed text-white/70">
                This problem primarily exists due to a lack of proper training, being
                overly confident when handling power tools, and a failure to enforce
                standard safety guidelines before operation. Many workers bypass safety
                gear or use tools for the wrong purposes simply to save time — and the
                consequences range from shock injuries and fires to permanent tool
                damage and costly project downtime.
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="border-l-4 border-safety-yellow pl-4">
                  <span className="block font-bold text-safety-yellow">SHOCK RISK</span>
                  <span className="text-sm text-white/70">
                    Severe shock injuries and permanent physical harm.
                  </span>
                </div>
                <div className="border-l-4 border-safety-yellow pl-4">
                  <span className="block font-bold text-safety-yellow">FIRE HAZARD</span>
                  <span className="text-sm text-white/70">
                    Arcing and short circuits from tool misuse.
                  </span>
                </div>
                <div className="border-l-4 border-safety-yellow pl-4">
                  <span className="block font-bold text-safety-yellow">EQUIPMENT LOSS</span>
                  <span className="text-sm text-white/70">
                    Permanent tool damage and costly project downtime.
                  </span>
                </div>
              </div>
              <div className="rounded-sm border border-white/10 bg-white/5 p-8">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-bold">
                  <span className="size-3 animate-pulse rounded-full bg-safety-red" />
                  SAFETY BREACH LOG
                </h3>
                <ul className="space-y-4 font-mono text-sm">
                  <li className="border-b border-white/5 pb-2 text-white/60">
                    - Modifying tools to remove protective guards
                  </li>
                  <li className="border-b border-white/5 pb-2 text-white/60">
                    - Plugging 3-prong grounding plugs into 2-prong outlets
                  </li>
                  <li className="border-b border-white/5 pb-2 text-white/60">
                    - Bypassing safety gear to save time
                  </li>
                  <li className="border-b border-white/5 pb-2 text-white/60">
                    - Skipping inspection before operation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Research */}
      <section id="audience" className="border-b-2 border-foreground py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 border-b-2 border-foreground pb-4">
            <h2 className="text-4xl font-extrabold uppercase italic">
              Who We're Reaching
            </h2>
            <p className="mt-2 text-muted-foreground">
              Main audience research — why Grade 9-10 TLE students come first.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col border border-safety-yellow bg-card p-6">
              <span className="mb-3 inline-block w-fit bg-safety-yellow px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-foreground">
                Primary Audience
              </span>
              <h3 className="mb-2 text-xl font-bold">Grades 9 &amp; 10 · Ages 14–16</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                TLE students in Industrial Arts / Electrical Installation and Maintenance.
                The DepEd TLE-IA/EIM modules explicitly cover tool preparation, handling,
                maintenance, OHS procedures, PPE, and Philippine Electrical Code basics —
                and many students arrive with little experience or dangerous habits from
                home. Early education prevents injuries later in trade work.
              </p>
            </div>
            <div className="flex flex-col border border-border bg-card p-6">
              <span className="mb-3 inline-block w-fit bg-secondary px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-foreground">
                Secondary Audience
              </span>
              <h3 className="mb-2 text-xl font-bold">Apprentices &amp; DIY Users</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Young construction and trade workers — electrical burns are more common
                among construction workers than trained electricians, and young workers
                account for a large share of electrical injuries worldwide. Home DIY
                users and informal sector workers often use power tools without proper
                instruction.
              </p>
            </div>
            <div className="flex flex-col border border-border bg-card p-6">
              <span className="mb-3 inline-block w-fit bg-secondary px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-foreground">
                Support Audience
              </span>
              <h3 className="mb-2 text-xl font-bold">Teachers &amp; Shop Instructors</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Instructors who need ready-made, student-friendly materials that align
                with OHS procedures and the Philippine Electrical Code — so safety
                education starts before the first tool is ever switched on.
              </p>
            </div>
          </div>
          <blockquote className="mt-10 border-l-4 border-foreground pl-4 text-sm italic leading-relaxed text-muted-foreground">
            “Our content is mainly for Grade 9 to 10 TLE Industrial Arts students aged 14
            to 16 who are just starting to handle electrical tools in school. We chose
            this group because the DepEd curriculum already requires them to learn these
            exact safety practices, and they are at the highest risk of forming bad
            habits if not taught properly. Early education prevents these injuries in
            construction or trade work. Secondary audiences include young apprentices
            and DIY users who face the same risks.”
          </blockquote>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 border-b-2 border-foreground pb-4">
            <h2 className="text-4xl font-extrabold uppercase italic">
              Proposed Solutions
            </h2>
            <p className="mt-2 text-muted-foreground">
              Two fixes for the hazards we identified: harden the equipment, train the people.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <article className="flex flex-col border border-border bg-card p-8">
              <div className="mb-4 grid size-8 place-items-center bg-industrial font-mono text-xs font-bold text-industrial-foreground">
                01
              </div>
              <h3 className="mb-3 text-2xl font-extrabold uppercase italic">
                Stop Bypassing Safety Features
              </h3>
              <div className="mb-4 border-l-4 border-safety-red bg-safety-red/5 p-4">
                <span className="mb-1 block font-mono text-[10px] font-bold uppercase tracking-widest text-safety-red">
                  The Hazard
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Modifying tools to remove protective guards, or using adapters to plug
                  a three-prong grounding plug into a two-prong outlet.
                </p>
              </div>
              <div className="border-l-4 border-safety-yellow bg-safety-yellow/10 p-4">
                <span className="mb-1 block font-mono text-[10px] font-bold uppercase tracking-widest text-foreground">
                  The Solution
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Use tamper-proof fasteners — secure machine guards and physical shields
                  with non-reversible screws or specialized bolts that everyday tools like
                  normal screwdrivers cannot remove. For unavoidable manual setups or
                  calibrations, install a 3-position enabling switch paired with a
                  strictly enforced reduced-speed jog mode instead of defeating door
                  interlocks.
                </p>
              </div>
            </article>
            <article className="flex flex-col border border-border bg-card p-8">
              <div className="mb-4 grid size-8 place-items-center bg-industrial font-mono text-xs font-bold text-industrial-foreground">
                02
              </div>
              <h3 className="mb-3 text-2xl font-extrabold uppercase italic">
                Electrical Safety Training
              </h3>
              <div className="mb-4 border-l-4 border-safety-red bg-safety-red/5 p-4">
                <span className="mb-1 block font-mono text-[10px] font-bold uppercase tracking-widest text-safety-red">
                  The Hazard
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Careless handling of electrical equipment damages expensive machinery
                  and risks lives — students and workers who can't spot dangers or don't
                  know the safety rules.
                </p>
              </div>
              <div className="border-l-4 border-safety-yellow bg-safety-yellow/10 p-4">
                <span className="mb-1 block font-mono text-[10px] font-bold uppercase tracking-widest text-foreground">
                  The Solution
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Give students and workers proper electrical safety training: learn how
                  to use electrical tools correctly, follow safety rules to avoid
                  accidents, learn how to spot dangers, and ask an adult or a trained
                  person for help when needed. This prevents accidents, keeps people
                  safe, and ensures electrical tools are properly and correctly used.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* JavaScript Learning Lab */}
      <section id="js-lab" className="border-y-2 border-foreground bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 border-b-2 border-foreground pb-4">
            <h2 className="text-4xl font-extrabold uppercase italic">
              Safety Scripting Lab
            </h2>
            <p className="mt-2 text-muted-foreground">
              Learn to build safety logic with JavaScript — simple, and great for starters.
              Pick a question, try the code, and make it your own.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {jsCards.map((card) => (
              <div
                key={card.number}
                className="flex flex-col border border-border bg-card p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="grid size-8 place-items-center bg-safety-yellow font-mono text-xs font-bold text-foreground">
                    {card.number}
                  </div>
                  <h3 className="text-lg font-bold">{card.title}</h3>
                </div>
                <p className="mb-6 text-sm text-muted-foreground">{card.blurb}</p>
                <ul className="flex flex-col gap-6">
                  {card.items.map((item) => (
                    <li key={item.q} className="group">
                      <span className="block font-bold uppercase italic text-foreground transition-colors group-hover:text-safety-red">
                        {item.q}
                      </span>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.a}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 whitespace-pre-line border border-border bg-industrial p-6 font-mono text-sm leading-relaxed text-safety-yellow">
            {`// try it:

const userAge = Number(prompt("Enter your age:"));

if (userAge >= 16) {
  document.getElementById("answer").innerText = "Safety check passed";
} else {
  alert("Ask a trained person for help");
}`}
          </div>
        </div>
      </section>

      {/* Team Credits */}
      <section id="team" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-extrabold uppercase italic">
            Team Credits
          </h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.photo.url}
                  alt={member.name}
                  className="mb-3 aspect-square w-full border border-border bg-card object-cover"
                />
                <p className="truncate text-xs font-bold uppercase">{member.name}</p>
                <p className="mt-1 text-[10px] uppercase tracking-tighter text-muted-foreground">
                  {member.roles}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-8 border-safety-yellow bg-industrial px-6 py-8 text-industrial-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <span className="font-mono text-sm tracking-tighter text-white/40">
            [SYSTEM_ACTIVE_TLE_IA_2026]
          </span>
          <p className="text-center text-[10px] uppercase tracking-widest">
            Safe tools, safe hands, safe projects. Industrial Arts Department.
          </p>
          <div className="flex gap-4">
            <div className="size-4 bg-safety-red" />
            <div className="size-4 bg-safety-yellow" />
            <div className="size-4 bg-white" />
          </div>
        </div>
      </footer>
    </div>
  );
}
