#!/bin/bash
echo -n "[+] Message or something: "
read message
current_branch=$(git rev-parse --abbrev-ref HEAD)
git add .
git commit -m "$message - $(date +%Y-%m-%d)"
git push origin $current_branch
echo "[+] Changes pushed to $current_branch !! ban hx dek tv"