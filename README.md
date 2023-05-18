# plugin-asset-prism
Build-time formatting of code using [Prism](https://prismjs.com).

The result can then be styled by adding the [Prism CSS theme](https://github.com/PrismJS/prism/tree/master/themes) of your choice. 
This plugin comes with a theme that aims to be accessible and that supports both light and dark mode.

To embed it within your page:

    import prismTheme from ':raw:@nakedjsx/plugin-asset-prism/theme.css';

    ...

    Page.AppendCss(prismTheme);


To treat the theme as an asset and link to it:

    import prismTheme from '::@nakedjsx/plugin-asset-prism/theme.css';

    ...

    Page.AppendHead(<link type="text/css" rel="stylesheet" href={prismTheme} />);
