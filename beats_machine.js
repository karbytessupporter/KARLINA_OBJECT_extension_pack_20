/**
 * file: beats_machine.js
 * type: JavaScript
 * author: karbytes
 * date: 09_SEPTEMBER_2024
 * license: PUBLIC_DOMAIN
 */

/**
 * Return a String type value which describes the number of milliseconds which have elapsed since the Unix Epoch.
 * 
 * Note that the Unix Epoch is 01_JANUARY_1970 at 0 hours, 0 minutes, 0 seconds, and 0 seconds 
 * (i.e. 00:00:00) (i.e. midnight) (Coordinated Universal Time (UTC)).
 * 
 * @return {String} text which denotes the number of milliseconds which have elapsed since the Unix Epoch.
 */
function generate_time_stamp() {
    const milliseconds_elapsed_since_unix_epoch = Date.now();
    return milliseconds_elapsed_since_unix_epoch + " milliseconds since midnight on 01_JANUARY_1970.";
}

/**
 * Return a String type value which is used to instantiate a paragraph type web page element such that
 * the String type value which is passed into this function as its only input is that paragraph element's 
 * inner HTML content.
 * 
 * Note that the String type constant variable values are broken up into single-character String type values 
 * to avoid causing the WordPress web page editor to interpret HTML tags in the web page body with 
 * source code which is hosted on that web page inside of PRE (preformatted) web page elements.
 * 
 * @param {String} inner_HTML is assumed to be plain text or HTML content.
 * 
 * @return {String} a sequence of text characters which is used to instantiate a paragraph (P) web page element.
 */
function generate_paragraph_html_element(inner_html) {
    const opening_paragraph_tag = ('<' + 'p' + '>'), closing_paragraph_tag = ('<' + '/' + 'p' + '>');
    try {
        if (typeof inner_html.length !== "number") throw 'The expression (typeof inner_html.length !== "number") was evaluated to be true.';
        return opening_paragraph_tag + inner_html + closing_paragraph_tag;
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of generate_paragraph_html_element(inner_html): " + exception);
    }
}

/**
 * Return a String type value which is used to instantiate a select type web page element such that
 * the String type value which is passed into this function as its only input is that select menu element's
 * id property value.
 * 
 * When clicked on, the select menu interface element will expand to display a list of all sound frequencies
 * (in units named hertz (which is abreviated as Hz (and which indicates some number of cycles per second)))
 * which are nonnegative integers denoting the number of oscillations per second for each of those twenty beat frequencies.
 * 
 * Each of the twenty beat frequencies listed in the drop-down menu are arranged in acending order 
 * starting with the menu option at the top of the list (which is 0 Hz) 
 * and then, starting with the second option in the list (which is 200 Hz),
 * incrementing the sound frequency value by some constant positive integer number of Hz (i.e. 45)
 * until the menu option at the bottom of the list (which is 1010 Hz) is reached.
 * 
 * @param {String} select_id is assumed to be either 
 *                 "track_0_pitch" or else
 *                 "track_1_pitch" or else
 *                 "track_2_pitch".
 * 
 * @return {String} a sequence of text characters which is used to instantiate an expandable list menu (SELECT) web page element.
 */
function generate_coordinate_menu_select_html_element(select_id) {
    let select_menu = '', option = '', i = 0, N = 200;
    let default_menu_option_label = "Do Not Play (i.e. 0 Hz)";
    try {
        if (typeof select_id.length !== "number") throw 'The expression (typeof select_id.length !== "number") was evaluated to be true.';
        if ((select_id !== "track_0_pitch") ||
            (select_id !== "track_1_pitch") ||
            (select_id !== "track_2_pitch"))
        throw 'select_id must either be "track_0_pitch" or else "track_1_pitch" or "track_2_pitch".';
        select_menu = ('<' + 'select id="' + select_id + '" style="text-align:center"' + '>');
        for (i = 0; i < 20; i += 1) {
            if (i === 0) option = (('<' + 'option value="0" selected' + '>') + default_menu_option_label + ('<' + '/' + '>'));
            else {
            	option = ('<' + 'option value="' + N + '"' + '>');
            	option += (N + ' Hz' + ('<' + '/' + 'option' + '>'));
        	}
        	select_menu += option;
        	N += 45;
        }
        select_menu += ('<' + '/' + 'select' + '>');
        return select_menu;
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of generate_coordinate_menu_select_html_element(select_id): " + exception);
    } 
}