mkdir pages && cd pages

git init

git config --global user.name "$TRAVIS_COMMIT_USER"
git config --global user.email "$TRAVIS_COMMIT_EMAIL"

git clone --branch=gh-pages git@github.com:iq9891/em-fe-doc.git

cd em-fe-doc

rm -rf *

cp -rf ../../dist/** .

git status

git add .

git commit -m "feature: $TRAVIS_COMMIT_MSG"

git push origin gh-pages

cd ../..

echo "DONE, Bye~"
exit 0
