// inject the gift box div
// load the remote gift image from a github project

const sidebar = document.querySelector(".Layout-sidebar");
const afterDescription = sidebar.querySelectorAll(".BorderGrid-cell")[0].querySelectorAll("p")[0]
const gitomonDiv = document.createElement("div");

// just add an element after another one
const insertAfter = (referenceNode, newNode) => {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}


/**
 *This method will fetch the appropriate gift image
 * for the gitomon and add it in the sidebar on github
 */
const fetchGift = () => {
    const href = document.location.href;
    // call vers le projet qui contient les gifts

    gitomonDiv.setAttribute("class", "gitomon-div")
    gitomonDiv.innerHTML = `
        <hr/>
            <h2 class="mb-3 h4">Gitomon</h2>
            <img src="https://github.com/Sanix-Darker/split/blob/master/logo.png?raw=true">
        <hr/>
    `;

    insertAfter(afterDescription, gitomonDiv);
}


fetchGift()
//----------

