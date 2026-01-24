---
description: Auto-push changes to GitHub to trigger Netlify deploy
---
1. Run git status to check for changes
2. Add all changes
3. Commit with a timestamp message
4. Push to master

// turbo-all
1. `git status`
2. `git add .`
3. `git commit -m "Auto-update: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"`
4. `git push origin master`
