# simple-crud

a [Sails v1](https://sailsjs.com) application


### Instructions
- Create Database with name 'simple_crud' in Postgres;
- Install dependencies from project with npm 'npm install';
- run project 'sails lift';

### Endpoints

- 'GET /api/v1/users' -> List All Users;
- 'POST /api/v1/users' -> Create a User By ID;
- 'PUT /api/v1/users/:id' -> Update a User By ID;
- 'DELETE /api/v1/users/:id' -> Delete a User By ID;

### Data Body

```
  {
    "name": "any_name",
    "email":  "any_email@email",
    "password": "any_password"
  }
```


### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Mon Nov 02 2020 10:49:35 GMT-0300 (GMT-03:00) using Sails v1.4.0.

<!-- Internally, Sails used [`sails-generate@2.0.0`](https://github.com/balderdashy/sails-generate/tree/v2.0.0/lib/core-generators/new). -->



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

