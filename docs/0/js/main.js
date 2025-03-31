window.addEventListener('DOMContentLoaded', async(event) => {
    console.log('DOMContentLoaded!!');
    const res = await fetch('asset/image/icon/clipboard-8.svgz');
    const blob = await res.blob();
    const ds = new DecompressionStream('gzip');
    const stream = blob.stream().pipeThrough(ds);
    const decompressed = await new Response(stream).arrayBuffer();
    const svg = (new TextDecoder()).decode(decompressed);
    document.querySelector('main').innerHTML = svg;
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

