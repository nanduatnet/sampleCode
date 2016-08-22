using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using amazingSales.Models;

namespace amazingSales.Controllers
{
    public class ProductController : ApiController
    {
        public List<Product> Get()
        {
            return new Product().GetProducts();
        }
    }
}
