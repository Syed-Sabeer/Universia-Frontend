 module.exports = function(grunt){
	"use strict";
	grunt.initConfig({
		  concat: {
		    dist: {
		      src: [
		          
				  'css/bootstrap.min.css',
				  'css/icofont.min.css', 
				  'css/animate.min.css',
				  'css/uikit.min.css',
				  'css/owl.carousel.css', 
				  'css/chosen.css',
				  'css/ripple.css',
				  'css/perfect-scrollbar.min.css'
			      ],
		      dest: 'css/main.min.css',
		    },
			  
		    extras: {
		      src: [
				  'js/jquery.js',
				  'js/popperjs-bootstrap.js',	 
				  'js/bootstrap.min.js',
				  'js/uikit.min.js',
				  'js/uikit-icons.js',
				  'js/owl.carousel.min.js',
				  'js/sticky-kit.min.js',
				  'js/stickit-header.js', 
				  'js/chosen.jquery.js', 
				  'js/ripple.js',
				  'js/perfect-scrollbar.jquery.min.js',
				  'js/scrolltopcontrol.js',
				  'js/jquery.downCount.js',
				  'js/jquery.scrolly.js',
				  'js/counterup.min.js',
				  'js/counterup-t-waypoint.js'
			  ],
		      dest: 'js/main.min.js',
		    },
		  },

		  cssmin: {
		    target: {
			    files: {
			      'css/main.min.css': 
					[
					  'css/bootstrap.min.css',
					  'css/icofont.min.css', 
					  'css/animate.min.css',
					  'css/uikit.min.css',
					  'css/owl.carousel.css', 
					  'css/chosen.css',
					  'css/ripple.css',
					  'css/perfect-scrollbar.min.css'
					],
			    }
			  }
		  },

		uglify: {
		    my_target: {
		      files: {
		        'js/main.min.js': 
				 [
				  'js/jquery.js',
				  'js/popperjs-bootstrap.js',	 
				  'js/bootstrap.min.js',
				  'js/uikit.min.js',
				  'js/uikit-icons.js',
				  'js/owl.carousel.min.js',
				  'js/sticky-kit.min.js',
				  'js/stickit-header.js', 
				  'js/chosen.jquery.js', 
				  'js/ripple.js',
				  'js/perfect-scrollbar.jquery.min.js',
				  'js/scrolltopcontrol.js',
				  'js/jquery.downCount.js',
				  'js/jquery.scrolly.js',
				  'js/counterup.min.js',
				  'js/counterup-t-waypoint.js'	 
				 ]
		      },
		    },
		  },
		
		watch: {
		  configFiles: {
		    files: 
			  [
				  'css/animate.min.css', 
				  'css/bootstrap.min.css', 
				  'css/nice-select.css', 
		          'css/owl.carousel.css'
			  ],
		    options: {
		      reload: true
		    },
		  },
		},
	  
	});

	//load the plugins
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
};