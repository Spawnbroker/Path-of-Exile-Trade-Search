using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TradeSearch.Startup))]
namespace TradeSearch
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
