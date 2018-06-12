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

# 提交dist
git add -A
git add -f dist/*.*
git commit -m "build: build $VERSION"

# 更新版号本并提交
npm version $VERSION --message "build: release $VERSION"

# 生成changelog并提交
npm run gen:changelog
git add -A
git commit -m "docs: change log $VERSION"

# 推送远程
git push origin refs/tags/v$VERSION
git push

# 发布
# npm publish
