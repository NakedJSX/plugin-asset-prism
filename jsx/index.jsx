import Prism from 'prismjs'
import loadLanguages from 'prismjs/components/'

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

        const formattedHtml =
            Prism
                .highlight(code, Prism.languages[lang], lang)
                .replace(/>\s+</g,'><'); // Remove unneccessary whitepace

        return <raw-content content={formattedHtml} />
    }