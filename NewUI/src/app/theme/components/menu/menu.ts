import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.model';
import { PermissionService } from 'src/app/services/permission/permission.service';
import { usersystempage } from 'src/app/models/usersystempage';
// @Component({
//     template: ''
//   })
// export class menu implements OnInit{
//     userid:any;
//     pages: Menu[]=[];
//     userpage: usersystempage[] = [];
// constructor(private permission: PermissionService){}
// ngOnInit(): void {
//     this.userid = JSON.parse(localStorage.getItem('UserId') as any);
// }
// callmenu(): Menu[] {
//     this.permission.getuserpermissionbyid(this.userid).subscribe((res: any) => {
//         this.userpage = res;
//         for (let i = 0; i < this.userpage.length; i++) {
//          this.pages.push(new Menu(this.userpage[i].UserId, this.userpage[i].PaageName, this.userpage[i].url, null, this.userpage[i].icon, null, false, 11))           
//         }
//     });
//     return this.pages;
// }
// verticalMenuItems =this.callmenu();
// horizontalMenuItems=this.callmenu();
// }

// let userpage: usersystempage[] = [];
// let permission: PermissionService;
// let userid: any;
// userid = JSON.parse(localStorage.getItem('UserId') as any);
// function callmenu(): Menu[] {
//     var pages: Menu[]=[];
//     // permission.getuserpermissionbyid(userid).subscribe((res: any) => {
//     //     userpage = res;
//     //     for (let i = 0; i < userpage.length; i++) {
//     //      pages.push(new Menu(userpage[i].UserId, userpage[i].PaageName, userpage[i].url, null, userpage[i].icon, null, false, 11))           
//     //     }
//     // });
    
