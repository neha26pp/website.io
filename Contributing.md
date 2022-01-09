# Contributing

## Introduction

The purpose of this document is to provide a walkthrough on how to get started with contributing to this repository.

We recognize that you might be new to programming, using Git and Github, HTML, Typescript, the Angular framework, or anything in between. Some of those words might be completely new to you! That's okay, we want you to learn and it would be our priviledge to help. All of us are learning too, none of us know everything, and we're all here to collaborate and learn from each other. If you ever get stuck, if you get an error message that you don't know how to fix, or you just have a question about anything related to programming, get in touch with us.

This document isn't going to contain everything you need to know to learn Angular, Git, Github, etc. It's going to provide you with the steps how to get your environment set up and how to make contributions so you can get started. Learning these things will take time and practice.

With all that out of the way, let's get to the good stuff. If you know what you're doing and you know your environment is set up, skip to the **First Commit** section.

## Development Environment Setup

There are a few pieces of software you'll need, if you don't have them already. These instructions should work for Windows, Linux, or Mac OS but please [create an issue](https://github.com/neha26pp/website.io/issues/new) if these instructions are lacking in any way.

### IDE (Integrated Development Environment)

The IDE is the program you use to edit code, sort of like the "Microsoft Word" but for programming. You have some choices here, but in order to be most effective in troubleshooting issues, we really strongly recommend using one of these two IDEs since we have members experienced in each and they are both excellent choices for working with the Angular framework. Download and install one of these IDEs.

- [Visual Studio Code aka VS Code](https://code.visualstudio.com/) - by Microsoft
- [Webstorm](https://www.jetbrains.com/community/education/#students) - by JetBrains
  - Note: Webstorm is free for students using this link, however if you are not a student you cannot get a free version of Webstorm (other than 30 day free trial).

### Other Software

You'll need to download and install the following to be able to run the Angular code and then push the changes up to Github.

- Node.JS
  - After installing this, open a terminal window (CMD, Powershell, Bash, etc) and run the following command to install the Angular CLI:
    `npm install -g @angular/cli`
- Git
  - [Windows](https://git-scm.com/download/win)
  - [Mac](https://git-scm.com/download/mac)
  - [Linux](https://git-scm.com/download/linux)

At this point it's best to close and reopen your terminal window before continuing, or better yet, restart your machine. Your terminal might not recognize the new software until this is done.

### Clone the Repository

Let's get this repository on your computer! What this will do is download all of the code from our Github repository to your computer, where you will be editing code locally. The **First Commit** section will contain details on how your changes will get synced back to Github.

Open your terminal of choice (hint: VS Code has an integrated terminal if you go to Terminal -> New Terminal, but any terminal should work). With the terminal open, enter the following command:
`git clone https://github.com/neha26pp/website.io.git`

After hitting enter you should see something similar to the following:

```bash
Cloning into 'website.io'...
remote: Enumerating objects: 125, done.
remote: Counting objects: 100% (125/125), done.
remote: Compressing objects: 100% (84/84), done.
Receiving objects:  51% (64/125)used 106 (delta 36), pack-reused 0R
Receiving objects: 100% (125/125), 204.62 KiB | 2.92 MiB/s, done.
Resolving deltas: 100% (45/45), done.
```

If you see that, it's a good thing. Now navigate to the Angular source code directory by entering the following command:
`cd website.io/web-design`

This is where the code is! Navigate here in your IDE to see and edit code! If you're VS Code, you can do this easily from the terminal using `code .`

Finally, we'll want to install the dependencies from our project. This is super easy, just run the command:
`npm install`

It'll probably take a minute or two because it has to download all of the packages that our Angular project needs to work. If you see something similar to the following you'll know it worked (you can ignore deprecated and `npm audit fix` warnings if any appear):

```bash
added 1009 packages, and audited 1010 packages in 11s
```

### Build and Run

If you've got here, you're doing great. You should be all set to run the Angular code running the following command from your terminal:
`npm start`

This will compile the code and start a local web server instance, which might take a minute. When you see the following you know everything is working:

```bash
** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **


√ Compiled successfully.
```

Go ahead and browse to [http://localhost:4200/]. If you see a website, you know everything worked!

## First Commit

Okay - you're ready to contribute! Take a look at the [Issues](https://github.com/neha26pp/website.io/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) page in our Github repository, and create a new one or grab one that's not assigned yet. Some of the following is going to look kinda jargony for newer developers - fear not. If you get stuck, reach out. Head to the end of this section for some resources if you'd like to get a better understanding of what all of this means. And if you need help, find us on Discord or add a comment to the Github issue.

Once you've made your changes to the code, saved your changes, and tested them, you're ready to commit. This basically tells Git that you are happy with the changes you've made and you want to make a snapshot in history. This makes it easy to rollback changes if something breaks later and also makes Git able to merge changes from other users.

First things first: we want to switch to a new branch. This lets us add as many commits as we want while minimizing the chance of conflicts from other people's work. Think of a name for your branch, usually these are short, all lowercase, words are hyphenated, and should describe an issue or feature. It's not a bad idea to add your initials at the end as well just to make it easier to identify who's working on that branch and help ensure it has a unique name. Here's an example of a decent branch name: `add-docs-ljw`

To create this branch and switch to it (aka checkout), run the following in your terminal:
`git checkout -b {branchname}` where `{branchname}` is the name of the branch you came up with, without the braces. So using my example would look like: `git checkout -b add-docs-ljw`

Now we want to add/stage the files we want for this commit. You can see a list of all the files that have changed since the last commit by running `git status`. If you want to add all of these files to your commit, you can run `git add .`. You can alternatively add files individually by running `git add {filename}` where `{filename}` is the relative path to the file you want to add (without braces). Use that command as many times as needed to stage all of the files you want. You can run `git status` again to see the files that are staged and not staged, if applicable. When you commit, only the staged changes will be included in that commit. Unstaged changes will not be lost, but they won't be included in the commit.

Once you have changes staged, we're ready to commit. First, try to come up with a brief description of your commit. It should summarize the staged changes you made, ideally in 50 characters or less. Run `git commit -m "commit message goes here"` replacing the text within the quotes with your <= 50 character description.

To sync your commit with the repository in Github, you'll need to push your branch. If this is your first time pushing this branch, do that by running `git push -u origin {branchname}`. If you've pushed this branch before, you can simply run `git push`. Note: your first push might ask to authenticate with your Github account. See the next section **Configure Github Credentials** for details about that.

### Configure Github Credentials

If you haven't created an account on Github yet, please do so here before continuing: [https://github.com/join]

In order to be able to push changes to Github from your local machine, you have to add your Github credentials to your local Git instance. Please [read this](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github#https). If you get stuck here, please let us know.

## Pull Request

Quick recap: you've made changes to the code, you've tested those changes, you've made a new branch, you've committed your changes, you've pushed your branch to Github. You're one step away from getting your changes into the master branch for our repository, which will end up on our actual website. All we need to do now is submit a Pull Request (aka PR). This is basically asking the repository administrators for permission to merge your changes into our live, production code. This gives us a chance to look your changes over, test them out ourselves, and let's us ask you questions if there's any confusion. If we approve your changes, we'll take it from there.

Submit your pull request by [going here](https://github.com/neha26pp/website.io/compare). Make sure the left dropdown says "base: master", and then on the right dropdown (compare) choose the branch that you created earlier.

## Additional Resources

- [Git Overview](https://www.youtube.com/watch?v=92sycL8ij-U)
- [Contributing to Open Source for the first time](https://www.youtube.com/watch?v=c6b6B9oN4Vg)
- [Angular Tutorial](https://www.youtube.com/watch?v=k5E2AVpwsko)
