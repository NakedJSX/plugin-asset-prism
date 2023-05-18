// import querystring from 'node:querystring';
// import path from 'node:path';
// import fsp from 'node:fs/promises';

let log;

const plugin =
    {
        type: 'asset',
        id: 'prism',
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

    return `export default ${JSON.stringify("<strong>TODO, implement plugin-asset-prism importAsset()</strong>")}`;
}