'use strict'

const runthis = function () {
    try {
        console.log('Enabeling Zoom.US video download')
        console.log('Stop contextmenu event propagation')
        window.addEventListener("contextmenu", function(event) {
            event.stopImmediatePropagation();
        }, true);

        const video = document.getElementsByTagName('video')
        if (!video[0]) {
            throw new Error('No video attr')
        }

        const src = video[0].src
        if (!src) {
            throw new Error('can\'t find the video link')
        }

        const linkDiv =  document.createElement('div')
        linkDiv.className = 'linkDiv';
        linkDiv.innerHTML = `<a href="${src}" title="Right click and download as...">Download</a>`
        document.body.prepend(linkDiv)
    } catch (e) {
        console.error('Oppps! Something is wrong...')
        console.error(e)
    }
}
document.addEventListener('readystatechange', () => document.readyState === 'complete' && runthis());



