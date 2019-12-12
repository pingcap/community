# Working Group Governance

<!-- vim-markdown-toc GFM -->

* [What is Working Group (WG)?](#what-is-working-group-wg)
* [Relationship between WG and SIG](#relationship-between-wg-and-sig)
* [WG Lifecycle](#wg-lifecycle)
    * [Create](#create)
    * [Dismiss](#dismiss)

<!-- vim-markdown-toc -->

## What is Working Group (WG)?

The **Working Group (WG)** provides a group to allow community contributors to
collaborate for a period of time on an issue. Due to the Working Group usually
solves a problem that spans the scope of responsibility of multiple **Special
Interest Groups (SIGs)**, so it usually consists of members from different SIGs
or some other community contributors. The Working Group usually dismisses after
the problem is solved. And the results or members in the Working Group can be
accepted by the SIG after. For more detailed procedures of creating or
dissmiss, see [WG Lifecycle](#wg-lifecycle).

The Working Group has the following characteristics:

* Does not own the code
* Have clear measurable goals and results that can be delivered
* Is a short-term organization and will be disbanded after the goal or mission is completed

## Relationship between WG and SIG

![Relationship between WG and SIG](../media/wg-sig.png)

The assets owned by the TiDB Project (eg: code, documentation, blogs, regulations, etc.) are owned and managed by SIGs. Except for special assets owned by the Working Group, such as:

* Calendar events
* Slack channel
* Event Progress Report

The Working Group is different from SIGs , the WG aims to:

* Promote collaboration between different SIGs
* Use the smallest organization to resolve some specific problems or solutions.

## WG Lifecycle

### Create

1. Create a `wg-${name}.md` file in [working group directory](../working-groups) (modify `${name}` to your Working Group short name) according to [Working Group template](../working-groups/wg-template.md), and modify the **Active Working Groups** list in the [Working Groups](../working-groups/README.md) page
2. Submit a Pull Request on [pingcap/community](https://github.com/pingcap/community), which is determined by voting by the Maintainer/PMC. The Working Group will be announced after the Pull Request is merged.
3. Create a channel corresponding to the Working Group on [Slack: tidbcommunity.slack.com](tidbcommunity.slack.com).

### Dismiss

* The Working Group can be dismissed by the organizer after mission completed.
* If the Working Group's work has stalled, the PMC can also vote to dismiss the working group.
