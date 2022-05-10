import { shift } from "./shift.model";
export interface worktime{
    FromDate:string;
    ToDate:string;
    StartSign:string;
    endSign:string;
    StartShift:boolean;
    EndShift:string;
    EarlyPermission:string;
    LatePermission:string;
    isHour:boolean;
    isDayOff:boolean;
    OverTimeStart:number;
    ShiftId:number;
    Shift:shift;
    
}