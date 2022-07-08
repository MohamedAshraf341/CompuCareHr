namespace Site4Check.Models
{
    public class timeTableD
    {
        public int ID { get; set; }
        public int DayNO { get; set; }
        public string ShiftCode { get; set; }
        public bool isdayoff { get; set; }
        public int masterid { get; set; }
        public timeTableH TimeTableh { get; set; }
    }
}
