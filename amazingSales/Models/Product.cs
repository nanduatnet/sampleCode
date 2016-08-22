using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace amazingSales.Models
{
    public class Product
    {
        public string Name { get; set; }
        public string Specification { get; set; }
        public string Price { get; set; }
        public string ImageUrl { get; set; }
        public string Description { get; set; }

        public List<Product> GetProducts()
        {
            var productList = new List<Product>();
            productList.Add(new Product()
            {
                Description = "Motion Panorama, Selfie Flash Water & dust resistant (IP68)",
                ImageUrl = "../../img/image2.jpg"
            ,
                Name = "Galaxy S7",
                Specification = "Hybrid Dual SIM, microSD up to 200GB",
                Price = "20000"
            });
            productList.Add(new Product()
            {
                Description = "asdfsdfa Panorama, Selfie Flash Water & dust resistant (IP68)",
                ImageUrl = "../../img/image3.jpg"
            ,
                Name = "Galaxy S6",
                Specification = "ACDDD Dual SIM, microSD up to 200GB",
                Price = "400000"
            });
            return productList;
        }
    }
}