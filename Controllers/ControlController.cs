using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace MainTrain.Controllers
{
    public class ControlController : Controller
    {
        [Authorize]
        public string Index()
        {
            return "index";
        }
        public string Akif()
        {
            return "25";
        }
    }

}
