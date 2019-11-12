using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace TicTacToe.Pages
{
    public class TicTacToe2Model : PageModel
    {
        public char[,] Board { get; } = new char[3, 3];


        public void OnGet()
        {

        }
    }
}