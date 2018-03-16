const sharp = require('sharp')
const PRESETS = require('./presets')

class PWAIconPlugin {
  constructor({iconUrl, outputDir, backgroundColor, extend, custom}) {
    if (custom && extend) throw "Extend and Custom is not allowed at the same time!"
    this.presets = custom ? custom : (extend ? PRESETS.concat(extend) : PRESETS)
    this.options = { iconUrl, outputDir, backgroundColor }
  }

  apply(compiler) {
    compiler.plugin('done', async () => {
      for (let {size, filename, background} of this.presets) {
        const icon = await sharp(this.options.iconUrl);
        await icon.resize(size, size);
        if (background) await icon.background(this.options.backgroundColor).flatten()
        await icon.toFile(`${this.options.outputDir}/${filename}`);
        console.log(`Created: ${this.options.outputDir}/${filename}`);
      }
    })
  }
}

module.exports = PWAIconPlugin
