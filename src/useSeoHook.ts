import { useEffect } from 'react';

interface SeoHookProps {
    title: string;
    description: string;
    canonical: string
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    ogUrl: string;
}

const setMetaTag = (attribute: string, key: string, content: string): void => {
    let element = document.querySelector(`meta[${attribute}="${key}"]`);
    if(!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
    }
    element.setAttribute('content', content);
};

const useSeoHook = ({
                        title,
                        description,
                        canonical,
                        keywords,
                        ogTitle,
                        ogDescription,
                        ogImage,
                        ogUrl
                    }: SeoHookProps): void => {
    useEffect(() => {
        document.title = title;
        setMetaTag('name', 'description', description);
        setMetaTag('name', 'canonical', canonical);
        setMetaTag('name', 'keywords', keywords.join(','));
        setMetaTag('property', 'og:title', ogTitle || title);
        setMetaTag('property', 'og:description', ogDescription || description);
        setMetaTag('property', 'og:image', ogImage);
        setMetaTag('property', 'og:type', 'website');
        setMetaTag('property', 'og:url', ogUrl || window.location.href);

        return() => {};
    },[
        title,
        description,
        keywords,
        ogTitle,
        ogDescription,
        ogImage,
        ogUrl
    ]);
};

export default useSeoHook;