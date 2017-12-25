mkdir pages

cd pages
git clone -b gh-pages https://${$ROT_TOKEN}@${GH_REF} && cd em-fe-doc

rm -rf *.js *.css *.map static index.html
cp -rf ../../dist/** .

git add -A .
git commit -m "$TRAVIS_COMMIT_MSG"
git push origin gh-pages
