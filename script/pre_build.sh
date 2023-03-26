#!/bin/bash

# Enable error reporting to the console
set -e

# Install Node.js
pacman -S --noconfirm nodejs npm

# Jekyll Deploy Action uses the build directory rather than the _site directory
mkdir build

# Clone remote repo into the build directory
git clone https://${ACTOR}:${TOKEN}@github.com/${GITHUB_REPOSITORY}.git --branch gh-pages build
