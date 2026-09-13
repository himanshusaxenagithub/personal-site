---
title: "Nothing runs until a person types their name"
description: "Why every check ships unreviewed, why a name freezes a fingerprint, and why a model must not execute."
pubDate: 2026-09-13
source: "Essay 5 of 10"
series: "stig-essays"
seriesOrder: 5
tags: ["STIG", "security", "public interest"]
---

A checklist you cannot see is not a public baseline. A command you did not read is not an inspection. This tool’s safety model is simple: a person approves each check, by name, before it runs. The website never does that for you.

The Defense Information Systems Agency (DISA) writes STIG check text as prose for a human inspector. Someone still has to turn that prose into a command a computer can run. That translation can be wrong in a quiet way. A command might measure a related setting and still return a clean number. If the tool then prints “pass,” the error is invisible. The design here assumes authoring is untrusted — whether a person drafted the command or a language model did. Trust starts at review, not at generation.

Every check this project ships is therefore unreviewed. That is not an unfinished feature. An approval is worthless if it was not made by the person accountable for the machine. When you download a scanner from [stig.hsaxena.com](https://stig.hsaxena.com), the zip already knows which rules you ticked. It does not mark those checks approved. The local page will show them as unread. You read the command. You type your name. Only then may that check run.

<ol class="steps">
  <li><span class="step-n">1</span> Tick rules on the hosted page. Nothing is approved yet.</li>
  <li><span class="step-n">2</span> Download a zip. Scanning stays on that computer.</li>
  <li><span class="step-n">3</span> Read each command. Confirm it only looks.</li>
  <li><span class="step-n">4</span> Type your name. That freezes a fingerprint of the exact bytes.</li>
  <li><span class="step-n">5</span> Only then may the check run — or the safety gate refuses it.</li>
</ol>

<figure class="essay-figure" aria-hidden="false">
<svg viewBox="0 0 720 118" role="img" aria-labelledby="gate-title gate-desc">
  <title id="gate-title">Human approval gate</title>
  <desc id="gate-desc">Unreviewed check, then a person reads and types a name, then a fingerprint freeze, then either a read-only run or a refusal.</desc>
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" opacity="0.45"/>
    </marker>
  </defs>
  <rect x="8" y="28" width="128" height="62" rx="10" fill="var(--bg-elevated)" stroke="var(--rule)"/>
  <text x="72" y="55" text-anchor="middle" font-size="13" fill="currentColor">Unreviewed</text>
  <text x="72" y="74" text-anchor="middle" font-size="11" fill="var(--ink-muted)">does not run</text>
  <line x1="140" y1="59" x2="168" y2="59" stroke="currentColor" opacity="0.45" marker-end="url(#arrow)"/>
  <rect x="172" y="28" width="148" height="62" rx="10" fill="var(--bg-elevated)" stroke="var(--accent)"/>
  <text x="246" y="55" text-anchor="middle" font-size="13" fill="currentColor">Person types name</text>
  <text x="246" y="74" text-anchor="middle" font-size="11" fill="var(--ink-muted)">reads the command</text>
  <line x1="324" y1="59" x2="352" y2="59" stroke="currentColor" opacity="0.45" marker-end="url(#arrow)"/>
  <rect x="356" y="28" width="148" height="62" rx="10" fill="var(--bg-elevated)" stroke="var(--rule)"/>
  <text x="430" y="55" text-anchor="middle" font-size="13" fill="currentColor">Fingerprint</text>
  <text x="430" y="74" text-anchor="middle" font-size="11" fill="var(--ink-muted)">SHA-256 of the bytes</text>
  <line x1="508" y1="59" x2="536" y2="59" stroke="currentColor" opacity="0.45" marker-end="url(#arrow)"/>
  <rect x="540" y="28" width="172" height="62" rx="10" fill="var(--bg-elevated)" stroke="var(--rule)"/>
  <text x="626" y="55" text-anchor="middle" font-size="13" fill="currentColor">Look, or refuse</text>
  <text x="626" y="74" text-anchor="middle" font-size="11" fill="var(--ink-muted)">never a silent change</text>
</svg>
<p class="figure-note">Jordan Hale in the example run is a fictional reviewer. On a real machine you type a real name.</p>
</figure>

The name is not decoration. Approval records a fingerprint — a SHA-256 digest — over the fields that decide what executes: the identifier, the mode, the command, the comparison, the expected value, and whether privilege is required. If any of those bytes change later, the digest no longer matches. The check is treated as drifted and refused. The signature always refers to specific text a human actually saw. That is what makes an AI-assisted authoring loop auditable. “A model helped write this” is a provenance note. “Jordan Hale approved these exact bytes on Tuesday” is evidence.

Jordan Hale, in the [example run](https://stig.hsaxena.com/demo.html), is a fictional reviewer. On a real machine you type a real name. The program will not invent one. It will not approve a batch because you clicked a banner. It will not run a check that has no command — some DISA rules are a GUI inspection or an interview, and those stay manual. It will not run a check the safety gate rejects. Two rules have to hold at once: every executable named in the command is on a read-only allowlist, and no forbidden construct appears. Writes, network clients, privilege escalation, and destructive verbs are refused. Approval is permission to look, not permission to change.

Why be this strict for a school MacBook? Because the alternative is a tool that is convenient and unaccountable. A coordinator under time pressure will click “run all.” A language model will happily produce a command that looks right. If those two facts meet without a gate, the machine is no longer being inspected. It is being driven by text nobody can defend. Public-interest software that touches education and care systems should fail closed. Unreviewed means it does not run. Drifted means it does not run. Unsafe means it does not run. The report must then say that those rules were not evaluated. Silence is not a pass. That honesty is the subject of the next essay; the gate is what makes the honesty possible.

There is a second reason for a typed name: organisations without a security team still have people. The office manager, the volunteer technician, the one teacher who “knows computers” — they are the accountability layer. Asking them to read a short command and put a name on it treats them as adults. Hiding the command behind a green button treats them as a risk to be automated away. The second approach is how tools earn distrust. The first approach is slower. It is also how you can later answer “who decided this was safe to run?” without guessing.

The website cannot take that responsibility even if it wanted to. It is static files on GitHub Pages. It never sees the MacBook. It never receives a name. The banner on the start page is literal: this website does not scan your machine and never will. Checks stay unreviewed until a person types their name on the computer they downloaded. That split is easy to skip in a demo video. It is the whole product. Hosted pages explain and package. Local code inspects. Humans approve.

<div class="callout">
<p class="callout-label">What never happens in the browser</p>
<p>stig.hsaxena.com does not scan, does not collect a name, and does not approve a check. Approval is a local act on the machine you chose to inspect.</p>
</div>

AI has a defined place in this picture and a defined exclusion. A model may help write a plain-English summary or draft a candidate check offline. It does not approve. It does not execute. The skill files in this repository tell assistants the same rule, and the scanner enforces it. That is not hostility to automation. It is a boundary that belongs in any tool offered as public infrastructure. If a later “harden” module ever writes a fix script, the same boundary should apply: a person reads the change, types a name, and accepts a frozen fingerprint. Until that work exists, this release only looks.

If you take one practice from this essay, take this: do not run a check you have not read, and do not let a page in a browser pretend it read one for you. DISA’s public checklists are worth using. They are not worth using blindly. A typed name is a small ritual. It is also the difference between a scan you can stand behind and a black box you cannot explain to a director, a parent, or yourself.

Next: [Silence is not compliance](/writing/coverage-honesty-in-security-reports/).

The free STIG Checker tool — pick a computer, read the rules, download a local scanner — lives at [stig.hsaxena.com](https://stig.hsaxena.com).
