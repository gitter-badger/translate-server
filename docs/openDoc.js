/**
 * @api {get} /open/validToken valid token 
 * @apiDescription valid the token from the cli
 * @apiGroup Open
 * @apiHeader {String} Authorization token
 * @apiSuccess {String} success flag for success response
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *        {
 *            "success": true
 *        }
 *
 * @apiError 400 Bad Request
 * @apiErrorExample  {json} token invalid
 *     HTTP/1.1 401 Unauthorized
 *    {
 *      "success": false,
 *      "msg": "token invalid",
 *      "code": 401,
 *      "text": "Unauthorized"
 *    }
 */


 /**
 * @api {get} /open/getSupportedLangs languages list
 * @apiDescription a list about supported langs
 * @apiGroup Open
 * @apiSuccess {String} success flag for success response
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *      "success": true,
 *      "data": [
 *        {
 *          "code": "af",
 *          "name": "Afrikaans"
 *        },
 *        {
 *          "code": "sq",
 *          "name": "Albanian"
 *        },
 *        {
 *          "code": "am",
 *          "name": "Amharic"
 *        },
 *        {
 *          "code": "ar",
 *          "name": "Arabic"
 *        },
 *        {
 *          "code": "hy",
 *          "name": "Armenian"
 *        },
 *        {
 *          "code": "az",
 *          "name": "Azerbaijani"
 *        },
 *        {
 *          "code": "eu",
 *          "name": "Basque"
 *        },
 *        {
 *          "code": "be",
 *          "name": "Belarusian"
 *        },
 *        ...
 *      ]
 *    }
 */
