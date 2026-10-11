"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { CONTRACT_READY, formatGen, listCoverages, type Coverage } from "@/lib/contract";

function dateLabel(unix: string): string {
  const value = Number(unix);
  return Number.isFinite(value) ? new Date(value * 1000).toLocaleDateString(undefined, { month: "short", day: "numeric" }) : "—";
}

export default function OutageBondApp() {
  const [coverages, setCoverages] = useState<Coverage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const refresh = useCallback(async () => {
    if (!CONTRACT_READY) { setLoading(false); return; }
    try { setCoverages(await listCoverages()); setError(""); }
    catch (reason) { setError(reason instanceof Error ? reason.message : String(reason)); }
    finally { setLoading(false); }
  }, []);

  useEffect(() => {
    void refresh();
    const timer = window.setInterval(() => { if (!document.hidden) void refresh(); }, 15000);
    return () => window.clearInterval(timer);
  }, [refresh]);

  return <>
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow"><span className="pulse-dot" />PRE-FUNDED OUTAGE COMPENSATION · GENLAYER STUDIONET</p>
        <h1>When service<br /><em>goes dark.</em></h1>
        <p className="hero-summary"><strong>OutageBond lets a service provider pre-fund a payout for a named customer.</strong> If the service goes down long enough, GenLayer validators check two public reports against the rule. An eligible customer can then collect.</p>
        <div className="hero-actions"><a className="button button-primary button-large" href="#introduction">What is OutageBond? <span>↓</span></a><Link className="button button-secondary button-large" href="/tour">See a real test case ↗</Link></div>
        <p className="environment-note">No wallet needed to explore. {CONTRACT_READY ? "Transactions use StudioNet test GEN, which has no monetary value." : "Preview mode · transactions remain disabled until deployment."}</p>
      </div>
      <div className="hero-visual" aria-label="Example: a 90-second outage exceeds a 60-second minimum and qualifies for a pre-funded payout">
        <div className="visual-orbit orbit-a" /><div className="visual-orbit orbit-b" />
        <div className="event-card">
          <div className="event-top"><span><i /> SYNTHETIC TEST INCIDENT</span><small>EXAMPLE FROM CLAIM OBC-2</small></div>
          <strong className="event-title">Covered API outage</strong>
          <div className="timeline"><span /><span /><span /><span className="active" /><span className="active" /><span className="active" /><span /><span /></div>
          <div className="event-window"><span>Minimum: 60 sec</span><b>90 sec outage</b><span>Qualifies</span></div>
          <div className="source-pair"><div><small>REPORT HOST 1</small><strong>Outage confirmed</strong></div><div><small>REPORT HOST 2</small><strong>Outage confirmed</strong></div></div>
        </div>
        <div className="consensus-chip"><span>✓</span><div><small>FINAL OUTCOME</small><strong>0.001 test GEN paid</strong></div></div>
        <div className="evidence-chip"><small>REPORTS AGREE · RULE MET</small><strong>GenLayer validator decision</strong></div>
      </div>
    </section>

    <section id="introduction" className="introduction" aria-labelledby="introduction-title">
      <div className="introduction-heading"><p className="eyebrow">START HERE</p><h2 id="introduction-title">What is OutageBond?</h2><p>It is an outage-compensation app, not an outage-monitoring dashboard. A service provider can offer a named customer a fixed payment if a covered service is unavailable for long enough. The provider puts the funds into a GenLayer contract first, so the promise is backed before anyone files a claim.</p></div>
      <div className="introduction-cards">
        <article><span>FOR PROVIDERS</span><h3>Make a funded promise</h3><p>Choose the service, customer, minimum outage length, payout, and number of claims. Lock enough test GEN to cover those promises.</p></article>
        <article><span>FOR CUSTOMERS</span><h3>Claim after an outage</h3><p>If the service goes down, submit the time window and two public report links. You do not have to rely on the provider to approve your claim.</p></article>
        <article><span>FOR EVERYONE</span><h3>Check the result</h3><p>GenLayer validators read both pages and apply the same rule. A qualifying claim reserves a payout; the customer collects it. Short or unverified claims do not pay.</p></article>
      </div>
      <div className="introduction-example"><div><span className="eyebrow">A CONCRETE EXAMPLE</span><h3>60-second minimum. 90-second outage. 0.001 test GEN paid.</h3><p>Our synthetic StudioNet case shows the full path: coverage was funded, two reports described the same outage, validators found the claim eligible, and the customer collected the pre-funded payout. The reports are demo-author controlled; this is a product demonstration, not proof of a real-world outage.</p></div><Link className="button button-primary" href="/tour">Walk through this case ↗</Link></div>
    </section>

    <section className="value-strip" aria-label="Protocol guarantees">
      <div><span>01</span><strong>Two distinct report hosts</strong></div>
      <div><span>02</span><strong>Threshold result must agree</strong></div>
      <div><span>03</span><strong>Escrow and payout onchain</strong></div>
    </section>

    <section className="how-grid">
      <div><p className="eyebrow">THE CLAIM FLOW</p><h2>From promise to payout.</h2><p>The provider commits the terms before an incident. The customer submits a completed outage and two public report links. Validators check the reports against the terms; only an eligible claim can be collected.</p><Link href="/tour" className="text-link">Walk through the live test case ↗</Link><br /><Link href="/how-it-works" className="text-link">Read the detailed protocol ↗</Link></div>
      <div className="flow-list"><div><span>01</span><p><strong>Provider creates coverage</strong><small>Names the customer and funds the promised payout before an outage.</small></p></div><div><span>02</span><p><strong>Customer files a claim</strong><small>Submits the outage window and two public report URLs.</small></p></div><div><span>03</span><p><strong>Validators check the reports</strong><small>They fetch both pages and must agree that the coverage rule is met.</small></p></div><div><span>04</span><p><strong>Customer collects, if eligible</strong><small>Short or unverified incidents do not pay; reserved funds are released.</small></p></div></div>
    </section>

    <section id="coverage" className="coverage-section">
      <div className="section-heading"><div><p className="eyebrow">REGISTERED COVERAGE</p><h2>Service commitments</h2></div><span className="count-label">{loading ? "Reading finalized state…" : `${coverages.length} shown · newest first`}</span></div>
      <p className="panel-copy">Records named “OutageBond Synthetic API” are acceptance fixtures, not real outages. Their reports are both demo-author controlled, even though they use different public hosts.</p>
      {!CONTRACT_READY ? <div className="empty-card"><div className="empty-icon">◌</div><h3>Contract address not configured</h3><p>The frontend is ready for StudioNet. After deploying the OutageBond contract, set <code>NEXT_PUBLIC_OUTAGEBOND_ADDRESS</code> to its recorded address.</p><Link className="button button-secondary" href="/status">View release status</Link></div>
        : error ? <div className="empty-card"><h3>Could not read StudioNet</h3><p>{error}</p><button className="button button-secondary" onClick={() => void refresh()}>Retry read</button></div>
          : !coverages.length && !loading ? <div className="empty-card"><div className="empty-icon">⌁</div><h3>No coverage registered yet</h3><p>Start with a service, a named beneficiary, an outage threshold, and enough test GEN to fund the claim slots.</p><Link className="button button-primary" href="/coverage/new">Register coverage</Link></div>
            : <div className="coverage-grid">{coverages.map((coverage) => <article className="coverage-card" key={coverage.id}>
              <div className="card-eyebrow"><span className={`status-dot ${coverage.closed ? "closed" : ""}`} />{coverage.closed ? "CLOSED" : coverage.can_submit ? "ACCEPTING CLAIMS" : "CAPACITY RESERVED"}<span className="mono">{coverage.id}</span></div>
              <h3>{coverage.service_name}</h3><p>{coverage.service_url} · {coverage.region}</p>
              <div className="coverage-metrics"><div><small>PER INCIDENT</small><strong>{formatGen(coverage.payout_atto)} <i>GEN</i></strong></div><div><small>MINIMUM OUTAGE</small><strong>{Math.ceil(Number(coverage.min_outage_secs) / 60)} <i>MIN</i></strong></div><div><small>CLAIMS</small><strong>{coverage.claims_submitted} / {coverage.max_claims}</strong></div></div>
              <div className="card-bottom"><span>Ends {dateLabel(coverage.ends_at_unix)}</span><Link href={`/coverage/${encodeURIComponent(coverage.id)}`}>Open coverage <b>↗</b></Link></div>
            </article>)}</div>}
    </section>

  </>;
}
