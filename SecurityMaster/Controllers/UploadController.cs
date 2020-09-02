using ExcelDataReader;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace SecurityMaster.Controllers
{
    public class UploadController : ApiController
    {
        String ConnectionString = ConfigurationManager.ConnectionStrings["TestDB"].ConnectionString;
        [HttpPost]
        public string Post()
        {
            string message = "";
            return message;


        }

    }  
    }

