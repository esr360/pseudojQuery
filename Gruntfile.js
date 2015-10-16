/*-----------------------------------------------------------------

SudojQuery
https://github.com/esr360/sudojQuery
http://writing.colin-gourlay.com/safely-using-ready-before-including-jquery/

-----------------------------------------------------------------*/

module.exports = function(grunt) {

    grunt.initConfig({
		
        pkg: grunt.file.readJSON('package.json'),
		
        uglify: {
            sudojQueryStart: {
                src: 'src/sudojQuery-start.js',
                dest: 'sudojQuery-start.min.js'
            },
            sudojQueryEnd: {
                src: 'src/sudojQuery-end.js',
                dest: 'sudojQuery-end.min.js'
            }
        },
		
        watch: {
            scripts: {
                files: ['**/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            }
        }
		
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'uglify',
        'watch'
    ]);

};