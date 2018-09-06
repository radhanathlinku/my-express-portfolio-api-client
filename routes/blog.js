var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;
var client = new Client();
/*
router.get('/', function (req, res, next) {
    client.get("http://localhost:3030/blogs", function (jsonData, response) {
        // parsed response body as js object
        console.log(jsonData);
        // raw response
        // console.log(response);
        res.render('blog', { 
            title: 'blog', 
            navProjects: true, 
            showFooter: true, 
            projects: jsonData.data
        });
    });
});

router.get('/:blogAlias', function (req, res, next) {
    client.get("http://localhost:3030/blogs/"+ req.params.blogAlias, 
        function (jsonData, response) {
            // parsed response body as js object
            console.log(jsonData);
            // raw response
            // console.log(response);

            res.render('blog-detail', { 
                title: jsonData.data.name ,
                navProjects: true, 
                showFooter: true, 
                project:  jsonData.data
            });
        });
});


  
router.get('/:blogAlias/demo', function (req, res, next) {
    client.get("http://localhost:3030/blogs/"+ req.params.blogAlias, 
    function (jsonData, response) {
        // parsed response body as js object
//        console.log(jsonData);
        // raw response
        // console.log(response);
        res.render('demo', { 
            layout: 'layout-demo',
            title: jsonData.name,
        });
    });
});*/
//shown to everyone

router.get('/', function (req, res, next) {
    client.get("http://localhost:3030/blogs", function (jsonData, response) {
        // parsed response body as js object
        console.log(jsonData);
        // raw response
        // console.log(response);
        res.render('blog', { 
            title: 'Blog', 
            navBlog: true, 
            showFooter: true, 
            extraCss: ['/css/blog.css'],
            categories: null,
            featuredBlog: null,
            blog: jsonData.data
        });
    });
});
//changed here ::>>>>> committed

router.get('/:blogAlias', function (req, res, next) {
    console.log()
    client.get("http://localhost:3030/blogs/"+ req.params.blogAlias, 
        function (jsonData, response) {
            // parsed response body as js object
            console.log(jsonData);
            // raw response
            // console.log(response);

            res.render('blog-detail', { 
                title: jsonData.name ,
                navBlog: true, 
                showFooter: true, 
                extraCss: ['/css/blog.css'],
                blog:  jsonData.data,
                categories: jsonData.data
            });
        });
});
  
  router.get('/:blogAlias/demo', function (req, res, next) {
      function renderDemo(error, blog){  
          console.log(blog);
          res.render('demo', { 
              layout: 'layout-demo',
              title: blog.name,
              blog: blog
          });
      };
      blogService.getBlogByAlias(req.params.blogAlias, renderDemo);
  });

module.exports = router;