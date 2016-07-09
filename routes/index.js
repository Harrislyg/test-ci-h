var express = require('express');
var router = express.Router();

var me = {
  "summary": {
    "name": 'Harris',
    "age": 22,
    "birthday": 'June 30th 1993',
    "tagline": 'Always be learning, always be coding'
  },

  "profile": {
    "statement": 'My name is Harris and I\'m a full-stack developer'
  },

  "links": [
    {"github": 'https://github.com/Harrislyg'},
    {"facebook": 'https://www.facebook.com/harris.leow'},
    {"linkedin": 'https://sg.linkedin.com/in/harrisleow'}
    ],

  "projects": [
    {
      "tag": 'TTT',
      "name": 'Tic-Tac-Toe',
      "links": 'http://harrislyg.github.io/tic-tac-toe/',
      "description": 'A self-contained tic-tact-toe game that pits users against the computer',
      "skills": ['HTML', 'CSS', 'Javascript']

    },
    {
      "tag": 'Bio',
      "name": 'Biography',
      "links": 'http://harrislyg.github.io/biography-ga/',
      "description": 'A mock-up biography page of Elon Musk',
      "skills": ['HTML', 'CSS', 'Javascript', 'jQuery']
    },
    {
      "tag": 'SM',
      "name": 'Super-Mario',
      "links": 'http://harrislyg.github.io/super-mario/',
      "description": 'Created a super-mario game',
      "skills": ['HTML', 'CSS', 'Javascript', 'jQuery']
    },
    {
      "tag": 'Found',
      "name": 'Foundify',
      "links": 'http://foundify.herokuapp.com/',
      "description": 'Created a Ruby on Rails platform for budding entrepreneurs to find potential cofounders and form a formidable start-up team',
      "skills": ['HTML', 'CSS', 'Javascript', 'jQuery', 'Ruby', 'Ruby on Rails']
    },
    {
      "tag": 'API',
      "name": 'API SandBox',
      "links": 'http://foundify.herokuapp.com/',
      "description": 'Created a search dashboard that utilizes ajax to draw APIs from Giphy and Spotify based on an ExpressJs framework for NodeJs',
      "skills": ['HTML', 'CSS', 'Javascript', 'jQuery', 'NodeJs', 'ExpressJs']
    }


  ],

  "skills": [
    {
      "name": 'HTML',
      "score": 10,
      "projects": {
        "TTT": true,
        "Bio": true,
        "SM": true,
        "Found": true
      }
    },
    {
      "name": 'CSS',
      "score": 10,
      "projects": {
        "TTT": true,
        "Bio": true,
        "SM": true,
        "Found": true
      }
    },
    {
      "name": 'Javascript',
      "score": 10,
      "projects": {
        "TTT": true,
        "Bio": true,
        "SM": true,
        "Found": true
      }
    },
    {
      "name": 'Ruby',
      "score": 8,
      "projects": {
        "Found": true
      }
    },
    {
      "name": 'Ruby on Rails',
      "score": 10,
      "projects": {
        "Found": true
      }
    },
    {
      "name": 'NodeJs',
      "score": 9,
      "projects": {
        "API": true
      }
    },
    {
      "name": 'ExpressJs',
      "score": 10,
      "projects": {
        "API": true
      }
    }
  ],

  "education": [
    {
      "school": 'Anderson Secondary School',
      "subjects": ['A-Math', 'E-Math', 'Chemistry', 'Physics', 'Drama']
    },
    {
      "school": 'Jurong Junior College',
      "subjects": ['Math', 'Chemistry', 'Physics', 'Economics']
    },
    {
      "school": 'National University of Singapore',
      "subjects": ['Economics', 'University Scholars Programme']
    }

  ]

};


/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({ me: {summary: me.summary} });
});

/* GET /profile page. */
router.get('/profile', function(req, res, next) {
  res.status(200).json({ me: {profile: me.profile} });
});

/* GET /links page. */
router.get('/links', function(req, res, next) {
  res.status(200).json({ me: {links: me.links} });
});

/* GET /projects page. */
router.get('/projects', function(req, res, next) {
  res.status(200).json({ me: {projects: me.projects} });
});

/* GET /projects/:id page. */
router.get('/projects/:id', function(req, res, next) {
  res.status(200).json({ me: {projects: me.projects[parseInt(req.params.id)]} });
});

/* GET /skills/ page. */
router.get('/skills', function(req, res, next) {
  res.status(200).json({ me: {skills: me.skills} });
});

/* GET /education/ page. */
router.get('/education', function(req, res, next) {
  res.status(200).json({ me: {education: me.education} });
});

/* GET /projects/:id page. */
router.get('/education/:id', function(req, res, next) {
  res.status(200).json({ me: {education: me.education[parseInt(req.params.id)]} });
});


module.exports = router;
