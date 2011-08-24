// ==UserScript==
// @name          TLBW
// @description   Userscript to make teamliquid more useful for Brood War fans
// @version       1.1
// @include       http://teamliquid.net/*
// @include		  http://www.teamliquid.net/*
// ==/UserScript==

// Change default tlpd search to BW (Korea)
document.forms['frm_tlpd_search'].type.children[3].selected = true;

// Move the Brood War forums above the SC2 forums
var sc2_link = document.getElementById("nav_starcraft2");
var bw_link = document.getElementById("nav_broodwar");
var bw_table = bw_link.nextSibling;
var sidebar = sc2_link.parentElement;
sidebar.removeChild(bw_link);
sidebar.removeChild(bw_table);
sidebar.insertBefore(bw_link, sc2_link);
sidebar.insertBefore(bw_table, sc2_link);

// Change liquipedia search to Brood War liquipedia
for (var i = 0; i < document.forms.length; i++) {
	var form = document.forms[i];
	if (form.action == "http://wiki.teamliquid.net/starcraft2/index.php")
		form.action = "http://wiki.teamliquid.net/starcraft/index.php";
}
