/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

async function optimizeImages(
  inputDirectory, outputDirectory, options
) {
  try {
    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDirectory)) {
      fs.mkdirSync(outputDirectory)
    }

    // Read the list of files in the input directory
    const files = fs.readdirSync(inputDirectory)

    // Loop through each file in the input directory
    for (const file of files) {
      const inputFilePath = path.join(
        inputDirectory, file
      )
      const outputFilePath = path.join(
        outputDirectory, file
      )

      // Check if the current file is an image (you may want to add more image file extensions)
      if (file.match(/\.(jpg|jpeg|png)$/i)) {
        // Process and optimize the image using sharp
        await sharp(inputFilePath)
          .resize(
            options.width, options.height
          )
          .jpeg({ quality: options.quality })
          .toFile(outputFilePath)

        console.log(`Image optimized: ${file}`)
      } else {
        // If it's not an image, simply copy the file to the output directory
        fs.copyFileSync(
          inputFilePath, outputFilePath
        )

        console.log(`File copied: ${file}`)
      }
    }

    console.log('Optimization completed.')
  } catch (error) {
    console.error(
      'Error optimizing images:', error
    )
  }
}

optimizeImages(
  './public/uploads', './public/uploads/compressed', {
    width: 800,
    height: 600,
    quality: 80
  }
)