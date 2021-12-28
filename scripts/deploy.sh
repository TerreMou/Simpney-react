#!/usr/bin/env bash

# 构建
yarn build &&

# cd 到构建输出的目录下
cd build &&

git init &&
git add . &&
git commit -m 'deploy' &&

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:TerreMou/Simpney-react-website.git master:gh-pages

cd -