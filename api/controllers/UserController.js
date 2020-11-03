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
      
    }

};

