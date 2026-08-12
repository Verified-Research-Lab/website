---
title: "How verification works"
seoTitle: "Computational claim verification method"
description: "See how VRL turns a research claim and its artifacts into a traceable, bounded conclusion."
intro: "The claim, decision, test conditions, and tolerances are fixed before we examine the result."
visual:
  src: "/images/methods-evidence-workflow.webp"
  alt: "A computational researcher compares a paper, repository, execution notes, and result plots."
  caption: "Connecting the claim, research artifact, execution record, and observed result."
terms:
  - title: "Reproduction"
    text: "Re-execute the reported work using the supplied artifact or a reconstructed equivalent, recording material deviations."
  - title: "Replication"
    text: "Test the same claim with an independently constructed implementation, dataset, or experimental design."
stages:
  - title: "Define the claim"
    text: "Record the claim, the decision it informs, tolerances, conditions, and exclusions."
    client: "You identify the result or decision that matters. We turn it into a testable statement and agree on what would count as support, failure, or an inconclusive result."
  - title: "Preserve the evidence"
    text: "Preserve code, data, versions, provenance, access conditions, and known gaps."
    client: "You provide the available paper, repository, data, environment, and access constraints. We record what was received and preserve the versions used."
  - title: "Reconstruct and reproduce"
    text: "Rebuild the environment, record deviations, and compare outputs with declared tolerances."
    client: "We first work from the supplied instructions. Requests for assistance and material deviations are logged so the record shows what an independent evaluator could and could not do."
  - title: "Audit the method"
    text: "Inspect baselines, workloads, measurement, statistics, exclusions, and validity threats."
    client: "The review follows the evidence behind the claim, including comparison choices that may make a reported advantage appear stronger or weaker."
  - title: "Test the boundaries"
    text: "Vary reasonable parameters, workloads, datasets, environments, and cost assumptions."
    client: "Sensitivity tests are selected for their ability to change the conclusion, not to produce a larger volume of experiments."
  - title: "State the conclusion and limits"
    text: "Report the result, uncertainty, limits, review status, and revalidation trigger."
    client: "You receive a conclusion tied to the tested conditions, with unresolved questions and the circumstances that would require revalidation."
labelGroups:
  - title: "Artifact"
    text: "What materials were found and whether they could be used."
    labels: ["Identified", "Available", "Functional"]
  - title: "Examination"
    text: "Which forms of independent testing were completed."
    labels: ["Reproduced", "Method audited", "Robustness tested", "Independently corroborated"]
  - title: "Conclusion"
    text: "How far the observed evidence supports the claim."
    labels: ["Supported within tested conditions", "Not reproduced", "Inconclusive"]
clientInputs:
  - title: "What you provide"
    text: "The paper or claim, available artifacts, expected results, access constraints, and the decision or publication context."
  - title: "Where scope is fixed"
    text: "Before execution, the test plan records claims, conditions, tolerances, exclusions, publication terms, and how assistance will be logged."
  - title: "What happens before publication"
    text: "The subject may correct factual errors and submit a response. The method and conclusion remain under independent control."
---
