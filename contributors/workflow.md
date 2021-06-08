# GitHub Workflow

## Step 1: Fork in the cloud

1. Visit https://github.com/pingcap/tidb
2. On the top right of the page, click the `Fork` button (top right) to create
   a cloud-based fork of the repository.

## Step 2: Clone fork to local storage

Per Go's [workspace instructions](https://golang.org/doc/code.html#Workspaces),
place TiDB's code on your `GOPATH` using the following cloning procedure.

Define a local working directory:

```sh
# If your GOPATH has multiple paths, pick # just one and use it instead of
# $GOPATH here.
export working_dir=$GOPATH/src/github.com/pingcap
```

> If you have already worked with a Go development environment on GitHub
> before, the `pingcap` directory will be a sibling to your existing
> `github.com` directory.

Set `user` to match your github profile name:

```sh
export user={your github profile name}
```

Both `$working_dir` and `$user` are mentioned in the figure above.

Create your clone:

```sh
mkdir -p $working_dir
cd $working_dir
git clone https://github.com/$user/tidb.git
# or: git clone git@github.com:$user/tidb.git

cd $working_dir/tidb
git remote add upstream https://github.com/pingcap/tidb.git
# or: git remote add upstream git@github.com:pingcap/tidb.git

# Never push to the upstream master.
git remote set-url --push upstream no_push

# Confirm that your remotes make sense:
# It should look like:
# origin    git@github.com:$(user)/tidb.git (fetch)
# origin    git@github.com:$(user)/tidb.git (push)
# upstream  https://github.com/pingcap/tidb (fetch)
# upstream  no_push (push)
git remote -v
```

Set the `pre-commit` hook. This hook checks your commits for formatting,
building, doc generation, etc:

```sh
cd $working_dir/tidb/
ln -s `pwd`/hooks/pre-commit .git/hooks/
```

Install soft for checking your changes:

```sh
$ make check-setup
```

Make the `pre-commit` hook executable manually if necessary:

```sh
cd $working_dir/tidb/.git/hooks
chmod +x pre-commit
```

## Step 3: Branch

Get your local master up to date:

```sh
cd $working_dir/tidb
git fetch upstream
git checkout master
git rebase upstream/master
```

Branch from master:

```sh
git checkout -b myfeature
```

## Step 4: Develop

### Edit the code

You can now edit the code on the `myfeature` branch.

### Run TiDB in a stand-alone mode

If you want to reproduce and investigate an issue, you may need
to run TiDB in a stand-alone mode.

```sh
# Build the binary.
make server

# Run in stand-alone mode. The data is stored in `/tmp/tidb` by default.
bin/tidb-server
```

Then you can connect to TiDB with a MySQL client.

```sh
mysql -h127.0.0.1 -P4000 -uroot test
```

If you are using MySQL client 8, you may get the `ERROR 1105 (HY000): Unknown
charset id 255` error. To solve it, add `--default-character-set utf8` in MySQL
client 8's arguments:

```sh
mysql -h127.0.0.1 -P4000 -uroot test --default-character-set utf8
```

### Test

Build and run all tests:

```sh
# build and run the unit test to make sure all tests are passed.
make dev

# Check the checklist before you move on.
make checklist
```

You can also run a single unit test in a file. For example, to run test
`TestToInt64` in file `types/datum.go`:

```sh
cd types
GO111MODULE=on go test -check.f TestToInt64
```

## Step 5: Keep your branch in sync

```sh
# While on your myfeature branch.
git fetch upstream
git rebase upstream/master
```

Please don't use `git pull` instead of the above `fetch`/`rebase`. `git pull`
does a merge, which leaves merge commits. These make the commit history messy
and violate the principle that commits ought to be individually understandable
and useful (see below). You can also consider changing your `.git/config` file
via `git config branch.autoSetupRebase` always to change the behavior of `git pull`.

## Step 6: Commit

Commit your changes.

```sh
git commit
```

Likely you'll go back and edit/build/test further, and then `commit --amend` in a
few cycles.

## Step 7: Push

When the changes are ready to review (or you just to create an offsite backup
or your work), push your branch to your fork on `github.com`:

```sh
git push --set-upstream ${your_remote_name} myfeature
```

## Step 8: Create a pull request

1. Visit your fork at `https://github.com/$user/tidb`.
2. Click the `Compare & Pull Request` button next to your `myfeature` branch.
3. Fill in the required information in the PR template.

### Get a code review

If your pull request (PR) is opened, it will be assigned to one or more
reviewers. Those reviewers will do a thorough code review, looking at
correctness, bugs, opportunities for improvement, documentation and comments,
and style.

To address review comments, you should commit the changes to the same branch of
the PR on your fork

### Revert a commit

In case you wish to revert a commit, follow the instructions below:

> NOTE: If you have upstream write access, please refrain from using the Revert
> button in the GitHub UI for creating the PR, because GitHub will create the
> PR branch inside the main repository rather than inside your fork.

Create a branch and synchronize it with the upstream:

```sh
# create a branch
git checkout -b myrevert

# sync the branch with upstream
git fetch upstream
git rebase upstream/master

# SHA is the hash of the commit you wish to revert
git revert SHA
```

This creates a new commit reverting the change. Push this new commit to
your remote:

```sh
git push ${your_remote_name} myrevert
```

Create a PR based on this branch.

### Cherry pick a commit to a release branch

In case you wish to cherry pick a commit to a release branch, follow the
instructions below:

Create a branch and synchronize it with the upstream:

```sh
# sync the branch with upstream.
git fetch upstream

# checkout the release branch.
# ${release_branch_name} is the release branch you wish to cherry pick to.
git checkout upstream/${release_branch_name}
git checkout -b my-cherry-pick

# cherry pick the commit to my-cherry-pick branch.
# ${SHA} is the hash of the commit you wish to revert.
git cherry-pick ${SHA}

# push this branch to your repo, file an PR based on this branch.
git push --set-upstream ${your_remote_name} my-cherry-pick
```
