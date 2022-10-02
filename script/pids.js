const fs = require('fs')

const targetFolder = 'data/plurks/'
const pids = []
const fileNames = fs.readdirSync(targetFolder)
fileNames.forEach((fileName, index) => {
  // console.log(`Filtering ${index + 1} / ${fileNames.length} : ${fileName}`)
  const rawFile = fs.readFileSync(targetFolder + fileName, 'utf8')
  // console.log(rawFile)

  const preRegex = /^BackupData.plurks\[\"\d{4}_\d{2}\"\]=/
  const postRegex = /;$/
  try {
    const preString = rawFile.match(preRegex)[0]
    const postString = rawFile.match(postRegex)[0]
    const rawPlurkData = JSON.parse(rawFile.replace(preRegex, '').replace(postRegex, ''))
    // console.log(rawPlurkData)

    rawPlurkData.forEach(plurk => pids.push({
      content: plurk.content,
      pid: plurk.base_id
    }))
  } catch (e) {
    console.log(e)
  }
})

console.log(pids)
fs.writeFileSync('pids.txt', JSON.stringify(pids))