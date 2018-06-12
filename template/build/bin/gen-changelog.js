const path = require('path')
const cc = require('conventional-changelog')
const file = `./CHANGELOG.md`
const fileStream = require('fs').createWriteStream(file)

cc({
    preset: 'angular',
    releaseCount: 0
}).pipe(fileStream).on('close', () => {
    console.log(`Generated release note at ${file}`)
})
