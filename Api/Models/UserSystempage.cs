using System.ComponentModel.DataAnnotations;

namespace Site4Check.Models
{
    public class UserSystempage
    {
        public int Id { get; set; }
        public int Userid { get; set; }
        public int pageId { get; set; }
        public string PaageName { get; set; }
        public bool New { get; set; }
        public bool edit { get; set; }
        public bool delete { get; set; }
    }
}
