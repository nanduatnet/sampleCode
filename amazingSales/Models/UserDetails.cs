using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace amazingSales.Models
{
    public class UserDetails
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public bool IsAuthenticated { get; set; }

        public UserDetails AuthenticateUser(LoginDetails loginDetails)
        {
            var userDetails = new UserDetails();
            userDetails.IsAuthenticated = false;
            if(loginDetails.UserName=="Kiran"&& loginDetails.Password == "kiran@12345")
            {
                userDetails.FirstName = "Kiran";
                userDetails.LastName = "Paturi";
                userDetails.Age = 30;
                userDetails.PhoneNumber = "9959688870";
                userDetails.Email = "pvskiran.trainer@gmail.com";
                userDetails.IsAuthenticated = true;
            }
            if(loginDetails.UserName=="Admin" && loginDetails.Password == "AdmingUser")
            {
                userDetails.FirstName = "Admin";
                userDetails.LastName = "Application";
                userDetails.Age = 40;
                userDetails.PhoneNumber = "9595859595";
                userDetails.Email = "Adming.trainer@gmail.com";
                userDetails.IsAuthenticated = true;
            }
            return userDetails;
        }
    }

    public class LoginDetails
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}