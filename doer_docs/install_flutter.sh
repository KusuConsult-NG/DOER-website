#!/bin/bash

echo "Installing Flutter..."
if [ -d "flutter" ]; then
    echo "Flutter directory exists, pulling latest..."
    cd flutter
    git pull
    cd ..
else
    git clone https://github.com/flutter/flutter.git -b stable --depth 1
fi

export PATH="$PATH:`pwd`/flutter/bin"

echo "Flutter version:"
flutter --version

echo "Enabling web support..."
flutter config --enable-web

echo "Building web app..."
flutter build web --release

echo "Build complete!"
