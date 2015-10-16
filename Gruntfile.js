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
            },
            css: {
                files: ['**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
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