const express = require('express')
const router = express.Router()

const {userv100, userv110, userv110breaking, userv120, userv200, userv200breaking, userv210, userv300, userv300lazy} = require('./userobjects.js');

const setHeaders = (headerName, message) => (req, res, next) => {
    if (headerName) res.set(headerName, String(message));
    next();
};

/**
 * @swagger
 * /user/v1.0.0:
 *   get:
 *     summary: Gets user, version 1.0.0
 *     responses:
 *       200:
 *         description: user object v1.0.0
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/UserV100'
 */
router.get('/v1.0.0', setHeaders("Warning", "v1.0.0 is deprecated, use v2.1.0 instead"), (req, res) => {
    console.info("API call to v1.0.0");
    res.json(userv100);
});

/**
 * @swagger
 * /user/v1.1.0:
 *   get:
 *     summary: Gets user, version 1.1.0
 *     responses:
 *       200:
 *         description: user object v1.1.0
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/UserV110'
 */
router.get('/v1.1.0', setHeaders("Warning", "v1.1.0 is deprecated, use v2.1.0 instead"), (req, res) => {
    console.info("API call to v1.1.0");
    res.json(userv110);
});

/**
 * @swagger
 * /user/v1.1.0.breaking:
 *   get:
 *     summary: Gets user, version 1.1.0.breaking
 *     responses:
 *       200:
 *         description: user object v1.1.0.breaking
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/UserV110breaking'
 */
router.get('/v1.1.0.breaking', setHeaders("Warning", "v1.1.0.breaking is deprecated, use v2.1.0 instead"), (req, res) => {
    console.info("API call to v1.1.0.breaking");
    res.json(userv110breaking);
});

/**
 * @swagger
 * /user/v1.2.0:
 *   get:
 *     summary: Gets user, version 1.2.0
 *     responses:
 *       200:
 *         description: user object v1.2.0
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/UserV120'
 */
router.get('/v1.2.0', setHeaders("Warning", "v1.2.0 is deprecated, use v2.1.0 instead"), (req, res) => {
    console.info("API call to v1.2.0");
    res.json(userv120);
});

/**
 * @swagger
 * /user/v2.0.0:
 *   get:
 *     summary: Gets user, version 2.0.0
 *     responses:
 *       200:
 *         description: user object v2.0.0
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/UserV200'
 */
router.get('/v2.0.0', setHeaders("Warning", "v2.0.0 is deprecated, use v2.1.0 instead"), (req, res) => {
    console.info("API call to v2.0.0");
    res.json(userv200);
});

/**
 * @swagger
 * /user/v2.0.0.breaking:
 *   get:
 *     summary: Gets user, version 2.0.0.breaking
 *     responses:
 *       200:
 *         description: user object v2.0.0.breaking
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/UserV200breaking'
 */
router.get('/v2.0.0.breaking', setHeaders("Information", "Version 3.0.0 beta available."), (req, res) => {
    console.info("API call to v2.0.0.breaking");
    res.json(userv200breaking);
});

/**
 * @swagger
 * /user/v2.1.0:
 *   get:
 *     summary: Gets user, version 2.1.0
 *     responses:
 *       200:
 *         description: user object v2.1.0
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/UserV210'
 */
router.get('/v2.1.0', setHeaders("Information", "Version 3.0.0 beta available."), (req, res) => {
    console.info("API call to v2.1.0");
    res.json(userv210);
});


/**
 * @swagger
 * /user/v3.0.0:
 *   get:
 *     summary: Gets user, version 3.0.0
 *     responses:
 *       200:
 *         description: user object v3.0.0
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/UserV300'
 */
router.get('/v3.0.0', (req, res) => {
    console.info("API call to v3.0.0");
    res.json(userv300);
});

/**
 * @swagger
 * /user/v3.0.0.lazy:
 *   get:
 *     summary: Gets user, version 3.0.0.lazy
 *     responses:
 *       200:
 *         description: user object v3.0.0.lazy
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/UserV300lazy'
 */
router.get('/v3.0.0.lazy', (req, res) => {
    console.info("API call to v3.0.0.lazy");
    res.json(userv300lazy);
});

module.exports = router;