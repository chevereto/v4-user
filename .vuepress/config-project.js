module.exports = {
    title: 'V4 User',
    description: 'Chevereto V4 User Manual',
    head: [
        ['link', {
            rel: 'icon',
            href: `/logo.svg`
        }],
        ['link', {
            rel: 'manifest',
            href: '/manifest.json'
        }],
        ['meta', {
            name: 'theme-color',
            content: '#23a8e0'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ['link', {
            rel: 'apple-touch-icon',
            href: '/logo.svg'
        }],
        ['link', {
            rel: 'mask-icon',
            href: '/logo.svg',
            color: '#3eaf7c'
        }],
        ['meta', {
            name: 'msapplication-TileImage',
            content: '/logo.svg'
        }],
        ['meta', {
            name: 'msapplication-TileColor',
            content: '#000000'
        }]
    ],
    themeConfig: {
        logo: '/logo.svg',
        // repo: 'chevereto/chevereto',
        docsRepo: 'chevereto/v4-user',
        docsBranch: 'main',
        smoothScroll: true,
        editLinks: true,
        lastUpdated: true,
    },
};
