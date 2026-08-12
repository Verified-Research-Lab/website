---
title: "Reports and evidence"
seoTitle: "Computational verification reports"
description: "See how a VRL report connects a specified claim to test conditions, evidence, limits, responses, and correction history."
intro: "No completed evaluations have been published yet. The structure below shows what every public VRL report is designed to make reviewable."
recordFields:
  - "Exact claims and exclusions"
  - "Sponsor and conflicts"
  - "Methods, evidence, and limitations"
  - "Subject response and evaluator reply"
  - "Version, corrections, and revalidation status"
anatomy:
  - title: "Claim and boundary"
    text: "The exact statement tested, the decision or publication context, material tolerances, and explicit exclusions."
  - title: "Evidence record"
    text: "Materials received, versions, environment, assistance, deviations, execution record, and observed results."
  - title: "Independent finding"
    text: "What reproduced, what survived independent testing, what failed, and what remains uncertain."
  - title: "Accountability record"
    text: "Sponsor, conflicts, reviewer sign-off, subject response, corrections, and current revalidation status."
sample:
  claim: "System A reduces median request latency relative to the stated baseline under the reported workload."
  test: "Reconstruct both systems from archived versions, match hardware and resource limits, rerun the reported workload, then vary concurrency and dataset size."
  finding: "The direction of the reported result was observed under the specified workload. The size of the advantage narrowed under resource parity and did not extend to the two additional workloads tested."
  limit: "This illustrative excerpt demonstrates report language only. It is not a finding about a real system or completed VRL evaluation."
---
