using Microsoft.AspNetCore.SignalR;
using System.Security.Claims;

namespace Profinder.Hubs
{
    public class CustomUserIdProvider : IUserIdProvider
    {
        public string GetUserId(HubConnectionContext connection)
        {
            var userId = connection.User?.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            Console.WriteLine($"UserId: {userId}"); // Adicione um log para verificar o UserId
            return userId;
        }
    }
}
