using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Site4Check.Models
{
    public partial class HR_DirectionContext : DbContext
    {
        public HR_DirectionContext()
        {
        }

        public HR_DirectionContext(DbContextOptions<HR_DirectionContext> options)
            : base(options)
        {
        }
        public virtual DbSet<timeTableD> timeTableD { get; set; }
        public virtual DbSet<timeTableH> timeTableH { get; set; }


        public virtual DbSet<AccountStatement> AccountStatement { get; set; }
        public virtual DbSet<AggregatedCounter> AggregatedCounter { get; set; }
        public virtual DbSet<Systempage> Systempage { get; set; }
        public virtual DbSet<UserSystem> UserSystem { get; set; }
        public virtual DbSet<UserSystempage> UserSystempage { get; set; }
        public virtual DbSet<ApprovalEdafi> ApprovalEdafi { get; set; }
        public virtual DbSet<AttBranch> AttBranch { get; set; }
        public virtual DbSet<EmpWorkTime> EmpWorkTime { get; set; }
        public virtual DbSet<Attbus> Attbus { get; set; }
        public virtual DbSet<attcomp> Attcomp { get; set; }
        public virtual DbSet<Attcost> Attcost { get; set; }
        public virtual DbSet<AttDepartment> AttDepartment { get; set; }
        public virtual DbSet<Attjob> Attjob { get; set; }
        public virtual DbSet<Attjoblevel> Attjoblevel { get; set; }
        public virtual DbSet<AttpublicHoliday> AttpublicHoliday { get; set; }
        public virtual DbSet<Attsection> Attsection { get; set; }
        public virtual DbSet<AttShift> AttShift { get; set; }
        public virtual DbSet<Banks> Banks { get; set; }
        public virtual DbSet<Checkinout> Checkinout { get; set; }
        public virtual DbSet<CheckinoutMob> CheckinoutMob { get; set; }
        public virtual DbSet<CheckinoutDev> CheckinoutDev { get; set; }
        public virtual DbSet<CheckinoutOld> CheckinoutOld { get; set; }
        public virtual DbSet<Clients> Clients { get; set; }
        public virtual DbSet<CompUrl> CompUrl { get; set; }
        public virtual DbSet<Course> Course { get; set; }
        public virtual DbSet<Department> Department { get; set; }
        public virtual DbSet<DiffHour> DiffHour { get; set; }
        public virtual DbSet<EmpAccount> EmpAccount { get; set; }
        public virtual DbSet<EmpAccTransaction> EmpAccTransaction { get; set; }
        public virtual DbSet<EmpBoss> EmpBoss { get; set; }
        public virtual DbSet<EmpCost> EmpCost { get; set; }
        public virtual DbSet<EmpData> EmpData { get; set; }
        public virtual DbSet<EmpLog> EmpLog { get; set; }
        public virtual DbSet<Employees> Employees { get; set; }
        public virtual DbSet<EmpSalary> EmpSalary { get; set; }
        public virtual DbSet<Empshift> Empshift { get; set; }
        public virtual DbSet<EmpStatus> EmpStatus { get; set; }
        public virtual DbSet<ExcuseReq> ExcuseReq { get; set; }
        public virtual DbSet<ExcuseRequest> ExcuseRequest { get; set; }
        public virtual DbSet<Excutype> Excutype { get; set; }
        public virtual DbSet<Extratime> Extratime { get; set; }
        public virtual DbSet<Hash> Hash { get; set; }
        public virtual DbSet<Holdayreq> Holdayreq { get; set; }
        public virtual DbSet<HoldayTaype> HoldayTaype { get; set; }
        public virtual DbSet<Inmanual> Inmanual { get; set; }
        public virtual DbSet<Job> Job { get; set; }
        public virtual DbSet<JobParameter> JobParameter { get; set; }
        public virtual DbSet<JobQueue> JobQueue { get; set; }
        public virtual DbSet<Leaves> Leaves { get; set; }
        public virtual DbSet<LeavesRule> LeavesRule { get; set; }
        public virtual DbSet<LeavesType> LeavesType { get; set; }
        public virtual DbSet<LeavesVac> LeavesVac { get; set; }
        public virtual DbSet<Legation> Legation { get; set; }
        public virtual DbSet<List> List { get; set; }
        public virtual DbSet<Location> Location { get; set; }

        public virtual DbSet<devdata> devdata { get; set; }
        public virtual DbSet<LogMob> LogMob { get; set; }
        public virtual DbSet<Machine> Machine { get; set; }
        public virtual DbSet<Menus> Menus { get; set; }
        public virtual DbSet<Mission> Mission { get; set; }
        public virtual DbSet<MosyarType> MosyarType { get; set; }
        public virtual DbSet<Nadb> Nadb { get; set; }
        public virtual DbSet<Nationality> Nationality { get; set; }
        public virtual DbSet<NotificationData> NotificationData { get; set; }
        public virtual DbSet<NotificationMessage> NotificationMessage { get; set; }
        public virtual DbSet<Officialvacation> Officialvacation { get; set; }
        public virtual DbSet<ReqFile> ReqFile { get; set; }
        public virtual DbSet<Salary> Salary { get; set; }
        public virtual DbSet<Schema> Schema { get; set; }
        public virtual DbSet<Server> Server { get; set; }
        public virtual DbSet<Set> Set { get; set; }
        public virtual DbSet<Shifts> Shifts { get; set; }
        public virtual DbSet<State> State { get; set; }
        public virtual DbSet<Status> Status { get; set; }
        public virtual DbSet<Taklef> Taklef { get; set; }
        public virtual DbSet<TLg2> TLg2 { get; set; }
        public virtual DbSet<Transaction> Transaction { get; set; }
        public virtual DbSet<TransactionStatus> TransactionStatus { get; set; }
        public virtual DbSet<UserFirebaseToken> UserFirebaseToken { get; set; }
        public virtual DbSet<UserNotifivations> UserNotifivations { get; set; }
        public virtual DbSet<Users> Users { get; set; }
        public virtual DbSet<Vacation> Vacation { get; set; }
        public virtual DbSet<Year> Year { get; set; }

        // Unable to generate entity type for table 'dbo.userper'. Please see the warning messages.
        // Unable to generate entity type for table 'dbo.taklefemp'. Please see the warning messages.
        // Unable to generate entity type for table 'dbo.EmpLocation'. Please see the warning messages.
        // Unable to generate entity type for table 'dbo.EmpCover'. Please see the warning messages.
        // Unable to generate entity type for table 'dbo.info'. Please see the warning messages.
        // Unable to generate entity type for table 'dbo.LocationFinger'. Please see the warning messages.
        // Unable to generate entity type for table 'dbo.salaryDe'. Please see the warning messages.
        // Unable to generate entity type for table 'dbo.leavesdata'. Please see the warning messages.
        // Unable to generate entity type for table 'dbo.ApprovalEdafiD'. Please see the warning messages.
        // Unable to generate entity type for table 'HangFire.Counter'. Please see the warning messages.
        // Unable to generate entity type for table 'dbo.data$'. Please see the warning messages.
        // Unable to generate entity type for table 'dbo.absent'. Please see the warning messages.

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("data source=157.90.106.165,1433;Database=HR_Direction;user id=db;password=db!@#5690 ;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<AccountStatement>(entity =>
            {
                entity.Property(e => e.AccountCode).HasMaxLength(50);

                entity.Property(e => e.Date).HasColumnType("datetime");

                entity.Property(e => e.Note).HasMaxLength(10);

                entity.Property(e => e.RegisterDate).HasColumnType("datetime");

                entity.Property(e => e.Sign)
                    .HasMaxLength(1)
                    .IsUnicode(false);

                entity.Property(e => e.ValueInfo).HasMaxLength(500);
            });

            modelBuilder.Entity<AggregatedCounter>(entity =>
            {
                entity.HasKey(e => e.Key);

                entity.ToTable("AggregatedCounter", "HangFire");

                entity.HasIndex(e => e.ExpireAt)
                    .HasName("IX_HangFire_AggregatedCounter_ExpireAt")
                    .HasFilter("([ExpireAt] IS NOT NULL)");

                entity.Property(e => e.Key)
                    .HasMaxLength(100)
                    .ValueGeneratedNever();

                entity.Property(e => e.ExpireAt).HasColumnType("datetime");
            });

            modelBuilder.Entity<ApprovalEdafi>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedNever();

                entity.Property(e => e.EndDate)
                    .HasColumnName("endDate")
                    .HasColumnType("date");

                entity.Property(e => e.EndHdate)
                    .HasColumnName("endHDate")
                    .HasMaxLength(50);

                entity.Property(e => e.StartDate)
                    .HasColumnName("startDate")
                    .HasColumnType("date");

                entity.Property(e => e.StartHdate)
                    .HasColumnName("startHDate")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<AttBranch>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Arname)
                    .HasColumnName("arname")
                    .HasMaxLength(100);

                entity.Property(e => e.Enname)
                    .HasColumnName("enname")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<Attbus>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Arname)
                    .HasColumnName("arname")
                    .HasMaxLength(100);

                entity.Property(e => e.Enname)
                    .HasColumnName("enname")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<attcomp>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Arname)
                    .HasColumnName("arname")
                    .HasMaxLength(100);

                entity.Property(e => e.Enname)
                    .HasColumnName("enname")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<Attcost>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Arname)
                    .HasColumnName("arname")
                    .HasMaxLength(100);

                entity.Property(e => e.Enname)
                    .HasColumnName("enname")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<AttDepartment>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Arname)
                    .HasColumnName("arname")
                    .HasMaxLength(100);

                entity.Property(e => e.Enname)
                    .HasColumnName("enname")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<Attjob>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Arname)
                    .HasColumnName("arname")
                    .HasMaxLength(100);

                entity.Property(e => e.Enname)
                    .HasColumnName("enname")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<Attjoblevel>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Arname)
                    .HasColumnName("arname")
                    .HasMaxLength(100);

                entity.Property(e => e.Enname)
                    .HasColumnName("enname")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<AttpublicHoliday>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Arname)
                    .HasColumnName("arname")
                    .HasMaxLength(100);

                entity.Property(e => e.Enname)
                    .HasColumnName("enname")
                    .HasMaxLength(100);

                entity.Property(e => e.Fdate)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Tdate)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Attsection>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Arname)
                    .HasColumnName("arname")
                    .HasMaxLength(100);

                entity.Property(e => e.Enname)
                    .HasColumnName("enname")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<AttShift>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Arname)
                    .HasColumnName("arname")
                    .HasMaxLength(100);

                entity.Property(e => e.Enname)
                    .HasColumnName("enname")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<Banks>(entity =>
            {
                entity.ToTable("banks");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Code)
                    .HasColumnName("code")
                    .HasMaxLength(50);

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Checkinout>(entity =>
            {
                entity.ToTable("CHECKINOUT");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Chektime).HasColumnName("CHEKTIME");

                entity.Property(e => e.Empid).HasColumnName("EMPID");

                entity.Property(e => e.Gdatetime)
                    .HasColumnName("GDATETIME")
                    .HasColumnType("datetime");

                entity.Property(e => e.Inoutmode).HasColumnName("INOUTMODE");

                entity.Property(e => e.Shiftid).HasColumnName("shiftid");
            });

            modelBuilder.Entity<CheckinoutMob>(entity =>
            {
                entity.ToTable("CHECKINOUT_Mob");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Chektime).HasColumnName("CHEKTIME");

                entity.Property(e => e.Empid).HasColumnName("EMPID");

                entity.Property(e => e.Gdatetime)
                    .HasColumnName("GDATETIME")
                    .HasColumnType("datetime");

                entity.Property(e => e.Image).HasMaxLength(150);

                entity.Property(e => e.Inoutmode).HasColumnName("INOUTMODE");

                entity.Property(e => e.LocationId).HasColumnName("LocationID");

                entity.Property(e => e.MobSer).HasMaxLength(200);

                entity.Property(e => e.Shiftid).HasColumnName("shiftid");

                entity.HasOne(d => d.Location)
                    .WithMany(p => p.CheckinoutMob)
                    .HasForeignKey(d => d.LocationId)
                    .HasConstraintName("FK_CHECKINOUT_Mob_location");

                entity.HasOne(d => d.Shift)
                    .WithMany(p => p.CheckinoutMob)
                    .HasForeignKey(d => d.Shiftid)
                    .HasConstraintName("FK_CHECKINOUT_Mob_shifts");
            });


            modelBuilder.Entity<CheckinoutDev>(entity =>
            {
                entity.ToTable("CHECKINOUT_MobDev");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Chektime).HasColumnName("CHEKTIME");

                entity.Property(e => e.Empid).HasColumnName("EMPID");

                entity.Property(e => e.Gdatetime)
                    .HasColumnName("GDATETIME")
                    .HasColumnType("datetime");

                entity.Property(e => e.Image).HasMaxLength(150);

                entity.Property(e => e.Inoutmode).HasColumnName("INOUTMODE");

                entity.Property(e => e.LocationId).HasColumnName("LocationID");

                entity.Property(e => e.MobSer).HasMaxLength(200);

                entity.Property(e => e.Devid).HasColumnName("Devid");

                entity.HasOne(d => d.Location)
                   .WithMany(p => p.CheckinoutDev)
                   .HasForeignKey(d => d.LocationId)
                   .HasConstraintName("FK_CHECKINOUT_MobDev_location");

                entity.HasOne(d => d.devdata)
                    .WithMany(p => p.CheckinoutDev)
                    .HasForeignKey(d => d.Devid)
                    .HasConstraintName("FK_CHECKINOUT_MobDev_devdata");


            });
            modelBuilder.Entity<CheckinoutOld>(entity =>
            {
                entity.ToTable("CHECKINOUT_old");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Chektime).HasColumnName("CHEKTIME");

                entity.Property(e => e.Empid).HasColumnName("EMPID");

                entity.Property(e => e.Gdatetime)
                    .HasColumnName("GDATETIME")
                    .HasColumnType("datetime");

                entity.Property(e => e.Inoutmode).HasColumnName("INOUTMODE");

                entity.Property(e => e.Shiftid).HasColumnName("shiftid");
            });

            modelBuilder.Entity<Clients>(entity =>
            {
                entity.Property(e => e.ClientName).HasMaxLength(100);

                entity.Property(e => e.Mobile1).HasMaxLength(20);

                entity.Property(e => e.Mobile2).HasMaxLength(20);

                entity.Property(e => e.ProjectName).HasMaxLength(100);

                entity.Property(e => e.RegisterDate).HasColumnType("datetime");

                entity.Property(e => e.UnitNumber).HasMaxLength(100);
            });

            modelBuilder.Entity<CompUrl>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CompCode).HasMaxLength(50);

                entity.Property(e => e.CompLogo).HasMaxLength(150);

                entity.Property(e => e.CompName).HasMaxLength(100);

                entity.Property(e => e.Password).HasMaxLength(50);

                entity.Property(e => e.Url).HasMaxLength(100);
            });

            modelBuilder.Entity<Course>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.EmoloyeeId).HasColumnName("emoloyeeID");

                entity.Property(e => e.EndDate)
                    .HasColumnName("endDate")
                    .HasColumnType("date");

                entity.Property(e => e.EndHdate)
                    .HasColumnName("endHDate")
                    .HasMaxLength(50);

                entity.Property(e => e.Period).HasColumnName("period");

                entity.Property(e => e.StartDate)
                    .HasColumnName("startDate")
                    .HasColumnType("date");

                entity.Property(e => e.StartHdate)
                    .HasColumnName("startHDate")
                    .HasMaxLength(50);

                entity.Property(e => e.Type)
                    .HasColumnName("type")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Department>(entity =>
            {
                entity.ToTable("department");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<DiffHour>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.DiffHour1).HasColumnName("DiffHour");
            });

            modelBuilder.Entity<EmpAccount>(entity =>
            {
                entity.Property(e => e.AccountCode).HasMaxLength(100);

                entity.Property(e => e.AccountName).HasMaxLength(100);
            });

            modelBuilder.Entity<EmpAccTransaction>(entity =>
            {
                entity.Property(e => e.Date).HasColumnType("datetime");

                entity.Property(e => e.Note).HasMaxLength(500);

                entity.Property(e => e.RegisterDate).HasColumnType("datetime");

                entity.HasOne(d => d.EmpAccount)
                    .WithMany(p => p.EmpAccTransaction)
                    .HasForeignKey(d => d.EmpAccountId)
                    .HasConstraintName("FK_EmpAccTransaction_EmpAccount");

                entity.HasOne(d => d.EmpCost)
                    .WithMany(p => p.EmpAccTransaction)
                    .HasForeignKey(d => d.EmpCostId)
                    .HasConstraintName("FK_EmpAccTransaction_EmpCost");
            });

            modelBuilder.Entity<EmpBoss>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");
            });

            modelBuilder.Entity<EmpCost>(entity =>
            {
                entity.Property(e => e.CostCode).HasMaxLength(100);

                entity.Property(e => e.CostName).HasMaxLength(100);
            });

            modelBuilder.Entity<EmpData>(entity =>
            {
                entity.Property(e => e.Add).HasMaxLength(250);

                entity.Property(e => e.Birth).HasMaxLength(50);

                entity.Property(e => e.BusWay)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.CardId).HasMaxLength(50);

                entity.Property(e => e.EmpCode)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EmpName).HasMaxLength(100);

                entity.Property(e => e.FullCode)
                    .HasMaxLength(14)
                    .IsUnicode(false);

                entity.Property(e => e.Hiring).HasMaxLength(50);

                entity.Property(e => e.Image).HasMaxLength(150);

                entity.Property(e => e.Insurance).HasMaxLength(100);

                entity.Property(e => e.Is5).HasColumnName("IS5");

                entity.Property(e => e.Is5work).HasColumnName("IS5Work");

                entity.Property(e => e.Ishour).HasColumnName("ISHour");

                entity.Property(e => e.Isshift).HasColumnName("ISShift");

                entity.Property(e => e.Level).HasColumnName("level");

                entity.Property(e => e.Note)
                    .HasColumnName("note")
                    .HasMaxLength(1000);

                entity.Property(e => e.Password)
                    .HasColumnName("password")
                    .HasMaxLength(50);

                entity.Property(e => e.Quli).HasMaxLength(300);

                entity.Property(e => e.Tel)
                    .HasColumnName("tel")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<EmpLog>(entity =>
            {
                entity.Property(e => e.Date).HasColumnType("datetime");

                entity.Property(e => e.DayName).HasMaxLength(100);

                entity.Property(e => e.EmpName).HasMaxLength(100);

                entity.Property(e => e.Islatein).HasColumnName("ISLatein");

                entity.Property(e => e.Islateout).HasColumnName("ISLateout");

                entity.Property(e => e.LateOut).HasMaxLength(10);

                entity.Property(e => e.Latein).HasMaxLength(10);

                entity.Property(e => e.Note).HasMaxLength(100);

                entity.Property(e => e.Overtime).HasMaxLength(10);

                entity.Property(e => e.Timein).HasMaxLength(20);

                entity.Property(e => e.Timeout).HasMaxLength(20);

                entity.Property(e => e.Worktime)
                    .HasColumnName("worktime")
                    .HasMaxLength(20);
            });

            modelBuilder.Entity<Employees>(entity =>
            {
                entity.ToTable("employees");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedNever();

                entity.Property(e => e.AccountNo)
                    .HasColumnName("AccountNO")
                    .HasMaxLength(100);

                entity.Property(e => e.BadalMa3esha).HasColumnName("badalMa3esha");

                entity.Property(e => e.BadalNaql).HasColumnName("badalNaql");

                entity.Property(e => e.Badaldifferent).HasColumnName("badaldifferent");

                entity.Property(e => e.Badalother).HasColumnName("badalother");

                entity.Property(e => e.Bankid).HasColumnName("bankid");

                entity.Property(e => e.CardNo).HasMaxLength(50);

                entity.Property(e => e.DateMobashra).HasColumnType("date");

                entity.Property(e => e.Deduction).HasColumnName("deduction");

                entity.Property(e => e.Departid).HasColumnName("departid");

                entity.Property(e => e.Dmobashra)
                    .HasColumnName("DMobashra")
                    .HasMaxLength(50);

                entity.Property(e => e.EndDate)
                    .HasColumnName("endDate")
                    .HasColumnType("date");

                entity.Property(e => e.EndHdate)
                    .HasColumnName("endHDate")
                    .HasMaxLength(50);

                entity.Property(e => e.Image).HasMaxLength(150);

                entity.Property(e => e.Message).HasMaxLength(500);

                entity.Property(e => e.Mobile).HasMaxLength(50);

                entity.Property(e => e.Mosyertypeid).HasColumnName("mosyertypeid");

                entity.Property(e => e.Mrtba)
                    .HasColumnName("mrtba")
                    .HasMaxLength(50);

                entity.Property(e => e.Naid).HasColumnName("naid");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(50);

                entity.Property(e => e.OutDate).HasColumnName("outDate");

                entity.Property(e => e.Salary).HasColumnName("salary");

                entity.Property(e => e.Shiftsid).HasColumnName("shiftsid");

                entity.Property(e => e.StartDate)
                    .HasColumnName("startDate")
                    .HasColumnType("date");

                entity.Property(e => e.StartDateP)
                    .HasColumnName("startDateP")
                    .HasColumnType("date");

                entity.Property(e => e.StartHdate)
                    .HasColumnName("startHDate")
                    .HasMaxLength(50);

                entity.Property(e => e.StartHdateP)
                    .HasColumnName("startHDateP")
                    .HasMaxLength(50);

                entity.Property(e => e.StartP).HasColumnName("startP");

                entity.Property(e => e.Wazifa)
                    .HasColumnName("wazifa")
                    .HasMaxLength(50);

                entity.Property(e => e.Yearly).HasColumnName("yearly");
            });

            modelBuilder.Entity<EmpSalary>(entity =>
            {
                entity.Property(e => e.EmpName).HasMaxLength(100);

                entity.Property(e => e.Val).HasColumnType("numeric(18, 2)");

                entity.Property(e => e.ValName).HasMaxLength(100);
            });

            modelBuilder.Entity<Empshift>(entity =>
            {
                entity.ToTable("empshift");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Empid).HasColumnName("empid");

                entity.Property(e => e.EndDate)
                    .HasColumnName("endDate")
                    .HasColumnType("date");

                entity.Property(e => e.EndHdate)
                    .HasColumnName("endHDate")
                    .HasMaxLength(50);

                entity.Property(e => e.Shiftid).HasColumnName("shiftid");

                entity.Property(e => e.StartDate)
                    .HasColumnName("startDate")
                    .HasColumnType("date");

                entity.Property(e => e.StartHdate)
                    .HasColumnName("startHDate")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<EmpStatus>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Message).HasMaxLength(500);
            });

            modelBuilder.Entity<ExcuseReq>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Bcancle).HasColumnName("bcancle");

                entity.Property(e => e.Bossid).HasColumnName("bossid");

                entity.Property(e => e.Dpbcancle).HasColumnName("dpbcancle");

                entity.Property(e => e.Dpbossid).HasColumnName("dpbossid");

                entity.Property(e => e.Edate)
                    .HasColumnName("edate")
                    .HasColumnType("date");

                entity.Property(e => e.Ehdate)
                    .HasColumnName("ehdate")
                    .HasMaxLength(50);

                entity.Property(e => e.Empid).HasColumnName("empid");

                entity.Property(e => e.Etime).HasColumnName("etime");

                entity.Property(e => e.Excwhy).HasColumnName("excwhy");

                entity.Property(e => e.Exstatues).HasColumnName("exstatues");

                entity.Property(e => e.Exstatuestext).HasColumnName("exstatuestext");

                entity.Property(e => e.Shiftid).HasColumnName("shiftid");

                entity.Property(e => e.Stime).HasColumnName("stime");

                entity.Property(e => e.Typeid).HasColumnName("typeid");
            });

            modelBuilder.Entity<ExcuseRequest>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Date).HasColumnType("date");

                entity.Property(e => e.EmployeeId).HasColumnName("EmployeeID");

                entity.Property(e => e.EndDate).HasColumnType("date");

                entity.Property(e => e.GmanagerId).HasColumnName("GmanagerID");

                entity.Property(e => e.ManagerApprove).HasColumnName("managerApprove");

                entity.Property(e => e.ManagerId).HasColumnName("managerID");

                entity.Property(e => e.RejectReson)
                    .HasColumnName("rejectReson")
                    .HasColumnType("ntext");

                entity.Property(e => e.Startdate).HasColumnType("date");
            });

            modelBuilder.Entity<Excutype>(entity =>
            {
                entity.ToTable("excutype");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Extratime>(entity =>
            {
                entity.ToTable("extratime");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Bcancle).HasColumnName("bcancle");

                entity.Property(e => e.Bossid).HasColumnName("bossid");

                entity.Property(e => e.Dpbcancle).HasColumnName("dpbcancle");

                entity.Property(e => e.Dpbossid).HasColumnName("dpbossid");

                entity.Property(e => e.Edate)
                    .HasColumnName("edate")
                    .HasColumnType("date");

                entity.Property(e => e.Ehdate)
                    .HasColumnName("ehdate")
                    .HasMaxLength(50);

                entity.Property(e => e.Empid).HasColumnName("empid");

                entity.Property(e => e.Extratime1).HasColumnName("extratime");

                entity.Property(e => e.Reqstatues).HasColumnName("reqstatues");

                entity.Property(e => e.Reqstatuestext).HasColumnName("reqstatuestext");

                entity.Property(e => e.Reqwhy).HasColumnName("reqwhy");
            });

            modelBuilder.Entity<Hash>(entity =>
            {
                entity.HasKey(e => new { e.Key, e.Field });

                entity.ToTable("Hash", "HangFire");

                entity.HasIndex(e => e.ExpireAt)
                    .HasName("IX_HangFire_Hash_ExpireAt")
                    .HasFilter("([ExpireAt] IS NOT NULL)");

                entity.Property(e => e.Key).HasMaxLength(100);

                entity.Property(e => e.Field).HasMaxLength(100);
            });

            modelBuilder.Entity<Holdayreq>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Bcancle)
                    .HasColumnName("bcancle")
                    .HasMaxLength(500);

                entity.Property(e => e.Bossid).HasColumnName("bossid");

                entity.Property(e => e.Briod).HasColumnName("briod");

                entity.Property(e => e.Datereq)
                    .HasColumnName("datereq")
                    .HasColumnType("date")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Dbbcancle)
                    .HasColumnName("dbbcancle")
                    .HasMaxLength(500);

                entity.Property(e => e.Dbbossid).HasColumnName("dbbossid");

                entity.Property(e => e.Empid).HasColumnName("empid");

                entity.Property(e => e.Empsupport).HasColumnName("empsupport");

                entity.Property(e => e.EndDate)
                    .HasColumnName("endDate")
                    .HasColumnType("date");

                entity.Property(e => e.EndHdate)
                    .HasColumnName("endHDate")
                    .HasMaxLength(10);

                entity.Property(e => e.Holdaytype).HasColumnName("holdaytype");

                entity.Property(e => e.Hstatuestext).HasMaxLength(500);

                entity.Property(e => e.StartDate)
                    .HasColumnName("startDate")
                    .HasColumnType("date");

                entity.Property(e => e.StartHdate)
                    .HasColumnName("startHDate")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<HoldayTaype>(entity =>
            {
                entity.ToTable("holdayTaype");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedNever();

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Inmanual>(entity =>
            {
                entity.ToTable("INMANUAL");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Chektime).HasColumnName("CHEKTIME");

                entity.Property(e => e.Empid).HasColumnName("EMPID");

                entity.Property(e => e.Gdatetime)
                    .HasColumnName("GDATETIME")
                    .HasColumnType("datetime");

                entity.Property(e => e.Inoutmode).HasColumnName("INOUTMODE");

                entity.Property(e => e.Shiftid).HasColumnName("shiftid");
            });

            modelBuilder.Entity<Job>(entity =>
            {
                entity.ToTable("Job", "HangFire");

                entity.HasIndex(e => e.StateName)
                    .HasName("IX_HangFire_Job_StateName")
                    .HasFilter("([StateName] IS NOT NULL)");

                entity.HasIndex(e => new { e.StateName, e.ExpireAt })
                    .HasName("IX_HangFire_Job_ExpireAt")
                    .HasFilter("([ExpireAt] IS NOT NULL)");

                entity.Property(e => e.Arguments).IsRequired();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.ExpireAt).HasColumnType("datetime");

                entity.Property(e => e.InvocationData).IsRequired();

                entity.Property(e => e.StateName).HasMaxLength(20);
            });

            modelBuilder.Entity<JobParameter>(entity =>
            {
                entity.HasKey(e => new { e.JobId, e.Name });

                entity.ToTable("JobParameter", "HangFire");

                entity.Property(e => e.Name).HasMaxLength(40);

                entity.HasOne(d => d.Job)
                    .WithMany(p => p.JobParameter)
                    .HasForeignKey(d => d.JobId)
                    .HasConstraintName("FK_HangFire_JobParameter_Job");
            });

            modelBuilder.Entity<JobQueue>(entity =>
            {
                entity.HasKey(e => new { e.Queue, e.Id });

                entity.ToTable("JobQueue", "HangFire");

                entity.Property(e => e.Queue).HasMaxLength(50);

                entity.Property(e => e.Id).ValueGeneratedOnAdd();

                entity.Property(e => e.FetchedAt).HasColumnType("datetime");
            });

            modelBuilder.Entity<Leaves>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Alis).HasMaxLength(10);

                entity.Property(e => e.Issub).HasColumnName("ISsub");

                entity.Property(e => e.LeavesRuleId).HasColumnName("LeavesRuleID");

                entity.Property(e => e.LeavesVacId).HasColumnName("leavesVacId");

                entity.Property(e => e.Name).HasMaxLength(250);

                entity.HasOne(d => d.LeavesRule)
                    .WithMany(p => p.Leaves)
                    .HasForeignKey(d => d.LeavesRuleId)
                    .HasConstraintName("FK_Leaves_LeavesRule1");

                entity.HasOne(d => d.LeavesVac)
                    .WithMany(p => p.Leaves)
                    .HasForeignKey(d => d.LeavesVacId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_Leaves_leavesVac");

                entity.HasOne(d => d.TypeNavigation)
                    .WithMany(p => p.Leaves)
                    .HasForeignKey(d => d.Type)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_Leaves_LeavesType");
            });

            modelBuilder.Entity<LeavesRule>(entity =>
            {
                entity.Property(e => e.IsHourCut).HasColumnName("isHourCut");

                entity.Property(e => e.Isshift).HasColumnName("ISshift");

                entity.Property(e => e.Name).HasMaxLength(100);
            });

            modelBuilder.Entity<LeavesType>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Name).HasMaxLength(150);
            });

            modelBuilder.Entity<LeavesVac>(entity =>
            {
                entity.ToTable("leavesVac");

                entity.Property(e => e.VacName).HasMaxLength(100);
            });

            modelBuilder.Entity<Legation>(entity =>
            {
                entity.ToTable("legation");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Direction)
                    .HasColumnName("direction")
                    .HasMaxLength(50);

                entity.Property(e => e.EmoloyeeId).HasColumnName("emoloyeeID");

                entity.Property(e => e.EndDate)
                    .HasColumnName("endDate")
                    .HasColumnType("date");

                entity.Property(e => e.EndHdate)
                    .HasColumnName("endHDate")
                    .HasMaxLength(50);

                entity.Property(e => e.Period).HasColumnName("period");

                entity.Property(e => e.StartDate)
                    .HasColumnName("startDate")
                    .HasColumnType("date");

                entity.Property(e => e.StartHdate)
                    .HasColumnName("startHDate")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<List>(entity =>
            {
                entity.HasKey(e => new { e.Key, e.Id });

                entity.ToTable("List", "HangFire");

                entity.HasIndex(e => e.ExpireAt)
                    .HasName("IX_HangFire_List_ExpireAt")
                    .HasFilter("([ExpireAt] IS NOT NULL)");

                entity.Property(e => e.Key).HasMaxLength(100);

                entity.Property(e => e.Id).ValueGeneratedOnAdd();

                entity.Property(e => e.ExpireAt).HasColumnType("datetime");
            });

            modelBuilder.Entity<Location>(entity =>
            {
                entity.ToTable("location");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Latitude)
                    .HasColumnName("latitude")
                    .HasColumnType("decimal(10, 6)");

                entity.Property(e => e.Longitude)
                    .HasColumnName("longitude")
                    .HasColumnType("decimal(10, 6)");

                entity.Property(e => e.Name).HasMaxLength(100);
            });

            modelBuilder.Entity<LogMob>(entity =>
            {
                entity.ToTable("LOG_Mob");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.GdateTime)
                    .HasColumnName("GDateTime")
                    .HasColumnType("datetime");

                entity.Property(e => e.Image).HasMaxLength(150);

                entity.Property(e => e.Latitude).HasColumnType("decimal(10, 6)");

                entity.Property(e => e.LocatinName).HasMaxLength(300);

                entity.Property(e => e.Longitude).HasColumnType("decimal(10, 6)");

                entity.Property(e => e.MobSer).HasMaxLength(200);
            });

            modelBuilder.Entity<Machine>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Mip)
                    .HasColumnName("mip")
                    .HasMaxLength(50);

                entity.Property(e => e.Mport)
                    .HasColumnName("mport")
                    .HasMaxLength(50);

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Menus>(entity =>
            {
                entity.HasKey(e => e.MenuId);

                entity.ToTable("menus");

                entity.Property(e => e.MenuId).HasColumnName("menuId");

                entity.Property(e => e.Caption).HasMaxLength(50);

                entity.Property(e => e.FormName).HasMaxLength(50);

                entity.Property(e => e.ParentId).HasColumnName("parentId");
            });

            modelBuilder.Entity<Mission>(entity =>
            {
                entity.ToTable("mission");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Direction)
                    .HasColumnName("direction")
                    .HasMaxLength(50);

                entity.Property(e => e.EmoloyeeId).HasColumnName("emoloyeeID");

                entity.Property(e => e.EndDate)
                    .HasColumnName("endDate")
                    .HasColumnType("date");

                entity.Property(e => e.EndHdate)
                    .HasColumnName("endHDate")
                    .HasMaxLength(50);

                entity.Property(e => e.Period).HasColumnName("period");

                entity.Property(e => e.StartDate)
                    .HasColumnName("startDate")
                    .HasColumnType("date");

                entity.Property(e => e.StartHdate)
                    .HasColumnName("startHDate")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<MosyarType>(entity =>
            {
                entity.ToTable("mosyarType");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Nadb>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Direction)
                    .HasColumnName("direction")
                    .HasMaxLength(50);

                entity.Property(e => e.EmoloyeeId).HasColumnName("emoloyeeID");

                entity.Property(e => e.EndDate)
                    .HasColumnName("endDate")
                    .HasColumnType("date");

                entity.Property(e => e.EndHdate)
                    .HasColumnName("endHDate")
                    .HasMaxLength(50);

                entity.Property(e => e.Period).HasColumnName("period");

                entity.Property(e => e.StartDate)
                    .HasColumnName("startDate")
                    .HasColumnType("date");

                entity.Property(e => e.StartHdate)
                    .HasColumnName("startHDate")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Nationality>(entity =>
            {
                entity.ToTable("nationality");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<NotificationData>(entity =>
            {
                entity.ToTable("notificationData");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Createdate).HasColumnType("datetime");

                entity.Property(e => e.Note).HasMaxLength(300);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.NotificationData)
                    .HasForeignKey(d => d.Userid)
                    .HasConstraintName("FK_notificationData_Users");
            });

            modelBuilder.Entity<NotificationMessage>(entity =>
            {
                entity.Property(e => e.Body).HasMaxLength(700);

                entity.Property(e => e.Title).HasMaxLength(150);
            });

            modelBuilder.Entity<Officialvacation>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(50);

                entity.Property(e => e.Vdateend)
                    .HasColumnName("vdateend")
                    .HasColumnType("date");

                entity.Property(e => e.VdateendH)
                    .HasColumnName("vdateendH")
                    .HasMaxLength(50);

                entity.Property(e => e.Vdatestart)
                    .HasColumnName("vdatestart")
                    .HasColumnType("date");

                entity.Property(e => e.VdatestartH)
                    .HasColumnName("vdatestartH")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<ReqFile>(entity =>
            {
                entity.ToTable("reqFile");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.FileSname).HasColumnName("FileSName");

                entity.Property(e => e.FileVname).HasColumnName("FileVName");

                entity.Property(e => e.Reqid).HasColumnName("reqid");
            });

            modelBuilder.Entity<Salary>(entity =>
            {
                entity.ToTable("salary");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedNever();

                entity.Property(e => e.EndDate)
                    .HasColumnName("endDate")
                    .HasColumnType("date");

                entity.Property(e => e.EndHdate)
                    .HasColumnName("endHDate")
                    .HasMaxLength(50);

                entity.Property(e => e.Mosyartype).HasColumnName("mosyartype");

                entity.Property(e => e.Mosyertypetext)
                    .HasColumnName("mosyertypetext")
                    .HasMaxLength(50);

                entity.Property(e => e.StartDate)
                    .HasColumnName("startDate")
                    .HasColumnType("date");

                entity.Property(e => e.StartHdate)
                    .HasColumnName("startHDate")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Schema>(entity =>
            {
                entity.HasKey(e => e.Version);

                entity.ToTable("Schema", "HangFire");

                entity.Property(e => e.Version).ValueGeneratedNever();
            });

            modelBuilder.Entity<Server>(entity =>
            {
                entity.ToTable("Server", "HangFire");

                entity.HasIndex(e => e.LastHeartbeat)
                    .HasName("IX_HangFire_Server_LastHeartbeat");

                entity.Property(e => e.Id)
                    .HasMaxLength(200)
                    .ValueGeneratedNever();

                entity.Property(e => e.LastHeartbeat).HasColumnType("datetime");
            });

            modelBuilder.Entity<Set>(entity =>
            {
                entity.HasKey(e => new { e.Key, e.Value });

                entity.ToTable("Set", "HangFire");

                entity.HasIndex(e => e.ExpireAt)
                    .HasName("IX_HangFire_Set_ExpireAt")
                    .HasFilter("([ExpireAt] IS NOT NULL)");

                entity.HasIndex(e => new { e.Key, e.Score })
                    .HasName("IX_HangFire_Set_Score");

                entity.Property(e => e.Key).HasMaxLength(100);

                entity.Property(e => e.Value).HasMaxLength(256);

                entity.Property(e => e.ExpireAt).HasColumnType("datetime");
            });

            modelBuilder.Entity<Shifts>(entity =>
            {
                entity.ToTable("shifts");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedNever();

                entity.Property(e => e.Endend)
                    .HasColumnName("endend")
                    .HasMaxLength(50);

                entity.Property(e => e.Endstart)
                    .HasColumnName("endstart")
                    .HasMaxLength(50);

                entity.Property(e => e.Endtime)
                    .HasColumnName("endtime")
                    .HasMaxLength(50);

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(50);

                entity.Property(e => e.NextDay).HasColumnName("nextDay");

                entity.Property(e => e.Start)
                    .HasColumnName("start")
                    .HasMaxLength(50);

                entity.Property(e => e.Timeend)
                    .HasColumnName("TIMEEND")
                    .HasMaxLength(50);

                entity.Property(e => e.Timeendhasm)
                    .HasColumnName("TIMEENDHASM")
                    .HasMaxLength(50);

                entity.Property(e => e.Timerend)
                    .HasColumnName("TIMEREND")
                    .HasMaxLength(50);

                entity.Property(e => e.Timerendhasm)
                    .HasColumnName("TIMERENDHASM")
                    .HasMaxLength(50);

                entity.Property(e => e.Timerstart)
                    .HasColumnName("TIMERSTART")
                    .HasMaxLength(50);

                entity.Property(e => e.Timerstarthasm)
                    .HasColumnName("TIMERSTARTHASM")
                    .HasMaxLength(50);

                entity.Property(e => e.Timestart)
                    .HasColumnName("TIMESTART")
                    .HasMaxLength(50);

                entity.Property(e => e.Timestarthasm)
                    .HasColumnName("TIMESTARTHASM")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<State>(entity =>
            {
                entity.HasKey(e => new { e.JobId, e.Id });

                entity.ToTable("State", "HangFire");

                entity.Property(e => e.Id).ValueGeneratedOnAdd();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(20);

                entity.Property(e => e.Reason).HasMaxLength(100);

                entity.HasOne(d => d.Job)
                    .WithMany(p => p.State)
                    .HasForeignKey(d => d.JobId)
                    .HasConstraintName("FK_HangFire_State_Job");
            });

            modelBuilder.Entity<Status>(entity =>
            {
                entity.ToTable("status");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.StatusName).HasColumnName("statusName");
            });

            modelBuilder.Entity<Taklef>(entity =>
            {
                entity.ToTable("taklef");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedNever();

                entity.Property(e => e.EndDate)
                    .HasColumnName("endDate")
                    .HasColumnType("date");

                entity.Property(e => e.EndHdate)
                    .HasColumnName("endHDate")
                    .HasMaxLength(50);

                entity.Property(e => e.EndTime)
                    .HasColumnName("endTime")
                    .HasMaxLength(50);

                entity.Property(e => e.Period).HasColumnName("period");

                entity.Property(e => e.StartDate)
                    .HasColumnName("startDate")
                    .HasColumnType("date");

                entity.Property(e => e.StartHdate)
                    .HasColumnName("startHDate")
                    .HasMaxLength(50);

                entity.Property(e => e.StartTime)
                    .HasColumnName("startTime")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<TLg2>(entity =>
            {
                entity.HasKey(e => e.Evtlguid);

                entity.ToTable("T_LG2");

                entity.Property(e => e.Evtlguid)
                    .HasColumnName("EVTLGUID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Devdt)
                    .HasColumnName("DEVDT")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Devuid).HasColumnName("DEVUID");

                entity.Property(e => e.Tnakey).HasColumnName("TNAKEY");

                entity.Property(e => e.Usrid)
                    .HasColumnName("USRID")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Transaction>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Date)
                    .HasMaxLength(14)
                    .IsUnicode(false);

                entity.Property(e => e.From).HasMaxLength(15);

                entity.Property(e => e.LeaveId).HasColumnName("leaveID");

                entity.Property(e => e.Note).HasMaxLength(550);

                entity.Property(e => e.Reason).HasMaxLength(500);

                entity.Property(e => e.To).HasMaxLength(15);

                entity.Property(e => e.TransacrtionCode).HasColumnName("transacrtionCode");

                entity.Property(e => e.Value).HasColumnType("decimal(18, 0)");

                entity.HasOne(d => d.Leave)
                    .WithMany(p => p.Transaction)
                    .HasForeignKey(d => d.LeaveId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_Transaction_Leaves");
            });

            modelBuilder.Entity<TransactionStatus>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Name).HasMaxLength(250);
            });

            modelBuilder.Entity<UserFirebaseToken>(entity =>
            {
                entity.Property(e => e.Language).HasColumnName("language");

                entity.Property(e => e.UserToken).HasMaxLength(500);
            });

            modelBuilder.Entity<UserNotifivations>(entity =>
            {
                entity.HasOne(d => d.Msg)
                    .WithMany(p => p.UserNotifivations)
                    .HasForeignKey(d => d.MsgId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_UserNotifivations_NotificationMessage");
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Departid).HasColumnName("departid");

                entity.Property(e => e.FullUserName).HasMaxLength(50);

                entity.Property(e => e.Isboss).HasColumnName("isboss");

                entity.Property(e => e.Isdpboss).HasColumnName("isdpboss");

                entity.Property(e => e.Password).HasMaxLength(50);

                entity.Property(e => e.Pertype)
                    .HasColumnName("pertype")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.UserName).HasMaxLength(50);
            });

            modelBuilder.Entity<Vacation>(entity =>
            {
                entity.ToTable("vacation");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.EmoloyeeId).HasColumnName("emoloyeeID");

                entity.Property(e => e.EndDate)
                    .HasColumnName("endDate")
                    .HasColumnType("date");

                entity.Property(e => e.EndHdate)
                    .HasColumnName("endHDate")
                    .HasMaxLength(50);

                entity.Property(e => e.Period).HasColumnName("period");

                entity.Property(e => e.StartDate)
                    .HasColumnName("startDate")
                    .HasColumnType("date");

                entity.Property(e => e.StartHdate)
                    .HasColumnName("startHDate")
                    .HasMaxLength(50);

                entity.Property(e => e.Type)
                    .HasColumnName("type")
                    .HasMaxLength(50);

                entity.Property(e => e.Year).HasColumnName("year");
            });

            modelBuilder.Entity<Year>(entity =>
            {
                entity.HasKey(e => e.Year1);

                entity.Property(e => e.Year1)
                    .HasColumnName("Year")
                    .ValueGeneratedNever();
            });
        }
    }
}
