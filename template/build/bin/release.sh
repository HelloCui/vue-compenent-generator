set -e

current_v=`node -p "require('./package.json').version"`

if [[ -z $1 ]]; then
  echo "Enter new version(current $current_v): "
  read VERSION
else
  VERSION=$1
fi

echo "Releasing $VERSION ..."

# 打包代码
npm run build

# git
git add -A
git add -f dist/*.*
git commit -m "build: build $VERSION"
npm run gen:changelog
npm version $VERSION --message "build: release $VERSION"
git push origin refs/tags/v$VERSION
git push

# npm publish
