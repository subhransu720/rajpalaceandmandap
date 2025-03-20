const https = require('https');
const fs = require('fs');
const path = require('path');

// URL of the image you shared (you'll need to replace this with a valid URL)
// Since I can't directly access the image you shared in the chat, you'll need to:
// 1. Upload the image to a temporary image hosting service
// 2. Replace the URL below with the URL of your uploaded image
// 3. Run this script with: node download-image.js

const imageUrl = 'REPLACE_WITH_YOUR_IMAGE_URL';
const outputPath = path.join(__dirname, 'public', 'images', 'raj-palace-entrance.jpg');

console.log(`Downloading image from ${imageUrl}`);
console.log(`Saving to ${outputPath}`);

// Create directory if it doesn't exist
const dir = path.dirname(outputPath);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Download the image
https.get(imageUrl, (response) => {
  if (response.statusCode !== 200) {
    console.error(`Failed to download image: ${response.statusCode} ${response.statusMessage}`);
    return;
  }
  
  const fileStream = fs.createWriteStream(outputPath);
  response.pipe(fileStream);
  
  fileStream.on('finish', () => {
    fileStream.close();
    console.log('Image downloaded successfully!');
  });
}).on('error', (err) => {
  console.error(`Error downloading image: ${err.message}`);
});

// Alternative instructions if you can't use the script:
console.log('\nAlternative manual steps:');
console.log('1. Save the image you shared in the chat to your computer');
console.log('2. Rename it to "raj-palace-entrance.jpg"');
console.log('3. Copy it to: raj-palace-convention/public/images/'); 