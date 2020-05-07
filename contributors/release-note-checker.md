## Background
As we all know, the release process of TiDB is relatively lengthy. One of the most cost time thing is the collection of release notes. We have many PRs that do not have a release note when they are merged. Therefore, a release note checker was added to some repo in CI Check the release note, please pay attention when you mention pr and review, the effect is as follows
![Release Note checker effect](../static/img/release-note-1.png)

## Check principle and usage
CI obtains the Release note keyword from the description, and judges that there is a release note displayed in the form of a list (internal judgment is a regular expression ‘Release note[\r\n]\s*[-|*].+’). If there is, it will judge success
![How to write release note](../static/img/release-note-2.png)
If there is really no release note, you can write "No release note"
![Weite No release note](../static/img/release-note-3.png)

## Trigger method
At present, every commit will automatically run a check. If the description is modified and you want to trigger again, you can use the / rebuild command (too many commands, there is no separate command)


