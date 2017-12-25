cd ./dist
git init
git config user.name "$TRAVIS_COMMIT_USER"
git config user.email "$TRAVIS_COMMIT_EMAIL"
git add -A
git commit -m "$TRAVIS_COMMIT_MSG"
echo ${GH_TOKEN}
git push --force --quiet "https://git@${GH_REF}" gh-pages
