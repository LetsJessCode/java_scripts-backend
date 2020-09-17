const viewButton = document.getElementById('javaBars')
const newButton = document.getElementById('newJava')

const baseUrl = 'http://localhost:3000'

        window.addEventListener('load', () => {
            loadPeople()
        })



    function loadPeople() {
      const main = document.getElementById('main')
        fetch(baseUrl + '/people') 
        .then(resp => resp.json()) 
        .then(people => {
           main.innerHTML += people.map(person => 
                    `
            <li>
                <a href="#" data-id="${person.id}">${person.name}'s Java Story...</a>   
            </li>
                    `
           ).join('')

            linkClick()          
           })
        }

    function linkClick() {
        let people = document.querySelectorAll('li a')
            people.forEach(person => {
                person.addEventListener('click', loadPeople)
                }) 

            document.getElementById('newJava').addEventListener('click', displayCreateStory)
            
            }
         //show link

    // function getStory() {
    //     fetch(baseUrl + '/java_bars') 
    //     .then(resp => resp.json()) 
    //     .then(javaBars => {
    //         getJavas(javaBars)
         
    //     })
    // }

    // function getJavas(javaBars) { 
    //      debugger
    //     const main = document.getElementById('main')
    //         main.innerHTML +=
    //          javaBars.forEach(javaBar => 
    //             `
    //        <li>
    //             Name: <a href="#" data-id="${javaBar.person.id}">${javaBar.person.name}></a>
    //             Shop Name: ${javaBar.shop_name}
    //             Favorite Drink: ${javaBar.fav_drink}
    //             Least Favorite Drink: ${javaBar.least_fav}
    //             Recommend: ${javaBar.recommend ? "Yes" : "No"}
    //             Comments: ${javaBar.comment}
    //        </li>
    //             `
            
    //     )}

        function displayStory() {
        }

        function resetStory() {
        }

        function displayCreateStory() {
            const javaFormDiv = document.getElementById('java-form')
            let story = `
            <form>
                <label>Your Name:</label>
                <input type="text" id="person_name">

                <label>Java Shop:</label>
                <input type="text" id="shop_name">

                <label>Your Favorite Drink:</label>
                <input type="text" id="fav_drink">

                <label>Least Favorite Drink:</label>
                <input type="text" id="least_fav">

                <label>Recommend?</label>
                <input type="checkbox" id="recommend">
                
                <label>Comments:</label>
                <input type="textarea" id="comment">

                <input type="submit" Add Story>
        </form>
            `
            javaFormDiv.innerHTML = story
            document.getElementById('java-form').addEventListener('submit', createPerson)
        }

        function createPerson() {
            event.preventDefault()
            const person = {
                name: document.getElementById('person_name').value,
                shopName: document.getElementById('shop-name').value,
                favoriteDrink: document.getElementById('fav_drink').value,
                leastFav: document.getElementById('least_fav').value,
                recommend: document.getElementById('recommend').checked,
                comments: document.getElementById('comment').value
            }
            fetch(baseUrl + '/people', {
                method: "POST", 
                body: JSON.stringify(person),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(resp => resp.json())
            .then(person => {
                document.getElementById('main') += `
                <li>
                    <a href="#" data-id="${person.id}">${person.name}'s Java Script...</a>   
                </li>  
                `
                linkClick()   
            })
        } 
     
    