module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),

    config: {
      src: 'src',
      dist: 'dist',
      assets: '<%= config.src %>/assets',
      data: grunt.file.readJSON('pages.json')
    },

    connect: {
      dev: {
        options: {
          port: 8000,
          base: './dist/',
          keepalive: true
        }
      }
    },

    /* assemble templating */
    assemble: {
      options: {
        helpers: './src/bonnet/helpers/**/*.js',
        layout: 'page.hbs',
        layoutdir: './src/bonnet/layouts/',
        partials: './src/bonnet/partials/**/*'
      },
      pages10: {
        options: {
          tag: 'pages10',
          pages: '<%= config.data.pages10 %>',
        },
        files: { '<%= config.dist %>/': 'All the files' }
      },
      pages11: {
        options: {
          tag: 'pages11',
          pages: '<%= config.data.pages11 %>',
        },
        files: { '<%= config.dist %>/': 'All the files' }
      }
    }
  });

  /* load every plugin in package.json */
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('assemble');

  /* grunt tasks */
  grunt.registerTask('default', ['assemble']);

};
