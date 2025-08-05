#!/bin/bash

# Python Basics Slideshow - PowerPoint Converter
# This script converts the Markdown slides to a styled PowerPoint format

echo "🐍 Converting Python Basics slides to a styled PowerPoint..."

# Check if pandoc is installed
if ! command -v pandoc &> /dev/null; then
    echo "❌ Pandoc is not installed. Please install it to continue."
    exit 1
fi

# Convert with custom styling and enhanced transitions
echo "📝 Converting slides.md to PowerPoint (.pptx) with custom styling and animations..."
pandoc slides.md \
    --reference-doc=reference.pptx \
    --css=custom-style.css \
    --variable theme=dark \
    --variable fontsize=14pt \
    --variable mainfont="Inter" \
    --variable monofont="Fira Code" \
    --variable transition=slide \
    --variable backgroundTransition=fade \
    --variable slideNumber=true \
    --variable history=true \
    --variable center=true \
    --variable controls=true \
    --variable progress=true \
    --variable loop=true \
    --variable rtl=false \
    --variable shuffle=false \
    --variable fragments=true \
    --variable embedded=false \
    --variable help=false \
    --variable markdown=1 \
    --variable mathjax=true \
    --variable mathjax-path=https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS_HTML \
    -o slides.pptx

echo "✅ Conversion complete!"
echo "📁 File created: slides.pptx"

# Open the file if on macOS
if [[ "$OSTYPE" == "darwin"* ]]; then
    echo "🚀 Opening PowerPoint file..."
    open slides.pptx
fi

echo "🎉 Ready to present!" 