﻿using Microsoft.AspNetCore.Mvc;

namespace EY.Digital.Services.Ordering.API.Controllers
{
    public class HomeController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return new RedirectResult("~/swagger");
        }
    }
}
