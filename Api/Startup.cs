using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using FirebaseAdmin;
using Google.Apis.Auth.OAuth2;
using Hangfire;
using Hangfire.MemoryStorage;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using Site4Check.Models;
using Site4Check.Services;
using Newtonsoft.Json.Serialization;
using Microsoft.AspNetCore.Mvc.NewtonsoftJson;
using System.Text.Json;
using Microsoft.OpenApi.Models;

namespace Site4Check
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers()
       .AddNewtonsoftJson(options =>
       {
           options.SerializerSettings.ContractResolver = new DefaultContractResolver();
       });
            //services.AddMvc().AddNewtonsoftJson(o =>
            //{
            //    o.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
            //});

            services.AddMemoryCache();
            services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
            {
                builder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader();
            }));
            services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc("v2", new Microsoft.OpenApi.Models.OpenApiInfo
                {
                    Title = "Place Info Service API",
                    Version = "v2",
                    Description = "Sample service for Learner",
                });
            });


            services.AddDbContext<HR_DirectionContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("SiteContext")));

            services.AddDbContext<HR_DirectionContext>(options =>
            options.UseSqlServer(Configuration.GetConnectionString("SiteContext")));

            //services.AddMvc().AddJsonOptions(opt =>
            //opt.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore);
            services.AddHangfire(
                   x => x.SetDataCompatibilityLevel(CompatibilityLevel.Version_170).
                   UseSimpleAssemblyNameTypeSerializer().
                   UseDefaultTypeResolver().
                   UseMemoryStorage());


            services.AddControllers().AddNewtonsoftJson(options =>
           options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);

            services.AddControllers();

            //services.AddHangfireServer();
            //services.AddMvc().AddJsonOptions(opt =>
            //opt.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore);

            //services.AddSignalR();
            //services.AddHangfire(x => x.UseSqlServerStorage("data source=157.90.106.165,1433;initial catalog=HR_Direction;user id=db;password=db!@#5690 ;multipleactiveresultsets=True;application name=EntityFramework&quot;"));
            //services.AddHangfireServer();

            //services.AddMvc()
            //           .AddJsonOptions(o => o.SerializerSettings.ContractResolver = new Newtonsoft.Json.Serialization.DefaultContractResolver());

            //var googleCredential = _hostingEnvironment.ContentRootPath;
            //var filePath = Configuration.GetSection("GoogleFirebase")["fileName"];
            //googleCredential = Path.Combine(googleCredential, filePath);
            //var credential = GoogleCredential.FromFile(googleCredential);
            //FirebaseApp.Create(new AppOptions()
            //{

            //    Credential = credential
            //});
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }
            app.UseSwagger();
            app.UseSwaggerUI(options => options.SwaggerEndpoint("/swagger/v2/swagger.json", "PlaceInfo Services"));
            app.UseHttpsRedirection();

            app.UseRouting();
            app.UseCors("MyPolicy");
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

           
        }
    }
}
