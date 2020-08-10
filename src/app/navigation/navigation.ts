import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        icon     : 'apps',
        children : [
            {
                id       : 'to-do',
                title    : 'To-Do',
                translate: 'NAV.TODO',
                type     : 'item',
                icon     : 'check_box',
                url      : '/todo/categories',
                badge    : {
                    title: '3',
                    bg   : '#FF6F00',
                    fg   : '#FFFFFF'
                }
            },
        ]
    },
    {
        id      : 'authentication',
        title   : 'Authentication',
        type    : 'collapsable',
        icon    : 'lock',
        badge   : {
            title: '10',
            bg   : '#525e8a',
            fg   : '#FFFFFF'
        },
        children: [
            {
                id   : 'login',
                title: 'Login',
                type : 'item',
                url  : '/auth/login'
            },
            {
                id   : 'register',
                title: 'Register',
                type : 'item',
                url  : '/auth/register'
            },
        ]

    },
    
];
