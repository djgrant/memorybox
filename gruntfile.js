module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 7001,
          base: ''
        }
      }
    },
    handlebars: {
      compile: {
        options: {
          namespace: "JST"
        },
        files: {
          "js/templates.js": ["templates/**/*.html"]
        }
      }
    },
    compass: {
      dev: {
        options: {
          sassDir: 'sass',
          cssDir: 'css',
          imagesDir: 'img'
        }
      }
    },
    watch: {
      src: {
        files: "templates/**/*.html",
        tasks: ['handlebars']
      },
      sass: {
        files: 'sass/**/*',
        tasks: ['compass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib');

  grunt.registerTask('default', ['compass']);

};