//     // pages.push(new Menu(1, 'ADMIN_NAV.DASHBOARD', '/', null, 'tachometer', null, false, 0))
//     // pages.push(new Menu(11, 'Pages', null, null, 'folder-open-o', null, true, 0))
//     // pages.push(new Menu(2, 'Company', 'company', null, 'university', null, false, 11))
//     return pages;
// }
// export const verticalMenuItems =callmenu()
export const verticalMenuItems =[
    new Menu(1, 'ADMIN_NAV.DASHBOARD', '/defaultPage', null, 'tachometer', null, false, 0),
    new Menu(11, 'Master Data', null, null, 'folder-open-o', null, true, 0),
    new Menu(2, 'Company', 'company', null, 'university', null, false, 11),
    // new Menu(3, 'Government', null, null, 'fort-awesome', null, false, 11),
    new Menu(4, 'Branch', 'branch', null, 'drivers-license', null, false, 11),
    new Menu(5, 'Department', 'department', null, 'group', null, false, 11),
    new Menu(6, 'Shift', 'shift', null, 'cubes', null, false, 11),
    new Menu(7, 'Job', 'job', null, 'suitcase', null, false, 11),
    new Menu(14, 'job level', 'joblevel', null, 'suitcase', null, false, 11),
    new Menu(8, 'Bank', 'bus', null, 'dollar', null, false, 11),
    new Menu(9, 'Publich Holiday', 'publicholihday', null, 'angellist', null, false, 11),
    new Menu(10, 'Leaves', 'leaves', null, 'leaf', null, false, 11),
    new Menu(12, 'Work Time', 'worktime', null, 'clock-o', null, false, 11),
    new Menu(13, 'Employees', 'employee', null, 'user', null, false, 11),
    new Menu(111, 'Transactions', null, null, 'exchange', null, true, 0),
    new Menu(15, 'Permission', 'permission', null, 'lock', null, false, 111),
    new Menu(16, 'Holiday', 'holiday', null, 'anchor', null, false, 111),
    new Menu(17, 'Errand', 'errand', null, 'folder-open-o', null, false, 111),
    new Menu(1111, 'User Role', 'userrole', null, 'lock', null, false, 0),
    new Menu(11111, 'Report', 'Report', null, 'file', null, false, 0),
    new Menu(111111, 'workschedule', 'workschedule', null, 'calendar', null, false, 0),

    // new Menu (2, 'ADMIN_NAV.MEMBERSHIP', '/membership', null, 'users', null, false, 0), 
    // new Menu (3, 'ADMIN_NAV.UI_FEATURES', null, null, 'laptop', null, true, 0),   
    // new Menu (4, 'Buttons', '/ui/buttons', null, 'keyboard-o', null, false, 3),  
    // new Menu (5, 'Cards', '/ui/cards', null, 'address-card-o', null, false, 3), 
    // new Menu (6, 'Components', '/ui/components', null, 'creative-commons', null, false, 3),
    // new Menu (7, 'Icons', '/ui/icons', null, 'font-awesome', null, false, 3), 
    // new Menu (8, 'List Group', '/ui/list-group', null, 'th-list', null, false, 3), 
    // new Menu (9, 'Media Objects', '/ui/media-objects', null, 'object-group', null, false, 3), 
    // new Menu (10, 'Tabs & Accordions', '/ui/tabs-accordions', null, 'server', null, false, 3),
    // new Menu (11, 'Typography', '/ui/typography', null, 'font', null, false, 3),
    // new Menu (15, 'ADMIN_NAV.DYNAMIC_MENU', '/dynamic-menu', null, 'list-ul', null, false, 0),    
    // new Menu (16, 'ADMIN_NAV.MAILBOX', '/mailbox', null, 'envelope-o', null, false, 0),
    // new Menu (20, 'ADMIN_NAV.FORM_ELEMENTS', null, null, 'pencil-square-o', null, true, 0), 
    // new Menu (21, 'Form Controls', '/form-elements/controls', null, 'check-square-o', null, false, 20),
    // new Menu (22, 'Form Layouts', '/form-elements/layouts', null, 'th-large', null, false, 20),
    // new Menu (24, 'Form Wizard', '/form-elements/wizard', null, 'magic', null, false, 20),
    // new Menu (25, 'Editor', '/form-elements/editor', null, 'pencil', null, false, 20),
    // new Menu (26, 'ADMIN_NAV.TABLES', null, null, 'table', null, true, 0),
    // new Menu (27, 'Basic Tables', '/tables/basic-tables', null, 'th', null, false, 26), 
    // new Menu (28, 'Dynamic Tables', null, null, 'th-large', null, true, 26), 
    // new Menu (30, 'NGX DataTable', '/tables/dynamic-tables/ngx', null, 'caret-right', null, false, 28), 
    // new Menu (31, 'ADMIN_NAV.TOOLS', null, null, 'wrench', null, true, 0),
    // new Menu (32, 'Drag & Drop', '/tools/drag-drop', null, 'hand-paper-o', null, false, 31), 
    // new Menu (33, 'Resizable', '/tools/resizable', null, 'expand', null, false, 31), 
    // new Menu (34, 'Toaster', '/tools/toaster', null, 'bell-o', null, false, 31), 
    // new Menu (40, 'ADMIN_NAV.PAGES', null, null, 'file-text-o', null, true, 0),
    // new Menu (43, 'LOGIN', '/login', null, 'sign-in', null, false, 40),    
    // new Menu (44, 'REGISTER', '/register', null, 'registered', null, false, 40),
    // new Menu (45, 'ADMIN_NAV.BLANK', '/blank', null, 'file-o', null, false, 40),
    // new Menu (46, 'ADMIN_NAV.ERROR', '/pagenotfound', null, 'exclamation-circle', null, false, 40),
    // new Menu (47, 'Profile', null, null, 'user', null, true, 40),
    // new Menu (48, 'Projects', '/profile/projects', null, 'file-o', null, false, 47),    
    // new Menu (49, 'User Info', '/profile/user-info', null, 'address-card-o', null, false, 47),
    // new Menu (50, 'ADMIN_NAV.CALENDAR', '/calendar', null, 'calendar', null, false, 0),
    // new Menu (66, 'ADMIN_NAV.MAPS', null, null, 'globe', null, true, 0),
    // new Menu (67, 'Google Maps', '/maps/googlemaps', null, 'map-marker', null, false, 66),
    // new Menu (68, 'Leaflet Maps', '/maps/leafletmaps', null, 'map-o', null, false, 66),
    // new Menu (70, 'ADMIN_NAV.CHARTS', null, null, 'area-chart', null, true, 0),
    // new Menu (71, 'Bar Charts', '/charts/bar', null, 'bar-chart', null, false, 70),
    // new Menu (72, 'Pie Charts', '/charts/pie', null, 'pie-chart', null, false, 70),
    // new Menu (73, 'Line Charts', '/charts/line', null, 'line-chart', null, false, 70),
    // new Menu (74, 'Bubble Charts', '/charts/bubble', null, 'comment-o', null, false, 70),    
    // new Menu (140, 'Level 1', null, null, 'folder-open-o', null, true, 0),
    // new Menu (141, 'Level 2', null, null, 'folder-open-o', null, true, 140),
    // new Menu (142, 'Level 3', null, null, 'folder-open-o', null, true, 141),
    // new Menu (143, 'Level 4', null, null, 'folder-open-o', null, true, 142),
    // new Menu (144, 'Level 5', null, null, 'folder-o', null, false, 143),
    // new Menu (145, 'company', 'company', null, 'folder-o', null, false, 0),
    // new Menu (200, 'ADMIN_NAV.EXTERNAL_LINK', null, 'http://themeseason.com', 'external-link', '_blank', false, 0)
]

