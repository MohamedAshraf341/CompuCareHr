import { timeTableH } from "./timeTableH";
export interface timeTableD{
    ID:number;
    masterid:number;
    DayNO:number;
    ShiftCode:string;
    isdayoff:boolean;
    Name:string;
    TimePeriod:number;
    StartDate:string;
    Morning:boolean;
    Shift:boolean;
    Driver:boolean;
    shiftdriver:boolean
}