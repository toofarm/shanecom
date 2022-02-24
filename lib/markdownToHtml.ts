import { remark } from 'remark'
import html from 'remark-html'
import { VFileCompatible } from 'vfile'
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'

export default async function markdownToHtml(markdown: VFileCompatible):Promise<string> {
  hljs.registerLanguage('javascript', javascript)
  const result = await remark().use(html).process(markdown)
  const highlighted = result.toString().split('<pre>')
  return highlighted.map((code) => {
    if (code.indexOf('<code>') === 0) {
      const chunk = code.split('</code></pre>')
      chunk[0] = chunk[0].replace('<code>', '')
      chunk[0] = hljs.highlight(chunk[0], { language: 'javascript' }).value
      chunk[0] = '<pre><code>' + chunk[0] + '</code></pre>'
      return chunk.join('')
    }
    return code
  }).join('')
}