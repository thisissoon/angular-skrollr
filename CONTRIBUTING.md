# How to contribute

This is a quick guide on how to contribute to this project. Before you get started 
please have a read of the SOON_ frontend style guides. This will help keep everything 
consistent by following our coding practises and guidelines. 
- [LESS](app/less/README.md)
- [JS](app/js/README.md)

## Getting Started

- Make sure you have a [GitHub account](https://github.com/signup/free)
- Create a new Github issue for your bug, feature or improvement, assuming 
  one does not already exist. This is important as someone may already be working 
  on this issue.
  - Explain the issue as clearly as possible including steps to reproduce and any
    error messages. 
  - Or explain your reason for a new feature or improvement along with some sample 
    code to back up your theory.
- Clone the repo from github if you have push access to the thisissoon org or create
  a fork of the repo if you do not.

## Making Changes

- Create a feature branch using git flow.
  - This branch should be branched of from develop.
  - Never work directly on the develop or master branches.
  - To quickly create a feature branch based on develop run: `git flow feature 
    start <my-feature>`.
- Make commits of logical units.
- Check for unnecessary white-space with `git diff --check` before committing.
- Check that you are not committing any code that is not relevant to the commit.
- Check that you are not committing any code that breaks stable features and
  will be cause regression.
- Make sure your commit messages are clear, specific and precise.
- Make sure all code committed is following our coding guidelines.

Example:

````
Adding blurb to CONTRIBUTING.md to provide clear contributing guidelines
````
__Important__

- Make sure you have included tests for new features. Or updated 
  relevant tests if necessary when updating code.
- Run all the tests to ensure nothing else was accidentally broken.
- Make sure you have written adequate documentation for any new code. Or 
  updated the relevant documentation if updating old code as specified by
  our coding practises.
- Make sure you have prototyped any styling and mark-up in the `/modules/`
  directory (if working on any styling).
- Your pull request may not be merged if any of the above hasn't been
  done.

## Submitting Changes

- Make sure the pull request can be merged into develop successfully without conflicts
  by merging origin/develop into your feature branch.
- Push your feature branch to github by pushing to origin.
- Submit a pull request to the develop branch of the thisissoon repository on Github.
- The SOON_ development team will look at your pull request and make comments on github
  as part of the pull request.
- If your pull request follows all the correct guidelines and has been successfully
  reviewed by a member of the SOON_ development team it will be merged.
- If the core team makes comments in your pull request, please make those changes and
  push them to github. Then comment in the pull request when you are happy these have been
  done. 
- If you have push access to the thisissoon make sure your pull requests has been reviewed by 
  another member of the thisissoon team.
