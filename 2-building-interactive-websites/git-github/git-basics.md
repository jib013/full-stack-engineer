# Basic Git Workflow
Generalizations

You have now been introduced to the fundamental Git workflow. You learned a lot! Let’s take a moment to generalize:

    Git is the industry-standard version control system for web developers
    Use Git commands to help keep track of changes made to a project:
        git init creates a new Git repository
        git status inspects the contents of the working directory and staging area
        git add adds files from the working directory to the staging area
        git diff shows the difference between the working directory and the staging area
        git commit permanently stores file changes from the staging area in the repository
        git log shows a list of all previous commits


## How to Backtrack

### head commit

In Git, the commit you are currently on is known as the HEAD commit. In many cases, the most recently made commit is the HEAD commit.

To see the HEAD commit, enter:

git show HEAD

The output of this command will display everything the git log command displays for the HEAD commit, plus all the file changes that were committed.


### git checkout

What if you decide to change the ghost’s line in the working directory, but then decide you wanted to discard that change?

You could rewrite the line how it was originally, but what if you forgot the exact wording? The command

git checkout HEAD filename

will restore the file in your working directory to look exactly as it did when you last made a commit.

Here, filename again is the actual name of the file. If the file is named changes.txt, the command would be

git checkout HEAD changes.txt





### git reset I

Great! The files you’ve added to the staging area belong in the same commit.

What if, before you commit, you accidentally delete an important line from scene-2.txt? Unthinkingly, you add scene-2.txt to the staging area. The file change is unrelated to the Larry/Laertes swap and you don’t want to include it in the commit.

We can unstage that file from the staging area using

git reset HEAD filename

This command resets the file in the staging area to be the same as the HEAD commit. It does not discard file changes from the working directory, it just removes them from the staging area.




### git reset II

Creating a project is like hiking in a forest. Sometimes you take a wrong turn and find yourself lost.

Just like retracing your steps on that hike, Git enables you to rewind to the part before you made the wrong turn. You can do this with:

git reset commit_SHA

This command works by using the first 7 characters of the SHA of a previous commit. For example, if the SHA of the previous commit is 5d692065cf51a2f50ea8e7b19b5a7ae512f633ba, use:

git reset 5d69206

HEAD is now set to that previous commit.




### git reset review

To better understand git reset commit_SHA, notice the diagram on the right. Each circle represents a commit.

Before reset:

    HEAD is at the most recent commit

After resetting:

    HEAD goes to a previously made commit of your choice
    The gray commits are no longer part of your project
    You have in essence rewound the project’s history




### Generalizations

Congratulations! You’ve learned three different ways to backtrack in Git. You can use these skills to undo changes made to your Git project.

Let’s take a moment to review the new commands:

    git checkout HEAD filename: Discards changes in the working directory.
    git reset HEAD filename: Unstages file changes in the staging area.
    git reset commit_SHA: Resets to a previous commit in your commit history.

Additionally, you learned a way to add multiple files to the staging area with a single command:

git add filename_1 filename_2




### Git Stash

While working on a file, you find a small bug in a separate file from a previous commit that needs to be fixed before you continue.

$ git stash

Running the command above will store your work temporarily for later use in a hidden directory.

At this point, you can switch branches and do work elsewhere.

Once the bug is fixed, you want to retrieve the code you were working on previously, you can “pop” the work that was stored when you used git stash.

$ git stash pop

From here, you can continue your work and commit it when ready.