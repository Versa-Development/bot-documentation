import { defineConfigWithTheme } from "vitepress";
import type { ThemeConfig } from '@hempworks/pilgrim'
import config from '@hempworks/pilgrim/config'

export default defineConfigWithTheme<ThemeConfig>({
    extends: config,
    title: 'Versa Bot',
    description: 'All-in-one, versatile Discord Bot',
    base: '/',
    cleanUrls: true,
    srcDir: 'src',

    head: [
        ['link', {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/apple-touch-icon.png',
        }],
        ['link', {
            rel: 'icon',
            sizes: '16x16',
            type: 'image/png',
            href: '/favicon-16x16.png',
        }],
        ['link', {
            rel: 'icon',
            sizes: '32x32',
            type: 'image/png',
            href: '/favicon-32x32.png',
        }],
        ['link', {
            rel: 'mask-icon',
            href: '/safari-pinned-tab.svg',
        }],
        ['meta', {
            name: 'msapplication-TileColor',
            content: '#18b69b',
        }],
        ['meta', {
            name: 'msapplication-TileImage',
            content: '/mstile-144x144.png',
        }],
        ['meta', {
            property: 'og:image',
            content: '/social-share.png',
        }],
        ['meta', {
            property: 'twitter:card',
            content: 'summary_large_image',
        }],
        ['meta', {
            property: 'twitter:image',
            content: '/social-share.png',
        }],
    ],

    themeConfig: {
        logo: {
            light: '/logo.png',
            dark: '/logo.png',
        },
        nav: [
            {
                text: 'Home',
                link: 'https://versabot.net',
            },
            {
                text: 'GitHub',
                link: 'https://github.com/Versa-Development',
            },
            {
                text: 'Support Discord',
                link: 'https://discord.versabot.net',
            },
        ],
        versions: [
            {
                text: 'v0.1-beta',
                link: 'https://github.com/Versa-Development/documentation',
                current: true,
            },
        ],
        sidebar: [
            {
                text: 'Getting Started',
                items: [
                    { text: 'Coming Soon', link: '/introduction.html' },
                ],
            }, 
           
        ],
        search: {
            provider: 'local',
            options: {
                placeholder: 'Search VersaBot Docs...',
            },
        }
    },
    vite: {
        server: {
            host: true,
            fs: {
                // for when developing with locally linked theme
                allow: ['../..']
            }
        },
    }
})
