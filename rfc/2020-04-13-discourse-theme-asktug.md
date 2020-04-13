# Proposal: discourse theme asktug

- Author(s):     [Yue Yang](https://github.com/g1eny0ung)
- Last updated:  2020-04-13

## Abstract

As the title, this is a custom theme which used in AskTUG.
It contains many commonly used features and this proposal wishes it can be open to the public.

## Background

Custom discourse, it is difficult to say whether it is a simple or not simple thing. You can overwrite the page by
using vanilla javascript and css. This is simple. But this is not customizable and destroys the structure of the page.

If not, you need to dive into the discourse source code. You will need to learn such of things:

- [handlebars](https://handlebarsjs.com/)
- [emberjs](https://emberjs.com/)
- [sass](https://sass-lang.com/)

This is not simple.

And asktug theme use the second way, make all overwrites can be highly componentized.

Now this theme is just getting started, it will add more features in the future.

## proposal

- More configurable
- Detailed documentation

## Rationale

Here is some points:

- Use discourse plugin API to custom widget or component which inside discourse
- Reopen js logic by using ember built in features
- Use scss to make all styles easy to write

## Compatibility and Mirgration Plan

There are no compatibility issues.

## Implementation

- Finish version `0.1.0` in 2020-04-13

