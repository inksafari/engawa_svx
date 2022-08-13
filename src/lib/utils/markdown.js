import vfile from 'to-vfile'
import {unified} from 'unified'
import parse from 'remark-parse'
import gfm from 'remark-gfm'
import remark2rehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import frontmatter from 'remark-frontmatter'
// eslint-disable-next-line no-unused-vars
import yaml from 'js-yaml'
// import type { Compatible } from 'to-vfile/lib'

let parser = unified()
	.use(parse)
	.use(gfm)
	.use(frontmatter, ['yaml']);

let runner = unified()
	.use(remark2rehype)
	.use(rehypeStringify);

export function process(filename) {
	let tree = parser.parse(vfile.readSync(filename));
	let content = runner.stringify(runner.runSync(tree));

	return content;
}
// @link:
// https://github.com/roiducto/svelte-md-blog/
