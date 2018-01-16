requirejs.config({
    baseUrl: ".",
    paths: {
        "jquery": "../../node_modules/jquery/dist/jquery",
        "css": "../../node_modules/require-css/css",
        "idd": "../../dist/idd",
        "idd-css": "../../dist/idd",
        "jquery-ui": "../../node_modules/jqueryui/jquery-ui",
        "rx": "../../node_modules/rx/dist/rx.all",
		"svg": "../../node_modules/svg.js/dist/svg.min",
		"filesaver": "../../node_modules/file-saver/FileSaver.min",
		"jquery-mousewheel": "../../node_modules/jquery-mousewheel/jquery.mousewheel"
    }
});

require(["main"]);