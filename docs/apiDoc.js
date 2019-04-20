/**
 * @api {get} /api/session/getToken get a token
 * @apiDescription generate a access token for the cli
 * @apiGroup Session:Auth
 * @apiSuccess {String} success flag for success response
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *        {
 *            "success": true,
 *            "data": "eyJhbGciI6NjA4MTUzNywiaWF0IjoxNTU1NzQ2MDMxLCJleHAiOjE1ODcyODIwMzF9.NH98NLWSi53pUa87vbFqz2hLMlwMRqg40itgfeep-iI"  
 *        }
 *
 * @apiError 400 Bad Request
 * @apiErrorExample  {json} session is invalid
 *     HTTP/1.1 401 Unauthorized
 *    {
 *      "success": false,
 *      "msg": "session invalid",
 *      "code": 401,
 *      "text": "Unauthorized"
 *    }
 */


 /**
 * @api {post} /api/token/translate translate a sentence
 * @apiDescription translate a sentence from the cli
 * @apiGroup Token:Auth
 * @apiHeader {String} Authorization token
 * @apiParamExample {json} Request-Example:
 *{
 *  "from": "en",
 *  "to": "zh",
 *  "q": "hello",
 *}
 * @apiSuccess {String} success flag for success response
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *        {
 *            "success": true
 *        }
 *
 * @apiError 401 Unauthorized
 * @apiErrorExample  {json} token invalid
 *     HTTP/1.1 401 Unauthorized
 *    {
 *        "success": false,
 *        "msg": "token invalid",
 *        "code": 401,
 *        "text": "Unauthorized"
 *    }
 * @apiError 400 Bad Request
 * @apiErrorExample  {json} params is missing
 *     HTTP/1.1 400 Bad Request
 *    {
 *        "success": false,
 *        "msg": "params is missing",
 *        "code": 400,
 *        "text": "Bad Request"
 *    }
 */
