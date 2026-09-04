For HW you are going to create a simple front end that allows you to log on using supabase and access certain data. By now you should have significant frontend experience, so create it however you want. Have a login page and then a second page that displays the table however you choose following the below security rules

Go to your supabase demo that you previously created earlier
Go to authentication -> users in Supabase. 
Add your email and the password "studentuser"
add the email "admin@tamidswef.org" and the password "adminuser"
add the email "quinn.gre@northeastern.edu" and the password "rio123"
add the email "dubey.shau@northeastern.edu" and the password "shaurya123"
add the email "radasilva.i@northeastern.edu" and the password "issa123"

you need to disable requiring confirmation emails or else this might not work by enabling "auto confirm user?" when you create the new user


Create a new table with the following

Your name       your email                  your hometown       your major      your tamid class

Rio Quinn       quinn.gre@northeastern.edu      Millbrook           Math            Alef

Shaurya Dubey   dubey.shau@northeastern.edu     Princeton           CS              Alef

Issa Rada       radasilva.i@northeastern.edu    Bogota              CS, Finance     Tav




Using row level security, certain things should be public and private for different people

For admin, everything should be visible

For a normal user:
Everyone's Major and class is visible, but their hometown and email are hidden. You should only be able to see your own email and hometown, while everyone else's is private.

If I log in using Rio's credentials, I should be able to see Rio's email and hometown, but not yours, shauryas, or issa's. This should be the same with every user except for admin that can see everything. 

This must be done via supabase, not through the frontend, I should have no way off accessing your email or hometown if I don't have your login or the admin login.

push your project to this HW folder so we can check it and see if it works


