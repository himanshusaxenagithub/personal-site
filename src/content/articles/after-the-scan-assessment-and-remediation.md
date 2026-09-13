---
title: "After the scan: assessment and safe remediation"
description: "What this release already does, and why later modules still need a human before any fix script runs."
pubDate: 2026-09-13
source: "Essay 10 of 10"
series: "stig-essays"
seriesOrder: 10
tags: ["STIG", "security", "public interest"]
---

A scan answers “what is true on this machine, among the rules we judged?” It does not write the plan, and it does not apply the fix. Those are later modules. They should stay behind the same human gate.

This project is organised as a short pipeline. stig-prep turns a Defense Information Systems Agency (DISA) STIG (the official XCCDF package) into checklists a person can sort — Markdown, JSON, CSV — and attaches the filed plain-English notes when you ask. stig-scan runs human-approved, content-frozen checks against the local system and writes JSON, Markdown, and a PDF with a coverage line and a remaining-risk story. Both of those modules exist in this release. The website at [stig.hsaxena.com](https://stig.hsaxena.com) is a narrow front door onto the same work for a desk Mac or Windows PC: pick, select, download, approve, report.

Two later modules are planned and not shipped as working products. stig-assess is meant to help a person interpret a scan: draft plain-language findings, group them, and sketch the kind of notes a plan of action would need. In federal practice those notes often live in a POA&M — a Plan of Action and Milestones. A school or clinic does not need the acronym to need the object: a dated list of what failed, who owns it, what will be done, and when. stig-harden is meant to draft remediation commands or scripts for findings that can be safely automated, still with a review gate. Until those modules exist, you assess and fix with your existing tools, using the PDF as the input.

<div class="pipeline" role="list">
  <div class="pipe" role="listitem"><strong>stig-prep</strong><span>Now. Parse a DISA STIG and attach filed English.</span></div>
  <div class="pipe" role="listitem"><strong>stig-scan</strong><span>Now. Named approval, then a coverage-first report.</span></div>
  <div class="pipe planned" role="listitem"><strong>stig-assess</strong><span>Planned. Help write the story of the findings.</span></div>
  <div class="pipe planned" role="listitem"><strong>stig-harden</strong><span>Planned. Draft a fix; still wait for a name.</span></div>
</div>

The order is a safety choice, not a scheduling accident. Assessment without a scan is opinion. Remediation without assessment is a pile of scripts aimed at the wrong machine. Remediation without a human gate is how a “quick harden” locks a clinic out of its only front-desk PC. The FileVault rule’s caution is typical: escrow the recovery key before you enforce encryption. The SSH rules’ cautions are typical: test from a second session before you disable passwords. A tool that applied those fixes because a scan said fail would be a hazard. A tool that drafts the fix, shows the command, and waits for a name is a helper.

What you can do today, after a first CAT I scan, is already enough to be useful. Read the coverage line. If too little was judged, approve more read-only checks and scan again. Read the CAT I failures first. For each one, decide: fix now on this machine, schedule a profile, or accept a documented exception. Write that decision down next to the identifier. Keep the PDF. Re-scan after the change so you have two dated artifacts instead of a recollection. That loop — judge, decide, change, judge again — is assessment and remediation done by hand. The planned modules should make the writing easier, not skip the loop.

<ol class="steps">
  <li><span class="step-n">Today</span> Judge (coverage, then CAT I)</li>
  <li><span class="step-n">Then</span> Decide: fix, schedule, or write an exception</li>
  <li><span class="step-n">Then</span> Change the setting yourself</li>
  <li><span class="step-n">Again</span> Judge with the same approved pack</li>
</ol>

<div class="callout">
<p class="callout-label">The gate does not move</p>
<p>Assessment without a scan is opinion. A fix script without a typed name is a hazard. Later modules should draft; a person still approves.</p>
</div>

A word about exceptions. Not every DISA requirement will fit every classroom or clinic workflow. An exception that is written down, dated, and owned is part of an adult assessment. An exception that is a silent skip in a dashboard is not. This scanner already refuses to count skips as passes. A future assessor should refuse too. If it drafts POA&M-like rows, every row should be able to say “open,” “mitigated,” or “accepted risk,” and none of those words should be inferred from a missing result. Missing means missing.

A word about automation. Some CAT I items in the filed notes are marked automatable and quick-win. Disabling an unused TFTP service is in that neighbourhood. Some are marked config-profile or risky-change. Those should never be the first candidates for a generated script. A harden module that cannot see the triage field would be unsafe by construction. A harden module that can see it and still offers a one-click “fix all” would be unsafe by product design. The public-interest version is boring: draft one change, show the caution, require a name, record a digest, apply only that change, scan again.

None of this is an official Department of Defense remediation service. DISA publishes the guides and, in many cases, the fix text. This project does not speak for DISA. It also does not claim that a generated script is the same as DISA’s fix text. Any later harden output should quote the identifier, show what it will do, and stay optional. Schools and clinics should keep vendor support and backup plans in the loop. A configuration baseline does not replace a tested restore.

National interest, at this end of the pipeline, is completion without recklessness. The United States already has public baselines. It does not need a wave of unattended scripts hitting education and care networks. It does need a path from “we never looked” to “we looked, we wrote down the CAT I misses, we fixed the ones we could, we accepted or scheduled the rest.” Open source can carry that path if each stage stays separable. You can stop after prep and use the tracker in a spreadsheet. You can stop after scan and never generate a fix. You should be able to stop after a drafted assessment and never apply a script. Forced completion is how tools become unwelcome in small organisations.

The roadmap, then, is short enough to print. Today: explain, select, approve, scan, report. Next: help a person write the story of the findings. Later: help a person apply a reviewed change. Always: a typed name, a frozen fingerprint, a coverage line, and no scan in the browser. The [example run](https://stig.hsaxena.com/demo.html) stops at the report on purpose. That is where this release stops. If you want to begin, return to the [start page](https://stig.hsaxena.com), pick a computer, and keep the first pass small. If you want the policy case, start at [the checklists already exist](/writing/why-free-dod-checklists-matter/). The work in the middle is ordinary configuration hygiene, done in public, with the blanks left visible.

All ten essays: [essay list](/writing/). Public site: [https://stig.hsaxena.com](https://stig.hsaxena.com).

The free STIG Checker tool — pick a computer, read the rules, download a local scanner — lives at [stig.hsaxena.com](https://stig.hsaxena.com).
