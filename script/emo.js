const fs = require('fs')
const https =  require('https')

async function download(url, fileName) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(fileName)
    https.get(url, response => {
      if (response.statusCode == 200) {
        response.pipe(file);
      } else {
          fs.unlink(fileName, () => {})
          file.close()
          console.log(`Response Error: ${url}`)
          reject()
      }
      file.on('finish', function(){
        file.close();
        resolve()
      }).on('error', function(err){
          fs.unlink(fileName, () => {});
          file.close();
          console.log(`File Error: ${url}`)
          reject()
      })
    }).on('error', function(err){
      // console.log(err)
      fs.unlink(fileName, () => {})
      file.close()
      console.log(`Https Error: ${url}`)
    })
  })
}

const targetFolders = ['data/plurks/', 'data/responses/']
const images = []
targetFolders.forEach(targetFolder => {
  const fileNames = fs.readdirSync(targetFolder)
  fileNames.forEach(fileName => {
    // console.log(`${targetFolder}${fileName}`)

    const rawFile = fs.readFileSync(targetFolder + fileName, 'utf8')
    const imagesRegex = /https\:\/\/avatars.plurk.com\/(\w+\.\w{0,4})/g
    const results = rawFile.match(imagesRegex)
    // console.log(result)


    if (results) {
      results.forEach(result => images.push(result))
    }
  })
})

async function downloadAll() {
  let index = 0
  const uniqueImages = [...new Set(images)]
  console.log(uniqueImages)
  // for (const image of uniqueImages) {
  //   const imageName = image.replace(/https\:\/\/avatars.plurk.com\//, '')
  //   // console.log(imageName)
    
  //   try {
  //     await download(image, `avatars/${imageName}`)
  //   } catch (e) {
  //     console.log(e)
  //   }
  //   index ++
  //   console.log(`${index}/${uniqueImages.length}: ${index / uniqueImages.length}%: ${image}`)
  // }
}
downloadAll()
