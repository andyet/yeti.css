# Contributing to yeti.css

## Table of Contents

1. [Using the issue tracker](https://github.com/andyet/yeticss/blob/gh-pages/CONTRIBUTING.md#using-the-issue-tracker)
2. [Bug reporting](https://github.com/andyet/yeticss/blob/gh-pages/CONTRIBUTING.md#bug-reporting)
3. [Features requests](https://github.com/andyet/yeticss/blob/gh-pages/CONTRIBUTING.md#features-requests)
4. [Pull requests](https://github.com/andyet/yeticss/blob/gh-pages/CONTRIBUTING.md#pull-requests)
5. [Contributing for maintainers](https://github.com/andyet/yeticss/blob/gh-pages/CONTRIBUTING.md#contributing-for-maintainers)
6. [Credits](https://github.com/andyet/yeticss/blob/gh-pages/CONTRIBUTING.md#credits)

## Using the issue tracker
The issue tracker is the preferred channel for [bug reports](https://github.com/andyet/yeticss/blob/gh-pages/CONTRIBUTING.md#bug-reporting), [features requests](https://github.com/andyet/yeticss/blob/gh-pages/CONTRIBUTING.md#features-requests) and submitting [pull requests](https://github.com/andyet/yeticss/blob/gh-pages/CONTRIBUTING.md#pull-requests), but please respect the following restrictions:

* Please do not use the issue tracker for personal support requests (use [Andbang](andbang.com) or `#&yet` on Freenode).
* Tag issues accordingly with `bug`, `enhancement`, `feature`, `docs` or `js`.

## Bug reporting
A bug is a *demonstrable problem* that is caused by the code in the repository. Good bug reports are extremely helpful - thank you!

Guidelines for bug reports:

1. **Use the GitHub issue search** — check if the issue has already been reported.
2. **Check if the issue has been fixed** — try to reproduce it using the latest `gh-pages` branch in the repository.

A good bug report shouldn't leave others needing to chase you up for more information. Please try to be as detailed as possible in your report. What is your environment? What steps will reproduce the issue? What browser(s) and OS experience the problem? Do other browsers show the bug differently? What would you expect to be the outcome? All these details will help people to fix any potential bugs.

Example:

> Short and descriptive example bug report title
>
> A summary of the issue and the browser/OS environment in which it occurs. If suitable, include the steps required to reproduce the bug.
>
>  1. This is the first step
>  2. This is the second step
>  3. Further steps, etc.
>
> Any other information you want to share that is relevant to the issue being reported. This might include the lines of code that you have identified as causing the bug, and potential solutions (and your opinions on their merits).

## Features requests
Yeti.css is built *for* people, thus feature requests are most welcome. Before submitting a new issue with an [appropriate tag](https://github.com/andyet/yeticss/issues?q=is%3Aopen+is%3Aissue+label%3Afeature) please take a minute to decide whether the feature belongs to the core or [yeti.css recipes](https://github.com/andyet/yeticss-recipes). The core is intentionally built small and only UI elements essential for building websites/apps will be added—external components should be proposed in yeti.css recipes.

## Pull requests

1. Clone the repository:

 ```bash
 git clone git@github.com:andyet/yeticss.git
 cd yeticss
 ```

2. Install dependencies (you might need to run this with `sudo`):

 ```bash
 npm i
 ```

3. Create a topic branch off the main branch that will contain your feature, change or fix:

 ```bash
 git checkout -b topic-branch-name
 ```

4. Run the server (Stylus and Jade will be compiled in the background):

 ```bash
 npm start
 ```

5. Commit your changes in small, logical chunks with descriptive messages. For specific git commit message guidelines please refer and adhere to the [following](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html) [guidelines](http://robots.thoughtbot.com/5-useful-tips-for-a-better-commit-message).

 Additionaly, prefix your commit messages with:
 * **[ux]** — anything that isn't a bug fix, mostly new features and code refactor
 * **[fix]** — bug fixes
 * **[docs]** — documentation updates (including `README.md` and `CONTRIBUTING.md`)
 * **[dist]** — changing and/or bumping dependencies versions in `package.json`

6. Push changes to yeticss:

 ```bash
 git push origin topic-branch-name
 ```

7. [Open a pull request](https://help.github.com/articles/using-pull-requests/) with a clear description against `gh-pages` branch.

## Contributing for maintainers
Apart from following general contributing guidelines, maintainers should make sure that:

* **Breaking changes aren't pushed to main branch** &mdash; when in doubt, use a separate branch
* **The changelog is updated** &mdash; add descriptive comments about changes to [each release](https://github.com/andyet/yeticss/releases) (more updating changelog [here](https://github.com/andyet/yeticss/blob/gh-pages/CONTRIBUTING.md#updating-changelog))
* **Each release is tagged** &mdash; releases should be tagged for version management on npm (more on versioning [here](https://github.com/andyet/yeticss/blob/gh-pages/CONTRIBUTING.md#tagging-releases))

### Tagging releases
Releases should be tagged to allow for version management, npm makes this easy. Just run:

```
npm version <major|minor|patch>
git push origin --tags
```

Which will increment the version number, update package.json, create a git tag, and push the tag to Github.

CSS isn't quite the same as code, but tags should be roughly analagous to [semver](http://semver.org/):

* `major`: if the style change is likely to break existing sites, use a major, i.e. 1.0.0, tag.
* `minor`: if the style change should not break existing sites, but adds new features/functionality, use a minor, i.e. 0.1.0, tag.
* `patch`: if the style change is just a small bugfix that should work with existing sites, use a patch, i.e. 0.0.1, tag.

### Updating changelog
After properly tagging and pushing new version of yeti.css to Github update the [release feed](https://github.com/andyet/yeticss/releases) according to the following guidelines:

* Release title should be the tag version
* Changes should be listed under the following categories:
  * New Features
  * CSS
    - Module name (e.g. Typography)
  * Documentation
  * Bug fixes

## Credits
This document was built on top of [Necolas Gallagher's](http://twitter.com/necolas) [issue guidelines](https://github.com/necolas/issue-guidelines). Thank you, Necolas.
