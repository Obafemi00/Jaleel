/**
 * Script to convert HEIC files to JPEG format
 * Run with: node scripts/convert-heic.js
 * 
 * Requirements:
 * - Install sharp: npm install sharp
 * - Or use heic-convert: npm install heic-convert
 */

const fs = require('fs');
const path = require('path');

// Try to use sharp first (better performance)
let convertImage;
try {
  const sharp = require('sharp');
  convertImage = async (inputPath, outputPath) => {
    await sharp(inputPath)
      .jpeg({ quality: 90 })
      .toFile(outputPath);
    console.log(`✓ Converted: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
  };
} catch (e) {
  // Fallback to heic-convert
  try {
    const convert = require('heic-convert');
    convertImage = async (inputPath, outputPath) => {
      const inputBuffer = fs.readFileSync(inputPath);
      const outputBuffer = await convert({
        buffer: inputBuffer,
        format: 'JPEG',
        quality: 0.9
      });
      fs.writeFileSync(outputPath, outputBuffer);
      console.log(`✓ Converted: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
    };
  } catch (e2) {
    console.error('Error: Neither sharp nor heic-convert is installed.');
    console.error('Please install one of them:');
    console.error('  npm install sharp');
    console.error('  OR');
    console.error('  npm install heic-convert');
    process.exit(1);
  }
}

async function convertHeicFiles() {
  const imagesDir = path.join(__dirname, '../public/images');
  const heicFiles = [
    'IMG_2923.heic',
    'IMG_9800.HEIC',
    'IMG_9801.HEIC',
    'IMG_9802.HEIC'
  ];

  console.log('Converting HEIC files to JPEG...\n');

  for (const heicFile of heicFiles) {
    const inputPath = path.join(imagesDir, heicFile);
    const outputFileName = heicFile.replace(/\.(heic|HEIC)$/i, '.jpg');
    const outputPath = path.join(imagesDir, outputFileName);

    if (!fs.existsSync(inputPath)) {
      console.log(`⚠ Skipping: ${heicFile} (file not found)`);
      continue;
    }

    if (fs.existsSync(outputPath)) {
      console.log(`⚠ Skipping: ${outputFileName} (already exists)`);
      continue;
    }

    try {
      await convertImage(inputPath, outputPath);
    } catch (error) {
      console.error(`✗ Error converting ${heicFile}:`, error.message);
    }
  }

  console.log('\n✓ Conversion complete!');
}

convertHeicFiles().catch(console.error);