export const horizontalMenuItems =[
    new Menu(1, 'ADMIN_NAV.DASHBOARD', '/defaultPage', null, 'tachometer', null, false, 0),
    new Menu(11, 'Pages', null, null, 'folder-open-o', null, true, 0),
    new Menu(2, 'Company', 'company', null, 'university', null, false, 11),
    new Menu(3, 'Government', null, null, 'fort-awesome', null, false, 11),
    new Menu(4, 'Branch', 'branch', null, 'drivers-license', null, false, 11),
    new Menu(5, 'Department', 'department', null, 'group', null, false, 11),
    new Menu(6, 'Shift', 'shift', null, 'cubes', null, false, 11),
    new Menu(7, 'Job', 'job', null, 'suitcase', null, false, 11),
    new Menu(8, 'Bank', 'bus', null, 'dollar', null, false, 11),
    new Menu(9, 'Publich Holiday', null, null, 'angellist', null, false, 11),
    new Menu(10, 'Leaves', null, null, 'leaf', null, false, 11),
    new Menu(12, 'Time Work', null, null, 'clock-o', null, false, 11),
    new Menu(111, 'Transactions', null, null, 'exchange', null, true, 0),
    new Menu(13, 'Permission', null, null, 'lock', null, false, 111),
    new Menu(14, 'Holiday', null, null, 'anchor', null, false, 111),
    new Menu(15, 'Errand', null, null, 'folder-open-o', null, false, 111),
    new Menu(11111, 'Report', 'Report', null, 'file', null, false, 0),
    new Menu(111111, 'workschedule', 'workschedule', null, 'calendar', null, false, 0),


    // new Menu (2, 'ADMIN_NAV.MEMBERSHIP', '/membership', null, 'users', null, false, 0), 
    // new Menu (3, 'ADMIN_NAV.UI_FEATURES', null, null, 'laptop', null, true, 0),   
    // new Menu (4, 'Buttons', '/ui/buttons', null, 'keyboard-o', null, false, 3),  
    // new Menu (5, 'Cards', '/ui/cards', null, 'address-card-o', null, false, 3), 
    // new Menu (6, 'Components', '/ui/components', null, 'creative-commons', null, false, 3),
    // new Menu (7, 'Icons', '/ui/icons', null, 'font-awesome', null, false, 3), 
    // new Menu (8, 'List Group', '/ui/list-group', null, 'th-list', null, false, 3), 
    // new Menu (9, 'Media Objects', '/ui/media-objects', null, 'object-group', null, false, 3), 
    // new Menu (10, 'Tabs & Accordions', '/ui/tabs-accordions', null, 'server', null, false, 3),
    // new Menu (11, 'Typography', '/ui/typography', null, 'font', null, false, 3),
    // new Menu (31, 'ADMIN_NAV.TOOLS', null, null, 'wrench', null, true, 3),
    // new Menu (32, 'Drag & Drop', '/tools/drag-drop', null, 'hand-paper-o', null, false, 31), 
    // new Menu (33, 'Resizable', '/tools/resizable', null, 'expand', null, false, 31), 
    // new Menu (34, 'Toaster', '/tools/toaster', null, 'bell-o', null, false, 31), 
    // new Menu (20, 'ADMIN_NAV.FORM_ELEMENTS', null, null, 'pencil-square-o', null, true, 0), 
    // new Menu (21, 'Form Controls', '/form-elements/controls', null, 'check-square-o', null, false, 20),
    // new Menu (22, 'Form Layouts', '/form-elements/layouts', null, 'th-large', null, false, 20),
    // new Menu (24, 'Form Wizard', '/form-elements/wizard', null, 'magic', null, false, 20),
    // new Menu (25, 'Editor', '/form-elements/editor', null, 'pencil', null, false, 20),
    // new Menu (26, 'ADMIN_NAV.TABLES', null, null, 'table', null, true, 20),
    // new Menu (27, 'Basic Tables', '/tables/basic-tables', null, 'th', null, false, 26), 
    // new Menu (28, 'Dynamic Tables', null, null, 'th-large', null, true, 26), 
    // new Menu (30, 'NGX DataTable', '/tables/dynamic-tables/ngx', null, 'caret-right', null, false, 28), 
    // new Menu (40, 'ADMIN_NAV.PAGES', null, null, 'file-text-o', null, true, 0),
    // new Menu (15, 'ADMIN_NAV.DYNAMIC_MENU', '/dynamic-menu', null, 'list-ul', null, false, 40), 
    // new Menu (43, 'LOGIN', '/login', null, 'sign-in', null, false, 40),    
    // new Menu (44, 'REGISTER', '/register', null, 'registered', null, false, 40),
    // new Menu (45, 'ADMIN_NAV.BLANK', '/blank', null, 'file-o', null, false, 40),
    // new Menu (46, 'ADMIN_NAV.ERROR', '/pagenotfound', null, 'exclamation-circle', null, false, 40),
    // new Menu (47, 'Profile', null, null, 'user', null, true, 40),
    // new Menu (48, 'Projects', '/profile/projects', null, 'file-o', null, false, 47),    
    // new Menu (49, 'User Info', '/profile/user-info', null, 'address-card-o', null, false, 47),
    // new Menu (50, 'ADMIN_NAV.CALENDAR', '/calendar', null, 'calendar', null, false, 40),
    // new Menu (16, 'ADMIN_NAV.MAILBOX', '/mailbox', null, 'envelope-o', null, false, 40), 
    // new Menu (200, 'ADMIN_NAV.EXTERNAL_LINK', null, 'http://themeseason.com', 'external-link', '_blank', false, 40),
    // new Menu (66, 'ADMIN_NAV.MAPS', null, null, 'globe', null, true, 0),
    // new Menu (67, 'Google Maps', '/maps/googlemaps', null, 'map-marker', null, false, 66),
    // new Menu (68, 'Leaflet Maps', '/maps/leafletmaps', null, 'map-o', null, false, 66),
    // new Menu (70, 'ADMIN_NAV.CHARTS', null, null, 'area-chart', null, true, 0),
    // new Menu (71, 'Bar Charts', '/charts/bar', null, 'bar-chart', null, false, 70),
    // new Menu (72, 'Pie Charts', '/charts/pie', null, 'pie-chart', null, false, 70),
    // new Menu (73, 'Line Charts', '/charts/line', null, 'line-chart', null, false, 70),
    // new Menu (74, 'Bubble Charts', '/charts/bubble', null, 'comment-o', null, false, 70)
]