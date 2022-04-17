namespace Site4Check.VM
{
    public class UserSystempageVm
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public int Userid { get; set; }
        public int pageId { get; set; }
        public string PaageName { get; set; }

        public bool New { get; set; }
        public bool edit { get; set; }
        public bool delete { get; set; }
        public bool login { get; set; }
    }

    public class UserSystemVm
    {

        public int id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }

       
    }


}
