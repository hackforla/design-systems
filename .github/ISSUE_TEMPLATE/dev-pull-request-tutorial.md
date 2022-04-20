---
name: Pull request tutorial
about: Learn how to work on your first issue and make a pull request. [Copied from wiki article. Work in progress.]
title: '[VOLUNTEER NAME] pull request tutorial'
labels: 'size: 1 pt, role: developer'
assignees: ''

---
We encourage new developers to fork our repo to contribute. Developers developed in-house Button component with `dev branch` from design-system repo.

## Using Git

* Generally changes start on your local clone of your fork of this repository, in your own branch.
* Commit your changes with a comment related to the issue it addresses to your local repository.
* Push that commit(s) to your online GitHub fork.
* From the `hackforla` repository, create a Pull Request which asks `hackforla` to pull changes from your fork into the main repository.
* After the owner of the `hackforla` repository approves and merges your Pull Request, your changes will be live on the website. 
* [Github Guides](https://guides.github.com/) 


## Working on an issue and creating pull requests tutorial

- [ ] Work on an issue using git
  - [ ] Create a new branch for each issue you work on. Doing all your work on topic branches leaves your repository's main branch (named `master`) unmodified and greatly simplifies keeping your fork in sync with the main project.
    - [ ] Check current branch. The `git branch` command will let you know what branch you are in, and what branch names are already in use. ```git branch``` You will see a list of all of your branches. There will be a star (`*`) next to the branch that you are currently in. By default you should start on the `master` branch. When you work on future issues, you must always be in the `master` branch when creating a new branch.
    - [ ] If you are not currently in the `master` branch, run the following command to return to it: ```git checkout master``` The `git checkout` command will create and change to a new branch where you will do the work on your issue.  In git, the checkout command lets you navigate between different branches.  Using the `-b` flag you can create a new branch and immediately switch into it. 
    - [ ] To create a new issue branch, and switch into it: ```git checkout -b 221-fix-logo-width``` The text after the `-b`, in the example `221-fix-logo-width`, will be the name of your new branch. Choose a branch name that relates to the issue you're working on. No spaces! The format should look like the scheme above where the words are a brief description of the issue that will make sense at a glance to someone unfamiliar with the issue. No law of physics will break if you don't adhere to this scheme, but laws of git will break if you add spaces.
  - [ ] When you've finished working on your issue, prepare your changes to push to your repository. Stage and commit are two commands are similar to the save command that you have used to in other programs. 
    - [ ] Use the `git add` command to stage your changes. This command prepares your changes before you commit them. You can stage files one at a time using the filename. 
    - [ ] Run the command: ```git add “filename.ext”```
    - [ ] Use the `git status` command to see the list of files that have been staged.  These are the files that will be committed (saved) when you run the next command, `git commit`. Please be sure all your staged changes are relevant to the issue you are working on. 
      - [ ] If you find you have included unrelated changes, please unstage them before making this commit - and then make a new commit for the unrelated changes. Use the `git reset HEAD` command to remove a staged file. This file will not be committed (saved) when you run the next command, `git commit`. This only works if the wrong files were added, but they were not yet committed. The file will be removed from the staging area, but not actually deleted. Example: ```git reset HEAD “filename.ext” ```
    - [ ] Use the `git commit` command to save your work, and prepare to push to your repository.  Use the `-m` flag to quickly add a message to your commit. Your message should be a short description of the issue you are working.  It will be extremely helpful if other people can understand your message, so try to resist the temptation to be overly cryptic. Example, to commit your changes with a message, run: ```git commit -m “insert message here”```
- [ ] Check if there have been updates made in the main repository. `git fetch upstream` will check remote repositories for changes without altering your local repository. Your fork of this repository on GitHub, and your local clone of that fork, may get out of sync with this (upstream) repository from time to time.  (That's what has happened when you see something like "This branch is 1 commit behind hackforla:master" on the github website version of your repository.)
  - [ ] If you do not see any output, there have not been any changes in the main repository since the last time you checked. So it is safe to push your local commits to your fork. If you just type `git push` you will be prompted to create a new branch in your GitHub repository. The more complete command below will create a new branch on your copy of the repository, and then push your local branch there. The name at the end of this command should be the same as the name of the local branch that you created back in step 6, as in this example: ```git push --set-upstream origin 221-fix-logo-width```
  - [ ] If there are conflicting changes in the upstream repository, you may see output like this: ```Fetching upstream remote: Enumerating objects: 11, done. remote: Counting objects: 100% (11/11), done. remote: Compressing objects: 100% (7/7), done. remote: Total 11 (delta 5), reused 7 (delta 4), pack-reused 0 Unpacking objects: 100% (11/11), 8.25 KiB | 402.00 KiB/s, done. From https://github.com/hackforla/website``` You can safely ignore changes in other issue branches, such as `221-fix-logo-width` above. But if you see changes in master, you should incorporate those changes into your repository before merging or rebasing your issue branch:
    - [ ] One way to keep your fork up to date with this repository is to follow these instructions: [Syncing your fork to the original repository via the browser](https://github.com/KirstieJane/STEMMRoleModels/wiki/Syncing-your-fork-to-the-original-repository-via-the-browser)
    - [ ] You can also update your fork via the local clone of your fork, assuming you have a local clone with remotes `upstream` (this repo) and `origin` (your GitHub fork of this repo)
      - [ ] Create a local branch which tracks upstream/master. You will only need to do this once; you do not need to do this every time you want to incorporate upstream changes. Run the following two commands: ```git fetch upstream``` ```git checkout -b upstream-master --track upstream/master```
      - [ ] If you have already created the branch upstream-master, the following commands will incorporate upstream changes. If you do all your work on topic branches and keep the master free of local modifications, this merge should apply cleanly.
        - [ ] ```git checkout upstream-master``` # Move to the branch you want to merge with 
        - [ ] ```git pull```  # This updates your tracking branch to match the master branch in this repository 
        - [ ] ```git checkout master```  # Move back to your master branch
        - [ ] ```git merge upstream-master``` # Merge to bring your master current. ``` 
      - [ ] Then push the merge changes to your GitHub fork: ```git push``` If you go to your online github repository this should remove the message "This branch is x commit behind hackforla:master".
    - [ ] To incorporate these updates from the main GitHub repository into your topic branch, you can 'rebase' your branch onto your updated master branch. You should only rebase if you have never pushed your topic branch to GitHub (or shared it with another collaborator). ```git checkout 221-fix-logo-width``` ```git rebase master```
    - [ ] If you receive warnings about conflicts, abort the rebase with `git rebase --abort` and instead merge master into your branch. ```git checkout 221-fix-logo-width``` ```git merge master```
- [ ] If you have not submitted a pull request, make sure to write a status update on your issue. Follow the format below and add pictures of any visual changes made to the site.
  - [ ] Progress: "What is the current status of your project? What have you completed and what is left to do?"
  - [ ] Blockers: "Difficulties or errors encountered."
  - [ ] Availability: "How much time will you have this week to work on this issue?"
  - [ ] ETA: "When do you expect this issue to be completed?"
  - [ ] Pictures: "Add any pictures of the visual changes made to the site so far." 
- [ ] ```git push --set-upstream origin 221-fix-logo-width```
- [ ] Go to https://github.com/hackforla/design-systems/pulls and click on "New pull request" to ask for your updates to be incorporated into the live web site. 
  - [ ] Rename your pull request something descriptive, i.e. "Adding graph pages".
  - [ ] Click the "compare across forks" link in the first paragraph to make your repository and your new branch available. 
  - [ ] Include screenshots of any visual changes made to the site 
  - [ ] Document your edits on the pull request so that the reviewer can understand the changes made. 
  - [ ] Review the changes that will be included in the pull request and, if it fixes a specific issue, include `Fixes #140` in the pull request message so the issue will be closed automatically once your pull request is accepted and merged.
  - [ ] Once you have finished working on the issue you have chosen, commit the changes to your local branch (e.g. `221-fix-logo-width`).
- [ ] After you completed your assignment and committed all of the changes, before moving onto your next issue and creating a new branch, you must leave your current branch and return to the `master` branch with the command ```git checkout master``` From there you can checkout into a new branch. (This ensures you don’t accidentally include the changes from your previous branch in your new branch).
- [ ] Once your pull request is approved and merged you can pull the recent merge from the Hack For LA repository and delete your local branch:
```git pull upstream master``` ```git branch -d <your-feature-branch>``` Managing branches this way will keep the commit logs cleaner on the Hack For LA repository, versus merging your completed feature branches into your local repo. Now you are all set to work on a new PR.
  - [ ] If you find an error in your code or your reviewer asks you to make a change, please avoid editing your code directly from the pull request. Instead update it in your local branch first and then push it to your origin remote. This will update the original pull request. 
