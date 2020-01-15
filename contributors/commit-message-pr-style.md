# Commit Message and Pull Request Style

This document describes the commit message and Pull Request style applied to all PingCAP repositories. When you are to commit, be sure to follow the style to write a good commit message, a good Pull Request title and description.

## Why a good commit message matters

- To speed up the reviewing process
    - Help the reviewers better understand the PR
    - Allow ignoring unimportant commits
- To help us write good Release Notes
- To help the future maintainers establish the context
    - Provide better information when browsing the history

## What is a good commit message

Elements of a good commit message:

1. **What is your change? (mandatory)**

    It can be fixing a specific bug, adding a feature, improving performance, reliability and stability, or just be a change for the sake of correctness.

2. **Why this change was made? (mandatory)**

    For short and obvious patches, this part can be omitted, but it should be a clear description of what the approach was.

3. **What effect does the commit have? (optional)**

    In addition to the obvious effects, this may include benchmarks, side effects, etc. For short and obvious patches, this part can be omitted.

## How to write a good commit message

To write a good commit message, we suggest following good format, cultivating good habits, and using good language.

### Format of a good commit message

Please follow the following style for **all your commits**:

```
<subsystem>: <what changed>
<BLANK LINE>
<why this change was made>
<BLANK LINE>
<footer>(optional)
```

+ For the first subject line:
    - Use no more than 70 characters.
    - If the changes affect two subsystems, use a comma (and a whitespace) to separate them like `util/codec, util/types:`.
    - If the changes affect three or more subsystems, you can use `*` instead, like `*:`.
    - Use a lowercase letter on the text that immediately follows the colon. For example: "media: **update** the DM architecture image"
    - Do not add a period at the end of a commit message.
- For the second line, always leave it blank.
- For the why part, if there is no specific reason for the change, you can use one of the generic reasons like "Improve performance", "Improve test coverage."
- For other lines, use no more than 80 characters.

### Habits for a good commit message

- Summarize your change
- Describe clearly one logical change and avoid lazy messages as `misc fixes`
- Describe any limitations of the current code
- Do not end the subject with a period "."
- Do not assume the code is self-evident
- Do not assume reviewers understand the original issue

### Language for a good commit message

- Use the imperative mood for the first subject line
- Use simple verb tenses (eg. use "add" not "added")
- Use correct and standard grammar
- Use words and expressions consistently
- Use relatively short sentences
- Do not use lengthy compound words
- Do not abbreviate unless it's absolutely necessary

## Pull Request title style

When you are to submit a Pull Request, please include enough details about all changes in the title but keep it concise.

**Pull Request title format:** `<subsystem>: <what changed>`

The format of a good Pull Request title is the same as [the subject line of a good commit message](#format-of-a-good-commit-message). Do not add a period at the end of a Pull Request title. A correct example: "sql: add constraints"

- If all major changes are involved in the first commit message, you can use the first commit message as the PR title.
- If several commits are included in one PR and the first commit message cannot cover all changes, then write a new PR title that can cover all major changes involved in this PR.

## Pull Request description style

For Pull Request description in the `Conversation` box, please refer to the following Pull Request description template and include necessary information:

```
## What have you changed? (mandatory)

Please explain **IN DETAIL** what the changes are in this PR and why they are needed:

- Summarize your change (mandatory)
- How does this PR work? Need a brief introduction for the changed logic (optional)
- Describe clearly one logical change and avoid lazy messages (optional)
- Describe any limitations of the current code (optional)

Please NOTE that:

- Do not assume the code is self-evident
- Do not assume reviewers understand the original issue

## What are the type of the changes? (mandatory)

The currently defined types are listed below, please pick one of the types for this PR by removing the others:

- New feature (non-breaking change which adds functionality)
- Improvement (non-breaking change which is an improvement to an existing feature)
- Bug fix (non-breaking change which fixes an issue)
- Breaking change (fix or feature that would cause existing functionality to not work as expected)

## How has this PR been tested? (mandatory)

Please describe the tests that you ran to verify your changes. Have you finished unit tests, integration tests, or manual tests?

## Does this PR affect documentation (docs/docs-cn) update? (mandatory)

If there is document change, please file a PR in ([docs](https://github.com/pingcap/docs) and [docs-cn](https://github.com/pingcap/docs-cn)) and add the PR number here.

## Refer to a related PR or issue link (optional)

## Benchmark result if necessary (optional)

## Add a few positive/negative examples (optional)
```

For short and obvious Pull Requests, you can omit some of the above information.

Thanks for your contribution！