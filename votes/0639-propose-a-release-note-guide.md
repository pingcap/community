# Propose a Release Notes Language Style Guide

## Background

A concise release note can clearly and accurately deliver to users how your PR can make a difference. Your release note written in a PR will be presented in [docs.pingcap.com](https://docs.pingcap.com/tidb/stable/release-notes) as a part of the TiDB documentation.

I hereby propose a release notes language style guide that briefly explains what a quality release note looks like, provides examples, and aims to help you write quality release notes.

## What a quality release note looks like

A high-quality release note has the following merits:

- Clear in type
- Adequate and clear in meaning
- User perspective

A release note with a distinguishable type can help users quickly identify the nature or goal of your PR change. Other teams will also benefit from it.

Depending on what your PR changes, you can refer to one of the following release note types:

- Compatibility change
- Improvement or Feature enhancement
- Bug fix

## Compatibility change

A compatibility change note means:

- Your PR adds, removes, or modifies one or more configuration items or system variables.
- Your PR modifies the default value of a configuration item or system variable.

For this type of note, you should clearly and adequately state the following aspects:

- The previous code behavior, configuration item, or default value.
- The new code behavior, configuration item, or default value since the new version.

Note that the object of the change should be user-perceivable. If the changed configuration item or system variable is not supposed to be exposed to users, do not include it in your release notes.

**Examples:**

| **Not recommended**                                          | **Clear in type** | **Adequate and clear in meaning** | **User perspective** | Recommended                                                  |
| ------------------------------------------------------------ | ----------------- | --------------------------------- | -------------------- | ------------------------------------------------------------ |
| copr: cast invalid utf8 string to real bug fix               | ❌                 | ❌                                 | ❌                    | Before v4.0.16, when TiDB converts an illegal UTF-8 string to a Real type, an error is reported directly. Starting from v4.0.16, TiDB processes the conversion according to the legal UTF-8 prefix in the string |
| sink: fix kafka max message size inaccurate issue            | ❌                 | ❌                                 | ❌                    | Change the default value of Kafka Sink max-message-bytes from 512 MB to 1 MB to prevent TiCDC from sending too large messages to Kafka clusters |
| cdc/sink: adjust kafka initialization logic                  | ❌                 | ❌                                 | ❌                    | Change the default value of Kafka Sink partition-num to 3 so that TiCDC distributes messages across Kafka partitions more evenly |
| cmd: hide --sort-dir in changefeed command. (deprecated warning exists) | ✅                 | ❌                                 | ❌                    | Deprecate `--sort-dir` in the `cdc cli changefeed` command. Instead, users can set `--sort-dir` in the `cdc server` command. |

## Bug fix

A bug fix note means that your PR fixes an existing bug or issue. This type of notes start with "Fix" followed by "the issue/bug".

Write your note clearly and adequately so that your target readers can get the main point of your bug fix. The bug or issue must be directly perceivable to the users, and you can refer to the associated GitHub issues.

**Examples:**

| **Not recommended**                                          | **Clear in type** | **Adequate and clear in meaning** | **User perspective** | Recommended                                                  |
| ------------------------------------------------------------ | ----------------- | --------------------------------- | -------------------- | ------------------------------------------------------------ |
| lock_resolver: avoid pessimistic transactions using resolveLocksForWrite | ❌                 | ✅                                 | ❌                    | Fix the issue that committing pessimistic transactions might cause write conflict |
| retry when meeting stablish conn fails                       | ❌                 | ❌                                 | ❌                    | Fix the issue of unexpected results when TiFlash fails to establish MPP connections |
| Fix the issue that greatest(datetime) union null returns empty string | ✅                 | ❌                                 | ✅                    | Fix the issue that the query result might be wrong when NULL is in the UNION subquery |
| copr: make CM Sketch built with the same encoding as what TiDB assumes | ❌                 | ❌                                 | ❌                    | Fix the wrong statistics caused by the format inconsistency of CM Sketch between TiKV and TiDB |

## Improvement

An improvement note means that your PR improves stability or performance of the product, or enhances an existing feature. In addition to describing what your PR has changed, you should also mention how users can benefit from it.

This type of release note consists of two parts: what you have changed + the benefit of your change. This type of release notes often starts with "support", "increase", "improve", "optimize", etc.

**Examples:**

| **Not recommended**                                          | **Clear in type** | **Adequate and clear in meaning** | **User perspective** | Recommended                                                  |
| ------------------------------------------------------------ | ----------------- | --------------------------------- | -------------------- | ------------------------------------------------------------ |
| Not use the stale read request's `start_ts` to update `max_ts` to avoid commit request keep retrying | ✅                 | ✅                                 | ✅                    | Avoid excessive commit request retrying by not using the Stale Read request's start_ts to update `max_ts` |
| Restore many small tables would be faster.                   | ✅                 | ❌                                 | ❌                    | Split and scatter Regions concurrently to improve restore speed |
| server: stop status server early when gracefully shutdown    | ✅                 | ❌                                 | ❌                    | Shut down the status server first to make sure that the client can correctly check the shutdown status |
| Better err msg when PD endpoint missing certificate          | ✅                 | ❌                                 | ✅                    | Improve the error message when connecting to a TLS protected PD endpoint without a certificate |
