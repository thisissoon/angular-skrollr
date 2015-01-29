# How to contribute

This is a quick guide on how to make a contribution to this repo. This will
help keep everything consistant by following our coding practises and guildlines. 
* [LESS](app/less/README.md)
* [JS](app/js/README.md)

## Getting Started

* Make sure you have a [Asana account](https://asana.com/)
* Make sure you have a [GitHub account](https://github.com/signup/free)
* Create a task for your work, assuming one does not already exist.
  * Add steps required to complete this task as subtask.
  * Move the task to 'In Progress' section of the sprint so other members 
    of the team are aware you are currently working on this.
* Pull the repo from github

## Making Changes

* Create a feature branch using git flow.
  * This branch should be branched of from develop.
  * Never work directly on the develop or master branches.
  * To quickly create a feature branch based on develop run: `git flow feature 
    start MYFEATURE`.
* Make commits of logical units.
* Check for unnecessary whitespace with `git diff --check` before committing.
* Check that you are not committing any code that is not relevent to the commit.
* Check that you are not committing any code that breaks stable features and
  will be cause regression.
* Make sure your commit messages are clear, specific and precise.
* Make sure all code committed is following our coding guidelines.

Example:

````
Adding blurb to CONTRIBUTING.md to provide clear contributing guidelines
````
__Important__

* Make sure you have added the necessary tests for your changes. Or update 
  relevent tests if nessessary and if updating code.
* Run all the tests to ensure nothing else was accidentally broken.
* Make sure you have written adiquate documentation for your code. Or 
  update the relevent documentation if updating old code as specified by
  our coding practises.
* Make sure you have prototyped any styling and markup in the `app/modules/`
  directory.
* Your pull request will __NOT__ be merged if any of the above has __NOT__ been
  done.

## Submitting Changes

* Make sure the pull request can be merged into develop successfully without conflicts
  by merging origin/develop into your feature branch first.
* Push your feature branch in the repository to origin.
* Submit a pull request to the repository on Github.
* Move the asana task to the 'Awaiting Code Review' to show that you have submitted 
  code and are ready for it to be reviewed and merged.
* The core development team will look at your pull request and make comments in github
  as part of the pull request.
* If your pull request follows all the correct guidelines and has been successfully
  reviewed by a member of the core development team it will be merged.
* If the core team makes comments in your pull request, please make those changes and
  push them to github. Then comment in the pull request when you are happy these have been
  done. __DO NOT__ merge your own pull requests unless it's been okay'ed by a member of the
  core development team.
