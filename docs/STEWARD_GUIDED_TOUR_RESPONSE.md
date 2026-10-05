# Response to the guided-path steward request

The September 25, 2026 OutageBond Projects submission received an action-needed request: “Introduced a guided path to experience how it works. otherwise, no other issue for now.”

The app now has a prominent **Take the guided tour** entry on the homepage, a **Guided tour** primary navigation link, and a five-step read-only route at https://outagebond.vercel.app/tour. The route starts at committed coverage, walks through the exact two-source claim, explains the validator outcome, links to the finalized native credit evidence, and contrasts below-threshold and unavailable-evidence results. Each step states what the reviewer should check, its expected outcome, and a direct public record link. Records open in a new tab so the visitor can return to the same step. No wallet, signature, or transaction is needed.

Suggested Portal response (under 1,000 characters):

> Added a guided, read-only path directly in OutageBond. Start at https://outagebond.vercel.app/tour or use “Take the guided tour” on the homepage. Five steps lead from fixed coverage ob-4 through the exact two-source claim obc-2, GenLayer’s ELIGIBLE decision, finalized 0.001 test-GEN native payout evidence, and two non-paying outcomes: obc-3 INELIGIBLE and obc-4 UNVERIFIABLE. Each step links to the public record, tells the reviewer what to check, and gives the expected result. No wallet or transaction is needed. The tour clearly labels its incident reports as synthetic and demo-author controlled; the StudioNet contract and settlement evidence are unchanged.

Suggested reviewer path: open the guided tour; advance through each step and inspect the linked public record in a new tab. The [submission guide](OUTAGEBOND_SUBMISSION.md) and [acceptance journal](../deployments/outage_bond_acceptance.json) contain further verification details.
