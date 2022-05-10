import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePicturePipe } from './profilePicture/profilePicture.pipe';
import { ChatPersonSearchPipe } from './search/chat-person-search.pipe';
import { UserSearchPipe } from './search/user-search.pipe';
import { TruncatePipe } from './truncate/truncate.pipe';
import { MailSearchPipe } from './search/mail-search.pipe';
import { TableSearchPipe } from './search/table-search.pipe';
import { CompanySearchPipe } from './search/company-search.pipe';
import { LeaveSearchPipe } from './search/leave-search.pipe';
import { PublicHolidayPipe } from './search/public-holiday.pipe';
import { WorktimeSearchPipe } from './search/worktime-search.pipe';
import { EmployeeSearchPipe } from './search/employee-search.pipe';
import { TransactionSearchPipe } from './search/transaction-search.pipe';
import { UserroleSearchPipe } from './search/userrole-search.pipe';


@NgModule({
    imports: [ 
        CommonModule 
    ],
    declarations: [
        ProfilePicturePipe,
        ChatPersonSearchPipe,
        UserSearchPipe,
        TruncatePipe,
        MailSearchPipe,
        TableSearchPipe,
        CompanySearchPipe,
        LeaveSearchPipe,
        PublicHolidayPipe,
        WorktimeSearchPipe,
        EmployeeSearchPipe,
        TransactionSearchPipe,
        UserroleSearchPipe
    ],
    exports: [
        ProfilePicturePipe,
        ChatPersonSearchPipe,
        UserSearchPipe,
        TruncatePipe,
        MailSearchPipe,
        TableSearchPipe,
        CompanySearchPipe,
        LeaveSearchPipe,
        PublicHolidayPipe,
        WorktimeSearchPipe,
        EmployeeSearchPipe,
        TransactionSearchPipe,
        UserroleSearchPipe
    ]
})
export class PipesModule { }
