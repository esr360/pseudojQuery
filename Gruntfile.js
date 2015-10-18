/*-----------------------------------------------------------------

SudojQuery
https://github.com/esr360/pseudojQuery
http://writing.colin-gourlay.com/safely-using-ready-before-including-jquery/

-----------------------------------------------------------------*/

module.exports = function(grunt) {

    grunt.initConfig({
		
        pkg: grunt.file.readJSON('package.json'),
		
        uglify: {
            sudojQueryStart: {
                src: 'src/pseudojQuery-start.js',
                dest: 'pseudojQuery-start.min.js'
            },
            sudojQueryEnd: {
                src: 'src/pseudojQuery-end.js',
                dest: 'pseudojQuery-end.min.js'
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
