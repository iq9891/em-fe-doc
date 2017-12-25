mkdir pages && cd pages

git init

git config --global user.name "$TRAVIS_COMMIT_USER"
git config --global user.email "$TRAVIS_COMMIT_EMAIL"

echo $TRAVIS_COMMIT_EMAIL

git clone git@github.com:iq9891/em-fe-doc.git

git branch -vaa

echo 0

ls

echo 1

cd em-fe-doc

ls

echo 2

rm -rf *

cp -rf ../../dist/** .

git status

git add .

git commit -m "feature: $TRAVIS_COMMIT_MSG"

git push origin gh-pages

cd ../..

echo "DONE, Bye~"
exit 0
