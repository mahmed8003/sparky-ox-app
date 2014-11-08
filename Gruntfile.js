module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-file-append');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-subgrunt');

    grunt.initConfig({
        subgrunt: {
            ox_build: {
                options: {
                    npmClean: true
                },
                projects: {
                    'node_modules/ox': 'build_framework'
                }
            }
        },
        typescript: {
            compile_framework: {
                src: ['./node_modules/ox/src/**/*.ts'],
                dest: './node_modules/ox/build/OX.js',
                options: {
                    module: 'commonjs', //or commonjs
                    target: 'es5', //or es3
                    //basePath: './',
                    sourceMap: false,
                    declaration: true
                }
            },
            compile_app: {
                src: ['./app.ts', './application/**/*.ts'],
                dest: './build/app.js',
                options: {
                    module: 'commonjs', //or commonjs
                    target: 'es5', //or es3
                    //basePath: './',
                    sourceMap: false,
                    declaration: true
                }
            }
        },
        file_append: {
            export_framework: {
                files: {
                    './build/OX.js': {
                        append: "\nmodule.exports = OX;"
                    }
                }
            },
            import_framework: {
                files: {
                    'build/app.js': {
                        prepend: "var OX = require('./OX');\n\n"
                    }
                }
            }
        }
    });

    // define the tasks
    grunt.registerTask(
        'build_framework',
        'Compiles all of the OX framework files and copy it to build directory.',
        [ 'subgrunt:ox_build']
    );
    grunt.registerTask(
        'build_app',
        'Compiles all of app files and copy it to build directory.',
        [ 'typescript:compile_app', 'file_append:import_framework']
    );

    grunt.registerTask('default', ['build_framework', 'build_app']);
}
