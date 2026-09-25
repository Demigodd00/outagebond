# OutageBond

<img src="docs/assets/outagebond/outagebond-logo.png" alt="OutageBond logo" width="128" height="128" />

GenLayer-native service-outage bonds with validator-verified claim eligibility and native test-GEN payouts.

[Live app](https://outagebond.vercel.app) · [Reviewer guide](docs/OUTAGEBOND_SUBMISSION.md) · [StudioNet contract](https://explorer-studio.genlayer.com/address/0x2893BfB51B80A3ABEE168732f1B3bF86Cde08082) · [CI](https://github.com/Demigodd00/outagebond/actions/workflows/outagebond.yml)

## What it does

A provider escrows test GEN against immutable service, beneficiary, duration, coverage and payout terms. The named beneficiary submits a completed incident window and two public report URLs. GenLayer validators independently fetch both reports, extract structured facts with LLMs, and check agreement on the derived eligibility verdict as well as the evidence interval. An eligible claim makes the fixed payout collectable by its beneficiary; no administrator chooses settlement.

The contract rejects uncovered intervals, threshold-straddling evidence, cross-day replay and duplicate collection. Permissionless expiry releases stalled claim reservations. The frontend binds finalized results to the original submission and preserves uncertain transactions across timeouts and reloads.

**Experimental StudioNet demo, not production insurance.** Test GEN has no monetary value. The published demo reports are synthetic and controlled by the demo author; different hosts do not establish independent organizations or real outage evidence. See [limitations and review findings](docs/OUTAGEBOND_REVIEW.md).

## Review the deployed release

| Item | Link |
| --- | --- |
| Live app | https://outagebond.vercel.app |
| Finalized protocol status | https://outagebond.vercel.app/status |
| Contract source | [contracts/outage_bond.py](contracts/outage_bond.py) |
| Frontend source | [apps/outagebond-web](apps/outagebond-web) |
| Paid synthetic claim | [obc-2: PAID, 0.001 test GEN](https://outagebond.vercel.app/claims/obc-2) |
| Below-threshold claim | [obc-3: INELIGIBLE](https://outagebond.vercel.app/claims/obc-3) |
| Unavailable-source claim | [obc-4: UNVERIFIABLE](https://outagebond.vercel.app/claims/obc-4) |
| Native transfer and failure evidence | [Public acceptance journal](deployments/outage_bond_acceptance.json) |
| Submission logo | [PNG, 1254 x 1254, under 2 MB](docs/assets/outagebond/outagebond-logo.png) |

No wallet is needed to inspect the existing cases. The acceptance journal checks successful execution, native child-transfer credit and recipient balance changes, not just transaction status. The earlier inconclusive claim is retained and disclosed in the reviewer guide.

Release: `0.2.0-studionet`. Chain ID: `61999`. Contract: `0x2893BfB51B80A3ABEE168732f1B3bF86Cde08082`.

## Run locally without deploying a new contract

Use Python 3.12, Node.js 22 and pnpm 11.19.0.

```sh
git clone https://github.com/Demigodd00/outagebond.git
cd outagebond
python -m pip install -r requirements-deploy.txt
python scripts/prepare_gltest_runner.py
genvm-lint check contracts/outage_bond.py
python -m pytest tests/direct/ -v
cd apps/outagebond-web
pnpm install --frozen-lockfile
```

Create `apps/outagebond-web/.env.local` with these public configuration values:

```dotenv
NEXT_PUBLIC_OUTAGEBOND_ADDRESS=0x2893BfB51B80A3ABEE168732f1B3bF86Cde08082
NEXT_PUBLIC_NETWORK_NAME=StudioNet
```

From `apps/outagebond-web`:

```sh
pnpm test
pnpm typecheck
pnpm build
pnpm dev
```

The direct suite contains 18 lifecycle/regression tests; the frontend suite contains 10 tests. They do not replace live consensus testing or an external security audit. [Release instructions](docs/OUTAGEBOND_RELEASE.md) cover optional deployment and live acceptance writes. Do not redeploy merely to inspect the existing release, and never publish private test-wallet files.

## Repository provenance

This dedicated repository extracts OutageBond from the public portfolio release at commit `3c810f92225a00db0c9624d009afd48eb7eaf920`. Contract and frontend runtime source are unchanged. The existing deployment and acceptance records retain their original transaction hashes, source commit references and historical CI links; see [migration provenance](docs/REPOSITORY_MIGRATION.md).

The live website and immutable StudioNet contract were not replaced by this repository extraction. Hosting records describe the existing Vercel deployment; no migration of its Git integration is implied.

## License

Copyright (c) 2026 demigodd00. All rights reserved. The existing [proprietary license](LICENSE) is retained; public review access is not an open-source license.
