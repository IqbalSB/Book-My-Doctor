using AuthorizationMicroService.Models;
using AuthorizationMicroService.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthorizationMicroService.Providers
{
    public class TokenProvider : ITokenProvider<MemberDetails>
    {
        static readonly log4net.ILog _log4net = log4net.LogManager.GetLogger(typeof(TokenProvider));

        private ITokenRepository<MemberDetails> tokenRepository;

        private readonly List<MemberDetails> members = new List<MemberDetails>()
        {
            new MemberDetails{Id=1, Name="Iqbal", Email="iqbal@cognizant.com", Password="hello", Location="Rourkela"},
            new MemberDetails{Id=2, Name="Mallika", Email="mallika@cognizant.com", Password="hello", Location="Dehradun"},
            new MemberDetails{Id=2, Name="Riya", Email="riya@cognizant.com", Password="hello", Location="Raipur"},
            new MemberDetails{Id=2, Name="Akshay", Email="akshay@cognizant.com", Password="hello", Location="Hyderabad"},
        };

        public TokenProvider(ITokenRepository<MemberDetails> tokenRepository)
        {
            this.tokenRepository = tokenRepository;
        }
        public UserData GetToken(MemberDetails entity)
        {
            _log4net.Debug("Validate Login Details Email- "+entity.Email+" and Password- "+entity.Password);
            try
            {
              var res = members.Find(x => x.Email.Equals(entity.Email) && x.Password.Equals(entity.Password));

                if (res == null)
                    return null;

                _log4net.Info("login data is correct for Email- " + entity.Email + " and Password- " + entity.Password);
                var s=tokenRepository.GetToken(res);
                return s;
            }
            catch (Exception e)
            {
                _log4net.Error("Error occured from " + nameof(TokenProvider) + "Error Message " + e.Message);
                return null;
            }
        }
    }
}
