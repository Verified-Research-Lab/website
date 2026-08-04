---
title: "How verification works"
seoTitle: "Computational claim verification method"
description: "How we reproduce results, replicate claims independently, and report the limits of each conclusion."
intro: "We define the claim and test conditions before examining the code or results."
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
  - title: "Preserve the evidence"
    text: "Preserve code, data, versions, provenance, access conditions, and known gaps."
  - title: "Reconstruct and reproduce"
    text: "Rebuild the environment, record deviations, and compare outputs with declared tolerances."
  - title: "Audit the method"
    text: "Inspect baselines, workloads, measurement, statistics, exclusions, and validity threats."
  - title: "Test the boundaries"
    text: "Vary reasonable parameters, workloads, datasets, environments, and cost assumptions."
  - title: "State the conclusion and limits"
    text: "Report the result, uncertainty, limits, review status, and revalidation trigger."
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
---
