// import querystring from 'node:querystring';
// import path from 'node:path';
// import fsp from 'node:fs/promises';

export { default as Prism } from 'prismjs';
export { default as loadLanguages } from 'prismjs/components/index.js';

let log;

const plugin =
    {
        type: 'asset-import',
        importAsset
    };

export default function(context)
{
    log = context.logging.log;

    context.register(plugin);
}

async function importAsset(context, asset)
{
    //
    // Load asset file, encode it as the requested lanugage using Prism,
    // and return the HTML result as a string.
    //

    throw Error(`TODO: implement importAsset() in @nakedjsx/plugin-asset-import. Use the exported <PrismCode /> tag for now.`);
}