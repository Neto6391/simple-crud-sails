/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    get: async (req, res) => {
        try {
            const users = await User.find();

            if (!users || users.length === 0) {
                return res.send({
                 'success': false,
                 'message': 'No records found'
                });
            }
     
            return res.send({
                'success': true,
                'message': 'Records fetched',
                'data': users
            })
        } catch(err) {
            sails.log.debug(err);
            return res.send({
                'success': false,
                'message': 'Unable to fetch records'
            })
        }
      
    },

    create:  async (req, res) => {
        try {
            sails.log.debug(req.body);
            const { name = null, email = null, password = null } = req.body;

            if (!name  || name.length === 0) {
                return res.send({
                    'success': false,
                    'message': 'Name is Required'
                });
            }

            if (!email  || email.length === 0) {
                return res.send({
                    'success': false,
                    'message': 'Email is Required'
                });
            }

            if (!password  || password.length === 0) {
                return res.send({
                    'success': false,
                    'message': 'Password is Required'
                });
            } else if (password.length < 6) {
                return res.send({
                    'success': false,
                    'message': 'Password is need greather then 6 characters'
                });
            }

            await User.create({
                    name,
                    email,
                    password
                });

            res.send({
                'success': true,
                'message': 'User created with success'
            })
        } catch(err) {
            sails.log.debug(err);
            res.send({
                'success': false,
                'message': 'Is unable to create a User'
            })
        }
    }

};

