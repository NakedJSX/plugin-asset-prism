import { Prism, loadLanguages } from '../plugin/index.mjs'

export const PrismCode =
    ({ lang, code }) =>
    {
        if (!lang)
            return code;

        if (!Prism.languages[lang])
        {
            loadLanguages([lang]);
            if (!Prism.languages[lang])
                return code;
        }

        const formattedHtml = Prism.highlight(code, Prism.languages[lang], lang);

        return <raw-content content={formattedHtml} />
    }