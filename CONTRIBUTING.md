# Contributing to yeti.css

## Using the issue tracker

## Feature requests

## Pull requests

1. Clone the repository:

```
git clone git@github.com:andyet/yeticss.git
cd yeticss
```

2. Install node modules (you might need to run this with `sudo`):

```
npm i
```

3. Create a topic branch off the main branch that will contain your feature, change or fix:

```
git checkout -b topic-branch-name
```

4. Commit your changes in small, logical chunks with descriptive messages. For specific git commit message guidelines please refer and adhere to the [following](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html) [guidelines](http://robots.thoughtbot.com/5-useful-tips-for-a-better-commit-message).

### Building demo files
To rebuild the demo files run:

```sh
npm install #To install dependencies if you haven't already
npm run build #compiles public/css/demo.css, and public/index.html
```

### Tagging releases
Releases should be tagged to allow for version management, npm makes this easy. Just run:

```
npm version <major|minor|patch>
git push origin --tags
```

Which will increment the version number, update package.json, create a git tag, and push the tag to github.

CSS isn't quite the same as code, but tags should be roughly analagous to [semver](http://semver.org/):

* `major`: if the style change is likely to break existing sites, use a major, i.e. 1.0.0, tag.
* `minor`: if the style change should not break existing sites, but adds new features/functionality, use a minor, i.e. 0.1.0, tag.
* `patch`: if the style change is just a small bugfix that should work with existing sites, use a patch, i.e. 0.0.1, tag.