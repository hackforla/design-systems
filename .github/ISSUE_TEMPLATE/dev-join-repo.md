---
name: Clone the repository to your desktop
about: How to join the repo team and fork the repository. [work in progress]
title: '[VOLUNTEER NAME] onboarding'
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

- [ ] Become a member of the repository Team
  - [ ] In the `design-systems` slack channel, request being added to the GitHub repository team and include your GitHub name. 
  - [ ] Accept the GitHub invite (comes via email or in your GitHub notifications)
  - [ ] Mark your own membership public. [How-to Guide](https://help.github.com/en/articles/publicizing-or-hiding-organization-membership#changing-the-visibility-of-your-organization-membership)
  - [ ] Setup [two factor authentication](https://docs.github.com/en/github/authenticating-to-github/configuring-two-factor-authentication) on your account
- [ ] Fork the repository
  - [ ] In https://github.com/hackforla/design-systems, look for the fork icon in the top right. Click it and create a fork of the repository. For git beginners, a fork is a copy of the repository that will be placed on your GitHub account url.
  - [ ] It should create a copy here: https://github.com/your_GitHub_user_name/design-systems, where `your_GitHub_user_name` is replaced with exactly your GitHub handle. Note that this copy is on a remote server on the GitHub website and not on your computer yet. If you click the icon again, it will not create a new fork but instead give you the URL associated with your fork.
- [ ] Clone your online repository to your local computer (3rd copy of the repository)
  - [ ] Create a new folder on your desktop that will contain `hackforla` projects.
  - [ ] In your shell, navigate there and run the following command: ```git clone https://github.com/your_GitHub_user_name/design-systems.git```
  - [ ] You should now have a new folder in your `hackforla` folder called `design-systems`. Verify this by changing into the new directory: ```cd design-systems```
  - [ ] Verify that your local cloned repository is pointing to the correct `origin` URL (that is, the forked repo on your own Github account): ```git remote -v``` You should see `fetch` and `push` URLs with links to your forked repository under your account (i.e. `https://github.com/your_GitHub_user_name/design-systems.git`). You are all set to make working changes to the lucky parking repo on your local machine.
  - [ ] However, we still need a way to keep our local repo up to date with the deployed website. To do so, you must add an upstream remote to incorporate changes made while you are working on your local repo. Run the following to add an upstream remote URL & update your local repo with recent changes to the `hackforla` version: ```git remote add upstream https://github.com/hackforla/design-systems.git``` ```git fetch upstream```
  - [ ] After adding the upstream remote, you should now see it if you again run `git remote -v` : ```origin  https://github.com/your_GitHub_user_name/design-systems.git (fetch)``` ```origin  https://github.com/your_GitHub_user_name/design-systems.git (push)``` ```upstream        https://github.com/hackforla/design-systems.git (fetch)``` ```upstream        https://github.com/hackforla/design-systems.git (push)```
  - [ ] If you accidentally cloned using the repository URL from the HackForLA Github (instead of the fork on your Github):
    - [ ] Set your forked repo on your Github as an `origin` remote: ```git remote set-url origin https://github.com/your_GitHub_user_name/design-systems.git```
    - [ ] Add another remote called `upstream` that points to the `hackforla` version of the repository. This will allow you to incorporate changes later: ```git remote add upstream https://github.com/hackforla/design-systems.git```
- [ ] Setup Developer Environment
  - [ ] change your current directory to client to install all the dependencies ```cd design-system/client``` ```npm install``` You should be ready to work on issue from this point onward. If more assistance needed, feel free to reach out to team lead or fellow engineers.
