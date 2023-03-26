#!/bin/bash

# Enable error reporting to the console
set -e

# Cleanup "_site"
rm -rf _site
mkdir _site

# Clone remote repo into the "_site" directory
git clone https://${GITHUB_ACTOR}:${TOKEN}@github.com/${GITHUB_REPOSITORY}.git --branch gh-pages _site

# Build with Jekyll into "_site"
bundle exec jekyll build

# Push to gh-pages
cd _site
git config user.email "bternarytau@gmail.com"
git config user.name "BTernaryTau"
git add --all
git commit -a -m "Jekyll build for commit ${GITHUB_SHA}"
git push --force origin gh-pages
