// ==UserScript==
// @name          TLBW
// @description   Userscript to make teamliquid more useful for Brood War fans
// @version       1.2
// @include       http://teamliquid.net/
// @include       http://teamliquid.net/index.php
// @include       http://teamliquid.net/forum/*
// @include       http://www.teamliquid.net/
// @include       http://www.teamliquid.net/index.php
// @include       http://www.teamliquid.net/forum/*
// ==/UserScript==

// Change default tlpd search to BW (Korea)
document.forms.namedItem('frm_tlpd_search').elements.namedItem("type").children[3].selected = true;

// Move the Brood War forums above the SC2 forums
var sc2_link = document.getElementById("nav_starcraft2");
var bw_link = document.getElementById("nav_broodwar");
var bw_table = bw_link.nextSibling;
bw_link.parentNode.removeChild(bw_link);
bw_table.parentNode.removeChild(bw_table);
sc2_link.parentNode.insertBefore(bw_link, sc2_link);
sc2_link.parentNode.insertBefore(bw_table, sc2_link);

// Change liquipedia search to Brood War liquipedia
for (var i = 0; i < document.forms.length; i++) {
	var form = document.forms[i];
	if (form.action == "http://wiki.teamliquid.net/starcraft2/index.php")
		form.action = "http://wiki.teamliquid.net/starcraft/index.php";
}
