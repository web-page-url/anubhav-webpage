const sharp = require('sharp');
const fs = require('fs-extra');
const path = require('path');

const publicDir = path.join(__dirname, '../public');

// Images to optimize
const imagesToOptimize = [
  {
    input: 'Anubhav-img.jpg',
    outputs: [
      { name: 'Anubhav-img-optimized.jpg', quality: 85 },
      { name: 'Anubhav-img-webp.webp', format: 'webp', quality: 80 },
      { name: 'Anubhav-img-avif.avif', format: 'avif', quality: 70 }
    ]
  }
];

async function optimizeImages() {
  try {
    console.log('🚀 Starting image optimization...');

    for (const image of imagesToOptimize) {
      const inputPath = path.join(publicDir, image.input);

      if (!await fs.pathExists(inputPath)) {
        console.log(`⚠️  Skipping ${image.input} - file not found`);
        continue;
      }

      console.log(`\n📁 Processing: ${image.input}`);

      // Get original image info
      const metadata = await sharp(inputPath).metadata();
      console.log(`📊 Original: ${metadata.width}x${metadata.height}, ${metadata.format}, ${(await fs.stat(inputPath)).size} bytes`);

      for (const output of image.outputs) {
        const outputPath = path.join(publicDir, output.name);

        let sharpInstance = sharp(inputPath);

        // Apply format-specific optimizations
        if (output.format === 'webp') {
          sharpInstance = sharpInstance.webp({
            quality: output.quality,
            effort: 6
          });
        } else if (output.format === 'avif') {
          sharpInstance = sharpInstance.avif({
            quality: output.quality,
            effort: 9
          });
        } else if (output.name.endsWith('.jpg') || output.name.endsWith('.jpeg')) {
          sharpInstance = sharpInstance.jpeg({
            quality: output.quality,
            progressive: true,
            mozjpeg: true
          });
        } else {
          sharpInstance = sharpInstance.png({
            quality: output.quality,
            compressionLevel: 9
          });
        }

        await sharpInstance.toFile(outputPath);

        const outputStats = await fs.stat(outputPath);
        console.log(`✅ Generated: ${output.name} - ${outputStats.size} bytes`);
      }
    }

    console.log('\n🎉 Image optimization completed!');
    console.log('\n📋 Optimized files:');
    console.log('├── Anubhav-img-optimized.jpg (optimized JPEG)');
    console.log('├── Anubhav-img-webp.webp (WebP format)');
    console.log('└── Anubhav-img-avif.avif (AVIF format)');

  } catch (error) {
    console.error('❌ Error optimizing images:', error.message);
    process.exit(1);
  }
}

// Run the script
optimizeImages();
