cd ./dist
git init
git config user.name "$TRAVIS_COMMIT_USER"
git config user.email "$TRAVIS_COMMIT_EMAIL"
git add .
git commit -m "$TRAVIS_COMMIT_MSG"
git push --force "https://git@${GH_REF}" gh-pages
