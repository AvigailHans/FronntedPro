using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApplication2.Controllers
{
    public class UserController : ApiController
    {

    [Route("api/getQuestions")]
    public string[] GetQuestions()
    {
      string[] a = { "aaaa", "bbbb" };
      return a;
    }
    [Route("api/postQuestions")]
    public void postQuestions(string a)
    {
      string s = a;
      
    }
    [Route("api/getCategory")]
    public string[] getCategory()
    {
      string[] a = { "aaaa", "bbbb","gggg","sss" };
      return a;
    }

    // GET: api/User
    public IEnumerable<User> GetAllUsers()
        {
            return new User[] { new User { name = "value1" ,age = 45} ,new User { name = "value2" } };
        }


        // GET: api/User/5
        public string Get(int id)
        {
            return "value" + id;
        }

        // GET: api/User/5
        public string Get(int id,string name)
        {
            return "value" + id;
        }

        // POST: api/User
        public void Post([FromBody]User newUser)
        {
        }

        // PUT: api/User/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/User/5
        public void Delete(int id)
        {
        }
    }
    public class User
    {
        public string name {get; set; }
        public int age {get; set; }
    }
}
