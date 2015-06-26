module.exports = function(grunt) {
    
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      dev: {
        options: {
          paths: ["assets/less"]
        },
        files: {
          "assets/css/main.css": "assets/less/main.less"
        }
      },
      pro: {
        options: {
          paths: ["assets/less"],
        //   plugins: [
        //     new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
        //     new (require('less-plugin-clean-css'))(cleanCssOptions)
        //   ],
        //   modifyVars: {
        //     imgPath: '"http://mycdn.com/path/to/images"',
        //     bgColor: 'red'
        //   }
        },
        files: {
          "assets/css/main2.css": "assets/less/main.less"
        }
      }
    },
    
    watch: {
        files: ['assets/less/**/*'],
        tasks: ['less:dev'],
    },
  });
  
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
};