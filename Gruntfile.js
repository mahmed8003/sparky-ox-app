module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-typescript');


    grunt.initConfig({
        typescript: {
            base: {
                src: ['./app.ts', './src/**/*.ts', './application/**/*.ts'],
                dest: './build/app.js',
                options: {
                    module: 'commonjs', //or commonjs
                    target: 'es5', //or es3
                    //basePath: './',
                    sourceMap: false,
                    declaration: true
                }
            }
        }
    });

    // define the tasks
    grunt.registerTask(
        'build',
        'Compiles all of the assets and copies the files to the build directory.',
        [ 'typescript']
    );

    grunt.registerTask('default', ['build']);
}
