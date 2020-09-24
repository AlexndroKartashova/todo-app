import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'todo',
        title    : 'Todo',
        translate: 'NAV.BUTTON',
        type     : 'group',
    },
    {
        id      : 'profile',
        title   : 'Profile',
        translate: 'NAV.PROFILE',
        type    : 'collapsable',
    },
    
];
