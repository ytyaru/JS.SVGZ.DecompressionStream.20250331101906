window.addEventListener('DOMContentLoaded', async(event) => {
    console.log('DOMContentLoaded!!');
    //const res = await fetch('asset/image/icon/clipboard-8.svgz');
    const res = await fetch('asset/image/icon/sprite.svgz');
    const blob = await res.blob();
    const ds = new DecompressionStream('gzip');
    const stream = blob.stream().pipeThrough(ds);
    const decompressed = await new Response(stream).arrayBuffer();
    const sprite = (new TextDecoder()).decode(decompressed);
    const css = `<style>.icon{width:1em;height:1em;}</style>`
    const use1 = `<svg class="icon"><use href="#clipboard"></use></svg>`
    const use2 = `<svg class="icon"><use href="#file"></use></svg>`
    document.querySelector('main').innerHTML = sprite + css + use1 + use2;
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

