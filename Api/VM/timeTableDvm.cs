namespace Site4Check.VM
{
    public class timeTableDvm
    {
        public int ID { get; set; }
        public int DayNO { get; set; }
        public string ShiftCode { get; set; }
        public bool isdayoff { get; set; }
        public int masterid { get; set; }
        public timeTableHvm TimeTableh { get; set; }
    }
}
