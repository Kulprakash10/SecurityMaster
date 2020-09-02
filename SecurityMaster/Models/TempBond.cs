using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SecurityMaster.Models
{
    public class TempBond
    {
        public int ID { get; set; }
        public string SecurityName { get; set; }
        public string InvestmentType { get; set; }
        public string BBGTicker { get; set; }
        public Nullable<short> CouponFrequency { get; set; }
        public Nullable<double> Coupon { get; set; }
        public string CouponType { get; set; }
        public string IssueDate { get; set; } //made changes to string
        public string Maturity { get; set; }  //Nullable<System.DateTime>
        public string PFCreditRating { get; set; }
        public Nullable<double> OpenPrice { get; set; }
        public Nullable<double> LastPrice { get; set; }
        public Nullable<double> AskPrice { get; set; }
        public Nullable<double> BidPrice { get; set; }
        public Nullable<double> Volume { get; set; }
        public Nullable<double> CallPrice { get; set; }
        public string IssueCurrency { get; set; }
    }
}