using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using amazingSales.Models;
namespace amazingSales.Controllers
{
    public class LoginController : ApiController
    {
        [HttpPost]
        public UserDetails AuthenticateUser(LoginDetails loginDetails)
        {
            var userDetails = new UserDetails();
            var details = userDetails.AuthenticateUser(loginDetails);
            return details;
        }
    }
}
