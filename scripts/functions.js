/*
 '**************************************************
 ' Module   :    functions.js
 ' Author   :    Paulo Santos
 ' Creation :    2022.11.27
 ' Copyright:    Copyright© 2022
 '               All Rights Reserved.
 '
 ' Version History
 ' 0.1       2022.11.27
 '           Paulo Santos
 '			Initial Version
 '***************************************************
 */
 
/**
 * Download the Analysis of the specified lesson 
 */
 function download(lesson) {
     if(lesson == null || lesson == undefined) return;
     var a = document.createElement("A");
     a.target = "_blank";
     a.download = "CodeAnalysys-" + lesson +  ".pdf";
     a.href = "https://paulstsmith.github.io/pdf/Codility-Analysis-" + lesson + ".pdf";
     a.click();
 }

/**
 * Show or hide the elements selected  through the
 * specified selector.
 */
 function showHide(elem, selector) {
	 /*
	  * Check for jQuery.
	  */
	 var _JQ = null; // Temporary variable to use if '$' is not 'jQuery'.
	 if (jQuery == null) return; // no jQuery
	 if ($ != jQuery) { _JQ = $; $ = jQuery; }

	 /*
	  * Toggle the visibility of the element
	  */
	 if ($(elem).attr("show") == "true" || $(elem).attr("show") == undefined) {
		 $(selector).show();
		 $(elem).attr("show", "false");
		 $(elem).text($(elem).attr("txtHide"));
	 }
	 else {
		 $(selector).hide();
		 $(elem).attr("show", "true");
		 $(elem).text($(elem).attr("txtShow"));
	 }
	 
	 /*
	  * Clean up
	  */
	 if (_JQ != null) $ = _JQ;
 }	 