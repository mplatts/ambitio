module.exports = (grunt) ->
  SRC = "client/src"
  DEST = "client/public"
  ASSETS = "#{DEST}/assets"
  
  # ENV=dev|production grunt build
  ENV = process.env.ENV || "dev"
  INDEX_DATA = switch ENV
    when "dev"
      {liveReload: '<script src="http://localhost:35729/livereload.js"></script>'}
    when "production"
      {liveReload: ''}

  # Coffee -> tmp/app.js
  # Sass -> tmp/main.css
  # libs (js) -> tmp/libs.js
  # libs (css) -> tmp/libs.css

  grunt.initConfig
    coffee:
      app:
        options:
          sourceMap: true
        src: [
          "#{SRC}/coffee/app.coffee"
          "#{SRC}/coffee/common/**/*.coffee"
          "#{SRC}/coffee/services/**/*.coffee"
          "#{SRC}/coffee/directives/**/*.coffee"
          "#{SRC}/coffee/controllers/**/*.coffee"
        ]
        dest: "#{ASSETS}/js/app.js"
    sass:
      app:
        files:
          "client/src/tmp/main.css": "#{SRC}/scss/combined.scss"
    watch:
      gruntfile:
        files: "Gruntfile.coffee"
        tasks: ['build']
      index:
        files: "#{SRC}/index.jade"
        tasks: ['jade:index']
        options:
          livereload: true
      views:
        files: "#{SRC}/views/**"
        tasks: ['jade:views']
        options:
          livereload: true
      scss:
        files: "#{SRC}/scss/**/*.scss"
        tasks: ['sass', 'concat:cssToDest']
        options:
          livereload: true
      coffee:
        files: "#{SRC}/coffee/**/*.coffee"
        tasks: ['coffee']
        options:
          livereload: true
      lib:
        files: "#{SRC}/lib/"
        tasks: ['copy']

    template:
      index:
        options:
          data: INDEX_DATA
        files:
          "client/public/index.html": ["#{SRC}/index.html.tpl"]

    jade:
      index:
        options:
          pretty: true
          data: INDEX_DATA
        files:
          "client/public/index.html": "#{SRC}/index.jade"
          
      views:
        options:
          pretty: true
        files: [ {
          cwd: "#{SRC}/views/",
          src: "**/*.jade",
          dest: "#{DEST}/views/",
          expand: true,
          ext: ".html"
        } ]

    copy:
      fonts:
        files: [{expand: true, cwd: "#{SRC}/lib/fonts", src: ["**"], dest: "#{ASSETS}/fonts/"}]
      images:
        files: [{expand: true, cwd: "#{SRC}/lib/images", src: ["**"], dest: "#{ASSETS}/images/"}]

    concat:
      jsLibs:
        src: [
          "#{SRC}/lib/components/jquery/jquery.min.js"
          "#{SRC}/lib/components/angular/angular.min.js"
          "#{SRC}/lib/components/angular-resource/angular-resource.min.js"
          "#{SRC}/lib/components/angular-route/angular-route.min.js"
          "#{SRC}/lib/components/angular-touch/angular-touch.min.js"
          "#{SRC}/lib/components/angular-animate/angular-animate.min.js"
          "#{SRC}/lib/components/nouislider/jquery.nouislider.js"
          "#{SRC}/lib/js/jquery.piety.min.js"
        ],
        dest: "#{ASSETS}/js/libs.js"

      cssToDest:
        src: [
          "#{SRC}/lib/css/*.css"
          "#{SRC}/tmp/main.css"
        ],
        dest: "#{ASSETS}/css/app.css"

  # LOAD MODULES
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-jade')
  grunt.loadNpmTasks('grunt-template')

  # TASKS
  grunt.registerTask('build', [
      'coffee:app',
      'sass',
      'concat:jsLibs',
      'concat:cssToDest',
      'template:index',
      'jade',
      'copy'
    ]
  )
  grunt.registerTask('go', ['build', 'watch'])
