# SOVRAIL AI
## Sovereign AI Execution Intelligence & Control Layer

SOVRAIL AI is Wilkerson Collective's sovereign control layer between AI agents/apps and the models, APIs, MCP servers, SDK services, local compute, and machine-to-machine resources they use.

## Core promise
**Trust the work. Reuse what is already solved. Choose the best execution path by total outcome cost. Compare providers and model gears with evidence. Recover without starting over.**

SOVRAIL does not bypass third-party authorization or pricing. It reduces avoidable cost and operational risk by centralizing credentials, reusing safe prior work, preventing duplicate calls, preserving warm session/context value, preferring local/private execution when appropriate, controlling budgets, and selecting among approved resources.

## Defensible architecture
- **SWARMER** — capability supply-chain trust, continuous revalidation, permissions, and consequential action authorization.
- **SOVRAIL Total Execution Cost Intelligence** — optimizes expected cost per successful outcome rather than cheapest token price.
- **Adaptive Recipe Memory** — designed to reuse safe portions of recurring workflows instead of restarting every job from zero.
- **GearShift Model Comparison** — optional Gear 1 / Gear 3 / Gear 5 comparison of model tiers. Actual answer comparisons are generated only by controlled measured runs; estimates are labeled as estimates.
- **Provider Sparring** — controlled comparison of approved provider/model combinations for the same task, scoring quality, success, cost, latency, cache efficiency, reliability, and tool fit.
- **Autonomous Benchmark Learning** — on-demand comparison plus selective automatic re-benchmarking when models, pricing, reliability, latency, or observed quality materially change.
- **Session-aware routing** — considers context reload and cache loss before changing providers/models.
- **Sovereign execution** — local/self-hosted/private/cloud/commercial routes under one policy boundary.
- **Correlated-outage mode** — protects work and favors approved resilient routes when cloud providers fail.
- **KAMERON** — trusted checkpoint and recovery layer for interrupted execution.

## GearShift + Provider Sparring
A user can ask: “I'm currently in Gear 5. What would happen if this task ran in Gear 3 or Gear 1?” They can also ask: “Would another approved provider actually do this type of work better?”

For an **actual** comparison, SOVRAIL runs the same controlled task under equivalent conditions on the selected candidates and reports output, latency, direct cost, total expected successful-outcome cost, task-specific quality evaluation, cache/context effects, reliability, and tool fit. It does not invent hypothetical answers for models/providers that were not run.

In autonomous mode, SOVRAIL remembers the strongest measured provider/model profile for recurring task classes and re-tests only when the evidence becomes stale or material drift is detected. This prevents benchmarking itself from becoming wasteful.

## Why this is different
Routing, MCP support, caching, budgets, and observability are becoming standard gateway features. SOVRAIL is designed above that commodity layer: **trust + reusable computation + outcome economics + model GearShift + provider sparring + autonomous benchmark learning + sovereignty + recovery.**

## Standalone and embedded
SOVRAIL remains independently deployable and sellable. It is also the default WCL execution layer for applicable products operating multiple agents, models, APIs, MCPs, or persistent workflows.

## Primary buyers
AI-native startups, SaaS companies, enterprise AI/platform teams, CIO/CTO/CISO organizations, regulated businesses, agencies, government, and any organization with meaningful agent/API/model spend.

See `docs/DEFENSIBLE_MOAT.md` for the current product moat, `src/execution-intelligence.js` for total-outcome economics, and `src/provider-sparring.js` for provider/model benchmarking.
