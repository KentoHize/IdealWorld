using System;
using Aritiafel.Characters.Heroes;

namespace BackupProject
{
    class Program
    {
        static void Main(string[] args)
        {
            Tina.SaveProject(ProjectChoice.IdealWorld);
            Console.WriteLine("Back up completed.");
            Console.ReadKey();
        }
    }
}
