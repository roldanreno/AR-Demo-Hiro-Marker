#!/bin/bash

# Download Hiro marker image for printing
echo "Downloading Hiro marker image..."
curl -L -o public/assets/hiro-marker.png "https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png"

echo "✅ Marker image downloaded to public/assets/hiro-marker.png"
echo "📄 Print this image and use it as your AR marker"
echo "🔗 Or create your own at: https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html"
