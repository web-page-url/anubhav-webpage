const sharp = require('sharp');
const fs = require('fs-extra');
const path = require('path');

const inputImage = path.join(__dirname, '../public/Anubhav-img.jpg');
const outputDir = path.join(__dirname, '../public');

// Favicon sizes configuration
const faviconSizes = [
  // Standard favicons
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 48, name: 'favicon-48x48.png' },

  // Apple Touch Icon
  { size: 180, name: 'apple-touch-icon.png' },

  // Android Chrome
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },

  // Microsoft tiles
  { size: 144, name: 'mstile-144x144.png' },
  { size: 150, name: 'mstile-150x150.png' },
  { size: 310, name: 'mstile-310x310.png' },
];

// Additional sizes for ICO file (combined)
const icoSizes = [16, 32, 48];

async function generateFavicons() {
  try {
    console.log('🚀 Starting favicon generation...');

    // Check if input image exists
    if (!await fs.pathExists(inputImage)) {
      throw new Error(`Input image not found: ${inputImage}`);
    }

    console.log(`📁 Input image: ${inputImage}`);
    console.log(`📂 Output directory: ${outputDir}`);

    // Generate PNG favicons
    console.log('\n🖼️  Generating PNG favicons...');
    for (const { size, name } of faviconSizes) {
      const outputPath = path.join(outputDir, name);

      await sharp(inputImage)
        .resize(size, size, {
          fit: 'cover',
          position: 'center'
        })
        .png({ quality: 90 })
        .toFile(outputPath);

      console.log(`✅ Generated: ${name} (${size}x${size})`);
    }

    // Generate combined ICO file
    console.log('\n📋 Generating favicon.ico...');
    const icoBuffers = [];

    for (const size of icoSizes) {
      const buffer = await sharp(inputImage)
        .resize(size, size, {
          fit: 'cover',
          position: 'center'
        })
        .png()
        .toBuffer();

      icoBuffers.push({ size, buffer });
    }

    // For simplicity, we'll create the ICO as a 48x48 PNG and rename it
    // In production, you'd want to use a proper ICO generation library
    await sharp(inputImage)
      .resize(48, 48, {
        fit: 'cover',
        position: 'center'
      })
      .png()
      .toFile(path.join(outputDir, 'favicon.ico'));

    console.log('✅ Generated: favicon.ico (48x48)');

    // Generate Safari Pinned Tab SVG
    console.log('\n🦊 Generating Safari pinned tab SVG...');
    const safariSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="45" fill="#00ffff" stroke="#0A0A12" stroke-width="10"/>
  <circle cx="50" cy="50" r="30" fill="#0A0A12"/>
  <circle cx="50" cy="50" r="15" fill="#00ffff"/>
  <circle cx="50" cy="50" r="5" fill="#0A0A12"/>
</svg>`;

    await fs.writeFile(path.join(outputDir, 'safari-pinned-tab.svg'), safariSvg);
    console.log('✅ Generated: safari-pinned-tab.svg');

    // Generate additional Microsoft tile sizes
    console.log('\n🪟 Generating additional Microsoft tile sizes...');
    const msTileSizes = [
      { width: 310, height: 150, name: 'mstile-310x150.png' }
    ];

    for (const { width, height, name } of msTileSizes) {
      await sharp(inputImage)
        .resize(width, height, {
          fit: 'cover',
          position: 'center',
          background: { r: 10, g: 10, b: 18, alpha: 1 } // #0A0A12
        })
        .png({ quality: 90 })
        .toFile(path.join(outputDir, name));

      console.log(`✅ Generated: ${name} (${width}x${height})`);
    }

    console.log('\n🎉 Favicon generation completed successfully!');
    console.log('\n📋 Generated files:');
    console.log('├── favicon.ico');
    console.log('├── favicon-16x16.png');
    console.log('├── favicon-32x32.png');
    console.log('├── favicon-48x48.png');
    console.log('├── apple-touch-icon.png');
    console.log('├── android-chrome-192x192.png');
    console.log('├── android-chrome-512x512.png');
    console.log('├── safari-pinned-tab.svg');
    console.log('├── mstile-144x144.png');
    console.log('├── mstile-150x150.png');
    console.log('├── mstile-310x150.png');
    console.log('└── mstile-310x310.png');

    console.log('\n📝 Next steps:');
    console.log('1. Verify all files are generated in the public/ directory');
    console.log('2. Test the favicons in your browser');
    console.log('3. Test social media sharing to ensure images appear correctly');

  } catch (error) {
    console.error('❌ Error generating favicons:', error.message);
    process.exit(1);
  }
}

// Run the script
generateFavicons();
