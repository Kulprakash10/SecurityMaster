using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.SqlClient;
using SecurityMaster.Models;
using System.Data;
using System.Configuration;
using System.Web;
using System.IO;
using ExcelDataReader;
using System.Web.Mvc;

namespace SecurityMaster.Controllers
{
    public class BondController : ApiController
    {
        String ConnectionString = ConfigurationManager.ConnectionStrings["TestDB"].ConnectionString;
        public HttpResponseMessage Get()
        {
            String sp = "uspDisplayBonds";

            DataTable table = new DataTable();

            using (SqlConnection con = new SqlConnection(ConnectionString))
            {
                SqlCommand cmd = new SqlCommand(sp, con);
                cmd.CommandType = CommandType.StoredProcedure;

                SqlDataAdapter sda = new SqlDataAdapter(cmd);
                con.Open();
                sda.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        public String put(TempBond tempBond)
        {
            try
            {
                String sp = "uspUpdateBonds";

            DataTable table = new DataTable();

            using (SqlConnection con = new SqlConnection(ConnectionString))
            {
                con.Open();
                SqlCommand cmd = new SqlCommand(sp, con);

                    cmd.Parameters.AddWithValue("@ID", tempBond.ID);
                    cmd.Parameters.AddWithValue("@SecurityName", tempBond.SecurityName);
                    cmd.Parameters.AddWithValue("@InvestmentType", tempBond.InvestmentType);
                    cmd.Parameters.AddWithValue("@BBGTicker", tempBond.BBGTicker);
                    cmd.Parameters.AddWithValue("@CouponFrequency", tempBond.CouponFrequency);
                    cmd.Parameters.AddWithValue("@Coupon", tempBond.Coupon);
                    cmd.Parameters.AddWithValue("@CouponType", tempBond.CouponType);
                    cmd.Parameters.AddWithValue("@IssueDate ", tempBond.IssueDate);
                    cmd.Parameters.AddWithValue("@Maturity", tempBond.IssueCurrency);
                    cmd.Parameters.AddWithValue("@PFCreditRating", tempBond.PFCreditRating);
                    cmd.Parameters.AddWithValue("@OpenPrice", tempBond.OpenPrice);
                    cmd.Parameters.AddWithValue("@LastPrice", tempBond.LastPrice);
                    cmd.Parameters.AddWithValue("@AskPrice", tempBond.AskPrice);
                    cmd.Parameters.AddWithValue("@BidPrice", tempBond.BidPrice);
                    cmd.Parameters.AddWithValue("@Volume", tempBond.Volume);
                    cmd.Parameters.AddWithValue("@CallPrice", tempBond.CallPrice);
                    cmd.Parameters.AddWithValue("@IssueCurrency", tempBond.IssueCurrency);


                    SqlDataAdapter sda = new SqlDataAdapter(cmd);
                cmd.CommandType = CommandType.StoredProcedure;

                sda.Fill(table);

                return "Updated Sucessfully!";
            }
        }
            catch (Exception)
            {

                return "Failed to Update";
            }
}
        //[HttpDelete, Route("{id}")]
        public String delete(int id)
        {
            String sp = "uspDeleteBonds";

            DataTable table = new DataTable();

            using (SqlConnection con = new SqlConnection(ConnectionString))
            {
                SqlCommand cmd = new SqlCommand(sp, con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@id", id);

                SqlDataAdapter sda = new SqlDataAdapter(cmd);

                con.Open();
                sda.Fill(table);

                return "Delete Sucessfully!";
            }


        }

        
        public String Post()
        {
            string message = "";
            HttpResponseMessage result = null;
            var httpRequest = HttpContext.Current.Request;
            string command = "uspInsertBonds";
            int rowsAffected = 0;
            try
            {


                if (httpRequest.Files.Count > 0)
                {
                    HttpPostedFile file = httpRequest.Files[0];
                    Stream stream = file.InputStream;

                    IExcelDataReader reader = null;

                    if (file.FileName.EndsWith(".xls"))
                    {
                        reader = ExcelReaderFactory.CreateBinaryReader(stream);
                    }
                    else if (file.FileName.EndsWith(".xlsx"))
                    {
                        reader = ExcelReaderFactory.CreateOpenXmlReader(stream);
                    }
                    else
                    {
                        message = "This file format is not supported";
                    }

                    DataSet excelRecords = reader.AsDataSet();
                    reader.Close();
                    var finalRecords = excelRecords.Tables[1];

                    for (int i = 1; i < finalRecords.Rows.Count; i++)
                    {
                        using (SqlConnection con = new SqlConnection(ConnectionString))
                        {
                            int j = 0;
                            SqlCommand cmd = new SqlCommand(command, con);
                            cmd.CommandType = CommandType.StoredProcedure;

                            cmd.Parameters.AddWithValue("@SecurityDescription", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@SecurityName", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@AssetType", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@InvestmentType", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@TradingFactor", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@PricingFactor", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@ISIN", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@BBGTicker", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@BBGUniqueID", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@CUSIP", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@SEDOL", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@FirstCouponDate", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@Cap", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@FloorAttr", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@CouponFrequency", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@Coupon", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@CouponType", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@Spread", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@CallableFlag", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@FixtoFloatFlag", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@PutableFlag", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@IssueDate", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@LastResetDate", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@Maturity", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@CallNotificationMaxDays", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@PutNotificationMaxDays", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@PenultimateCouponDate", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@ResetFrequency ", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@HasPosition", finalRecords.Rows[i][++j]);

                            cmd.Parameters.AddWithValue("@MacaulayDuration", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@Volatility30D", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@Volatility90D", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@Convexity", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@AverageVolume30D", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@PFAssetClass", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@PFCountry", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@PFCreditRating", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@PFCurrency", finalRecords.Rows[i][++j]);

                            cmd.Parameters.AddWithValue("@PFInstrument", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@PFLiquidityProfile", finalRecords.Rows[i][++j]);

                            cmd.Parameters.AddWithValue("@PFMaturity", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@PFNAICSCode", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@PFRegion", finalRecords.Rows[i][++j]);

                            cmd.Parameters.AddWithValue("@PFSector", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@PFSubAssetClass", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@BBIndustryGroup", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@BBGIndustrySubGroup", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@BBGIndustrySector ", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@CountryofIssuance ", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@IssueCurrency ", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@Issuer", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@RiskCurrency", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@PutDate", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@PutPrice", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@AskPrice", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@HighPrice", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@LowPrice", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@OpenPrice", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@Volume", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@BidPrice", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@LastPrice", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@CallDate", finalRecords.Rows[i][++j]);
                            cmd.Parameters.AddWithValue("@CallPrice", finalRecords.Rows[i][++j]);

                            con.Open();
                            rowsAffected += cmd.ExecuteNonQuery();
                            con.Close();


                        }
                    }

                    message = "Update successful";

                }//end of if
                else
                {
                    result = Request.CreateResponse(HttpStatusCode.BadRequest);
                }
                return message;
            }


            catch (Exception e)
            {
                return e.Message.ToString();
            }

        }
    }
}
