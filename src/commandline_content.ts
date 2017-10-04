/** Inject an input element into unsuspecting webpages and provide an API for interaction with tridactyl */

/* TODO: 
    CSS
    Friendliest-to-webpage way of injecting commandline bar?
    Security: how to prevent other people's JS from seeing or accessing the bar or its output?
        - Method here is isolation via iframe
            - Web content can replace the iframe, but can't view or edit its content.
            - see doc/escalating-privilege.md for other approaches.
*/

// inject the commandline iframe into a content page
export function showcommandline(){
    let clFrame = window.document.createElement("iframe")
    clFrame.setAttribute("src", browser.extension.getURL("static/commandline.html"))
    clFrame.setAttribute("style", "position: fixed; top: 0; left: 0; z-index: 10000; width: 100%; height: 36px; border: 0; padding: 0; margin: 0;");
    window.document.body.appendChild(clFrame)

    /** Focus the commandline input: not required **/
    // let focus = ():void => clFrame.focus()
    // line below doesn't work
    clFrame.addEventListener("blur",clFrame.remove)
    // Why were we returning focus? It's a void, surely?
    // return focus
}
