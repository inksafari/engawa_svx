echo "$(tput setaf 2)::COMMIT AND PUSH CHANGES, PLEASE INSERT MESSAGE:$(tput sgr 0)"
read MESSAGE
git add --all
git commit -m "${MESSAGE}"
git push
# git push --force-if-includes

# https://github.com/victoriacheng15/personal-blog-site/blob/main/scripts/actions.sh
# https://github.com/Nutlope/aicommits
# https://github.com/zurawiki/gptcommit
