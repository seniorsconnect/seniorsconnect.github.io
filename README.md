# Everything you need to run, and update the app

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# UPDATING THE GH-PAGES BRANCH AND DEPLOYING

### `npm run deploy`

This is something I added to our package.json script. It will automatically deploy the changes that are made (even if they haven't been pushed to the master branch in Git). This will be hosted at seniorsconnect.github.io. It will also automatically push STATIC changes to the gh-pages branch (very different from the master branch)

# UPDATING THE MASTER BRANCH FOR DEVELOPING

### `git add .`

This will add all the files (specifically the ones that have been changed) to the list of files you want to commit and push to Git. You can also choose not to do this and select the files using the VSCode UI, but this is just easier in general. 

### `git commit -m "<some message>"`

This will commit the files that you added using git add . before. Use the message function to make the changes you made clear.

### `git push`

This is the final step to updating the master branch. Pushes all the files you added and commited to the repo.
