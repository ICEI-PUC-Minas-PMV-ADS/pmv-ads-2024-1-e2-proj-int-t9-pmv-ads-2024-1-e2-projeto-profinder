using Microsoft.EntityFrameworkCore;

namespace Profinder.Models 
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}
    }
}