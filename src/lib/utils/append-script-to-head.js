export function appendScriptToHead (src, async = true) {
	const head = document.getElementsByTagName('head')[0]
	const script = document.createElement('script')
	script.src = src
	script.type = 'text/javascript'
	script.async = async
	script.setAttribute('charset', 'utf-8')

	head.appendChild(script)
}
