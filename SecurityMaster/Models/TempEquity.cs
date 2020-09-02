using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SecurityMaster.Models
{
    public class TempEquity
    {
        public int ID { get; set; }
        public string SecurityName { get; set; }

        public String IsActiveSecurity { get; set; }

        public String BBGTickerAndExchange { get; set; }

        public Nullable<double> OpenPrice { get; set; }
        public Nullable<double> ClosePrice { get; set; }
        public Nullable<double> AskPrice { get; set; }
        public Nullable<double> BidPrice { get; set; }
        public Nullable<double> Volume { get; set; }

        public String PricingCurrency { get; set; }

        public Nullable<double> ReturnYTD { get; set; }

        public String PFCreditRating { get; set; }

        public Nullable<double> DividendAmount { get; set; }

        public String DividendType { get; set; }


    }
}