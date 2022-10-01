const fs = require('fs')

const targetFolder = 'data/plurks/'
const fileNames = fs.readdirSync(targetFolder)
fileNames.forEach((fileName, index) => {
  console.log(`Filtering ${index + 1} / ${fileNames.length} : ${fileName}`)
  const rawFile = fs.readFileSync(targetFolder + fileName, 'utf8')
  // console.log(rawFile)

  const preRegex = /^BackupData.plurks\[\"\d{4}_\d{2}\"\]=/
  const postRegex = /;$/
  try {
    const preString = rawFile.match(preRegex)[0]
    const postString = rawFile.match(postRegex)[0]
    const rawPlurkData = JSON.parse(rawFile.replace(preRegex, '').replace(postRegex, ''))
    // console.log(plurkData)

    const filteredPlurkData = rawPlurkData.filter(plurkData => !plurkData.limited_to)
    console.log(`${rawPlurkData.length} => ${filteredPlurkData.length}`)

    const outputString = preString + JSON.stringify(filteredPlurkData) + postString
    fs.writeFileSync(targetFolder + fileName, outputString, 'utf8')
  } catch (e) {
    console.log(e)
  }
})