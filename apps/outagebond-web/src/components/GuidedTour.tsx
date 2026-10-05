"use client";

import Link from "next/link";
import { useState } from "react";

const steps = [
  {
    kicker: "01 / COMMIT THE TERMS",
    title: "See what the provider locked in",
    description: "Open coverage ob-4. The provider fixed the named beneficiary, minimum outage duration, payout per claim and collateral before any incident was submitted. Check the 60-second threshold and 0.001 test-GEN payout.",
    inspect: "Who can claim? What duration qualifies? How much collateral is still available?",
    href: "/coverage/ob-4",
    action: "Inspect coverage ob-4",
    expected: "A registered coverage record with immutable terms and one paid claim.",
  },
  {
    kicker: "02 / PIN THE EVIDENCE",
    title: "Follow the exact incident claim",
    description: "Open claim obc-2. The beneficiary submitted a completed 90-second incident window and two public report URLs. The claim page shows the submitted window and the source readings that validators accepted.",
    inspect: "Do both source readings match the service and region? Are their outage intervals inside coverage?",
    href: "/claims/obc-2",
    action: "Inspect claim obc-2",
    expected: "Two readable source cards with matching outage facts and an ELIGIBLE consensus result.",
  },
  {
    kicker: "03 / CHECK THE DECISION",
    title: "See why the claim qualified",
    description: "On obc-2, compare the two source cards with the consensus banner. GenLayer validators fetched the URLs independently. The contract derived eligibility from both readings; agreement on raw times alone would not be enough near the duration threshold.",
    inspect: "Does each reading imply the same eligibility decision under the fixed 60-second minimum?",
    href: "/claims/obc-2",
    action: "Compare verdict and readings",
    expected: "An ELIGIBLE decision, the stored reason and two qualifying source classifications.",
  },
  {
    kicker: "04 / VERIFY THE PAYOUT",
    title: "Trace the native test-GEN credit",
    description: "The beneficiary collected the fixed payout and obc-2 is PAID. The public acceptance journal records the finalized payout, its native child transfer and the beneficiary balance increasing by 0.001 test GEN.",
    inspect: "Was the native transfer actually credited, rather than merely submitted? Did a second payout fail?",
    href: "https://github.com/Demigodd00/outagebond/blob/main/deployments/outage_bond_acceptance.json",
    action: "Open payout evidence",
    expected: "value_credited=true, the recipient balance delta and rejected duplicate collection.",
  },
  {
    kicker: "05 / TEST THE LIMITS",
    title: "Compare two claims that did not pay",
    description: "Claim obc-3 describes only 30 seconds against a 60-second minimum, so it is INELIGIBLE. Claim obc-4 had unavailable sources; after three committed attempts it became UNVERIFIABLE. Both released their reservations instead of paying.",
    inspect: "Can you distinguish evidence that proves a short outage from evidence that cannot support a decision?",
    href: "/claims/obc-3",
    action: "Inspect short claim obc-3",
    secondHref: "/claims/obc-4",
    secondAction: "Inspect unavailable claim obc-4",
    expected: "INELIGIBLE and UNVERIFIABLE are separate outcomes; neither paid a beneficiary.",
  },
] as const;

function RecordLink({ href, label }: { href: string; label: string }) {
  return href.startsWith("/")
    ? <Link className="button button-primary" href={href} target="_blank" rel="noopener noreferrer">{label} ↗</Link>
    : <a className="button button-primary" href={href} target="_blank" rel="noopener noreferrer">{label} ↗</a>;
}

export default function GuidedTour() {
  const [index, setIndex] = useState(0);
  const step = steps[index];

  return <section className="tour-page" aria-labelledby="tour-title">
    <div className="tour-intro">
      <p className="eyebrow">GUIDED LIVE RECORD TOUR</p>
      <h1 id="tour-title">Experience an outage claim, step by step.</h1>
      <p>Follow one finalized StudioNet payout from coverage to evidence to native credit, then compare two cases that did not pay. Each link opens the actual public record in a new tab so you can keep your place here.</p>
      <div className="tour-facts"><span>About 5 minutes</span><span>No wallet needed</span><span>No transaction required</span></div>
    </div>

    <aside className="tour-disclosure"><strong>These are synthetic test cases.</strong> Both report pages are controlled by the demo author on separate public hosts. The tour demonstrates live validator execution and test-GEN settlement; it does not establish a real outage or independent source ownership.</aside>

    <div className="tour-layout">
      <nav className="tour-rail" aria-label="Tour steps">
        {steps.map((item, position) => <button key={item.kicker} type="button" className={position === index ? "active" : ""} aria-current={position === index ? "step" : undefined} onClick={() => setIndex(position)}><span>{String(position + 1).padStart(2, "0")}</span><strong>{item.title}</strong></button>)}
      </nav>

      <article className="tour-card" aria-live="polite">
        <div className="tour-progress"><span>Step {index + 1} of {steps.length}</span><div className="tour-progress-track"><span style={{ width: `${((index + 1) / steps.length) * 100}%` }} /></div></div>
        <p className="eyebrow">{step.kicker}</p>
        <h2>{step.title}</h2>
        <p className="tour-description">{step.description}</p>
        <div className="tour-question"><small>WHAT TO CHECK</small><p>{step.inspect}</p></div>
        <div className="tour-record-actions"><RecordLink href={step.href} label={step.action} />{"secondHref" in step ? <RecordLink href={step.secondHref} label={step.secondAction} /> : null}</div>
        <p className="tour-expected"><strong>Expected result</strong>{step.expected}</p>
        <div className="tour-controls"><button type="button" className="button button-secondary" onClick={() => setIndex((current) => Math.max(0, current - 1))} disabled={index === 0}>← Previous</button>{index < steps.length - 1 ? <button type="button" className="button button-secondary" onClick={() => setIndex((current) => Math.min(steps.length - 1, current + 1))}>Next step →</button> : <Link className="button button-secondary" href="/status">View protocol status ↗</Link>}</div>
      </article>
    </div>
    <p className="tour-footnote">The tour is read-only. It does not submit a new claim or repeat a payout. <Link href="/how-it-works">Read the full protocol guide ↗</Link></p>
  </section>;
}
