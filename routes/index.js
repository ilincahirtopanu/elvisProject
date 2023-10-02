const { Router } = require('express');
const router = Router();
//importing json objects
const breadcrumb = require('../routes/data/breadcrumb.json'); //IMPORT BREADCRUMB
const logo = require('../routes/data/logo.json');
const moments = require('../routes/data/moments.json');
const ilinca = require('../routes/data/ilinca.json');
const faq = require('../routes/data/faq.json');

// const sidebar = {
//   career: "inactive",
//   projectsActive: "inactive",
//   getInTouchActive: "inactive",
// }
//about page
router.get('/', (req, res, next) => 
{
  res.render('index', 
  {
    breadcrumb: breadcrumb,
    logo: logo,
    moments: moments
  })
})

//ilinca page
router.get('/team', (req, res, next) => 
{
  res.render('team', 
  {
    ilinca: ilinca,
    logo: logo,
  })
})

//questions page
router.get('/faq', (req, res, next) => 
{
  res.render('faq', 
  {
    logo: logo,
    faq: faq
  })
})
module.exports = router
